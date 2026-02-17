(function() {
  "use strict";
  class DynamicI18n {
    constructor() {
      this.currentLanguage = this.detectLanguage();
      this.cache = /* @__PURE__ */ new Map();
      this.fullDictCache = /* @__PURE__ */ new Map();
      this.isStaticBuild = true;
      this.localesBaseCandidates = ["/i18n/", "/locales/"];
      this.localesBase = this.localesBaseCandidates[0];
      this.fallbackLanguage = "es-MX";
      this.isDevelopmentServer = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.port === "4321";
      this.init();
    }
    deepMerge(target, source) {
      if (!source || typeof source !== "object") return target;
      if (!target || typeof target !== "object") return source;
      if (Array.isArray(target) || Array.isArray(source)) return source;
      const out = { ...target };
      for (const [key, value] of Object.entries(source)) {
        if (value && typeof value === "object" && !Array.isArray(value) && out[key] && typeof out[key] === "object" && !Array.isArray(out[key])) {
          out[key] = this.deepMerge(out[key], value);
        } else {
          out[key] = value;
        }
      }
      return out;
    }
    detectLanguage() {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get("lang");
      if (urlLang) {
        return urlLang;
      }
      const cookieLang = this.getCookie("lang");
      if (cookieLang) {
        return cookieLang;
      }
      const browserLang = navigator.language || navigator.userLanguage || "es-MX";
      const detectedLang = browserLang.startsWith("es") ? "es-MX" : "en";
      return detectedLang;
    }
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop().split(";").shift();
      }
      return null;
    }
    async init() {
      await this.resolveLocalesBase();
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get("lang");
      if (urlLang && urlLang !== this.currentLanguage) {
        await this.changeLanguage(urlLang, false);
      } else {
        await this.loadAndApplyCurrentLanguage();
        this.applyDocumentAttributes(this.currentLanguage);
      }
      this.updateLanguageSelector();
      this.setupLanguageSelectors();
      window.dispatchEvent(
        new CustomEvent("languageChanged", {
          detail: {
            language: this.currentLanguage
          }
        })
      );
    }
    async loadAndApplyCurrentLanguage() {
      try {
        const sections = [
          "home",
          "hero",
          "header",
          "footer",
          "common",
          "services",
          "contact",
          "aiProjectBanner",
          "work",
          "portfolio",
          "pwa",
          "analytics",
          "gracias",
          "cookies"
        ];
        const translationPromises = sections.map(
          (section) => this.loadTranslations(this.currentLanguage, section).then((data) => ({
            section,
            data
          }))
        );
        const allTranslations = await Promise.all(translationPromises);
        const fullTranslations = {};
        allTranslations.forEach(({ section, data }) => {
          fullTranslations[section] = data;
        });
        this.applyTranslations(fullTranslations);
      } catch (error) {
      }
    }
    async loadTranslations(language, section = "") {
      if (this.fullDictCache.has(language)) {
        const full = this.fullDictCache.get(language);
        const result = section ? full && full[section] || {} : full || {};
        const cacheKey = `${language}:${section}`;
        this.cache.set(cacheKey, result);
        return result;
      }
      try {
        const base = this.localesBase.endsWith("/") ? this.localesBase : this.localesBase + "/";
        const url = new URL(base + `${language}.json`, window.location.origin);
        const response = await fetch(url.toString());
        if (!response.ok)
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        const fullDict = await response.json();
        const extensions = [
          "AIProjectBanner",
          "gracias",
          "home",
          "contact",
          "services",
          "cookies"
        ];
        await Promise.all(
          extensions.map(async (ext) => {
            try {
              const extUrl = new URL(
                base + `${language}.${ext}.json`,
                window.location.origin
              );
              const extResponse = await fetch(extUrl.toString());
              if (extResponse.ok) {
                const extData = await extResponse.json();
                for (const [k, v] of Object.entries(extData || {})) {
                  if (fullDict[k] && typeof fullDict[k] === "object" && !Array.isArray(fullDict[k]) && v && typeof v === "object" && !Array.isArray(v)) {
                    fullDict[k] = this.deepMerge(fullDict[k], v);
                  } else {
                    fullDict[k] = v;
                  }
                }
              }
            } catch (e) {
            }
          })
        );
        this.fullDictCache.set(language, fullDict);
        const result = section ? fullDict && fullDict[section] || {} : fullDict || {};
        const cacheKey = `${language}:${section}`;
        this.cache.set(cacheKey, result);
        return result;
      } catch (error) {
        if (language !== this.fallbackLanguage) {
          return this.loadTranslations(this.fallbackLanguage, section);
        }
        return {};
      }
    }
    async changeLanguage(newLanguage, updateUrl = true) {
      if (newLanguage === this.currentLanguage) {
      }
      try {
        const sections = [
          "home",
          "hero",
          "header",
          "footer",
          "common",
          "services",
          "contact",
          "aiProjectBanner",
          "work",
          "portfolio",
          "pwa",
          "analytics",
          "gracias",
          "cookies"
        ];
        const translationPromises = sections.map(
          (section) => this.loadTranslations(newLanguage, section).then((data) => ({
            section,
            data
          }))
        );
        const allTranslations = await Promise.all(translationPromises);
        const fullTranslations = {};
        allTranslations.forEach(({ section, data }) => {
          fullTranslations[section] = data;
        });
        this.applyTranslations(fullTranslations);
        this.currentLanguage = newLanguage;
        this.applyDocumentAttributes(newLanguage);
        document.cookie = `lang=${newLanguage}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
        if (updateUrl) {
          this.updateURL(newLanguage);
        }
        this.updateLanguageSelector();
        window.dispatchEvent(
          new CustomEvent("languageChanged", {
            detail: {
              language: newLanguage,
              translations: fullTranslations
            }
          })
        );
      } catch (error) {
        this.fallbackToPageReload(newLanguage);
      }
    }
    applyTranslations(translations) {
      const elements = document.querySelectorAll("[data-i18n]");
      if (elements.length > 0) {
      } else {
        const potentialElements = document.querySelectorAll(
          "span, div, p, h1, h2, h3, button, a"
        );
        const textElements = Array.from(potentialElements).filter((el) => el.textContent?.trim()).slice(0, 10);
      }
      let appliedCount = 0;
      let skippedCount = 0;
      elements.forEach((element, index) => {
        const key = element.getAttribute("data-i18n");
        if (!key) {
          skippedCount++;
          return;
        }
        const translation = this.getNestedTranslation(translations, key);
        if (translation && translation !== element.textContent.trim()) {
          if ((element.tagName === "INPUT" || element.tagName === "TEXTAREA") && element.hasAttribute("placeholder")) {
            element.placeholder = translation;
          } else if (element.tagName === "INPUT" && (element.type === "button" || element.type === "submit" || element.type === "reset")) {
            element.value = translation;
          } else if (element.hasAttribute("title")) {
            element.title = translation;
            element.textContent = translation;
          } else {
            element.textContent = translation;
          }
          if (element.hasAttribute("aria-label")) {
            element.setAttribute("aria-label", translation);
          }
          appliedCount++;
        } else {
          skippedCount++;
          if (!translation) {
          }
        }
      });
      const htmlElements = document.querySelectorAll("[data-i18n-html]");
      htmlElements.forEach((element, index) => {
        const key = element.getAttribute("data-i18n-html");
        if (!key) {
          return;
        }
        const translation = this.getNestedTranslation(translations, key);
        if (translation) {
          element.innerHTML = translation;
          appliedCount++;
        } else {
        }
      });
      this.updateLanguageSelector();
      this.replaceKnownTexts(translations);
      this.updateMetaTags(translations);
      this.updateWhatsAppLinks(translations);
    }
    replaceKnownTexts(translations) {
      let replacementsCount = 0;
      const replaceTextInDOM = (originalText, newText) => {
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null,
          false
        );
        let node;
        while (node = walker.nextNode()) {
          if (node.nodeValue && node.nodeValue.includes(originalText)) {
            node.nodeValue = node.nodeValue.replace(originalText, newText);
            replacementsCount++;
          }
        }
      };
      const replaceInElements = (selector, originalText, newText) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          if (element.textContent && element.textContent.includes(originalText)) {
            element.textContent = element.textContent.replace(
              originalText,
              newText
            );
            replacementsCount++;
          }
        });
      };
      const textMappings = {
        // Navegación
        INICIO: "header.home",
        Inicio: "header.home",
        Nosotros: "header.aboutUs",
        SERVICIOS: "header.ourServices",
        Servicios: "header.ourServices",
        WORK: "header.ourWork",
        CONTACTO: "header.getInTouch",
        Contacto: "header.getInTouch",
        // Hero section - textos en español
        "INNOVACI\xD3N DIGITAL": "hero.techBadge",
        "Agencia Digital \u2022 Dise\xF1o Web \u2022 Marketing \u2022 Branding": "hero.tagline",
        "Transformamos ideas en experiencias digitales que conectan con tu audiencia e impulsan tu negocio hacia el futuro.": "hero.description",
        "Nuestro Trabajo": "hero.workButton",
        Cont\u00E1ctanos: "hero.contactButton",
        "A\xF1os de experiencia": "hero.yearsExperience",
        "Proyectos completados": "hero.projectsCompleted",
        "Clientes satisfechos": "hero.happyClients",
        // Servicios comunes
        "Desarrollo Web": "services.webDevelopment.title",
        "Aplicaciones M\xF3viles": "services.appDevelopment.title",
        "Marketing Digital": "services.digitalMarketing.title",
        "Posicionamiento SEO": "services.seo.title",
        "Dise\xF1o Gr\xE1fico": "services.graphicDesign.title",
        "Inteligencia Artificial": "services.aiServices.title"
      };
      for (const [originalText, translationKey] of Object.entries(
        textMappings
      )) {
        const translation = this.getNestedTranslation(
          translations,
          translationKey
        );
        if (translation && translation !== originalText) {
          replaceTextInDOM(originalText, translation);
          replaceInElements("span", originalText, translation);
          replaceInElements("div", originalText, translation);
          replaceInElements("p", originalText, translation);
          replaceInElements("h1", originalText, translation);
          replaceInElements("h2", originalText, translation);
          replaceInElements("h3", originalText, translation);
          replaceInElements("button", originalText, translation);
          replaceInElements("a", originalText, translation);
        }
      }
    }
    replaceBySelectors(translations) {
      let replacementsCount = 0;
      const selectorReplacements = [
        // Títulos principales
        { selector: "h1", from: "IzignaMx", to: "IzignaMx" },
        {
          selector: "h2",
          from: "Agencia Digital \u2022 Dise\xF1o Web \u2022 Marketing \u2022 Branding",
          to: "Technology that transforms"
        },
        {
          selector: "h3",
          from: "INNOVACI\xD3N DIGITAL",
          to: "CUTTING-EDGE TECHNOLOGY"
        },
        // Párrafos
        {
          selector: "p",
          from: "Transformamos ideas en experiencias digitales que conectan con tu audiencia e impulsan tu negocio hacia el futuro.",
          to: "We are experts in web development, mobile applications, graphic design and innovative digital solutions. We transform ideas into exceptional digital experiences."
        },
        // Botones
        { selector: "button", from: "Nuestro Trabajo", to: "View Work" },
        { selector: "button", from: "Cont\xE1ctanos", to: "Contact" },
        // Enlaces de navegación
        { selector: "nav a", from: "INICIO", to: "HOME" },
        { selector: "nav a", from: "Inicio", to: "HOME" },
        { selector: "nav a", from: "Nosotros", to: "ABOUT" },
        { selector: "nav a", from: "SERVICIOS", to: "SERVICES" },
        { selector: "nav a", from: "Servicios", to: "SERVICES" },
        { selector: "nav a", from: "WORK", to: "WORK" },
        { selector: "nav a", from: "CONTACTO", to: "CONTACT" },
        { selector: "nav a", from: "Contacto", to: "CONTACT" }
      ];
      selectorReplacements.forEach(({ selector, from, to }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          if (element.textContent && element.textContent.includes(from)) {
            element.textContent = element.textContent.replace(from, to);
            replacementsCount++;
          }
        });
      });
    }
    getNestedTranslation(translations, key) {
      const keys = key.split(".");
      let current = translations;
      for (const k of keys) {
        if (current && typeof current === "object" && k in current) {
          current = current[k];
        } else {
          return null;
        }
      }
      return typeof current === "string" ? current : null;
    }
    updateLanguageSelector() {
      const selectors = [
        "[data-language]",
        ".language-selector-button",
        ".language-selector button",
        "button[data-language]",
        ".language-button",
        ".lang-btn"
      ];
      let totalButtons = 0;
      selectors.forEach((selector) => {
        const buttons = document.querySelectorAll(selector);
        totalButtons += buttons.length;
        buttons.forEach((button) => {
          const buttonLang = button.getAttribute("data-language");
          if (buttonLang) {
            const isActive = buttonLang === this.currentLanguage;
            button.classList.toggle("active", isActive);
            button.classList.toggle("selected", isActive);
            button.classList.toggle("bg-izigna-primary", isActive);
            button.classList.toggle("text-white", isActive);
            button.classList.toggle("bg-blue-600", isActive);
            button.classList.toggle("bg-primary", isActive);
            if (isActive) {
              button.classList.remove(
                "bg-white/5",
                "text-white/70",
                "bg-gray-100",
                "text-gray-600"
              );
            } else {
              button.classList.add("bg-white/5", "text-white/70");
              button.classList.remove(
                "bg-izigna-primary",
                "text-white",
                "bg-blue-600",
                "bg-primary"
              );
            }
            button.setAttribute("aria-pressed", isActive.toString());
            button.setAttribute("aria-selected", isActive.toString());
          }
        });
      });
      this.updateLanguageSelectorDisplay();
      const eventTypes = [
        "updateLanguageSelector",
        "languageChanged",
        "i18nUpdate"
      ];
      eventTypes.forEach((eventType) => {
        window.dispatchEvent(
          new CustomEvent(eventType, {
            detail: { language: this.currentLanguage }
          })
        );
      });
      const languageSelects = document.querySelectorAll(
        "select[data-language-selector], .language-selector-select"
      );
      languageSelects.forEach((select) => {
        select.value = this.currentLanguage;
      });
      const allLanguageElements = document.querySelectorAll(
        '.language-selector, .language-button, [class*="lang"]'
      );
      allLanguageElements.forEach((element) => {
        if (element.getAttribute("data-language") === this.currentLanguage) {
          element.classList.add("active", "selected");
        } else if (element.getAttribute("data-language")) {
          element.classList.remove("active", "selected");
        }
      });
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("languageChanged", {
            detail: { language: this.currentLanguage }
          })
        );
      }, 100);
    }
    updateLanguageSelectorDisplay() {
      const selectorElements = document.querySelectorAll(
        ".language-selector-button, .language-selector button, [data-language-selector], .language-btn"
      );
      selectorElements.forEach((element) => {
        if (element.hasAttribute("data-language")) {
          return;
        }
        const flagElements = element.querySelectorAll(
          '.fi, [class*="fi-"], .flag-icon'
        );
        const textSpans = element.querySelectorAll("span");
        const languageMap2 = {
          "es-MX": { flag: "mx", name: "Espa\xF1ol (M\xE9xico)", short: "ES" },
          en: { flag: "us", name: "English", short: "EN" },
          fr: { flag: "fr", name: "Fran\xE7ais", short: "FR" },
          de: { flag: "de", name: "Deutsch", short: "DE" },
          ar: { flag: "sa", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", short: "AR" }
        };
        const currentLangInfo = languageMap2[this.currentLanguage] || languageMap2["es-MX"];
        flagElements.forEach((flagEl) => {
          const existingFlags = Array.from(flagEl.classList).filter(
            (cls) => cls.startsWith("fi-")
          );
          existingFlags.forEach((cls) => flagEl.classList.remove(cls));
          flagEl.classList.add(`fi-${currentLangInfo.flag}`);
        });
        textSpans.forEach((span) => {
          if (span.classList.contains("fi") || Array.from(span.classList).some((cls) => cls.startsWith("fi-"))) {
            return;
          }
          const currentText = span.textContent?.trim();
          if (currentText) {
            const isShortText = currentText.length <= 3;
            const newText = isShortText ? currentLangInfo.short : currentLangInfo.name;
            span.textContent = newText;
          }
        });
        if (flagElements.length === 0 && textSpans.length === 0) {
          const allSpans = element.querySelectorAll("span");
          allSpans.forEach((span, index) => {
            if (span.className && span.className.includes("fi")) {
              const existingFlags = Array.from(span.classList).filter(
                (cls) => cls.startsWith("fi-")
              );
              existingFlags.forEach((cls) => span.classList.remove(cls));
              span.classList.add(`fi-${currentLangInfo.flag}`);
            } else if (span.textContent && span.textContent.trim()) {
              const isShort = span.textContent.trim().length <= 3;
              span.textContent = isShort ? currentLangInfo.short : currentLangInfo.name;
            }
          });
        }
      });
      const allLangButtons = document.querySelectorAll(
        '.language-selector-button, [aria-label*="idioma"], [aria-label*="language"]'
      );
      allLangButtons.forEach((button) => {
        const currentLangInfo = languageMap[this.currentLanguage] || languageMap["es-MX"];
        button.setAttribute(
          "aria-label",
          `Idioma actual: ${currentLangInfo.name}. Clic para cambiar idioma`
        );
      });
    }
    updateMetaTags(translations) {
      const resolveSection = () => {
        const explicitEl = document.querySelector("[data-section-seo]");
        const explicit = explicitEl ? explicitEl.getAttribute("data-section-seo") : null;
        if (explicit && translations[explicit] && translations[explicit].seo)
          return explicit;
        const path = (window.location.pathname || "/").toLowerCase();
        const candidates = [
          "gracias",
          "contact",
          "services",
          "work",
          "portfolio",
          "pwa",
          "analytics"
        ];
        for (const c of candidates) {
          if (path.includes(c) && translations[c] && translations[c].seo)
            return c;
        }
        for (const key of Object.keys(translations)) {
          if (translations[key] && translations[key].seo) return key;
        }
        return null;
      };
      const section = resolveSection();
      const pageSeo = section ? translations[section].seo : null;
      const fallbackTitle = translations.common && translations.common.title;
      const fallbackDesc = translations.common && translations.common.description;
      const title = pageSeo && pageSeo.title || fallbackTitle;
      const description = pageSeo && pageSeo.description || fallbackDesc;
      if (title) document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && description)
        metaDesc.setAttribute("content", description);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && title) ogTitle.setAttribute("content", title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc && description) ogDesc.setAttribute("content", description);
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle && title) twTitle.setAttribute("content", title);
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc && description) twDesc.setAttribute("content", description);
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta && pageSeo && pageSeo.keywords)
        keywordsMeta.setAttribute("content", pageSeo.keywords);
      if (pageSeo && pageSeo.image) {
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute("content", pageSeo.image);
        const twImage = document.querySelector('meta[name="twitter:image"]');
        if (twImage) twImage.setAttribute("content", pageSeo.image);
      }
    }
    updateWhatsAppLinks(translations) {
      const elements = document.querySelectorAll("[data-i18n-whatsapp]");
      elements.forEach((el) => {
        const key = el.getAttribute("data-i18n-whatsapp");
        const msg = this.getNestedTranslation(translations, key) || "";
        const base = "https://wa.me/525533760889";
        const href = `${base}?text=${encodeURIComponent(msg)}`;
        el.setAttribute("href", href);
      });
    }
    updateURL(language) {
      const url = new URL(window.location.href);
      if (language === this.fallbackLanguage) {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", language);
      }
      window.history.replaceState({}, "", url.toString());
    }
    fallbackToPageReload(language) {
      const url = new URL(window.location.href);
      if (language === this.fallbackLanguage) {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", language);
      }
      window.location.href = url.toString();
    }
    applyDocumentAttributes(language) {
      document.documentElement.lang = language;
      if (language === "ar") {
        document.documentElement.dir = "rtl";
        document.body.classList.add("rtl");
      } else {
        document.documentElement.dir = "ltr";
        document.body.classList.remove("rtl");
      }
    }
    setupLanguageSelectors() {
      document.addEventListener("click", async (event) => {
        const target = event.target.closest("[data-language]");
        if (target) {
          event.preventDefault();
          const newLanguage = target.getAttribute("data-language");
          if (newLanguage && newLanguage !== this.currentLanguage) {
            await this.changeLanguage(newLanguage);
          }
        }
      });
      document.addEventListener("change", async (event) => {
        if (event.target.classList.contains("language-selector-select")) {
          const newLanguage = event.target.value;
          if (newLanguage && newLanguage !== this.currentLanguage) {
            await this.changeLanguage(newLanguage);
          }
        }
      });
    }
    // Método público para cambiar idioma desde otros scripts
    async setLanguage(language) {
      return this.changeLanguage(language);
    }
    // Método público para obtener traducción específica
    async t(key, language = null) {
      const lang = language || this.currentLanguage;
      const section = key.split(".")[0];
      try {
        const translations = await this.loadTranslations(lang, section);
        return this.getNestedTranslation({ [section]: translations }, key);
      } catch (error) {
        return key;
      }
    }
    getCurrentLanguage() {
      return this.currentLanguage;
    }
    async resolveLocalesBase() {
      for (const base of this.localesBaseCandidates) {
        try {
          const testUrl = new URL(
            (base.endsWith("/") ? base : base + "/") + `${this.fallbackLanguage}.json`,
            window.location.origin
          );
          const res = await fetch(testUrl.toString(), { method: "GET" });
          if (res.ok) {
            this.localesBase = base;
            return;
          }
        } catch (e) {
        }
      }
    }
  }
  function initializeI18n() {
    setTimeout(() => {
      window.DynamicI18n = new DynamicI18n();
      setTimeout(() => {
        if (window.DynamicI18n) {
          window.DynamicI18n.updateLanguageSelector();
        }
      }, 500);
    }, 100);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeI18n);
  } else {
    setTimeout(initializeI18n, 100);
  }
  window.i18nChangeLanguage = async (language) => {
    if (window.DynamicI18n) {
      return window.DynamicI18n.setLanguage(language);
    }
  };
  window.testI18n = () => {
    if (window.DynamicI18n) {
    } else {
    }
  };
})();
