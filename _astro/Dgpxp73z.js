const y = "No pudimos enviar tu solicitud. Int\xE9ntalo nuevamente en unos instantes.", L = "https://forms.izignamx.com/relay", P = "https://forms.izignamx.com/api/recaptcha-config";
function F() {
  return "/gracias";
}
function x(e = {}) {
  const a = e.debug || "", c = e.message || "";
  return `${a} ${c}`.toLowerCase().includes("mysql server has gone away");
}
function A(e, a) {
  return !e || typeof e.message != "string" ? a : e.message.replace(/mysql server has gone away/gi, a);
}
let p, w;
function U(e) {
  return e ? typeof e.site_key == "string" && e.site_key.length > 0 ? e.site_key : e.data && typeof e.data.site_key == "string" && e.data.site_key.length > 0 ? e.data.site_key : e.data && e.data.data && typeof e.data.data.site_key == "string" && e.data.data.site_key.length > 0 ? e.data.data.site_key : e.success === true && e.data && typeof e.data.siteKey == "string" && e.data.siteKey.length > 0 ? e.data.siteKey : null : null;
}
async function q() {
  const e = Date.now();
  if (p && p.expiresAt > e) return p.siteKey;
  try {
    const a = await fetch(P, { method: "GET", headers: { Accept: "application/json" }, credentials: "omit" });
    if (!a.ok) return null;
    const c = await a.json().catch(() => null), r = U(c);
    return r ? (p = { siteKey: r, expiresAt: e + 10 * 60 * 1e3 }, r) : null;
  } catch {
    return null;
  }
}
async function H(e) {
  const a = window;
  if (!(a.grecaptcha && typeof a.grecaptcha.execute == "function")) {
    if (w) {
      await w;
      return;
    }
    w = new Promise((c, r) => {
      const n = document.querySelector('script[data-izigna-recaptcha="true"]');
      if (n) {
        n.addEventListener("load", () => c(), { once: true }), n.addEventListener("error", () => r(), { once: true });
        return;
      }
      const t = document.createElement("script");
      t.async = true, t.defer = true, t.dataset.izignaRecaptcha = "true", t.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`, t.addEventListener("load", () => c(), { once: true }), t.addEventListener("error", () => r(), { once: true }), document.head.appendChild(t);
    }), await w;
  }
}
async function K(e, a) {
  if ((() => {
    try {
      const o = window, m = navigator;
      return m && m.webdriver === true || o.__PLAYWRIGHT_TEST__ === true || o.__TEST_MODE__ === true;
    } catch {
      return false;
    }
  })()) return true;
  const r = await q();
  if (!r) {
    try {
    } catch {
    }
    return false;
  }
  try {
    await H(r);
  } catch {
    try {
    } catch {
    }
    return false;
  }
  const n = window.grecaptcha;
  if (!n || typeof n.execute != "function") return false;
  let t = e.querySelector('input[name="g-recaptcha-response"]');
  const h = Date.now();
  if (t?.dataset.timestamp) {
    const o = h - parseInt(t.dataset.timestamp, 10);
    if (!Number.isNaN(o) && o < 11e4 && t.value) return true;
  }
  try {
    await new Promise((m) => n.ready(m));
    const o = await n.execute(r, { action: a });
    return t || (t = document.createElement("input"), t.type = "hidden", t.name = "g-recaptcha-response", e.appendChild(t)), t.value = o, t.dataset.timestamp = String(Date.now()), true;
  } catch (o) {
    return void 0, false;
  }
}
async function O(e, a = {}) {
  const { onBeforeSend: c, onSuccess: r, onError: n, onFinally: t, redirectOnSuccess: h = false, maxRetries: o = 1, retryDelay: m = 800, timeoutMs: T = 15e3 } = a;
  try {
    if (e.dataset.submitting === "true") return { ok: false, message: "already_submitting" };
    const l = e.dataset.cooldownUntil ? parseInt(e.dataset.cooldownUntil, 10) : 0;
    if (!Number.isNaN(l) && l > Date.now()) return n?.("Demasiadas solicitudes. Intenta nuevamente en unos segundos."), { ok: false, message: "rate_limited" };
    const g = e.querySelector('input[name="url"]');
    if (g && g.value && g.value.trim().length > 0) return n?.("No pudimos enviar tu solicitud. Int\xE9ntalo nuevamente en unos instantes."), { ok: false, message: "honeypot_triggered" };
    const b = e.querySelector('input[name="fh_id"]'), E = e.querySelector('input[name="form_id"]');
    if (!b && !E) return n?.("Falta el identificador del formulario."), { ok: false, message: "missing_form_id" };
    c?.();
    const C = e.getAttribute("data-recaptcha-action") || "relay";
    if (!await K(e, C)) return n?.("No pudimos validar reCAPTCHA. Intenta nuevamente."), { ok: false, message: "recaptcha_failed" };
    const S = new FormData(e), N = Date.now(), _ = new AbortController(), I = setTimeout(() => _.abort(), T);
    async function k(f = 0) {
      let d;
      try {
        d = await fetch(L, { method: "POST", body: S, headers: { Accept: "application/json", "X-Requested-With": "XMLHttpRequest" }, credentials: "omit", signal: _.signal });
      } catch (i) {
        return i && i.name === "AbortError" ? (n?.("Tiempo de espera agotado. Intenta nuevamente.", null, i), { ok: false, message: "timeout" }) : (n?.(y, null, i), { ok: false, message: "network_error" });
      }
      let s = null;
      try {
        s = await d.json();
      } catch {
      }
      if (d.status === 429) {
        e.dataset.cooldownUntil = String(Date.now() + 45e3);
        const i = A(s, "Has enviado demasiadas solicitudes. Intenta nuevamente m\xE1s tarde.");
        return n?.(i, s || void 0), { ok: false, data: s || void 0, message: "rate_limited" };
      }
      if (!d.ok || !s || s.status !== "ok") {
        const i = A(s, y);
        try {
          void 0, String(i || "").toLowerCase().includes("origen no permitido") && void 0;
        } catch {
        }
        return f < o && x(s || {}) ? (await new Promise((R) => setTimeout(R, m)), k(f + 1)) : (n?.(i, s || void 0), { ok: false, data: s || void 0, message: i });
      }
      const D = Date.now() - N;
      try {
      } catch {
      }
      return { ok: true, data: s };
    }
    let u;
    try {
      u = await k(0);
    } finally {
      clearTimeout(I);
    }
    if (!u.ok || !u.data) return u;
    let v = u.data.message || "\xA1Gracias! Hemos recibido tu solicitud.";
    if (u.data.duplicate === true && (v = "Tu env\xEDo ya fue recibido recientemente."), r?.(v, u.data), h) {
      const f = F(), d = new URL(f, window.location.origin);
      window.location.assign(d.toString());
    }
    return u;
  } catch (l) {
    const g = l instanceof Error && l.message ? l.message : y;
    return n?.(g, null, l), { ok: false, message: g };
  } finally {
    t?.();
  }
}
typeof window < "u" && (window.submitRelayForm = O);
export { O as s };
