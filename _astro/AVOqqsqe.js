(function() {
  const h = window.matchMedia("(pointer: fine)").matches, p = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!h || p) return;
  const d = document.getElementById("custom-cursor");
  if (!d) return;
  const w = d.querySelector(".cursor-dot"), s = d.querySelector(".cursor-ring");
  if (!w || !s) return;
  let n = window.innerWidth / 2, r = window.innerHeight / 2, i = n, o = r, l = 1, t = null, u = false, c = null;
  const a = (e, f, g) => e + (f - e) * g, m = () => {
    w.style.transform = `translate3d(${n}px, ${r}px, 0)`, s.style.transform = `translate3d(${i - 16}px, ${o - 16}px, 0) scale(${l})`;
  }, v = () => {
    if (c) {
      const e = c.getBoundingClientRect(), f = e.left + e.width / 2, g = e.top + e.height / 2;
      i = a(i, f, 0.18), o = a(o, g, 0.18);
    } else i = a(i, n, 0.22), o = a(o, r, 0.22);
    m(), t = requestAnimationFrame(v);
  }, y = (e) => {
    n = e.clientX, r = e.clientY, u = true, document.documentElement.dataset.cursorActive = "1", t || (t = requestAnimationFrame(v));
  }, E = (e) => {
    c = e, l = 1.25, s.classList.add("ring-active");
  }, L = () => {
    c = null, l = 1, s.classList.remove("ring-active");
  };
  Array.from(document.querySelectorAll('a, button, [role="button"], [data-cursor-magnet], .cursor-magnet')).forEach((e) => {
    e.addEventListener("mouseenter", () => E(e), { passive: true }), e.addEventListener("mouseleave", L, { passive: true });
  }), document.addEventListener("mousemove", y, { passive: true }), document.addEventListener("visibilitychange", () => {
    document.hidden ? (t && cancelAnimationFrame(t), t = null) : u && !t && (t = requestAnimationFrame(v));
  }), window.addEventListener("resize", () => {
    u || (n = window.innerWidth / 2, r = window.innerHeight / 2, i = n, o = r, m());
  }, { passive: true }), m();
})();
