class SimpleI18n {
  constructor() {
    this.currentLanguage = "es";
    this.translations = {
      es: {
        INICIO: "INICIO",
        Inicio: "Inicio",
        Nosotros: "Nosotros",
        SERVICIOS: "SERVICIOS",
        Servicios: "Servicios",
        WORK: "WORK",
        CONTACTO: "CONTACTO",
        Contacto: "Contacto",
        "INNOVACI\xD3N DIGITAL": "INNOVACI\xD3N DIGITAL",
        "Agencia Digital \u2022 Dise\xF1o Web \u2022 Marketing \u2022 Branding": "Agencia Digital \u2022 Dise\xF1o Web \u2022 Marketing \u2022 Branding",
        "Transformamos ideas en experiencias digitales que conectan con tu audiencia e impulsan tu negocio hacia el futuro.": "Transformamos ideas en experiencias digitales que conectan con tu audiencia e impulsan tu negocio hacia el futuro.",
        "Nuestro Trabajo": "Nuestro Trabajo",
        Cont\u00E1ctanos: "Cont\xE1ctanos",
        "A\xF1os de experiencia": "A\xF1os de experiencia",
        "Proyectos completados": "Proyectos completados",
        "Clientes satisfechos": "Clientes satisfechos",
        Explora: "Explora",
        "Desarrollo Web": "Desarrollo Web",
        "Aplicaciones M\xF3viles": "Aplicaciones M\xF3viles",
        "Marketing Digital": "Marketing Digital",
        "Posicionamiento SEO": "Posicionamiento SEO",
        "Dise\xF1o Gr\xE1fico": "Dise\xF1o Gr\xE1fico",
        "Inteligencia Artificial": "Inteligencia Artificial"
      },
      en: {
        INICIO: "HOME",
        Inicio: "HOME",
        Nosotros: "ABOUT",
        SERVICIOS: "SERVICES",
        Servicios: "SERVICES",
        WORK: "WORK",
        CONTACTO: "CONTACT",
        Contacto: "CONTACT",
        "INNOVACI\xD3N DIGITAL": "CUTTING-EDGE TECHNOLOGY",
        "Agencia Digital \u2022 Dise\xF1o Web \u2022 Marketing \u2022 Branding": "Technology that transforms",
        "Transformamos ideas en experiencias digitales que conectan con tu audiencia e impulsan tu negocio hacia el futuro.": "We are experts in web development, mobile applications, graphic design and innovative digital solutions. We transform ideas into exceptional digital experiences.",
        "Nuestro Trabajo": "View Work",
        Cont\u00E1ctanos: "Contact",
        "A\xF1os de experiencia": "Years of Experience",
        "Proyectos completados": "Projects Completed",
        "Clientes satisfechos": "Happy Clients",
        Explora: "Explore",
        "Desarrollo Web": "Web Development",
        "Aplicaciones M\xF3viles": "App Development",
        "Marketing Digital": "Digital Marketing",
        "Posicionamiento SEO": "SEO",
        "Graphic Design": "Graphic Design",
        "Inteligencia Artificial": "AI Services"
      }
    };
    this.init();
  }
  init() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    if (urlLang && (urlLang === "en" || urlLang === "es")) {
      this.currentLanguage = urlLang;
    } else {
      const browserLang = navigator.language.split("-")[0];
      this.currentLanguage = browserLang === "en" ? "en" : "es";
    }
    this.applyTranslations();
    this.setupLanguageButtons();
  }
  applyTranslations() {
    const translations = this.translations[this.currentLanguage];
    let replacementsCount = 0;
    const replaceText = (originalText, newText) => {
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
    for (const [originalText, translatedText] of Object.entries(translations)) {
      if (originalText !== translatedText) {
        replaceText(originalText, translatedText);
      }
    }
    this.updateLanguageSelector();
  }
  updateLanguageSelector() {
    const languageButtons = document.querySelectorAll("[data-language]");
    languageButtons.forEach((button) => {
      const buttonLang = button.getAttribute("data-language");
      if (buttonLang === this.currentLanguage) {
        button.classList.add("active", "selected");
        button.setAttribute("aria-pressed", "true");
      } else {
        button.classList.remove("active", "selected");
        button.setAttribute("aria-pressed", "false");
      }
    });
    const languageSelects = document.querySelectorAll(
      "select[data-language-selector]"
    );
    languageSelects.forEach((select) => {
      select.value = this.currentLanguage;
    });
  }
  setupLanguageButtons() {
    document.addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-language")) {
        e.preventDefault();
        const newLang = e.target.getAttribute("data-language");
        this.changeLanguage(newLang);
      }
    });
  }
  changeLanguage(newLanguage) {
    if (newLanguage === this.currentLanguage) {
      return;
    }
    this.currentLanguage = newLanguage;
    document.cookie = `language=${newLanguage}; path=/; max-age=31536000`;
    const url = new URL(window.location);
    url.searchParams.set("lang", newLanguage);
    window.history.pushState({}, "", url);
    this.applyTranslations();
  }
  // Método para testing
  test() {
  }
}
document.addEventListener("DOMContentLoaded", () => {
  window.simpleI18n = new SimpleI18n();
});
window.changeLanguage = (lang) => {
  if (window.simpleI18n) {
    window.simpleI18n.changeLanguage(lang);
  }
};
window.testI18n = () => {
  if (window.simpleI18n) {
    window.simpleI18n.test();
  }
};
