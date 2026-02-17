(function(window2, document2) {
  "use strict";
  const supportedLanguages = [
    "es-MX",
    "en",
    "fr",
    "de",
    "nl",
    "ja",
    "zh",
    "hi",
    "ar",
    "pt",
    "fi",
    "ru",
    "tr",
    "it",
    "ko",
    "pl",
    "eo",
    "la"
  ];
  function isSupportedLanguage(lang) {
    return supportedLanguages.includes(lang);
  }
  function detectBrowserLanguage() {
    const urlParams = new URLSearchParams(window2.location.search);
    const urlLang = urlParams.get("lang");
    if (urlLang && isSupportedLanguage(urlLang)) {
      return urlLang;
    }
    const cookieLang = getCookie("lang");
    if (cookieLang && isSupportedLanguage(cookieLang)) {
      return cookieLang;
    }
    const browserLanguages = navigator.languages || [
      navigator.language || navigator.userLanguage || "es-MX"
    ];
    for (const browserLang of browserLanguages) {
      const langCode = browserLang.split("-")[0];
      if (isSupportedLanguage(browserLang)) {
        return browserLang;
      }
      const matchingLang = supportedLanguages.find(
        (lang) => lang.startsWith(langCode)
      );
      if (matchingLang) {
        return matchingLang;
      }
    }
    return "es-MX";
  }
  function getCookie(name) {
    const value = `; ${document2.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
    return null;
  }
  function setCookie(name, value, days = 365) {
    const expires = /* @__PURE__ */ new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1e3);
    document2.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }
  function redirectWithLanguage(detectedLang) {
    const currentUrl = new URL(window2.location);
    const currentLang = currentUrl.searchParams.get("lang");
    if (currentLang !== detectedLang && detectedLang !== "es-MX") {
      setCookie("lang", detectedLang);
      currentUrl.searchParams.set("lang", detectedLang);
      window2.location.href = currentUrl.toString();
    } else if (detectedLang === "es-MX" && currentLang) {
      currentUrl.searchParams.delete("lang");
      window2.history.replaceState({}, "", currentUrl.toString());
    }
  }
  function initLanguageDetection() {
    if (typeof window2 === "undefined" || typeof navigator === "undefined") {
      return;
    }
    const detectedLang = detectBrowserLanguage();
    if (window2.location.hostname === "localhost" || window2.location.hostname === "127.0.0.1") {
    }
    if (!getCookie("lang") && detectedLang !== "es-MX") {
      setCookie("lang", detectedLang);
    }
    const detectorAPI = {
      detect: detectBrowserLanguage,
      redirect: redirectWithLanguage,
      supported: supportedLanguages,
      setCookie,
      getCookie
    };
    window2.LanguageDetector = detectorAPI;
    window2.detectUserLanguage = function detectUserLanguageShim() {
      const lang = detectBrowserLanguage();
      window2.__detectedLanguage = lang;
      return lang;
    };
    window2.getPreferredLanguage = function getPreferredLanguageShim() {
      return window2.detectUserLanguage();
    };
    window2.dispatchEvent(
      new CustomEvent("languageDetectorReady", {
        detail: {
          language: window2.detectUserLanguage(),
          supportedLanguages
        }
      })
    );
  }
  if (document2.readyState === "loading") {
    document2.addEventListener("DOMContentLoaded", initLanguageDetection);
  } else {
    initLanguageDetection();
  }
  document2.addEventListener("astro:page-load", initLanguageDetection);
})(window, document);
