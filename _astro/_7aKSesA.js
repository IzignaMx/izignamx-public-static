import { s as _ } from "./Dgpxp73z.js";
import "./AVOqqsqe.js";
function y() {
  const o = document.getElementById("formulario-contacto");
  if (!o || o.dataset.initialized === "true") return;
  o.dataset.initialized = "true";
  const l = document.getElementById("submit-btn"), a = document.getElementById("submit-text"), u = document.getElementById("submit-spinner"), p = document.getElementById("form-errors"), b = document.getElementById("message"), c = document.getElementById("message-count"), x = a ? a.textContent : "Enviar", m = { name: { required: true, minLength: 2, maxLength: 100, pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{2,100}$/, errorMessages: { required: "El nombre es requerido", minLength: "El nombre debe tener al menos 2 caracteres", maxLength: "El nombre no puede exceder 100 caracteres", pattern: "El nombre solo puede contener letras y espacios" } }, email: { required: true, maxLength: 254, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMessages: { required: "El email es requerido", maxLength: "El email es demasiado largo", pattern: "Por favor ingrese un email v\xE1lido" } }, phone: { required: false, pattern: /^[+]?[0-9\s\-()]{10,20}$/, errorMessages: { pattern: "Por favor ingrese un n\xFAmero de tel\xE9fono v\xE1lido" } }, service: { required: true, errorMessages: { required: "Por favor seleccione un servicio" } }, message: { required: true, minLength: 10, maxLength: 2e3, errorMessages: { required: "El mensaje es requerido", minLength: "El mensaje debe tener al menos 10 caracteres", maxLength: "El mensaje no puede exceder 2000 caracteres" } } };
  b && c && b.addEventListener("input", function() {
    const n = this.value.length;
    c.textContent = n + "/2000", n > 2e3 ? (c.classList.add("text-red-400"), c.classList.remove("text-white/60")) : (c.classList.remove("text-red-400"), c.classList.add("text-white/60"));
  });
  function v(n, t) {
    const e = m[n];
    if (!e) return { isValid: true, errors: [] };
    const r = [];
    return e.required && (!t || t.trim() === "") && r.push(e.errorMessages.required), !e.required && (!t || t.trim() === "") ? { isValid: true, errors: [] } : (e.minLength && t.length < e.minLength && r.push(e.errorMessages.minLength), e.maxLength && t.length > e.maxLength && r.push(e.errorMessages.maxLength), e.pattern && !e.pattern.test(t) && r.push(e.errorMessages.pattern), { isValid: r.length === 0, errors: r });
  }
  function E(n, t) {
    const e = document.getElementById(n + "-error"), r = document.getElementById(n);
    e && r && (t.length > 0 ? (e.textContent = t[0], e.classList.remove("hidden"), e.style.display = "block", r.setAttribute("aria-invalid", "true"), r.classList.add("border-red-400", "ring-red-400/50"), r.classList.remove("border-white/20", "focus:border-izigna-primary")) : (e.textContent = "", e.classList.add("hidden"), e.style.display = "none", r.setAttribute("aria-invalid", "false"), r.classList.remove("border-red-400", "ring-red-400/50"), r.classList.add("border-white/20")));
  }
  function h(n) {
    E(n, []);
  }
  function B() {
    const n = new FormData(o), t = [];
    let e = true;
    return Object.keys(m).forEach(function(r) {
      const s = n.get(r) || "", d = v(r, s);
      d.isValid ? h(r) : (e = false, t.push.apply(t, d.errors), E(r, d.errors));
    }), p && (t.length > 0 ? p.textContent = "Hay " + t.length + " error" + (t.length > 1 ? "es" : "") + " en el formulario. " + t.join(". ") : p.textContent = ""), e;
  }
  let w = false, L = false, f;
  function C(n) {
    I();
    const t = document.createElement("div");
    t.id = "redirect-banner", t.className = "mt-6 text-center bg-gradient-to-r from-izigna-primary/20 to-izigna-info/20 p-4 rounded-lg border border-izigna-primary/30 text-white", t.innerHTML = `
        <div class="flex items-center justify-center gap-3">
          <svg class="w-5 h-5 text-izigna-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p>Est\xE1s a punto de ser redirigido. En <span id="redirect-counter">${n}</span>s iremos a <strong>/gracias</strong>.</p>
        </div>
      `;
    const e = document.getElementById("formulario-contacto");
    e && e.parentElement ? (e.parentElement.insertBefore(t, e), f = t) : (document.body.appendChild(t), f = t);
  }
  function M(n) {
    const t = document.getElementById("redirect-counter");
    t && (t.textContent = String(n)), f && n <= 0 && (f.remove(), f = void 0);
  }
  function I() {
    const n = document.getElementById("redirect-banner");
    n && n.parentElement && n.remove(), f = void 0;
  }
  Object.keys(m).forEach(function(n) {
    const t = document.getElementById(n);
    t && (t.addEventListener("blur", function() {
      if (w) {
        const e = v(n, this.value);
        E(n, e.errors);
      }
    }), t.addEventListener("input", function() {
      w && this.getAttribute("aria-invalid") === "true" && v(n, this.value).isValid && h(n);
    }));
  }), Object.keys(m).forEach(function(n) {
    h(n);
  });
  function g(n, t = "success") {
    const e = document.createElement("div");
    e.className = `notification ${t}`, e.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0">
            ${t === "success" ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'}
          </div>
          <div class="flex-1">
            <p class="font-medium">${n}</p>
          </div>
          <button onclick="this.parentElement.parentElement.remove()" class="flex-shrink-0 opacity-70 hover:opacity-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      `, e.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 9999;
        padding: 16px 20px; border-radius: 12px; color: white;
        background: ${t === "success" ? "linear-gradient(135deg, #10B981, #059669)" : "linear-gradient(135deg, #EF4444, #DC2626)"};
        box-shadow: 0 10px 25px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.1);
        transform: translateX(100%);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 420px;
        font-size: 14px;
        line-height: 1.5;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.1);
      `, document.body.appendChild(e), setTimeout(() => {
      e.style.transform = "translateX(0)";
    }, 100), setTimeout(() => {
      e.parentElement && (e.style.transform = "translateX(100%)", setTimeout(() => {
        e.parentElement && e.remove();
      }, 400));
    }, 6e3);
  }
  function q(n) {
    const t = n.get("email"), e = n.get("name"), r = n.get("message");
    return !e || e.trim().length < 2 ? (g("El nombre debe tener al menos 2 caracteres", "error"), false) : !t || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t) ? (g("Por favor, ingresa un email v\xE1lido", "error"), false) : !r || r.trim().length < 10 ? (g("El mensaje debe tener al menos 10 caracteres", "error"), false) : true;
  }
  o.addEventListener("submit", async function(n) {
    if (n.preventDefault(), o.dataset.submitting === "true") return;
    if (w = true, !B()) {
      const e = o.querySelector('[aria-invalid="true"]');
      e && e.focus();
      return;
    }
    l && a && u && (l.disabled = true, a.textContent = "Enviando...", u.classList.remove("hidden"));
    const t = new FormData(o);
    if (!q(t)) {
      l && a && u && (l.disabled = false, a.textContent = x, u.classList.add("hidden"));
      return;
    }
    typeof window < "u" && (typeof window.gtag == "function" && window.gtag("event", "form_submit", { event_category: "Contact", event_label: "Contact Form Attempt" }), typeof window.trackEvent == "function" && window.trackEvent("form_submit", { form_id: "contacto-principal" }));
    try {
      const e = await _(o, { redirectOnSuccess: false, maxRetries: 3, onSuccess: (r) => {
        g(r || "Hemos recibido tu mensaje. \xA1Gracias!", "success");
      }, onError: (r) => {
        g(r || "No pudimos enviar tu mensaje. Int\xE9ntalo de nuevo.", "error");
      } });
      if (e && e.ok) {
        L = true, o.dataset.sent = "true", o.reset(), c && (c.textContent = "0/2000"), Object.keys(m).forEach(function(i) {
          h(i);
        }), typeof window < "u" && typeof window.trackEvent == "function" && window.trackEvent("form_success", { form_id: "contacto-principal", redirect: "/gracias" });
        const s = `/gracias?lang=${document.documentElement.lang || "es-MX"}`;
        let d = false;
        try {
          const i = new URL(s, window.location.origin);
          d = i.origin === window.location.origin && i.pathname === "/gracias";
        } catch {
          d = false;
        }
        if (d) {
          l && a && u && (l.disabled = true, a.textContent = "Redirigiendo en 5s...", u.classList.remove("hidden")), typeof window < "u" && typeof window.trackEvent == "function" && window.trackEvent("redirect_initiated", { form_id: "contacto-principal", redirect: "/gracias" }), C(5);
          let i = 5;
          const j = setInterval(() => {
            if (i -= 1, M(i), a && (a.textContent = `Redirigiendo en ${i}s...`), i <= 0) {
              clearInterval(j);
              const S = new URL(s, window.location.origin);
              typeof window < "u" && typeof window.trackEvent == "function" && (window.trackEvent("redirect_complete", { form_id: "contacto-principal", redirect: "/gracias" }), window.trackEvent("lead_conversion", { form_id: "contacto-principal", redirect: "/gracias", value: 1, currency: "USD" })), window.location.assign(S.toString());
            }
          }, 1e3);
        }
      }
    } catch {
      g("Ocurri\xF3 un error inesperado. Int\xE9ntalo nuevamente en unos momentos.", "error");
    } finally {
      o.dataset.submitting = "false", L || l && a && u && (l.disabled = false, a.textContent = x, u.classList.add("hidden"));
    }
  });
  const k = o.querySelector('button[type="reset"]');
  k && k.addEventListener("click", function() {
    Object.keys(m).forEach(function(s) {
      h(s);
    }), c && (c.textContent = "0/2000");
    const n = document.getElementById("formMessage"), t = document.getElementById("successMessage"), e = document.getElementById("errorMessage");
    n && n.classList.add("hidden"), t && t.classList.add("hidden"), e && e.classList.add("hidden"), p && (p.textContent = "");
    const r = o.querySelector('input[type="text"], input[type="email"]');
    r && setTimeout(function() {
      r.focus();
    }, 100);
  }), o.querySelectorAll('[role="radiogroup"]').forEach(function(n) {
    const t = Array.from(n.querySelectorAll('input[type="radio"]'));
    t.forEach(function(e, r) {
      e.addEventListener("keydown", function(s) {
        if (s.key === "ArrowRight" || s.key === "ArrowDown") {
          s.preventDefault();
          const d = (r + 1) % t.length, i = t[d];
          i && (i.focus(), i.checked = true);
        } else if (s.key === "ArrowLeft" || s.key === "ArrowUp") {
          s.preventDefault();
          const d = (r - 1 + t.length) % t.length, i = t[d];
          i && (i.focus(), i.checked = true);
        }
      });
    });
  });
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", y) : y();
document.addEventListener("astro:page-load", y);
