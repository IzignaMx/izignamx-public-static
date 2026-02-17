import { r as f } from "./CVf8TyFT.js";
var N = { exports: {} }, x = {};
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var $ = f, z = Symbol.for("react.element"), P = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, I = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: true, ref: true, __self: true, __source: true };
function L(r, n, c) {
  var o, i = {}, s = null, u = null;
  c !== void 0 && (s = "" + c), n.key !== void 0 && (s = "" + n.key), n.ref !== void 0 && (u = n.ref);
  for (o in n) O.call(n, o) && !F.hasOwnProperty(o) && (i[o] = n[o]);
  if (r && r.defaultProps) for (o in n = r.defaultProps, n) i[o] === void 0 && (i[o] = n[o]);
  return { $$typeof: z, type: r, key: s, ref: u, props: i, _owner: I.current };
}
x.Fragment = P;
x.jsx = L;
x.jsxs = L;
N.exports = x;
var e = N.exports;
const U = ["es-MX", "en", "fr", "de", "nl", "ja", "zh", "hi", "ar", "pt", "fi", "ru", "tr", "it", "ko", "pl", "eo", "la"], k = { "es-MX": "Espa\xF1ol (M\xE9xico)", en: "English", fr: "Fran\xE7ais", de: "Deutsch", nl: "Nederlands", ja: "\u65E5\u672C\u8A9E", zh: "\u4E2D\u6587", hi: "\u0939\u093F\u0928\u094D\u0926\u0940", ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", pt: "Portugu\xEAs", fi: "Suomi", ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", tr: "T\xFCrk\xE7e", it: "Italiano", ko: "\uD55C\uAD6D\uC5B4", pl: "Polski", eo: "Esperanto", la: "Latina" }, X = { "es-MX": "\u{1F1F2}\u{1F1FD}", en: "\u{1F1FA}\u{1F1F8}", fr: "\u{1F1EB}\u{1F1F7}", de: "\u{1F1E9}\u{1F1EA}", nl: "\u{1F1F3}\u{1F1F1}", ja: "\u{1F1EF}\u{1F1F5}", zh: "\u{1F1E8}\u{1F1F3}", hi: "\u{1F1EE}\u{1F1F3}", ar: "\u{1F1F8}\u{1F1E6}", pt: "\u{1F1F5}\u{1F1F9}", fi: "\u{1F1EB}\u{1F1EE}", ru: "\u{1F1F7}\u{1F1FA}", tr: "\u{1F1F9}\u{1F1F7}", it: "\u{1F1EE}\u{1F1F9}", ko: "\u{1F1F0}\u{1F1F7}", pl: "\u{1F1F5}\u{1F1F1}", eo: "\u{1F3F3}\uFE0F", la: "\u{1F3DB}\uFE0F" };
function S(r) {
  return { code: r, name: k[r], flag: X[r], nativeName: k[r] };
}
function y() {
  return U.map((r) => S(r));
}
const T = ({ currentLanguage: r, onLanguageChange: n, className: c = "", position: o = "dropdown" }) => {
  const [i, s] = f.useState(false), [u, C] = f.useState([]), [l, h] = f.useState(r);
  f.useEffect(() => {
    if (C(y()), typeof window < "u") {
      const d = new URLSearchParams(window.location.search).get("lang"), g = document.cookie.split("; ").find((a) => a.startsWith("lang="))?.split("=")[1], b = d || g || "es-MX";
      y().find((a) => a.code === b) && h(b);
      const v = (a) => {
        a.detail?.language && (a.detail.language, h(a.detail.language));
      }, j = (a) => {
        a.detail?.language && (a.detail.language, h(a.detail.language));
      };
      return window.addEventListener("languageChanged", v), window.addEventListener("updateLanguageSelector", j), (() => {
        window.__languageSelectorHydrated = true, window.dispatchEvent(new CustomEvent("languageSelectorReady")), document.documentElement.setAttribute("data-language-selector-ready", "true");
      })(), () => {
        window.removeEventListener("languageChanged", v), window.removeEventListener("updateLanguageSelector", j);
      };
    }
  }, []);
  const w = S(l), p = (t) => {
    if (h(t), n && n(t), s(false), typeof document < "u" && (document.cookie = `lang=${t}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`), typeof window < "u" && window.i18nChangeLanguage) {
      window.i18nChangeLanguage(t);
      return;
    }
    if (!n && typeof window < "u") try {
      const d = new URL(window.location.href);
      t === "es-MX" ? d.searchParams.delete("lang") : d.searchParams.set("lang", t), window.location.href = d.toString();
    } catch {
      window.location.reload();
    }
  }, E = (t) => ({ "es-MX": "mx", en: "us", fr: "fr", de: "de", nl: "nl", ja: "jp", zh: "cn", hi: "in", ar: "sa", pt: "pt", fi: "fi", ru: "ru", tr: "tr", it: "it", ko: "kr", pl: "pl", eo: "un", la: "va" })[t] || "un", m = ({ langCode: t, className: d = "" }) => {
    const g = E(t);
    return e.jsx("span", { className: `fi fi-${g} ${d}`, style: { display: "inline-block", width: "1.33em", height: "1em", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", verticalAlign: "middle" } });
  }, R = () => e.jsxs("div", { className: "relative inline-block text-left", children: [e.jsxs("button", { type: "button", onClick: () => s(!i), className: `inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-black/20 border border-white/10 rounded-md hover:bg-black/40 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black transition-all duration-300 backdrop-blur-sm ${c}`, "aria-haspopup": "true", "aria-expanded": i, children: [e.jsx(m, { langCode: l, className: "mr-2" }), e.jsx("span", { className: "hidden sm:inline text-white font-medium", children: l?.toUpperCase() || "ES" }), e.jsx("span", { className: "inline sm:hidden text-white font-medium", children: w.nativeName }), e.jsx("svg", { className: `ml-2 h-4 w-4 text-white/70 transition-transform duration-200 ${i ? "rotate-180" : ""}`, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: e.jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) })] }), i && e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "fixed inset-0 z-10", onClick: () => s(false) }), e.jsx("div", { className: "origin-top-right absolute right-0 mt-2 w-64 rounded-lg shadow-xl bg-black/95 backdrop-blur-md border border-white/10 focus:outline-none z-20 animate-in fade-in-0 zoom-in-95 duration-200 max-h-96 overflow-y-auto", role: "menu", "aria-orientation": "vertical", children: e.jsx("div", { className: "py-2", role: "none", children: u.map((t) => e.jsxs("button", { type: "button", onClick: () => p(t.code), "data-language": t.code, className: `w-full text-left px-4 py-3 text-sm flex items-center space-x-3 transition-all duration-200 ${l === t.code ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-400" : "text-white hover:bg-white/10 hover:text-blue-300"}`, role: "menuitem", children: [e.jsx(m, { langCode: t.code, className: "flex-shrink-0" }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsx("div", { className: "font-medium truncate", children: t.nativeName }), e.jsx("div", { className: "text-xs text-gray-400 uppercase tracking-wide", children: t.code })] }), l === t.code && e.jsx("svg", { className: "h-4 w-4 text-blue-400 flex-shrink-0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: e.jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) })] }, t.code)) }) })] })] }), _ = () => e.jsx("div", { className: `inline-flex items-center space-x-2 ${c}`, children: u.map((t) => e.jsxs("button", { type: "button", onClick: () => p(t.code), className: `inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${l === t.code ? "bg-blue-600/20 text-blue-400 border border-blue-400/30" : "bg-black/20 text-white hover:bg-black/40 border border-white/10 hover:border-white/20"}`, title: t.nativeName, children: [e.jsx(m, { langCode: t.code, className: "mr-2" }), e.jsx("span", { className: "hidden md:inline", children: t.code?.toUpperCase() || t.code || "" })] }, t.code)) }), M = () => e.jsxs(e.Fragment, { children: [e.jsxs("button", { type: "button", onClick: () => s(true), className: `inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black/20 border border-white/10 rounded-md hover:bg-black/40 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black transition-all duration-300 ${c}`, children: [e.jsx(m, { langCode: l, className: "mr-2" }), e.jsx("span", { children: w.nativeName })] }), i && e.jsx("div", { className: "fixed inset-0 bg-black/80 backdrop-blur-sm overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4", children: e.jsx("div", { className: "relative bg-black/95 border border-white/10 rounded-xl shadow-2xl w-full max-w-md mx-auto", children: e.jsxs("div", { className: "p-6", children: [e.jsxs("div", { className: "flex items-center justify-between mb-6", children: [e.jsx("h3", { className: "text-xl font-bold text-white", children: "Seleccionar idioma" }), e.jsx("button", { type: "button", onClick: () => s(false), className: "text-gray-400 hover:text-white transition-colors", children: e.jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })] }), e.jsx("div", { className: "grid grid-cols-1 gap-2 max-h-96 overflow-y-auto", children: u.map((t) => e.jsxs("button", { type: "button", onClick: () => p(t.code), className: `p-4 rounded-lg text-left transition-all duration-200 flex items-center space-x-4 ${l === t.code ? "bg-blue-600/20 border-2 border-blue-400 text-blue-400" : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"}`, children: [e.jsx(m, { langCode: t.code }), e.jsxs("div", { className: "flex-1", children: [e.jsx("div", { className: "font-medium", children: t.nativeName }), e.jsx("div", { className: "text-sm text-gray-400 uppercase tracking-wide", children: t.code })] }), l === t.code && e.jsx("svg", { className: "h-6 w-6 text-blue-400", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: e.jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) })] }, t.code)) })] }) }) })] });
  return o === "inline" ? _() : o === "modal" ? M() : R();
};
export { T as default };
