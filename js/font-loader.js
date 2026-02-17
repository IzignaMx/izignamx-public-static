document.addEventListener("DOMContentLoaded", function() {
  const fonts = [
    { name: "Adamas", className: "fonts-adamas-loaded" },
    { name: "adam.cg_proregular", className: "fonts-adamcg-loaded" }
  ];
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function() {
      fonts.forEach((font) => {
        try {
          if (isFontLoaded(font.name)) {
            document.documentElement.classList.add(font.className);
          } else {
            document.documentElement.classList.add(font.className);
          }
        } catch (error) {
          document.documentElement.classList.add(font.className);
        }
      });
    }).catch(function(error) {
      fonts.forEach((font) => {
        document.documentElement.classList.add(font.className);
      });
    });
  } else {
    setTimeout(() => {
      fonts.forEach((font) => {
        document.documentElement.classList.add(font.className);
      });
    }, 1e3);
  }
  function isFontLoaded(fontName) {
    const detector = document.createElement("span");
    detector.style.fontFamily = `'${fontName}', monospace`;
    detector.style.fontSize = "72px";
    detector.style.visibility = "hidden";
    detector.innerText = "Font Test";
    document.body.appendChild(detector);
    const fontWidth = detector.offsetWidth;
    detector.style.fontFamily = "monospace";
    const fallbackWidth = detector.offsetWidth;
    document.body.removeChild(detector);
    return fontWidth !== fallbackWidth;
  }
});
