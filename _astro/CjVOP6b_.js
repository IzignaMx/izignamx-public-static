import { __variableDynamicImportRuntimeHelper } from "./Bl8XLaAI.js";
const supportedLanguages = [
  "es-MX",
  // Español (México) - idioma principal
  "en",
  // English
  "fr",
  // Français
  "de",
  // Deutsch
  "nl",
  // Nederlands
  "ja",
  // 日本語
  "zh",
  // 中文
  "hi",
  // हिन्दी
  "ar",
  // العربية
  "pt",
  // Português
  "fi",
  // Suomi
  "ru",
  // Русский
  "tr",
  // Türkçe
  "it",
  // Italiano
  "ko",
  // 한국어
  "pl",
  // Polski
  "eo",
  // Esperanto
  "la"
  // Latina
];
const languageNames = {
  "es-MX": "Espa\xF1ol (M\xE9xico)",
  en: "English",
  fr: "Fran\xE7ais",
  de: "Deutsch",
  nl: "Nederlands",
  ja: "\u65E5\u672C\u8A9E",
  zh: "\u4E2D\u6587",
  hi: "\u0939\u093F\u0928\u094D\u0926\u0940",
  ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  pt: "Portugu\xEAs",
  fi: "Suomi",
  ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
  tr: "T\xFCrk\xE7e",
  it: "Italiano",
  ko: "\uD55C\uAD6D\uC5B4",
  pl: "Polski",
  eo: "Esperanto",
  la: "Latina"
};
const languageFlags = {
  "es-MX": "\u{1F1F2}\u{1F1FD}",
  en: "\u{1F1FA}\u{1F1F8}",
  fr: "\u{1F1EB}\u{1F1F7}",
  de: "\u{1F1E9}\u{1F1EA}",
  nl: "\u{1F1F3}\u{1F1F1}",
  ja: "\u{1F1EF}\u{1F1F5}",
  zh: "\u{1F1E8}\u{1F1F3}",
  hi: "\u{1F1EE}\u{1F1F3}",
  ar: "\u{1F1F8}\u{1F1E6}",
  pt: "\u{1F1F5}\u{1F1F9}",
  fi: "\u{1F1EB}\u{1F1EE}",
  ru: "\u{1F1F7}\u{1F1FA}",
  tr: "\u{1F1F9}\u{1F1F7}",
  it: "\u{1F1EE}\u{1F1F9}",
  ko: "\u{1F1F0}\u{1F1F7}",
  pl: "\u{1F1F5}\u{1F1F1}",
  eo: "\u{1F3F3}\uFE0F",
  // Esperanto no tiene bandera oficial
  la: "\u{1F3DB}\uFE0F"
  // Latín - usando emoji de monumento
};
const translationCache = /* @__PURE__ */ new Map();
async function loadTranslations(lang) {
  if (translationCache.has(lang)) {
    return translationCache.get(lang);
  }
  try {
    const translations = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./locales/ar.AIProjectBanner.json": () => import("./BzcML63X.js"), "./locales/ar.cookies.json": () => import("./wEbCPByd.js"), "./locales/ar.gracias.json": () => import("./DMt5kdHO.js"), "./locales/ar.json": () => import("./CDfFXOFf.js"), "./locales/de.AIProjectBanner.json": () => import("./EUMLwElg.js"), "./locales/de.cookies.json": () => import("./D-_lHcCx.js"), "./locales/de.gracias.json": () => import("./BBQbuOoz.js"), "./locales/de.json": () => import("./CmKyKmPb.js"), "./locales/en.AIProjectBanner.json": () => import("./Dm5Pb_GE.js"), "./locales/en.cookies.json": () => import("./DptQrnZX.js"), "./locales/en.gracias.json": () => import("./HsNQJiRz.js"), "./locales/en.json": () => import("./Bk4mdtTX.js"), "./locales/eo.AIProjectBanner.json": () => import("./CqiN7TTF.js"), "./locales/eo.cookies.json": () => import("./Bc4MbPkt.js"), "./locales/eo.gracias.json": () => import("./Dg4MdT9h.js"), "./locales/eo.json": () => import("./Co8eF2pP.js"), "./locales/es-MX.AIProjectBanner.json": () => import("./BrlMj8wo.js"), "./locales/es-MX.AIProjectBanner.missing-keys.json": () => import("./CPbVVddD.js"), "./locales/es-MX.cookies.json": () => import("./C8nDcYlY.js"), "./locales/es-MX.gracias.json": () => import("./CeKVmCBX.js"), "./locales/es-MX.json": () => import("./BbLUxPer.js"), "./locales/es-MX.missing-keys.json": () => import("./DFAKkWir.js"), "./locales/fi.AIProjectBanner.json": () => import("./BSeb-yyg.js"), "./locales/fi.cookies.json": () => import("./MCeQPvmG.js"), "./locales/fi.gracias.json": () => import("./C-Xa1xFq.js"), "./locales/fi.json": () => import("./CiK3FfdH.js"), "./locales/fr.AIProjectBanner.json": () => import("./DFHQkPdw.js"), "./locales/fr.cookies.json": () => import("./Bi5Qdzoc.js"), "./locales/fr.gracias.json": () => import("./DX14fInw.js"), "./locales/fr.json": () => import("./Dlt1fluT.js"), "./locales/fr.missing-keys.json": () => import("./CF6mVnVE.js"), "./locales/hi.AIProjectBanner.json": () => import("./4SW8rqZ8.js"), "./locales/hi.cookies.json": () => import("./mRrhpvkC.js"), "./locales/hi.gracias.json": () => import("./TyJiixzO.js"), "./locales/hi.json": () => import("./DErOhW6_.js"), "./locales/hi.missing-keys.json": () => import("./DyYXKvZw.js"), "./locales/it.AIProjectBanner.json": () => import("./f3Vwsswx.js"), "./locales/it.cookies.json": () => import("./BC7QT9RE.js"), "./locales/it.gracias.json": () => import("./C4Xe0Hcl.js"), "./locales/it.json": () => import("./rZV7dpJx.js"), "./locales/it.missing-keys.json": () => import("./CtQBDp3D.js"), "./locales/ja.AIProjectBanner.json": () => import("./rTbPscXc.js"), "./locales/ja.cookies.json": () => import("./DTqCXpaV.js"), "./locales/ja.gracias.json": () => import("./B_fpHp6X.js"), "./locales/ja.json": () => import("./DyFjB48k.js"), "./locales/ja.missing-keys.json": () => import("./COGmUloc.js"), "./locales/ko.AIProjectBanner.json": () => import("./5zSry6Rv.js"), "./locales/ko.cookies.json": () => import("./BkgUZ08f.js"), "./locales/ko.gracias.json": () => import("./3JEH1x64.js"), "./locales/ko.json": () => import("./BM2bnaxZ.js"), "./locales/ko.missing-keys.json": () => import("./LP2a0Xtf.js"), "./locales/la.AIProjectBanner.json": () => import("./C2ce4Yvv.js"), "./locales/la.cookies.json": () => import("./BoQpFiwe.js"), "./locales/la.gracias.json": () => import("./DvUc1VQO.js"), "./locales/la.json": () => import("./CTZPwyUG.js"), "./locales/la.missing-keys.json": () => import("./D8bgOt89.js"), "./locales/nl.AIProjectBanner.json": () => import("./BWbg__Uk.js"), "./locales/nl.cookies.json": () => import("./Dx5D-M2K.js"), "./locales/nl.gracias.json": () => import("./CFZ0OhBZ.js"), "./locales/nl.json": () => import("./BM-Vy5oD.js"), "./locales/nl.missing-keys.json": () => import("./BvDnOpxL.js"), "./locales/pl.AIProjectBanner.json": () => import("./gqsuAsW8.js"), "./locales/pl.cookies.json": () => import("./DD5dRA8G.js"), "./locales/pl.gracias.json": () => import("./Be0ehVtB.js"), "./locales/pl.json": () => import("./C4mxdAD0.js"), "./locales/pl.missing-keys.json": () => import("./BBnHM92H.js"), "./locales/pt.AIProjectBanner.json": () => import("./Dy3bTuFG.js"), "./locales/pt.cookies.json": () => import("./CAeRKz2P.js"), "./locales/pt.gracias.json": () => import("./CFJUzjok.js"), "./locales/pt.json": () => import("./CGkXoo7o.js"), "./locales/pt.missing-keys.json": () => import("./DtG3BD_c.js"), "./locales/ru.AIProjectBanner.json": () => import("./D24GgowJ.js"), "./locales/ru.cookies.json": () => import("./3B1wxWhs.js"), "./locales/ru.gracias.json": () => import("./CSlmMqYk.js"), "./locales/ru.json": () => import("./D-V0Vim_.js"), "./locales/ru.missing-keys.json": () => import("./BUia_jB2.js"), "./locales/tr.AIProjectBanner.json": () => import("./Cmleuv8B.js"), "./locales/tr.cookies.json": () => import("./MQmMxnz-.js"), "./locales/tr.gracias.json": () => import("./DHnd4RCc.js"), "./locales/tr.json": () => import("./DWM83rvk.js"), "./locales/tr.missing-keys.json": () => import("./SiDZZij9.js"), "./locales/zh.AIProjectBanner.json": () => import("./CbcwmLft.js"), "./locales/zh.cookies.json": () => import("./SU46d6jn.js"), "./locales/zh.gracias.json": () => import("./2Ab4Ynaw.js"), "./locales/zh.json": () => import("./B7ubk_dM.js"), "./locales/zh.missing-keys.json": () => import("./D9TgbJsd.js") }), `./locales/${lang}.json`, 3);
    translationCache.set(lang, translations.default);
    return translations.default;
  } catch (error) {
    if (lang !== "en") {
      return loadTranslations("en");
    }
    return {};
  }
}
function detectUserLanguage(Astro) {
  if (!Astro) {
    return "es-MX";
  }
  if (process.env.IS_STATIC_CPANEL === "1") {
    return "es-MX";
  }
  try {
    const urlLang = Astro.url?.searchParams?.get("lang");
    if (urlLang && isSupportedLanguage(urlLang)) {
      return urlLang;
    }
    const pathname = Astro.url?.pathname;
    if (pathname) {
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length > 0) {
        const firstSegment = segments[0];
        if (isSupportedLanguage(firstSegment)) {
          return firstSegment;
        }
      }
    }
    const cookieLang = Astro.cookies?.get("lang")?.value;
    if (cookieLang && isSupportedLanguage(cookieLang)) {
      return cookieLang;
    }
  } catch (e) {
  }
  return "es-MX";
}
function isSupportedLanguage(lang) {
  return supportedLanguages.includes(lang);
}
function getLanguageInfo(lang) {
  return {
    code: lang,
    name: languageNames[lang],
    flag: languageFlags[lang],
    nativeName: languageNames[lang]
  };
}
function getAllLanguages() {
  return supportedLanguages.map((lang) => getLanguageInfo(lang));
}
function getClientPreferredLanguage() {
  try {
    if (typeof document !== "undefined") {
      const cookieMatch = document.cookie.match(/(?:^|; )lang=([^;]+)/);
      if (cookieMatch) {
        const v = decodeURIComponent(cookieMatch[1]);
        if (isSupportedLanguage(v)) return v;
      }
      const stored = localStorage.getItem("preferredLanguage");
      if (stored && isSupportedLanguage(stored)) return stored;
    }
    if (typeof navigator !== "undefined") {
      const nav = navigator.languages && navigator.languages[0] || navigator.language || "es-MX";
      const base = nav.split("-")[0];
      const match = supportedLanguages.find(
        (l) => l === nav || l.startsWith(base)
      );
      return match || "es-MX";
    }
  } catch (_) {
  }
  return "es-MX";
}
async function t(key, langOrParams, maybeParams) {
  let lang;
  let params;
  if (typeof langOrParams === "string" && isSupportedLanguage(langOrParams)) {
    lang = langOrParams;
    params = maybeParams;
  } else if (typeof langOrParams === "object" && langOrParams !== null) {
    params = langOrParams;
    lang = getClientPreferredLanguage();
  } else {
    lang = getClientPreferredLanguage();
  }
  const translations = await loadTranslations(lang);
  const value = key.split(".").reduce((obj, part) => {
    return obj?.[part];
  }, translations);
  if (value === void 0) {
    if (lang !== "en") {
      const englishValue = await t(key, "en", params);
      if (englishValue !== key) {
        return englishValue;
      }
    }
    return key;
  }
  if (params && typeof value === "string") {
    return Object.entries(params).reduce((str, [param, val]) => {
      return str.replace(`{{${param}}}`, String(val));
    }, value);
  }
  return value;
}
function createTranslator(lang) {
  return (key, params) => t(key, lang, params);
}
export {
  createTranslator,
  detectUserLanguage,
  getAllLanguages,
  getLanguageInfo,
  loadTranslations,
  supportedLanguages,
  t
};
