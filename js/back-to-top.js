document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top");
  if (!backToTop) return;
  const threshold = window.innerHeight;
  function toggleBackToTop() {
    if (window.scrollY > threshold) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  }
  window.addEventListener("scroll", toggleBackToTop);
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
