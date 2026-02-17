var h = "No pudimos enviar tu solicitud. Int\xE9ntalo nuevamente en unos instantes.", N = "https://forms.izignamx.com/relay", D = "https://forms.izignamx.com/api/recaptcha-config";
function H() {
  return "/gracias";
}
function P(e = {}) {
  let r = e.debug || "", c = e.message || "";
  return `${r} ${c}`.toLowerCase().includes("mysql server has gone away");
}
function v(e, r) {
  return !e || typeof e.message != "string" ? r : e.message.replace(/mysql server has gone away/gi, r);
}
var y, p;
function x(e) {
  return e ? typeof e.site_key == "string" && e.site_key.length > 0 ? e.site_key : e.data && typeof e.data.site_key == "string" && e.data.site_key.length > 0 ? e.data.site_key : e.data && e.data.data && typeof e.data.data.site_key == "string" && e.data.data.site_key.length > 0 ? e.data.data.site_key : e.success === true && e.data && typeof e.data.siteKey == "string" && e.data.siteKey.length > 0 ? e.data.siteKey : null : null;
}
async function M() {
  let e = Date.now();
  if (y && y.expiresAt > e) return y.siteKey;
  try {
    let r = await fetch(D, { method: "GET", headers: { Accept: "application/json" }, credentials: "omit" });
    if (!r.ok) return null;
    let c = await r.json().catch(() => null), a = x(c);
    return a ? (y = { siteKey: a, expiresAt: e + 10 * 60 * 1e3 }, a) : null;
  } catch {
    return null;
  }
}
async function O(e) {
  let r = window;
  if (!(r.grecaptcha && typeof r.grecaptcha.execute == "function")) {
    if (p) {
      await p;
      return;
    }
    p = new Promise((c, a) => {
      let n = document.querySelector('script[data-izigna-recaptcha="true"]');
      if (n) {
        n.addEventListener("load", () => c(), { once: true }), n.addEventListener("error", () => a(), { once: true });
        return;
      }
      let t = document.createElement("script");
      t.async = true, t.defer = true, t.dataset.izignaRecaptcha = "true", t.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`, t.addEventListener("load", () => c(), { once: true }), t.addEventListener("error", () => a(), { once: true }), document.head.appendChild(t);
    }), await p;
  }
}
async function K(e, r) {
  if ((() => {
    try {
      let o = window, m = navigator;
      return m && m.webdriver === true || o.__PLAYWRIGHT_TEST__ === true || o.__TEST_MODE__ === true;
    } catch {
      return false;
    }
  })()) return true;
  let a = await M();
  if (!a) {
    try {
    } catch {
    }
    return false;
  }
  try {
    await O(a);
  } catch {
    try {
    } catch {
    }
    return false;
  }
  let n = window.grecaptcha;
  if (!n || typeof n.execute != "function") return false;
  let t = e.querySelector('input[name="g-recaptcha-response"]'), w = Date.now();
  if (t?.dataset.timestamp) {
    let o = w - parseInt(t.dataset.timestamp, 10);
    if (!Number.isNaN(o) && o < 11e4 && t.value) return true;
  }
  try {
    await new Promise((m) => n.ready(m));
    let o = await n.execute(a, { action: r });
    return t || (t = document.createElement("input"), t.type = "hidden", t.name = "g-recaptcha-response", e.appendChild(t)), t.value = o, t.dataset.timestamp = String(Date.now()), true;
  } catch (o) {
    return void 0, false;
  }
}
async function U(e, r = {}) {
  let { onBeforeSend: c, onSuccess: a, onError: n, onFinally: t, redirectOnSuccess: w = false, maxRetries: o = 1, retryDelay: m = 800, timeoutMs: T = 15e3 } = r;
  try {
    if (e.dataset.submitting === "true") return { ok: false, message: "already_submitting" };
    let l = e.dataset.cooldownUntil ? parseInt(e.dataset.cooldownUntil, 10) : 0;
    if (!Number.isNaN(l) && l > Date.now()) return n?.("Demasiadas solicitudes. Intenta nuevamente en unos segundos."), { ok: false, message: "rate_limited" };
    let g = e.querySelector('input[name="url"]');
    if (g && g.value && g.value.trim().length > 0) return n?.("No pudimos enviar tu solicitud. Int\xE9ntalo nuevamente en unos instantes."), { ok: false, message: "honeypot_triggered" };
    let E = e.querySelector('input[name="fh_id"]'), A = e.querySelector('input[name="form_id"]');
    if (!E && !A) return n?.("Falta el identificador del formulario."), { ok: false, message: "missing_form_id" };
    c?.();
    let S = e.getAttribute("data-recaptcha-action") || "relay";
    if (!await K(e, S)) return n?.("No pudimos validar reCAPTCHA. Intenta nuevamente."), { ok: false, message: "recaptcha_failed" };
    let I = new FormData(e), L = Date.now(), _ = new AbortController(), C = setTimeout(() => _.abort(), T);
    async function R(f = 0) {
      let d;
      try {
        d = await fetch(N, { method: "POST", body: I, headers: { Accept: "application/json", "X-Requested-With": "XMLHttpRequest" }, credentials: "omit", signal: _.signal });
      } catch (i) {
        return i && i.name === "AbortError" ? (n?.("Tiempo de espera agotado. Intenta nuevamente.", null, i), { ok: false, message: "timeout" }) : (n?.(h, null, i), { ok: false, message: "network_error" });
      }
      let s = null;
      try {
        s = await d.json();
      } catch {
      }
      if (d.status === 429) {
        e.dataset.cooldownUntil = String(Date.now() + 45e3);
        let i = v(s, "Has enviado demasiadas solicitudes. Intenta nuevamente m\xE1s tarde.");
        return n?.(i, s || void 0), { ok: false, data: s || void 0, message: "rate_limited" };
      }
      if (!d.ok || !s || s.status !== "ok") {
        let i = v(s, h);
        try {
          void 0, String(i || "").toLowerCase().includes("origen no permitido") && void 0;
        } catch {
        }
        return f < o && P(s || {}) ? (await new Promise((b) => setTimeout(b, m)), R(f + 1)) : (n?.(i, s || void 0), { ok: false, data: s || void 0, message: i });
      }
      let F = Date.now() - L;
      try {
      } catch {
      }
      return { ok: true, data: s };
    }
    let u;
    try {
      u = await R(0);
    } finally {
      clearTimeout(C);
    }
    if (!u.ok || !u.data) return u;
    let k = u.data.message || "\xA1Gracias! Hemos recibido tu solicitud.";
    if (u.data.duplicate === true && (k = "Tu env\xEDo ya fue recibido recientemente."), a?.(k, u.data), w) {
      let f = H(), d = new URL(f, window.location.origin);
      window.location.assign(d.toString());
    }
    return u;
  } catch (l) {
    let g = l instanceof Error && l.message ? l.message : h;
    return n?.(g, null, l), { ok: false, message: g };
  } finally {
    t?.();
  }
}
typeof window < "u" && (window.submitRelayForm = U);
export { U as submitRelayForm };
