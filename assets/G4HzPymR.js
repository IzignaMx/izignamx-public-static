import { s as L } from "./Dgpxp73z.js";
import "./AVOqqsqe.js";
function v() {
  const n = document.getElementById("aiProjectForm");
  if (!n || n.dataset.initialized === "true") return;
  n.dataset.initialized = "true";
  const s = document.getElementById("formMessage"), d = document.getElementById("successMessage"), a = document.getElementById("errorMessage");
  if (!s || !d || !a) return;
  let u = false, c;
  function w(t) {
    const e = document.getElementById("redirect-banner");
    e && e.parentElement && e.remove();
    const r = document.createElement("div");
    r.id = "redirect-banner", r.className = "mt-6 text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg border border-blue-500/30 text-white", r.innerHTML = `<div class="flex items-center justify-center gap-3"><svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p>Est\xE1s a punto de ser redirigido. En <span id="redirect-counter">${t}</span>s iremos a <strong>/gracias</strong>.</p></div>`;
    const o = document.getElementById("aiProjectForm");
    o && o.parentElement ? (o.parentElement.insertBefore(r, o), c = r) : (document.body.appendChild(r), c = r);
  }
  function y(t) {
    const e = document.getElementById("redirect-counter");
    e && (e.textContent = String(t)), c && t <= 0 && (c.remove(), c = void 0);
  }
  n.querySelectorAll("[required]").forEach((t) => {
    t.addEventListener("blur", f), t.addEventListener("input", f);
  });
  function f(t) {
    const e = t.target;
    if (!e) return;
    const r = e.checkValidity();
    !r && e.value ? (e.classList.add("border-red-500"), e.classList.remove("border-green-500")) : r && e.value ? (e.classList.add("border-green-500"), e.classList.remove("border-red-500")) : e.classList.remove("border-red-500", "border-green-500");
  }
  n.addEventListener("submit", async function(t) {
    if (t.preventDefault(), n.dataset.submitting === "true") return;
    const e = n.querySelector('button[type="submit"]'), r = e ? e.innerHTML : "";
    e && (e.disabled = true, e.innerHTML = `
          <span class="relative z-10">Enviando an\xE1lisis...</span>
          <svg class="w-5 h-5 ml-2 relative z-10 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a7.646 7.646 0 100 15.292V12"></path>
          </svg>
        `), typeof window < "u" && (typeof window.gtag == "function" && window.gtag("event", "form_submit", { event_category: "AI Project", event_label: "AI Project Form Attempt" }), typeof window.trackEvent == "function" && window.trackEvent("form_submit", { form_id: "ai-proyecto" }));
    try {
      const o = await L(n, { redirectOnSuccess: false, maxRetries: 3, onSuccess: () => {
        E();
      }, onError: (g) => {
        m(g || "No pudimos enviar tu mensaje. Intenta nuevamente.");
      } });
      if (o && o.ok) {
        u = true, n.dataset.sent = "true", n.reset(), n.querySelectorAll(".border-green-500").forEach((i) => i.classList.remove("border-green-500")), typeof window < "u" && typeof window.trackEvent == "function" && window.trackEvent("form_success", { form_id: "ai-proyecto", redirect: "/gracias" });
        const p = `/gracias?lang=${document.documentElement.lang || "es-MX"}`;
        let l = false;
        try {
          const i = new URL(p, window.location.origin);
          l = i.origin === window.location.origin && i.pathname === "/gracias";
        } catch {
          l = false;
        }
        if (l) {
          e && (e.disabled = true, e.innerHTML = '<span class="relative z-10">Redirigiendo en 5s...</span>'), typeof window < "u" && typeof window.trackEvent == "function" && window.trackEvent("redirect_initiated", { form_id: "ai-proyecto", redirect: "/gracias" }), w(5);
          let i = 5;
          const b = setInterval(() => {
            if (i -= 1, y(i), e && (e.innerHTML = `<span class="relative z-10">Redirigiendo en ${i}s...</span>`), i <= 0) {
              clearInterval(b);
              const h = new URL(p, window.location.origin);
              typeof window < "u" && typeof window.trackEvent == "function" && (window.trackEvent("redirect_complete", { form_id: "ai-proyecto", redirect: "/gracias" }), window.trackEvent("lead_conversion", { form_id: "ai-proyecto", redirect: "/gracias", value: 1, currency: "USD" })), window.location.assign(h.toString());
            }
          }, 1e3);
        }
      }
    } catch {
      m("Ocurri\xF3 un error inesperado. Intenta nuevamente.");
    } finally {
      n.dataset.submitting = "false", u || e && (e.disabled = false, e.innerHTML = r);
    }
  });
  function E() {
    s && s.classList.remove("hidden"), d && d.classList.remove("hidden"), a && a.classList.add("hidden"), setTimeout(() => {
      s && s.classList.add("hidden");
    }, 1e4);
  }
  function m(t) {
    if (s && s.classList.remove("hidden"), d && d.classList.add("hidden"), a && a.classList.remove("hidden"), a) {
      const e = a.querySelector("p");
      e && (e.textContent = t);
    }
  }
}
document.addEventListener("DOMContentLoaded", v);
document.addEventListener("astro:page-load", v);
