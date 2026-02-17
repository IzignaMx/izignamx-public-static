import { createAstro, createComponent, renderTemplate, renderComponent, addAttribute, maybeRenderHead } from "./CfGiqa0J.js";
import "kleur/colors";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { getAllLanguages, getLanguageInfo, detectUserLanguage, t } from "./CjVOP6b_.js";
import { $$Container } from "./vgz30z9q.js";
import { $$Icon } from "./c5-Fiz34.js";
const LanguageSelector = ({
  currentLanguage,
  onLanguageChange,
  className = "",
  position = "dropdown"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [activeLang, setActiveLang] = useState(currentLanguage);
  useEffect(() => {
    setLanguages(getAllLanguages());
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get("lang");
      const cookieLang = document.cookie.split("; ").find((row) => row.startsWith("lang="))?.split("=")[1];
      const detectedLang = urlLang || cookieLang || "es-MX";
      if (getAllLanguages().find((lang) => lang.code === detectedLang)) {
        setActiveLang(detectedLang);
      }
      const handleLanguageChange = (event) => {
        if (event.detail?.language) {
          setActiveLang(event.detail.language);
        }
      };
      const handleSelectorUpdate = (event) => {
        if (event.detail?.language) {
          setActiveLang(event.detail.language);
        }
      };
      window.addEventListener(
        "languageChanged",
        handleLanguageChange
      );
      window.addEventListener(
        "updateLanguageSelector",
        handleSelectorUpdate
      );
      const signalHydrationReady = () => {
        window.__languageSelectorHydrated = true;
        window.dispatchEvent(new CustomEvent("languageSelectorReady"));
        document.documentElement.setAttribute(
          "data-language-selector-ready",
          "true"
        );
      };
      signalHydrationReady();
      return () => {
        window.removeEventListener(
          "languageChanged",
          handleLanguageChange
        );
        window.removeEventListener(
          "updateLanguageSelector",
          handleSelectorUpdate
        );
      };
    }
  }, []);
  const currentLanguageInfo = getLanguageInfo(activeLang);
  const handleLanguageSelect = (langCode) => {
    setActiveLang(langCode);
    if (onLanguageChange) {
      onLanguageChange(langCode);
    }
    setIsOpen(false);
    if (typeof document !== "undefined") {
      document.cookie = `lang=${langCode}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
    }
    if (typeof window !== "undefined" && window.i18nChangeLanguage) {
      window.i18nChangeLanguage(langCode);
      return;
    }
    if (!onLanguageChange && typeof window !== "undefined") {
      try {
        const url = new URL(window.location.href);
        if (langCode === "es-MX") {
          url.searchParams.delete("lang");
        } else {
          url.searchParams.set("lang", langCode);
        }
        window.location.href = url.toString();
      } catch (e) {
        window.location.reload();
      }
    }
  };
  const getCountryCode = (langCode) => {
    const countryMap = {
      "es-MX": "mx",
      en: "us",
      fr: "fr",
      de: "de",
      nl: "nl",
      ja: "jp",
      zh: "cn",
      hi: "in",
      ar: "sa",
      pt: "pt",
      fi: "fi",
      ru: "ru",
      tr: "tr",
      it: "it",
      ko: "kr",
      pl: "pl",
      eo: "un",
      // Esperanto - usando bandera de UN
      la: "va"
      // Latín - usando bandera del Vaticano
    };
    return countryMap[langCode] || "un";
  };
  const FlagIcon = ({
    langCode,
    className: className2 = ""
  }) => {
    const countryCode = getCountryCode(langCode);
    return /* @__PURE__ */ jsx(
      "span",
      {
        className: `fi fi-${countryCode} ${className2}`,
        style: {
          display: "inline-block",
          width: "1.33em",
          height: "1em",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          verticalAlign: "middle"
        }
      }
    );
  };
  const renderDropdown = () => /* @__PURE__ */ jsxs("div", { className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: `inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-black/20 border border-white/10 rounded-md hover:bg-black/40 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black transition-all duration-300 backdrop-blur-sm ${className}`,
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ jsx(FlagIcon, { langCode: activeLang, className: "mr-2" }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline text-white font-medium", children: activeLang?.toUpperCase() || "ES" }),
          /* @__PURE__ */ jsx("span", { className: "inline sm:hidden text-white font-medium", children: currentLanguageInfo.nativeName }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `ml-2 h-4 w-4 text-white/70 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                }
              )
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 z-10",
          onClick: () => setIsOpen(false)
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "origin-top-right absolute right-0 mt-2 w-64 rounded-lg shadow-xl bg-black/95 backdrop-blur-md border border-white/10 focus:outline-none z-20 animate-in fade-in-0 zoom-in-95 duration-200 max-h-96 overflow-y-auto",
          role: "menu",
          "aria-orientation": "vertical",
          children: /* @__PURE__ */ jsx("div", { className: "py-2", role: "none", children: languages.map((language) => /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleLanguageSelect(language.code),
              "data-language": language.code,
              className: `w-full text-left px-4 py-3 text-sm flex items-center space-x-3 transition-all duration-200 ${activeLang === language.code ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-400" : "text-white hover:bg-white/10 hover:text-blue-300"}`,
              role: "menuitem",
              children: [
                /* @__PURE__ */ jsx(
                  FlagIcon,
                  {
                    langCode: language.code,
                    className: "flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium truncate", children: language.nativeName }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 uppercase tracking-wide", children: language.code })
                ] }),
                activeLang === language.code && /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "h-4 w-4 text-blue-400 flex-shrink-0",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            },
            language.code
          )) })
        }
      )
    ] })
  ] });
  const renderInline = () => /* @__PURE__ */ jsx("div", { className: `inline-flex items-center space-x-2 ${className}`, children: languages.map((language) => /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: () => handleLanguageSelect(language.code),
      className: `inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeLang === language.code ? "bg-blue-600/20 text-blue-400 border border-blue-400/30" : "bg-black/20 text-white hover:bg-black/40 border border-white/10 hover:border-white/20"}`,
      title: language.nativeName,
      children: [
        /* @__PURE__ */ jsx(FlagIcon, { langCode: language.code, className: "mr-2" }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: language.code?.toUpperCase() || language.code || "" })
      ]
    },
    language.code
  )) });
  const renderModal = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(true),
        className: `inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black/20 border border-white/10 rounded-md hover:bg-black/40 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black transition-all duration-300 ${className}`,
        children: [
          /* @__PURE__ */ jsx(FlagIcon, { langCode: activeLang, className: "mr-2" }),
          /* @__PURE__ */ jsx("span", { children: currentLanguageInfo.nativeName })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/80 backdrop-blur-sm overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsx("div", { className: "relative bg-black/95 border border-white/10 rounded-xl shadow-2xl w-full max-w-md mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Seleccionar idioma" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsOpen(false),
            className: "text-gray-400 hover:text-white transition-colors",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2 max-h-96 overflow-y-auto", children: languages.map((language) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => handleLanguageSelect(language.code),
          className: `p-4 rounded-lg text-left transition-all duration-200 flex items-center space-x-4 ${activeLang === language.code ? "bg-blue-600/20 border-2 border-blue-400 text-blue-400" : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"}`,
          children: [
            /* @__PURE__ */ jsx(FlagIcon, { langCode: language.code }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: language.nativeName }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 uppercase tracking-wide", children: language.code })
            ] }),
            activeLang === language.code && /* @__PURE__ */ jsx(
              "svg",
              {
                className: "h-6 w-6 text-blue-400",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    clipRule: "evenodd"
                  }
                )
              }
            )
          ]
        },
        language.code
      )) })
    ] }) }) })
  ] });
  if (position === "inline") return renderInline();
  if (position === "modal") return renderModal();
  return renderDropdown();
};
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://izignamx.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const isHomePage = pathname === "/" || pathname === "/index.html";
  let currentLang;
  try {
    currentLang = detectUserLanguage(Astro2);
  } catch (e) {
    currentLang = "es-MX";
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Header del sitio adaptado a Astro con clases del dise\xF1o original -->", "<header", "", ' data-astro-cid-3ef6ksr2> <div class="cd-logo logo" data-astro-cid-3ef6ksr2> <a href="/" aria-label="Home" title="Home" class="block w-10 h-10 hover:rotate-12 transition-all duration-300" data-astro-cid-3ef6ksr2> <svg class="w-full h-full" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <g data-astro-cid-3ef6ksr2> <rect height="901.56116" style="fill:#000000;fill-opacity:1" width="901.56116" x="-0.78057927" y="-1.56115" data-astro-cid-3ef6ksr2></rect> <rect height="924.93164" style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2.11999989;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4.5;stroke-dasharray:none;stroke-opacity:1;" width="924.93164" x="-12.46582" y="-12.46582" data-astro-cid-3ef6ksr2></rect> <path d="M 2e-6,450 2e-6,1.3499999e-6 l 449.999998,0 450,0 L 900,450 900,900 450,900 2e-6,900 l 0,-450 z m 838.619998,0 0,-391.859998 -388.62,0 -388.619998,0 0,391.859998 0,391.86 388.619998,0 388.62,0 0,-391.86 z m -755.459998,0.09 0,-359.729998 366.929998,0 366.93,0 0,359.729998 0,359.73 -366.93,0 -366.929998,0 0,-359.73 z m 222.119998,1.26 0,-198.27 -28.35,0 -28.35,0 0,198.27 0,198.27 28.35,0 28.35,0 0,-198.27 z m 349.02,175.41 0,-21.06 -108.54,0 c -59.697,0 -108.54,-0.047 -108.54,-0.10436 0,-0.0574 19.04908,-30.02741 42.3313,-66.6 L 521.8826,472.5 l 66.2087,0 66.2087,0 0,-21.06 0,-21.06 -50.4,0 c -27.72,0 -50.4,-0.0371 -50.4,-0.0826 0,-0.0454 22.6771,-32.22266 50.39354,-71.505 l 50.39355,-71.42243 0.006,-16.065 0.006,-16.065 -135.36,0 -135.36,0 0,21.03271 0,21.0327 34.47,66.46942 c 18.9585,36.55818 34.47,66.49973 34.47,66.53675 0,0.037 -13.10175,0.0878 -29.115,0.11288 l -29.115,0.0455 -0.0457,21.01457 -0.0458,21.01458 37.34813,0.0454 37.34813,0.0454 -50.48739,74.36844 -50.48738,74.36844 0,13.24656 0,13.24656 143.19,0 143.19,0 0,-21.06 z M 499.97306,424.24861 C 499.73278,423.71037 486.68143,395.082 470.97005,360.63 455.25868,326.178 442.3621,297.84825 442.31098,297.675 c -0.0884,-0.29963 3.3912,-0.315 71.29803,-0.315 39.26504,0 71.39099,0.0433 71.39099,0.0962 0,0.12717 -84.04846,127.17774 -84.35398,127.51236 -0.20008,0.21916 -0.30274,0.10933 -0.67296,-0.72 z" style="fill:#000000" data-astro-cid-3ef6ksr2></path> <path d="M 75.711304,74.930733 H 824.2887 V 823.50813 H 75.711304 Z" style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:28.177;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;" data-astro-cid-3ef6ksr2></path> </g> </svg> </a> </div> <!-- Men\xFA versi\xF3n original --> <nav class="menuNav hidden md:block" data-astro-cid-3ef6ksr2> <ul class="nav_max flex space-x-6 relative visible items-center" data-astro-cid-3ef6ksr2> <li class="hover:transform hover:scale-110 transition-all duration-300" data-astro-cid-3ef6ksr2> <a href="/" class="internal nav-link text-white hover:text-izigna-primary hover:border-b-2 hover:border-izigna-primary transition-all" data-i18n="header.home" data-astro-cid-3ef6ksr2>', '</a> </li> <li class="hover:transform hover:scale-110 transition-all duration-300" data-astro-cid-3ef6ksr2> <a href="/about" class="internal nav-link text-white hover:text-izigna-primary hover:border-b-2 hover:border-izigna-primary transition-all" data-i18n="header.aboutUs" data-astro-cid-3ef6ksr2>', '</a> </li> <li class="group relative hover:transform hover:scale-110 transition-all duration-300" data-astro-cid-3ef6ksr2> <a', ' class="internal nav-link text-white hover:text-izigna-primary hover:border-b-2 hover:border-izigna-primary transition-all" data-anchor-link data-i18n="header.ourServices" data-astro-cid-3ef6ksr2>', '</a> <ul class="submenu absolute left-0 hidden bg-black/90 min-w-40 py-2 group-hover:block z-10 animated fadeIn" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/ai-web-project-help" class="md:w-max block px-4 py-2 text-yellow-400 hover:text-yellow-300 hover:pl-6 transition-all duration-300 font-semibold" data-astro-cid-3ef6ksr2>\u{1F680} <span data-i18n="header.aiProjectsHelp" data-astro-cid-3ef6ksr2>', '</span></a> </li> <li class="border-t border-gray-700 my-1" data-astro-cid-3ef6ksr2></li> <li data-astro-cid-3ef6ksr2> <a href="/services/blockchain" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="header.services.blockchain" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/iot-development" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="header.services.iot" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/3d-printing" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="header.services.printing3d" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/consulting" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="header.services.consulting" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/3d-modeling" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="header.services.modeling3d" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/web-development" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="services.web-development.title" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/graphic-design" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="services.graphic-design.title" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/app-development" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="services.app-development.title" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/digital-marketing" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="services.digital-marketing.title" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/ai-services" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="services.ai-services.title" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/seo" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="services.seo.title" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/cloud-enterprise" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="services.cloudEnterprise.title" data-astro-cid-3ef6ksr2>', '</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/hosting" class="md:w-max block px-4 py-2 text-white hover:text-izigna-primary hover:pl-6 transition-all duration-300" data-i18n="services.hosting.title" data-astro-cid-3ef6ksr2>', '</a> </li> </ul> </li> <li class="hover:transform hover:scale-110 transition-all duration-300" data-astro-cid-3ef6ksr2> <a', ' class="internal nav-link text-white hover:text-izigna-primary hover:border-b-2 hover:border-izigna-primary transition-all" data-anchor-link data-i18n="header.ourWork" data-astro-cid-3ef6ksr2>', '</a> </li> <li class="hover:transform hover:scale-110 transition-all duration-300" data-astro-cid-3ef6ksr2> <a', ' class="nav-link text-white hover:text-izigna-primary hover:border-b-2 hover:border-izigna-primary transition-all" data-anchor-link data-astro-cid-3ef6ksr2> <span data-i18n="header.getInTouch" data-astro-cid-3ef6ksr2>', '</span> </a> </li>  <li class="relative group ml-4" data-astro-cid-3ef6ksr2> ', ' </li> </ul> </nav> <!-- Men\xFA m\xF3vil --> <div class="block md:hidden" data-astro-cid-3ef6ksr2> <button id="mobile-menu-button" class="text-white p-2 hover:text-izigna-primary transition-colors" type="button" aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </button> <div id="mobile-menu" class="hidden fixed inset-0 bg-black/95 z-50" data-astro-cid-3ef6ksr2> <div class="flex justify-end p-4" data-astro-cid-3ef6ksr2> <button id="mobile-menu-close" class="text-white p-2 hover:text-izigna-primary hover:rotate-90 transition-all duration-300" type="button" aria-label="Close menu" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> <nav class="flex flex-col items-center pt-10" data-astro-cid-3ef6ksr2> <ul class="space-y-6 text-center" data-astro-cid-3ef6ksr2> <li class="animated fadeInDown" data-astro-cid-3ef6ksr2> <a href="/" class="text-white text-2xl font-adamcg hover:text-izigna-primary transition-colors" data-i18n="header.home" data-astro-cid-3ef6ksr2>INICIO</a> </li> <li class="animated fadeInDown" style="animation-delay: 0.1s" data-astro-cid-3ef6ksr2> <a href="/about" class="text-white text-2xl font-adamcg hover:text-izigna-primary transition-colors" data-i18n="header.aboutUs" data-astro-cid-3ef6ksr2>IZIGNA</a> </li> <li class="animated fadeInDown" style="animation-delay: 0.2s" data-astro-cid-3ef6ksr2> <button id="mobile-services-toggle" class="text-white text-2xl font-adamcg hover:text-izigna-primary transition-colors" data-i18n="header.ourServices" data-astro-cid-3ef6ksr2>SERVICIOS</button> <ul id="mobile-services-submenu" class="hidden mt-4 space-y-3 text-lg" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/ai-web-project-help" class="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold" data-astro-cid-3ef6ksr2>\u{1F680} <span data-i18n="header.aiProjectsHelp" data-astro-cid-3ef6ksr2>Ayuda Proyectos AI</span></a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/blockchain" class="text-white hover:text-izigna-primary transition-colors" data-i18n="header.services.blockchain" data-astro-cid-3ef6ksr2>Blockchain & Web3</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/iot-development" class="text-white hover:text-izigna-primary transition-colors" data-i18n="header.services.iot" data-astro-cid-3ef6ksr2>IoT Development</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/3d-printing" class="text-white hover:text-izigna-primary transition-colors" data-i18n="header.services.printing3d" data-astro-cid-3ef6ksr2>3D Printing</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/consulting" class="text-white hover:text-izigna-primary transition-colors" data-i18n="header.services.consulting" data-astro-cid-3ef6ksr2>Consulting</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/3d-modeling" class="text-white hover:text-izigna-primary transition-colors" data-i18n="header.services.modeling3d" data-astro-cid-3ef6ksr2>3D Modeling</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/web-development" class="text-white hover:text-izigna-primary transition-colors" data-i18n="services.webDevelopment.title" data-astro-cid-3ef6ksr2>Desarrollo Web</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/graphic-design" class="text-white hover:text-izigna-primary transition-colors" data-i18n="services.graphicDesign.title" data-astro-cid-3ef6ksr2>Dise\xF1o Gr\xE1fico</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/app-development" class="text-white hover:text-izigna-primary transition-colors" data-i18n="services.appDevelopment.title" data-astro-cid-3ef6ksr2>Aplicaciones M\xF3viles</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/digital-marketing" class="text-white hover:text-izigna-primary transition-colors" data-i18n="services.digitalMarketing.title" data-astro-cid-3ef6ksr2>Marketing Digital</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/ai-services" class="text-white hover:text-izigna-primary transition-colors" data-i18n="services.aiServices.title" data-astro-cid-3ef6ksr2>Inteligencia Artificial</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/seo" class="text-white hover:text-izigna-primary transition-colors" data-i18n="services.seo.title" data-astro-cid-3ef6ksr2>Posicionamiento SEO</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/cloud-enterprise" class="text-white hover:text-izigna-primary transition-colors" data-i18n="services.cloudEnterprise.title" data-astro-cid-3ef6ksr2>Cloud Enterprise</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/services/hosting" class="text-white hover:text-izigna-primary transition-colors" data-i18n="services.hosting.title" data-astro-cid-3ef6ksr2>Hosting</a> </li> </ul> </li> <li class="animated fadeInDown" style="animation-delay: 0.4s" data-astro-cid-3ef6ksr2> <a', ' class="text-white text-2xl font-adamcg hover:text-izigna-primary transition-colors" data-anchor-link data-i18n="header.ourWork" data-astro-cid-3ef6ksr2>WORK</a> </li> <li class="animated fadeInDown" style="animation-delay: 0.5s" data-astro-cid-3ef6ksr2> <a', ' class="text-white text-2xl font-adamcg hover:text-izigna-primary transition-colors" data-anchor-link data-i18n="header.getInTouch" data-astro-cid-3ef6ksr2>CONTACTO</a> </li>  <li class="animated fadeInDown" style="animation-delay: 0.6s" data-astro-cid-3ef6ksr2> ', " </li> </ul> </nav> </div> </div> </header>  ", ` <script>
  // Funcionalidad del men\xFA m\xF3vil
  document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenu = document.getElementById("mobile-menu");
    const header = document.querySelector(".cd-header");

    // Determinar si es home desde el atributo de datos del header
    const isHome = header?.dataset.isHome === "true";

    // Mobile services submenu toggle
    const mobileServicesToggle = document.getElementById(
      "mobile-services-toggle",
    );
    const mobileServicesSubmenu = document.getElementById(
      "mobile-services-submenu",
    );

    mobileServicesToggle?.addEventListener("click", (e) => {
      e.preventDefault();
      mobileServicesSubmenu?.classList.toggle("hidden");
      const svg = mobileServicesToggle.querySelector("svg");

      // Toggle the arrow direction
      if (mobileServicesSubmenu?.classList.contains("hidden")) {
        svg?.classList.remove("rotate-180");
      } else {
        svg?.classList.add("rotate-180");
      }
    });

    mobileMenuButton?.addEventListener("click", () => {
      mobileMenu?.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      mobileMenuButton?.setAttribute("aria-expanded", "true");
    });

    mobileMenuClose?.addEventListener("click", () => {
      mobileMenu?.classList.add("hidden");
      document.body.style.overflow = "";
      mobileMenuButton?.setAttribute("aria-expanded", "false");
    });

    // Cerrar men\xFA al hacer clic en un enlace
    document.querySelectorAll("#mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu?.classList.add("hidden");
        document.body.style.overflow = "";
        mobileMenuButton?.setAttribute("aria-expanded", "false");
      });
    });

    // Controlamos la opacidad del header en scroll
    let lastScrollTop = 0;
    let scrollThreshold = 50; // Umbral para considerar un cambio de direcci\xF3n significativo

    window.addEventListener(
      "scroll",
      () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
          header?.classList.add("scrolled", "bg-black");
          header?.classList.remove("bg-black/80");
        } else {
          header?.classList.remove("scrolled", "bg-black");
          header?.classList.add("bg-black/80");
        }

        // Detectar direcci\xF3n de scroll con umbral para evitar peque\xF1as fluctuaciones
        if (scrollTop > lastScrollTop + scrollThreshold && scrollTop > 300) {
          // Scroll hacia abajo, ocultamos header con animaci\xF3n
          header?.classList.add("header-hidden");
        } else if (scrollTop < lastScrollTop - 10) {
          // Scroll hacia arriba, mostramos header con animaci\xF3n
          header?.classList.remove("header-hidden");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evitar valores negativos
      },
      { passive: true },
    );

    // Resaltar secci\xF3n activa en el men\xFA al hacer scroll (solo en home)
    if (isHome) {
      const sections = ["services", "work", "contact"];
      const navLinks = sections.map((id) =>
        document.querySelector('a[href="#' + id + '"]'),
      );

      const highlightNav = () => {
        const scrollPos = window.scrollY + 100; // Offset para compensar el header
        sections.forEach((id, index) => {
          const section = document.getElementById(id);
          const link = navLinks[index];
          if (!section || !link) return;

          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + rect.height;

          if (scrollPos >= top && scrollPos < bottom) {
            link.classList.add(
              "border-b-2",
              "border-izigna-primary",
              "text-izigna-primary",
            );
          } else {
            link.classList.remove(
              "border-b-2",
              "border-izigna-primary",
              "text-izigna-primary",
            );
          }
        });
      };

      window.addEventListener("scroll", highlightNav, { passive: true });
      highlightNav();
    }

    const toggleHeroLock = (heroVisible) => {
      if (!header) return;
      const floatingSelector = document.getElementById(
        "hero-language-selector",
      );

      if (heroVisible) {
        header.classList.add("home-hero-hidden");
        header.classList.remove("home-hero-revealed");

        // Show floating selector when header is hidden
        if (floatingSelector) {
          floatingSelector.classList.remove(
            "opacity-0",
            "pointer-events-none",
            "invisible",
          );
          floatingSelector.classList.add("opacity-100");
          floatingSelector.setAttribute("aria-hidden", "false");
        }
      } else {
        header.classList.remove("home-hero-hidden");
        header.classList.add("home-hero-revealed");

        // Hide floating selector when header is revealed
        if (floatingSelector) {
          floatingSelector.classList.add(
            "opacity-0",
            "pointer-events-none",
            "invisible",
          );
          floatingSelector.classList.remove("opacity-100");
          floatingSelector.setAttribute("aria-hidden", "true");
        }
      }
    };

    if (isHome && header) {
      const heroSection = document.getElementById("hero");
      if (heroSection && "IntersectionObserver" in window) {
        const heroObserver = new IntersectionObserver(
          (entries) => {
            const [entry] = entries;
            const heroVisible = entry ? entry.isIntersecting : false;
            toggleHeroLock(heroVisible);
          },
          {
            threshold: [0, 0.1, 0.25],
          },
        );

        heroObserver.observe(heroSection);
        toggleHeroLock(true);
      } else {
        toggleHeroLock(false);
      }
    } else {
      header?.classList.remove("home-hero-hidden");
    }
  });
<\/script> `])), maybeRenderHead(), addAttribute(`cd-header fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm transition-all duration-500 animated fadeInDown ${isHomePage ? "home-hero-hidden" : ""}`, "class"), addAttribute(isHomePage ? "true" : "false", "data-is-home"), await t("header.home", currentLang), await t("header.aboutUs", currentLang), addAttribute(isHomePage ? "#services" : "/#services", "href"), await t("header.ourServices", currentLang), await t("header.aiProjectsHelp", currentLang), await t("header.services.blockchain", currentLang), await t("header.services.iot", currentLang), await t("header.services.printing3d", currentLang), await t("header.services.consulting", currentLang), await t("header.services.modeling3d", currentLang), await t("services.web-development.title", currentLang), await t("services.graphic-design.title", currentLang), await t("services.app-development.title", currentLang), await t("services.digital-marketing.title", currentLang), await t("services.ai-services.title", currentLang), await t("services.seo.title", currentLang), await t("services.cloudEnterprise.title", currentLang), await t("services.hosting.title", currentLang), addAttribute(isHomePage ? "#work" : "/#work", "href"), await t("header.ourWork", currentLang), addAttribute(isHomePage ? "#contact" : "/#contact", "href"), await t("header.getInTouch", currentLang), renderComponent($$result, "LanguageSelector", LanguageSelector, { "currentLanguage": currentLang, "className": "language-selector-header", "position": "dropdown", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/MEGA/IzignaMx/izignamx/src/components/LanguageSelector.tsx", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }), addAttribute(isHomePage ? "#work" : "/#work", "href"), addAttribute(isHomePage ? "#contact" : "/#contact", "href"), renderComponent($$result, "LanguageSelector", LanguageSelector, { "currentLanguage": currentLang, "className": "language-selector-mobile", "position": "modal", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/MEGA/IzignaMx/izignamx/src/components/LanguageSelector.tsx", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }), isHomePage && renderTemplate`<div id="hero-language-selector" class="fixed top-6 right-6 z-50 transition-all duration-500 opacity-0 pointer-events-none" aria-hidden="true" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "LanguageSelector", LanguageSelector, { "currentLanguage": currentLang, "className": "hero-floating-selector bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-lg hover:bg-black/60 transition-colors", "position": "dropdown", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/MEGA/IzignaMx/izignamx/src/components/LanguageSelector.tsx", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} </div>`);
}, "D:/MEGA/IzignaMx/izignamx/src/components/Header.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://izignamx.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentLang = detectUserLanguage(Astro2);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate(_a || (_a = __template(["", '<footer class="footer bg-[#121212] text-white relative z-10" data-astro-cid-sz7xmlte> ', ' <div class="bg-gray-900 py-8 border-t border-gray-800" data-astro-cid-sz7xmlte> ', ' </div> </footer> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    // Inicializar funcionalidades adicionales para el footer\n    const socialLinks = document.querySelectorAll(".social-link");\n    socialLinks.forEach((link) => {\n      link.addEventListener("click", (e) => {\n        e.preventDefault();\n        if (link instanceof HTMLAnchorElement) {\n          window.open(link.href, "_blank");\n        }\n      });\n    });\n  });\n<\/script> '])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "data-astro-cid-sz7xmlte": true }, { "default": async ($$result2) => renderTemplate` <div class="footer-content py-16" data-astro-cid-sz7xmlte> <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8" data-astro-cid-sz7xmlte> <!-- Logo y descripción --> <div class="col-span-1" data-astro-cid-sz7xmlte> <div class="footer-logo mb-6" data-astro-cid-sz7xmlte> <img src="/assets/img/logo.png" alt="IzignaMx Logo" width="48" height="48" class="h-12" data-astro-cid-sz7xmlte> </div> <p class="text-gray-300 mb-6" data-i18n="footer.description" data-astro-cid-sz7xmlte> ${await t("footer.description", currentLang)} </p> <div class="social-icons flex gap-4 mt-6" data-astro-cid-sz7xmlte> <a href="https://facebook.com/IzignaMx" target="_blank" rel="noopener" aria-label="Facebook" title="Facebook" class="w-12 h-12 rounded-full bg-white/20 hover:bg-izigna-primary hover:opacity-90 transition-colors flex items-center justify-center shadow-md" data-astro-cid-sz7xmlte> ${renderComponent($$result2, "Icon", $$Icon, { "name": "facebook-f", "class": "h-4 w-4 text-white", "data-astro-cid-sz7xmlte": true })} </a> </div> </div> <!-- Enlaces rápidos --> <div class="col-span-1" data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold mb-6" data-i18n="footer.quickAccess" data-astro-cid-sz7xmlte> ${await t("footer.quickAccess", currentLang)} </h4> <ul class="space-y-3" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="/" class="text-gray-300 hover:text-white transition-colors" data-i18n="footer.links.home" data-astro-cid-sz7xmlte>${await t("footer.links.home", currentLang)}</a> </li> <li data-astro-cid-sz7xmlte> <a href="/about" class="text-gray-300 hover:text-white transition-colors" data-i18n="footer.links.whyChooseUs" data-astro-cid-sz7xmlte>${await t("footer.links.whyChooseUs", currentLang)}</a> </li> <li data-astro-cid-sz7xmlte> <a href="/#services" class="text-gray-300 hover:text-white transition-colors" data-anchor-link data-i18n="footer.links.digitalSolutions" data-astro-cid-sz7xmlte>${await t("footer.links.digitalSolutions", currentLang)}</a> </li> <li data-astro-cid-sz7xmlte> <a href="/#work" class="text-gray-300 hover:text-white transition-colors" data-anchor-link data-i18n="footer.links.successCases" data-astro-cid-sz7xmlte>${await t("footer.links.successCases", currentLang)}</a> </li> <li data-astro-cid-sz7xmlte> <a href="/#contact" class="text-gray-300 hover:text-white transition-colors" data-anchor-link data-i18n="footer.links.requestProposal" data-astro-cid-sz7xmlte>${await t("footer.links.requestProposal", currentLang)}</a> </li> </ul> </div> <!-- Servicios --> <div class="col-span-1" data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold mb-6" data-i18n="footer.highImpactSolutions" data-astro-cid-sz7xmlte> ${await t("footer.highImpactSolutions", currentLang)} </h4> <ul class="space-y-3" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="/ai-web-project-help" class="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold" data-astro-cid-sz7xmlte><span class="text-yellow-400" data-astro-cid-sz7xmlte>🚀</span> <span data-i18n="footer.services.aiProjects" data-astro-cid-sz7xmlte>${await t("footer.services.aiProjects", currentLang)}</span></a> </li> <li data-astro-cid-sz7xmlte> <a href="/services/web-development" class="text-gray-300 hover:text-white transition-colors" data-astro-cid-sz7xmlte><span class="text-izigna-primary" data-astro-cid-sz7xmlte>→</span> <span data-i18n="footer.services.convertingWebs" data-astro-cid-sz7xmlte>${await t("footer.services.convertingWebs", currentLang)}</span></a> </li> <li data-astro-cid-sz7xmlte> <a href="/services/seo" class="text-gray-300 hover:text-white transition-colors" data-astro-cid-sz7xmlte><span class="text-izigna-primary" data-astro-cid-sz7xmlte>→</span> <span data-i18n="footer.services.measurableSeo" data-astro-cid-sz7xmlte>${await t("footer.services.measurableSeo", currentLang)}</span></a> </li> <li data-astro-cid-sz7xmlte> <a href="/services/digital-marketing" class="text-gray-300 hover:text-white transition-colors" data-astro-cid-sz7xmlte><span class="text-izigna-primary" data-astro-cid-sz7xmlte>→</span> <span data-i18n="footer.services.highRoiMarketing" data-astro-cid-sz7xmlte>${await t("footer.services.highRoiMarketing", currentLang)}</span></a> </li> <li data-astro-cid-sz7xmlte> <a href="/services/app-development" class="text-gray-300 hover:text-white transition-colors" data-astro-cid-sz7xmlte><span class="text-izigna-primary" data-astro-cid-sz7xmlte>→</span> <span data-i18n="footer.services.premiumApps" data-astro-cid-sz7xmlte>${await t("footer.services.premiumApps", currentLang)}</span></a> </li> <li data-astro-cid-sz7xmlte> <a href="/services/graphic-design" class="text-gray-300 hover:text-white transition-colors" data-astro-cid-sz7xmlte><span class="text-izigna-primary" data-astro-cid-sz7xmlte>→</span> <span data-i18n="footer.services.connectingDesign" data-astro-cid-sz7xmlte>${await t("footer.services.connectingDesign", currentLang)}</span></a> </li> <li data-astro-cid-sz7xmlte> <a href="/services/ai-services" class="text-gray-300 hover:text-white transition-colors" data-astro-cid-sz7xmlte><span class="text-izigna-primary" data-astro-cid-sz7xmlte>→</span> <span data-i18n="footer.services.costReducingAi" data-astro-cid-sz7xmlte>${await t("footer.services.costReducingAi", currentLang)}</span></a> </li> </ul> </div> <!-- Contacto --> <div class="col-span-1" data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold mb-6" data-i18n="footer.startTransformation" data-astro-cid-sz7xmlte> ${await t("footer.startTransformation", currentLang)} </h4> <ul class="space-y-4" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="tel:+525533760889" class="text-gray-300 hover:text-white transition-colors flex items-center gap-3" data-astro-cid-sz7xmlte> <div class="flex-shrink-0 w-8 h-8 bg-izigna-primary/30 rounded-full flex items-center justify-center shadow-sm" data-astro-cid-sz7xmlte> ${renderComponent($$result2, "Icon", $$Icon, { "name": "phone", "class": "h-4 w-4 text-white", "data-astro-cid-sz7xmlte": true })} </div> <span data-i18n="footer.contact.whatsappNow" data-astro-cid-sz7xmlte>${await t("footer.contact.whatsappNow", currentLang)}</span> </a> </li> <li data-astro-cid-sz7xmlte> <a href="mailto:edgar@izignamx.com?subject=Solicitud%20de%20Análisis%20Gratuito&body=Hola,%20me%20interesa%20recibir%20un%20análisis%20gratuito%20para%20mi%20proyecto%20digital." class="text-gray-300 hover:text-white transition-colors flex items-center gap-3" data-astro-cid-sz7xmlte> <div class="flex-shrink-0 w-8 h-8 bg-izigna-info/30 rounded-full flex items-center justify-center shadow-sm" data-astro-cid-sz7xmlte> ${renderComponent($$result2, "Icon", $$Icon, { "name": "envelope", "class": "h-4 w-4 text-white", "data-astro-cid-sz7xmlte": true })} </div> <span data-i18n="footer.contact.requestAnalysis" data-astro-cid-sz7xmlte>${await t("footer.contact.requestAnalysis", currentLang)}</span> </a> </li> <li data-astro-cid-sz7xmlte> <a href="https://wa.me/525533760889" class="text-gray-300 hover:text-white transition-colors flex items-center gap-3" data-i18n-whatsapp="contact.whatsappText" data-astro-cid-sz7xmlte> <div class="flex-shrink-0 w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center shadow-sm" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4 text-white" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" data-astro-cid-sz7xmlte></path> </svg> </div> <span data-i18n="footer.contact.immediateWhatsapp" data-astro-cid-sz7xmlte>${await t("footer.contact.immediateWhatsapp", currentLang)}</span> </a> </li> <li data-astro-cid-sz7xmlte> <div class="text-gray-300 flex items-center gap-3" data-astro-cid-sz7xmlte> <div class="flex-shrink-0 w-8 h-8 bg-izigna-primary/30 rounded-full flex items-center justify-center shadow-sm" data-astro-cid-sz7xmlte> ${renderComponent($$result2, "Icon", $$Icon, { "name": "map-marker", "class": "h-4 w-4 text-white", "data-astro-cid-sz7xmlte": true })} </div> <span data-i18n="footer.contact.location" data-astro-cid-sz7xmlte>${await t("footer.contact.location", currentLang)}</span> </div> </li> </ul> </div> </div> </div> ` }), renderComponent($$result, "Container", $$Container, { "data-astro-cid-sz7xmlte": true }, { "default": async ($$result2) => renderTemplate` <div class="flex flex-col md:flex-row justify-between items-center" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <p class="text-gray-300 text-sm" data-astro-cid-sz7xmlte>
&copy; ${currentYear} IzignaMX. <span data-i18n="footer.copyright" data-astro-cid-sz7xmlte>${await t("footer.copyright", currentLang)}</span> </p> </div> <div class="mt-4 md:mt-0" data-astro-cid-sz7xmlte> <ul class="flex space-x-6" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="/terms" class="text-gray-300 hover:text-white text-sm transition-colors" data-i18n="footer.links.termsConditions" data-astro-cid-sz7xmlte>${await t("footer.links.termsConditions", currentLang)}</a> </li> <li data-astro-cid-sz7xmlte> <a href="/privacy" class="text-gray-300 hover:text-white text-sm transition-colors" data-i18n="footer.links.privacyPolicy" data-astro-cid-sz7xmlte>${await t("footer.links.privacyPolicy", currentLang)}</a> </li> <li data-astro-cid-sz7xmlte> <a href="/sitemap.xml" class="text-gray-300 hover:text-white text-sm transition-colors" data-i18n="footer.links.siteMap" data-astro-cid-sz7xmlte>${await t("footer.links.siteMap", currentLang)}</a> </li> </ul> </div> </div> ` }));
}, "D:/MEGA/IzignaMx/izignamx/src/components/Footer.astro", void 0);
export {
  $$Footer,
  $$Header
};
