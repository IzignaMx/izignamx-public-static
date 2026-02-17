import { createComponent, renderTemplate, maybeRenderHead, createAstro, renderSlot, addAttribute, unescapeHTML, defineScriptVars, renderComponent, Fragment, renderHead } from "./CfGiqa0J.js";
import "kleur/colors";
import "clsx";
import { supportedLanguages, detectUserLanguage, createTranslator, t } from "./CjVOP6b_.js";
var __freeze$e = Object.freeze;
var __defProp$e = Object.defineProperty;
var __template$e = (cooked, raw) => __freeze$e(__defProp$e(cooked, "raw", { value: __freeze$e(raw || cooked.slice()) }));
var _a$d;
const $$AccessibilityProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$d || (_a$d = __template$e(["<!-- Accessibility features container -->", `<div id="a11y-features" data-astro-cid-tt7q676p> <!-- Skip link handled in Layout.astro for consistency --> </div> <!-- Inject accessibility scripts --> <script>
  // Function to handle keyboard navigation for better focus management
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDownOnce);
    }
  }

  // Function to remove tabbing indication when mouse is used
  function handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing');
    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
  }

  // Initialize keyboard navigation detection
  window.addEventListener('keydown', handleFirstTab);

  // Ensure proper focus management when modals/dialogs open & close
  document.addEventListener('DOMContentLoaded', () => {
    // Store last focused element before modal opens
    let lastFocusedElement;

    // Handle modal open
    const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        lastFocusedElement = document.activeElement;
        
        // Find and focus the modal
        const modalId = trigger.getAttribute('data-modal-trigger');
        const modal = document.getElementById(modalId);
        if (modal) {
          setTimeout(() => {
            const focusTarget = modal.querySelector('[data-focus-first], button, [tabindex="0"], a') || modal;
            if (focusTarget) {
              focusTarget.focus();
            }
          }, 50);
        }
      });
    });
    
    // Handle modal close - return focus to previous element
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
    modalCloseButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (lastFocusedElement) {
          setTimeout(() => {
            lastFocusedElement.focus();
          }, 50);
        }
      });
    });

    // Handle ESC key for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[aria-modal="true"]');
        if (openModals.length) {
          const closeBtn = openModals[0].querySelector('[data-modal-close]');
          if (closeBtn) {
            closeBtn.click();
          }
        }
      }
    });

    const markDecorativeIcons = () => {
      const svgIcons = document.querySelectorAll('svg:not([aria-label]):not([role="img"]):not([aria-hidden="false"])');
      svgIcons.forEach((icon) => {
        if (!icon.hasAttribute('aria-hidden')) {
          icon.setAttribute('aria-hidden', 'true');
        }
        icon.setAttribute('focusable', 'false');
      });

      const iIcons = document.querySelectorAll('i:not([aria-label]):not([role="img"]):not([aria-hidden="false"])');
      iIcons.forEach((icon) => {
        if (!icon.hasAttribute('aria-hidden')) {
          icon.setAttribute('aria-hidden', 'true');
        }
      });
    };

    markDecorativeIcons();
    const iconObserver = new MutationObserver(markDecorativeIcons);
    iconObserver.observe(document.body, { childList: true, subtree: true });
  });
<\/script>  <div id="accessibility-tools" class="fixed top-20 right-4 z-50 flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity" data-astro-cid-tt7q676p> <!-- High contrast mode toggle --> <button id="high-contrast-toggle" class="accessibility-button bg-gray-900 text-white p-2 rounded-full shadow-lg" aria-label="Toggle high contrast mode" title="Toggle high contrast mode" data-astro-cid-tt7q676p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-tt7q676p> <circle cx="12" cy="12" r="10" data-astro-cid-tt7q676p></circle> <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" data-astro-cid-tt7q676p></path> <path d="M12 6v12" data-astro-cid-tt7q676p></path> </svg> </button> <!-- Font size increase --> <button id="increase-font" class="accessibility-button bg-gray-900 text-white p-2 rounded-full shadow-lg" aria-label="Increase font size" title="Increase font size" data-astro-cid-tt7q676p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-tt7q676p> <polyline points="4 14 10 14 10 20" data-astro-cid-tt7q676p></polyline> <polyline points="14 10 14 4 20 4" data-astro-cid-tt7q676p></polyline> <line x1="14" y1="10" x2="21" y2="3" data-astro-cid-tt7q676p></line> <line x1="3" y1="21" x2="10" y2="14" data-astro-cid-tt7q676p></line> </svg> </button> <!-- Font size decrease --> <button id="decrease-font" class="accessibility-button bg-gray-900 text-white p-2 rounded-full shadow-lg" aria-label="Decrease font size" title="Decrease font size" data-astro-cid-tt7q676p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-tt7q676p> <polyline points="4 14 10 14 10 20" data-astro-cid-tt7q676p></polyline> <polyline points="14 10 14 4 20 4" data-astro-cid-tt7q676p></polyline> <line x1="14" y1="10" x2="21" y2="3" data-astro-cid-tt7q676p></line> <line x1="3" y1="21" x2="10" y2="14" data-astro-cid-tt7q676p></line> </svg> </button> <!-- Reduced motion toggle --> <button id="reduced-motion-toggle" class="accessibility-button bg-gray-900 text-white p-2 rounded-full shadow-lg" aria-label="Toggle reduced motion" title="Toggle reduced motion" data-astro-cid-tt7q676p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-tt7q676p> <path d="M5 12h14" data-astro-cid-tt7q676p></path> <path d="M12 5v14" data-astro-cid-tt7q676p></path> </svg> </button> </div> <div id="accessibility-announcement" role="status" aria-live="polite" class="sr-only" data-astro-cid-tt7q676p></div>  <script>
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize accessibility state from localStorage
    const highContrast = localStorage.getItem('highContrast') === 'true';
    const reducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const fontSize = localStorage.getItem('fontSize') || '100';
    
    // Apply saved settings
    if (highContrast) {
      document.body.classList.add('high-contrast');
    }
    
    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    }
    
    document.documentElement.style.fontSize = \`\${fontSize}%\`;
    
    // Set up event listeners
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const reducedMotionToggle = document.getElementById('reduced-motion-toggle');
    const announcement = document.getElementById('accessibility-announcement');
    
    if (highContrastToggle) {
      highContrastToggle.addEventListener('click', () => {
        const isHighContrast = document.body.classList.toggle('high-contrast');
        localStorage.setItem('highContrast', isHighContrast.toString());
        
        // Announce change
        if (announcement) {
          announcement.textContent = isHighContrast ? 
            'Alto contraste activado' : 
            'Alto contraste desactivado';
        }
      });
    }
    
    if (increaseFontBtn) {
      increaseFontBtn.addEventListener('click', () => {
        const currentSize = parseFloat(localStorage.getItem('fontSize') || '100');
        const newSize = Math.min(currentSize + 10, 150); // Max 150%
        document.documentElement.style.fontSize = \`\${newSize}%\`;
        localStorage.setItem('fontSize', newSize.toString());
        
        // Announce change
        if (announcement) {
          announcement.textContent = \`Tama\xF1o de texto aumentado a \${newSize}%\`;
        }
      });
    }
    
    if (decreaseFontBtn) {
      decreaseFontBtn.addEventListener('click', () => {
        const currentSize = parseFloat(localStorage.getItem('fontSize') || '100');
        const newSize = Math.max(currentSize - 10, 80); // Min 80%
        document.documentElement.style.fontSize = \`\${newSize}%\`;
        localStorage.setItem('fontSize', newSize.toString());
        
        // Announce change
        if (announcement) {
          announcement.textContent = \`Tama\xF1o de texto reducido a \${newSize}%\`;
        }
      });
    }
    
    if (reducedMotionToggle) {
      reducedMotionToggle.addEventListener('click', () => {
        const isReducedMotion = document.body.classList.toggle('reduced-motion');
        localStorage.setItem('reducedMotion', isReducedMotion.toString());
        
        // Announce change
        if (announcement) {
          announcement.textContent = isReducedMotion ? 
            'Movimiento reducido activado' : 
            'Movimiento reducido desactivado';
        }
      });
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Alt + H: Toggle high contrast
      if (e.altKey && e.key === 'h') {
        highContrastToggle?.click();
      }
      
      // Alt + Plus: Increase font size
      if (e.altKey && e.key === '+') {
        increaseFontBtn?.click();
      }
      
      // Alt + Minus: Decrease font size
      if (e.altKey && e.key === '-') {
        decreaseFontBtn?.click();
      }
      
      // Alt + M: Toggle reduced motion
      if (e.altKey && e.key === 'm') {
        reducedMotionToggle?.click();
      }
    });
    
    // Check for system preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && localStorage.getItem('reducedMotion') === null) {
      document.body.classList.add('reduced-motion');
      localStorage.setItem('reducedMotion', 'true');
    }
  });
<\/script>`], ["<!-- Accessibility features container -->", `<div id="a11y-features" data-astro-cid-tt7q676p> <!-- Skip link handled in Layout.astro for consistency --> </div> <!-- Inject accessibility scripts --> <script>
  // Function to handle keyboard navigation for better focus management
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDownOnce);
    }
  }

  // Function to remove tabbing indication when mouse is used
  function handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing');
    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
  }

  // Initialize keyboard navigation detection
  window.addEventListener('keydown', handleFirstTab);

  // Ensure proper focus management when modals/dialogs open & close
  document.addEventListener('DOMContentLoaded', () => {
    // Store last focused element before modal opens
    let lastFocusedElement;

    // Handle modal open
    const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        lastFocusedElement = document.activeElement;
        
        // Find and focus the modal
        const modalId = trigger.getAttribute('data-modal-trigger');
        const modal = document.getElementById(modalId);
        if (modal) {
          setTimeout(() => {
            const focusTarget = modal.querySelector('[data-focus-first], button, [tabindex="0"], a') || modal;
            if (focusTarget) {
              focusTarget.focus();
            }
          }, 50);
        }
      });
    });
    
    // Handle modal close - return focus to previous element
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
    modalCloseButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (lastFocusedElement) {
          setTimeout(() => {
            lastFocusedElement.focus();
          }, 50);
        }
      });
    });

    // Handle ESC key for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[aria-modal="true"]');
        if (openModals.length) {
          const closeBtn = openModals[0].querySelector('[data-modal-close]');
          if (closeBtn) {
            closeBtn.click();
          }
        }
      }
    });

    const markDecorativeIcons = () => {
      const svgIcons = document.querySelectorAll('svg:not([aria-label]):not([role="img"]):not([aria-hidden="false"])');
      svgIcons.forEach((icon) => {
        if (!icon.hasAttribute('aria-hidden')) {
          icon.setAttribute('aria-hidden', 'true');
        }
        icon.setAttribute('focusable', 'false');
      });

      const iIcons = document.querySelectorAll('i:not([aria-label]):not([role="img"]):not([aria-hidden="false"])');
      iIcons.forEach((icon) => {
        if (!icon.hasAttribute('aria-hidden')) {
          icon.setAttribute('aria-hidden', 'true');
        }
      });
    };

    markDecorativeIcons();
    const iconObserver = new MutationObserver(markDecorativeIcons);
    iconObserver.observe(document.body, { childList: true, subtree: true });
  });
<\/script>  <div id="accessibility-tools" class="fixed top-20 right-4 z-50 flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity" data-astro-cid-tt7q676p> <!-- High contrast mode toggle --> <button id="high-contrast-toggle" class="accessibility-button bg-gray-900 text-white p-2 rounded-full shadow-lg" aria-label="Toggle high contrast mode" title="Toggle high contrast mode" data-astro-cid-tt7q676p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-tt7q676p> <circle cx="12" cy="12" r="10" data-astro-cid-tt7q676p></circle> <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" data-astro-cid-tt7q676p></path> <path d="M12 6v12" data-astro-cid-tt7q676p></path> </svg> </button> <!-- Font size increase --> <button id="increase-font" class="accessibility-button bg-gray-900 text-white p-2 rounded-full shadow-lg" aria-label="Increase font size" title="Increase font size" data-astro-cid-tt7q676p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-tt7q676p> <polyline points="4 14 10 14 10 20" data-astro-cid-tt7q676p></polyline> <polyline points="14 10 14 4 20 4" data-astro-cid-tt7q676p></polyline> <line x1="14" y1="10" x2="21" y2="3" data-astro-cid-tt7q676p></line> <line x1="3" y1="21" x2="10" y2="14" data-astro-cid-tt7q676p></line> </svg> </button> <!-- Font size decrease --> <button id="decrease-font" class="accessibility-button bg-gray-900 text-white p-2 rounded-full shadow-lg" aria-label="Decrease font size" title="Decrease font size" data-astro-cid-tt7q676p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-tt7q676p> <polyline points="4 14 10 14 10 20" data-astro-cid-tt7q676p></polyline> <polyline points="14 10 14 4 20 4" data-astro-cid-tt7q676p></polyline> <line x1="14" y1="10" x2="21" y2="3" data-astro-cid-tt7q676p></line> <line x1="3" y1="21" x2="10" y2="14" data-astro-cid-tt7q676p></line> </svg> </button> <!-- Reduced motion toggle --> <button id="reduced-motion-toggle" class="accessibility-button bg-gray-900 text-white p-2 rounded-full shadow-lg" aria-label="Toggle reduced motion" title="Toggle reduced motion" data-astro-cid-tt7q676p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-tt7q676p> <path d="M5 12h14" data-astro-cid-tt7q676p></path> <path d="M12 5v14" data-astro-cid-tt7q676p></path> </svg> </button> </div> <div id="accessibility-announcement" role="status" aria-live="polite" class="sr-only" data-astro-cid-tt7q676p></div>  <script>
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize accessibility state from localStorage
    const highContrast = localStorage.getItem('highContrast') === 'true';
    const reducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const fontSize = localStorage.getItem('fontSize') || '100';
    
    // Apply saved settings
    if (highContrast) {
      document.body.classList.add('high-contrast');
    }
    
    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    }
    
    document.documentElement.style.fontSize = \\\`\\\${fontSize}%\\\`;
    
    // Set up event listeners
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const reducedMotionToggle = document.getElementById('reduced-motion-toggle');
    const announcement = document.getElementById('accessibility-announcement');
    
    if (highContrastToggle) {
      highContrastToggle.addEventListener('click', () => {
        const isHighContrast = document.body.classList.toggle('high-contrast');
        localStorage.setItem('highContrast', isHighContrast.toString());
        
        // Announce change
        if (announcement) {
          announcement.textContent = isHighContrast ? 
            'Alto contraste activado' : 
            'Alto contraste desactivado';
        }
      });
    }
    
    if (increaseFontBtn) {
      increaseFontBtn.addEventListener('click', () => {
        const currentSize = parseFloat(localStorage.getItem('fontSize') || '100');
        const newSize = Math.min(currentSize + 10, 150); // Max 150%
        document.documentElement.style.fontSize = \\\`\\\${newSize}%\\\`;
        localStorage.setItem('fontSize', newSize.toString());
        
        // Announce change
        if (announcement) {
          announcement.textContent = \\\`Tama\xF1o de texto aumentado a \\\${newSize}%\\\`;
        }
      });
    }
    
    if (decreaseFontBtn) {
      decreaseFontBtn.addEventListener('click', () => {
        const currentSize = parseFloat(localStorage.getItem('fontSize') || '100');
        const newSize = Math.max(currentSize - 10, 80); // Min 80%
        document.documentElement.style.fontSize = \\\`\\\${newSize}%\\\`;
        localStorage.setItem('fontSize', newSize.toString());
        
        // Announce change
        if (announcement) {
          announcement.textContent = \\\`Tama\xF1o de texto reducido a \\\${newSize}%\\\`;
        }
      });
    }
    
    if (reducedMotionToggle) {
      reducedMotionToggle.addEventListener('click', () => {
        const isReducedMotion = document.body.classList.toggle('reduced-motion');
        localStorage.setItem('reducedMotion', isReducedMotion.toString());
        
        // Announce change
        if (announcement) {
          announcement.textContent = isReducedMotion ? 
            'Movimiento reducido activado' : 
            'Movimiento reducido desactivado';
        }
      });
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Alt + H: Toggle high contrast
      if (e.altKey && e.key === 'h') {
        highContrastToggle?.click();
      }
      
      // Alt + Plus: Increase font size
      if (e.altKey && e.key === '+') {
        increaseFontBtn?.click();
      }
      
      // Alt + Minus: Decrease font size
      if (e.altKey && e.key === '-') {
        decreaseFontBtn?.click();
      }
      
      // Alt + M: Toggle reduced motion
      if (e.altKey && e.key === 'm') {
        reducedMotionToggle?.click();
      }
    });
    
    // Check for system preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && localStorage.getItem('reducedMotion') === null) {
      document.body.classList.add('reduced-motion');
      localStorage.setItem('reducedMotion', 'true');
    }
  });
<\/script>`])), maybeRenderHead());
}, "D:/MEGA/IzignaMx/izignamx/src/components/AccessibilityProvider.astro", void 0);
function generateLanguageUrl(baseUrl, languageCode, useQueryParam = true) {
  const url = new URL(baseUrl);
  if (useQueryParam) {
    if (languageCode === "es-MX") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", languageCode);
    }
  } else {
    if (languageCode !== "es-MX") {
      url.searchParams.set("lang", languageCode);
    }
  }
  return url.toString();
}
var __freeze$d = Object.freeze;
var __defProp$d = Object.defineProperty;
var __template$d = (cooked, raw) => __freeze$d(__defProp$d(cooked, "raw", { value: __freeze$d(cooked.slice()) }));
var _a$c;
const $$Astro$e = createAstro("https://izignamx.com");
const $$HeadMetaTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$HeadMetaTags;
  const {
    title,
    description,
    image = "/assets/img/social-share.jpg",
    canonicalURL = Astro2.url.href,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "IzignaMx",
    twitterUsername = "@izignamx",
    noindex = false,
    nofollow = false,
    keywords = "",
    locale = "es_MX",
    siteName = "IzignaMx"
  } = Astro2.props;
  const socialImageURL = new URL(image, Astro2.site || "https://izignamx.com").href;
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow"
  ].join(", ");
  const normalizeHreflang = (lang) => lang === "es-MX" ? "es-mx" : lang.toLowerCase();
  const hreflangBaseUrl = Astro2.url.href;
  const hreflangAlternates = [
    ...supportedLanguages.map((lang) => ({
      hreflang: normalizeHreflang(lang),
      href: generateLanguageUrl(hreflangBaseUrl, lang, true)
    })),
    { hreflang: "es", href: generateLanguageUrl(hreflangBaseUrl, "es-MX", true) },
    { hreflang: "x-default", href: generateLanguageUrl(hreflangBaseUrl, "es-MX", true) }
  ];
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : type === "product" ? "Product" : type === "profile" ? "Person" : "WebPage",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalURL
    },
    "headline": title,
    "description": description,
    "image": socialImageURL,
    ...type === "article" ? {
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "logo": {
          "@type": "ImageObject",
          "url": new URL("/assets/img/logo.png", Astro2.site || "https://izignamx.com").href
        }
      },
      ...publishedTime ? { "datePublished": publishedTime } : {},
      ...modifiedTime ? { "dateModified": modifiedTime } : {}
    } : {}
  };
  return renderTemplate(_a$c || (_a$c = __template$d(["<!-- SEO Optimizado --><title>", '</title><meta name="description"', ">", '<meta name="robots"', '><link rel="canonical"', ">", '<!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale"', '><meta property="og:site_name"', ">", "", "", '<!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:creator"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', '><!-- Schema.org / JSON-LD --><script type="application/ld+json">', '<\/script><!-- Metadatos adicionales para mejorar SEO --><meta name="author"', "><!-- Precargar fuentes cr\xEDticas -->", "<!-- Permitir espacio para metadatos adicionales -->", ""])), title, addAttribute(description, "content"), keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`, addAttribute(robotsContent, "content"), addAttribute(canonicalURL, "href"), hreflangAlternates.map(({ hreflang, href }) => renderTemplate`<link rel="alternate"${addAttribute(hreflang, "hreflang")}${addAttribute(href, "href")}>`), addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), addAttribute(locale, "content"), addAttribute(siteName, "content"), type === "article" && publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`, type === "article" && modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`, type === "article" && author && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`, addAttribute(twitterUsername, "content"), addAttribute(twitterUsername, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), addAttribute(`Imagen destacada para ${title}`, "content"), unescapeHTML(JSON.stringify(jsonLdSchema)), addAttribute(author, "content"), renderSlot($$result, $$slots["preload-fonts"]), renderSlot($$result, $$slots["default"]));
}, "D:/MEGA/IzignaMx/izignamx/src/components/HeadMetaTags.astro", void 0);
const $$Astro$d = createAstro("https://izignamx.com");
const $$ResourceHints = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ResourceHints;
  const {
    preconnect = [],
    preload = [],
    prefetch = [],
    dnsPrefetch = []
  } = Astro2.props;
  const defaultPreconnect = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com"
  ];
  const allPreconnect = [.../* @__PURE__ */ new Set([...defaultPreconnect, ...preconnect])];
  const sortedPreload = [...preload].sort((a, b) => {
    const order = { font: 1, style: 2, script: 3, image: 4, fetch: 5 };
    return (order[a.as] || 99) - (order[b.as] || 99);
  });
  return renderTemplate`${dnsPrefetch.map((domain) => renderTemplate`<link rel="dns-prefetch"${addAttribute(domain, "href")}>`)}${allPreconnect.map((domain) => renderTemplate`<link rel="preconnect"${addAttribute(domain, "href")} crossorigin>`)}${sortedPreload.map((resource) => renderTemplate`<link rel="preload"${addAttribute(resource.href, "href")}${addAttribute(resource.as, "as")}${addAttribute(resource.type, "type")}${addAttribute(resource.crossorigin ? "anonymous" : void 0, "crossorigin")}${addAttribute(resource.imagesizes, "imagesizes")}${addAttribute(resource.imagesrcset, "imagesrcset")}>`)}${prefetch.map((url) => renderTemplate`<link rel="prefetch"${addAttribute(url, "href")}>`)}`;
}, "D:/MEGA/IzignaMx/izignamx/src/components/ResourceHints.astro", void 0);
var __freeze$c = Object.freeze;
var __defProp$c = Object.defineProperty;
var __template$c = (cooked, raw) => __freeze$c(__defProp$c(cooked, "raw", { value: __freeze$c(cooked.slice()) }));
var _a$b, _c$4;
const $$Astro$c = createAstro("https://izignamx.com");
const $$PWASetup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$PWASetup;
  const {
    enableServiceWorker = true,
    enableOffline = true,
    cacheName = "izigna-cache",
    cacheVersion = "v1",
    cacheDuration = 30,
    // 30 días por defecto
    resourcesToPrecache = [
      "/",
      "/offline.html",
      "/assets/img/logo.png",
      "/assets/img/city-background-main.jpg"
    ],
    forceEnable = false
  } = Astro2.props;
  const lang = detectUserLanguage(Astro2);
  const tr = createTranslator(lang);
  const newVersionMsg = await tr("pwa.newVersionAvailable");
  const fullCacheName = `${cacheName}-${cacheVersion}`;
  const isDevelopment = false;
  const shouldEnableServiceWorker = enableServiceWorker && !isDevelopment;
  return renderTemplate(_c$4 || (_c$4 = __template$c(['<!-- Metaetiquetas para PWA --><meta name="application-name" content="IzignaMx"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="IzignaMx"><meta name="mobile-web-app-capable" content="yes"><!-- Enlace al Manifest --><link rel="manifest" href="/site.webmanifest"><!-- Script para registrar el Service Worker (solo en producci\xF3n) -->', "<!-- Mensaje de desarrollo para informar sobre ServiceWorker -->", "<!-- Script para facilitar la instalaci\xF3n en dispositivos m\xF3viles --><script>\n  // Prevent multiple initializations\n  if (typeof window.__PWA_SETUP_INITIALIZED__ === 'undefined') {\n    window.__PWA_SETUP_INITIALIZED__ = true;\n    \n    // Variable para controlar si ya se mostr\xF3 un prompt de instalaci\xF3n\n    let deferredPrompt;\n  \n  // Capturar el evento beforeinstallprompt para mostrar un bot\xF3n de instalaci\xF3n personalizado\n  window.addEventListener('beforeinstallprompt', (e) => {\n    // Prevenir que Chrome muestre el prompt autom\xE1ticamente\n    e.preventDefault();\n    // Guardar el evento para usarlo m\xE1s tarde\n    deferredPrompt = e;\n    \n    // Opcional: mostrar bot\xF3n de instalaci\xF3n personalizado\n    const installButton = document.getElementById('install-button');\n    if (installButton) {\n      installButton.style.display = 'flex';\n      \n      installButton.addEventListener('click', () => {\n        // Mostrar el prompt de instalaci\xF3n\n        deferredPrompt.prompt();\n        \n        // Esperar a que el usuario responda al prompt\n        deferredPrompt.userChoice.then((choiceResult) => {\n          if (choiceResult.outcome === 'accepted') {\n            // Usuario acept\xF3 la instalaci\xF3n\n            installButton.style.display = 'none';\n          }\n          deferredPrompt = null;\n        });\n      });\n    }\n  });\n  \n  // Detectar cuando la PWA se ha instalado con \xE9xito\n  window.addEventListener('appinstalled', () => {\n    // Ocultar bot\xF3n de instalaci\xF3n\n    const installButton = document.getElementById('install-button');\n    if (installButton) {\n      installButton.style.display = 'none';\n    }\n    \n    // Limpiar el prompt diferido\n    deferredPrompt = null;\n    \n    // Opcional: enviar evento de analytics\n    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {\n      window.gtag('event', 'pwa_install', {\n        'event_category': 'PWA',\n        'event_label': 'Installed PWA'\n      });\n    }\n    \n    // PWA instalada con \xE9xito\n  });\n\n  // Close the initialization guard\n  }\n<\/script><!-- Estilos espec\xEDficos para estado offline --><!-- Indicador de estado offline (opcional) -->", '<div class="offline-indicator"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"></path> </svg> <span data-i18n="pwa.offlineIndicator">Modo sin conexi\xF3n</span> </div> <!-- Bot\xF3n de instalaci\xF3n (opcional - se mostrar\xE1 autom\xE1ticamente cuando la PWA sea instalable) --> <button id="install-button"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M19 9l-7 7-7-7M12 16V4"></path> </svg> <span data-i18n="pwa.installButton">Instalar aplicaci\xF3n</span> </button>'])), shouldEnableServiceWorker && renderTemplate(_a$b || (_a$b = __template$c(["<script>(function(){", "\n    // Registrar Service Worker cuando la p\xE1gina haya cargado\n    if ('serviceWorker' in navigator) {\n      if (!window.isSecureContext) { return; }\n      window.addEventListener('load', async function() {\n        try {\n          // Verificar si estamos en desarrollo\n          if (isDevelopment) {\n            // ServiceWorker deshabilitado en modo desarrollo\n            return;\n          }\n          \n          // Registramos el service worker\n          const registration = await navigator.serviceWorker.register('/service-worker.js');\n          // Service Worker registrado con \xE9xito\n          \n          // Manejar actualizaciones\n          registration.addEventListener('updatefound', () => {\n            const newWorker = registration.installing;\n            if (newWorker) {\n              newWorker.addEventListener('statechange', () => {\n                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {\n                  // Notificar al usuario sobre una actualizaci\xF3n disponible\n                  if (confirm(newVersionMsg)) {\n                    window.location.reload();\n                  }\n                }\n              });\n            }\n          });\n        } catch (error) {\n          if (error && (error).name === 'InvalidStateError') { return; }\n          // No mostrar el error al usuario en producci\xF3n\n        }\n      });\n      \n      // Gestionar mensajes del Service Worker\n      navigator.serviceWorker.addEventListener('message', (event) => {\n        if (event.data && event.data.type === 'CACHE_UPDATED') {\n          // Contenido actualizado en cach\xE9\n        }\n      });\n      \n      \n      // Comprobar si hay una nueva versi\xF3n del service worker (solo en producci\xF3n)\n      const checkForUpdates = async () => {\n        if (isDevelopment) return;\n        \n        try {\n          const registration = await navigator.serviceWorker.getRegistration();\n          if (registration) {\n            await registration.update();\n          }\n        } catch (error) {\n          console.error('Error al buscar actualizaciones:', error);\n          // Silenciar errores de actualizaci\xF3n para evitar spam en consola\n        }\n      };\n      \n      // Comprobar actualizaciones peri\xF3dicamente (cada 4 horas) - solo en producci\xF3n\n      if (!isDevelopment) {\n        setInterval(checkForUpdates, 4 * 60 * 60 * 1000);\n        \n        // Si la p\xE1gina se vuelve visible, comprobar actualizaciones\n        document.addEventListener('visibilitychange', () => {\n          if (document.visibilityState === 'visible') {\n            checkForUpdates();\n          }\n        });\n      }\n      \n      // Manejar conexi\xF3n offline/online\n      window.addEventListener('online', () => {\n        document.documentElement.classList.remove('offline');\n        if (!isDevelopment) {\n          checkForUpdates();\n        }\n      });\n      \n      window.addEventListener('offline', () => {\n        document.documentElement.classList.add('offline');\n      });\n      \n      // A\xF1adir clase si est\xE1 offline al cargar\n      if (!navigator.onLine) {\n        document.documentElement.classList.add('offline');\n      }\n    }\n  })();<\/script>"])), defineScriptVars({
    enableOffline,
    fullCacheName,
    cacheDuration,
    resourcesToPrecache,
    isDevelopment,
    newVersionMsg
  })), isDevelopment, maybeRenderHead());
}, "D:/MEGA/IzignaMx/izignamx/src/components/PWASetup.astro", void 0);
var __freeze$b = Object.freeze;
var __defProp$b = Object.defineProperty;
var __template$b = (cooked, raw) => __freeze$b(__defProp$b(cooked, "raw", { value: __freeze$b(raw || cooked.slice()) }));
var _a$a;
const $$Astro$b = createAstro("https://izignamx.com");
const $$WebVitals = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$WebVitals;
  const {
    reportTo = "",
    debug = false,
    sendBeacon = true,
    includeParams = ["page", "ua", "size"]
  } = Astro2.props;
  return renderTemplate(_a$a || (_a$a = __template$b(["<script>(function(){", "\n(function() {\n  // Verificar compatibilidad con Performance API\n  if (!('PerformanceObserver' in window)) return;\n\n  // Verificar si ya est\xE1 inicializado\n  if (window.__WEB_VITALS_INITIALIZED__) return;\n  window.__WEB_VITALS_INITIALIZED__ = true;\n\n  // Valores para reportar\n  const metrics = {};\n  \n  // Funci\xF3n para enviar m\xE9tricas\n  const sendMetrics = (metric) => {\n    // Actualizar objeto de m\xE9tricas\n    metrics[metric.name] = metric.value;\n    \n    // Mostrar en consola si est\xE1 en modo debug\n    if (debug) {\n      // Web Vital metric recorded\n    }\n    \n    // Preparar datos para enviar\n    const payload = {\n      name: metric.name,\n      value: metric.value,\n      rating: metric.rating,\n      delta: metric.delta,\n      id: metric.id,\n      timestamp: Date.now()\n    };\n    \n    // A\xF1adir par\xE1metros adicionales\n    if (includeParams.includes('page')) {\n      payload.page = window.location.href;\n    }\n    if (includeParams.includes('ua')) {\n      payload.ua = navigator.userAgent;\n    }\n    if (includeParams.includes('size')) {\n      payload.size = `${window.innerWidth}x${window.innerHeight}`;\n    }\n    \n    // Enviar datos si hay una URL configurada\n    if (reportTo) {\n      try {\n        if (sendBeacon && navigator.sendBeacon) {\n          const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });\n          navigator.sendBeacon(reportTo, blob);\n        } else {\n          fetch(reportTo, {\n            method: 'POST',\n            body: JSON.stringify(payload),\n            headers: { 'Content-Type': 'application/json' },\n            keepalive: true\n          });\n        }\n      } catch (e) {\n        console.error('Error al reportar m\xE9tricas de Web Vitals:', e);\n      }\n    }\n  };\n  \n  // Funci\xF3n para determinar el rating de la m\xE9trica\n  const getRating = (name, value) => {\n    // Valores seg\xFAn https://web.dev/vitals/\n    if (name === 'CLS') {\n      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';\n    } else if (name === 'FID') {\n      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';\n    } else if (name === 'LCP') {\n      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';\n    } else if (name === 'FCP') {\n      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';\n    } else if (name === 'TTFB') {\n      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';\n    }\n    return 'unknown';\n  };\n  \n  // Funci\xF3n para procesar m\xE9tricas\n  const processMetric = (metric, name) => {\n    const actualName = name || metric.name;\n    \n    // Ajustar FCP y LCP de milisegundos a segundos para Google Analytics\n    let value = metric.value;\n    if (actualName === 'FCP' || actualName === 'LCP') {\n      value = Math.round(value);\n    } else if (actualName === 'CLS') {\n      value = metric.value.toFixed(4);\n    } else {\n      value = Math.round(value);\n    }\n    \n    const processedMetric = {\n      name: actualName,\n      value: value,\n      delta: Math.round(metric.delta),\n      id: metric.id,\n      rating: getRating(actualName, value)\n    };\n    \n    sendMetrics(processedMetric);\n  };\n  \n  // Capturar LCP (Largest Contentful Paint)\n  try {\n    new PerformanceObserver((entryList) => {\n      const entries = entryList.getEntries();\n      const lastEntry = entries[entries.length - 1];\n      processMetric({\n        name: 'LCP',\n        value: lastEntry.startTime,\n        delta: lastEntry.startTime,\n        id: lastEntry.id\n      });\n    }).observe({ type: 'largest-contentful-paint', buffered: true });\n  } catch {\n    // LCP measurement not supported\n  }\n  \n  // Capturar FID (First Input Delay)\n  try {\n    new PerformanceObserver((entryList) => {\n      const entries = entryList.getEntries();\n      entries.forEach((entry) => {\n        processMetric({\n          name: 'FID',\n          value: entry.processingStart - entry.startTime,\n          delta: entry.processingStart - entry.startTime,\n          id: entry.id\n        });\n      });\n    }).observe({ type: 'first-input', buffered: true });\n  } catch {\n    // FID measurement not supported\n  }\n  \n  // Capturar CLS (Cumulative Layout Shift)\n  if (\n    'PerformanceObserver' in window &&\n    PerformanceObserver.supportedEntryTypes &&\n    PerformanceObserver.supportedEntryTypes.includes('layout-shift')\n  ) {\n    try {\n      let clsValue = 0;\n      let clsEntries = [];\n      const observer = new PerformanceObserver((entryList) => {\n        const entries = entryList.getEntries();\n        entries.forEach((entry) => {\n          // Solo ignorar si no es usuario-initiated\n          if (!entry.hadRecentInput) {\n            clsValue += entry.value;\n            clsEntries.push(entry);\n          }\n        });\n        processMetric({\n          name: 'CLS',\n          value: clsValue,\n          delta: clsValue,\n          id: clsEntries.length > 0 ? clsEntries[0].id : ''\n        });\n      });\n      observer.observe({ type: 'layout-shift', buffered: true });\n    } catch {\n      // CLS measurement not supported\n    }\n  } else {\n    // Silenciar advertencia si no es soportado\n    // console.info('CLS measurement not supported: layout-shift entryType not available');\n  }\n  \n  // Capturar FCP (First Contentful Paint)\n  try {\n    new PerformanceObserver((entryList) => {\n      const entries = entryList.getEntries();\n      entries.forEach((entry) => {\n        processMetric({\n          name: 'FCP',\n          value: entry.startTime,\n          delta: entry.startTime,\n          id: entry.id\n        });\n      });\n    }).observe({ type: 'paint', buffered: true });\n  } catch {\n    // FCP measurement not supported\n  }\n  \n  // Medir TTFB (Time to First Byte)\n  try {\n    window.addEventListener('load', () => {\n      const navigationEntries = performance.getEntriesByType('navigation');\n      if (navigationEntries && navigationEntries.length > 0) {\n        const navEntry = navigationEntries[0];\n        processMetric({\n          name: 'TTFB',\n          value: navEntry.responseStart,\n          delta: navEntry.responseStart,\n          id: 'navigation-' + Date.now()\n        });\n      }\n    });\n  } catch {\n    // TTFB measurement not supported\n  }\n  \n  // Reportar todas las m\xE9tricas cuando la p\xE1gina se descarga \n  // (para asegurar que CLS final se reporte)\n  window.addEventListener('visibilitychange', () => {\n    if (document.visibilityState === 'hidden') {\n      // Forzar sincronizaci\xF3n de m\xE9tricas antes de que la p\xE1gina se cierre\n      if ('PerformanceObserver' in window && \n          PerformanceObserver.supportedEntryTypes && \n          PerformanceObserver.supportedEntryTypes.includes('layout-shift')) {\n        \n        // Forzar sincronizaci\xF3n final de CLS\n        const clsValue = metrics.CLS || 0;\n        if (clsValue > 0) {\n          const finalCLS = {\n            name: 'CLS-final',\n            value: clsValue,\n            delta: 0,\n            id: 'page-visibility-' + Date.now(),\n            rating: getRating('CLS', clsValue)\n          };\n          sendMetrics(finalCLS);\n        }\n      }\n    }\n  });\n})();\n})();<\/script>"], ["<script>(function(){", "\n(function() {\n  // Verificar compatibilidad con Performance API\n  if (!('PerformanceObserver' in window)) return;\n\n  // Verificar si ya est\xE1 inicializado\n  if (window.__WEB_VITALS_INITIALIZED__) return;\n  window.__WEB_VITALS_INITIALIZED__ = true;\n\n  // Valores para reportar\n  const metrics = {};\n  \n  // Funci\xF3n para enviar m\xE9tricas\n  const sendMetrics = (metric) => {\n    // Actualizar objeto de m\xE9tricas\n    metrics[metric.name] = metric.value;\n    \n    // Mostrar en consola si est\xE1 en modo debug\n    if (debug) {\n      // Web Vital metric recorded\n    }\n    \n    // Preparar datos para enviar\n    const payload = {\n      name: metric.name,\n      value: metric.value,\n      rating: metric.rating,\n      delta: metric.delta,\n      id: metric.id,\n      timestamp: Date.now()\n    };\n    \n    // A\xF1adir par\xE1metros adicionales\n    if (includeParams.includes('page')) {\n      payload.page = window.location.href;\n    }\n    if (includeParams.includes('ua')) {\n      payload.ua = navigator.userAgent;\n    }\n    if (includeParams.includes('size')) {\n      payload.size = \\`\\${window.innerWidth}x\\${window.innerHeight}\\`;\n    }\n    \n    // Enviar datos si hay una URL configurada\n    if (reportTo) {\n      try {\n        if (sendBeacon && navigator.sendBeacon) {\n          const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });\n          navigator.sendBeacon(reportTo, blob);\n        } else {\n          fetch(reportTo, {\n            method: 'POST',\n            body: JSON.stringify(payload),\n            headers: { 'Content-Type': 'application/json' },\n            keepalive: true\n          });\n        }\n      } catch (e) {\n        console.error('Error al reportar m\xE9tricas de Web Vitals:', e);\n      }\n    }\n  };\n  \n  // Funci\xF3n para determinar el rating de la m\xE9trica\n  const getRating = (name, value) => {\n    // Valores seg\xFAn https://web.dev/vitals/\n    if (name === 'CLS') {\n      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';\n    } else if (name === 'FID') {\n      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';\n    } else if (name === 'LCP') {\n      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';\n    } else if (name === 'FCP') {\n      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';\n    } else if (name === 'TTFB') {\n      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';\n    }\n    return 'unknown';\n  };\n  \n  // Funci\xF3n para procesar m\xE9tricas\n  const processMetric = (metric, name) => {\n    const actualName = name || metric.name;\n    \n    // Ajustar FCP y LCP de milisegundos a segundos para Google Analytics\n    let value = metric.value;\n    if (actualName === 'FCP' || actualName === 'LCP') {\n      value = Math.round(value);\n    } else if (actualName === 'CLS') {\n      value = metric.value.toFixed(4);\n    } else {\n      value = Math.round(value);\n    }\n    \n    const processedMetric = {\n      name: actualName,\n      value: value,\n      delta: Math.round(metric.delta),\n      id: metric.id,\n      rating: getRating(actualName, value)\n    };\n    \n    sendMetrics(processedMetric);\n  };\n  \n  // Capturar LCP (Largest Contentful Paint)\n  try {\n    new PerformanceObserver((entryList) => {\n      const entries = entryList.getEntries();\n      const lastEntry = entries[entries.length - 1];\n      processMetric({\n        name: 'LCP',\n        value: lastEntry.startTime,\n        delta: lastEntry.startTime,\n        id: lastEntry.id\n      });\n    }).observe({ type: 'largest-contentful-paint', buffered: true });\n  } catch {\n    // LCP measurement not supported\n  }\n  \n  // Capturar FID (First Input Delay)\n  try {\n    new PerformanceObserver((entryList) => {\n      const entries = entryList.getEntries();\n      entries.forEach((entry) => {\n        processMetric({\n          name: 'FID',\n          value: entry.processingStart - entry.startTime,\n          delta: entry.processingStart - entry.startTime,\n          id: entry.id\n        });\n      });\n    }).observe({ type: 'first-input', buffered: true });\n  } catch {\n    // FID measurement not supported\n  }\n  \n  // Capturar CLS (Cumulative Layout Shift)\n  if (\n    'PerformanceObserver' in window &&\n    PerformanceObserver.supportedEntryTypes &&\n    PerformanceObserver.supportedEntryTypes.includes('layout-shift')\n  ) {\n    try {\n      let clsValue = 0;\n      let clsEntries = [];\n      const observer = new PerformanceObserver((entryList) => {\n        const entries = entryList.getEntries();\n        entries.forEach((entry) => {\n          // Solo ignorar si no es usuario-initiated\n          if (!entry.hadRecentInput) {\n            clsValue += entry.value;\n            clsEntries.push(entry);\n          }\n        });\n        processMetric({\n          name: 'CLS',\n          value: clsValue,\n          delta: clsValue,\n          id: clsEntries.length > 0 ? clsEntries[0].id : ''\n        });\n      });\n      observer.observe({ type: 'layout-shift', buffered: true });\n    } catch {\n      // CLS measurement not supported\n    }\n  } else {\n    // Silenciar advertencia si no es soportado\n    // console.info('CLS measurement not supported: layout-shift entryType not available');\n  }\n  \n  // Capturar FCP (First Contentful Paint)\n  try {\n    new PerformanceObserver((entryList) => {\n      const entries = entryList.getEntries();\n      entries.forEach((entry) => {\n        processMetric({\n          name: 'FCP',\n          value: entry.startTime,\n          delta: entry.startTime,\n          id: entry.id\n        });\n      });\n    }).observe({ type: 'paint', buffered: true });\n  } catch {\n    // FCP measurement not supported\n  }\n  \n  // Medir TTFB (Time to First Byte)\n  try {\n    window.addEventListener('load', () => {\n      const navigationEntries = performance.getEntriesByType('navigation');\n      if (navigationEntries && navigationEntries.length > 0) {\n        const navEntry = navigationEntries[0];\n        processMetric({\n          name: 'TTFB',\n          value: navEntry.responseStart,\n          delta: navEntry.responseStart,\n          id: 'navigation-' + Date.now()\n        });\n      }\n    });\n  } catch {\n    // TTFB measurement not supported\n  }\n  \n  // Reportar todas las m\xE9tricas cuando la p\xE1gina se descarga \n  // (para asegurar que CLS final se reporte)\n  window.addEventListener('visibilitychange', () => {\n    if (document.visibilityState === 'hidden') {\n      // Forzar sincronizaci\xF3n de m\xE9tricas antes de que la p\xE1gina se cierre\n      if ('PerformanceObserver' in window && \n          PerformanceObserver.supportedEntryTypes && \n          PerformanceObserver.supportedEntryTypes.includes('layout-shift')) {\n        \n        // Forzar sincronizaci\xF3n final de CLS\n        const clsValue = metrics.CLS || 0;\n        if (clsValue > 0) {\n          const finalCLS = {\n            name: 'CLS-final',\n            value: clsValue,\n            delta: 0,\n            id: 'page-visibility-' + Date.now(),\n            rating: getRating('CLS', clsValue)\n          };\n          sendMetrics(finalCLS);\n        }\n      }\n    }\n  });\n})();\n})();<\/script>"])), defineScriptVars({ reportTo, debug, sendBeacon, includeParams }));
}, "D:/MEGA/IzignaMx/izignamx/src/components/WebVitals.astro", void 0);
var __freeze$a = Object.freeze;
var __defProp$a = Object.defineProperty;
var __template$a = (cooked, raw) => __freeze$a(__defProp$a(cooked, "raw", { value: __freeze$a(cooked.slice()) }));
var _a$9, _b$6;
const $$Astro$a = createAstro("https://izignamx.com");
const $$I18NScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$I18NScript;
  return renderTemplate(_b$6 || (_b$6 = __template$a(["", "<!-- Script adicional para modo desarrollo --><script>\n  if (!window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1')) {\n    console.log('\u{1F310} I18n: Modo producci\xF3n - dynamic-i18n.js habilitado');\n  } else {\n    console.log('\u{1F310} I18n: Modo desarrollo - dynamic-i18n.js habilitado para traducciones din\xE1micas');\n  }\n<\/script>"])), renderTemplate(_a$9 || (_a$9 = __template$a([`<script src="/js/dynamic-i18n.js" defer><\/script>
  <script>
    // Configuraci\xF3n para el script de i18n din\xE1mico
    window.I18N_CONFIG = {
      // Preferir la API de Astro en preview/producci\xF3n; el script har\xE1 fallback a PHP si es necesario
      apiBase: '/api/i18n',
      fallbackLanguage: 'es-MX',
      supportedLanguages: [
        'es-MX', 'en', 'fr', 'de', 'nl', 'ja', 'zh', 'hi', 'ar', 'pt',
        'fi', 'ru', 'tr', 'it', 'ko', 'pl', 'eo', 'la'
      ],
      debug: true
    };
    
    // Event listener para cuando el idioma cambie
    window.addEventListener('languageChanged', function(event) {
      console.log('\u{1F310} Language changed to:', event.detail.language);
      
      // Actualizar flag activa en selectores de idioma
      document.querySelectorAll('[data-language]').forEach(element => {
        const isActive = element.getAttribute('data-language') === event.detail.language;
        element.classList.toggle('active', isActive);
        element.classList.toggle('bg-izigna-primary', isActive);
        element.classList.toggle('text-white', isActive);
      });
    });
  <\/script>`]))));
}, "D:/MEGA/IzignaMx/izignamx/src/components/I18nScript.astro", void 0);
var __freeze$9 = Object.freeze;
var __defProp$9 = Object.defineProperty;
var __template$9 = (cooked, raw) => __freeze$9(__defProp$9(cooked, "raw", { value: __freeze$9(raw || cooked.slice()) }));
var _a$8, _b$5, _c$3;
const $$Astro$9 = createAstro("https://izignamx.com");
const $$AnalyticsService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AnalyticsService;
  const {
    measurementId = "G-VK8WB5LG4E",
    // Replace with actual GA4 ID in production
    debug = false,
    consentNeeded = true,
    respectDoNotTrack = true,
    anonymizeIP = true,
    disableAds = false
  } = Astro2.props;
  const dntEnabled = respectDoNotTrack && (typeof navigator !== "undefined" && (navigator.doNotTrack === "1" || navigator.doNotTrack === "yes" || // Using optional chaining and type cast for non-standard properties
  navigator?.msDoNotTrack === "1" || navigator?.msDoNotTrack === "1" || typeof window !== "undefined" && window?.doNotTrack === "1"));
  const skipAnalytics = dntEnabled;
  const isLocalhost = Astro2.url.hostname === "localhost" || Astro2.url.hostname === "127.0.0.1";
  return renderTemplate`${!skipAnalytics && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-msxkario": true }, { "default": ($$result2) => renderTemplate(_c$3 || (_c$3 = __template$9(["<script>(function(){", "\n      // Initialize dataLayer\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        window.dataLayer.push(arguments);\n      }\n\n      // Initial configuration (privacy-focused)\n      gtag('consent', 'default', {\n        'ad_storage': consentNeeded ? 'denied' : 'granted',\n        'analytics_storage': consentNeeded ? 'denied' : 'granted',\n        'functionality_storage': 'granted', // Required for basic functionality\n        'personalization_storage': consentNeeded ? 'denied' : 'granted',\n        'security_storage': 'granted', // Required for security\n      });\n\n      // Configure GA4\n      gtag('js', new Date());\n      gtag('config', measurementId, {\n        debug_mode: debug,\n        anonymize_ip: anonymizeIP,\n        allow_google_signals: !disableAds,\n        allow_ad_personalization_signals: !disableAds,\n        send_page_view: true\n      });\n\n      // Cookie consent handler function (to be called when consent is given)\n      window.grantAnalyticsConsent = function() {\n        gtag('consent', 'update', {\n          'ad_storage': 'granted',\n          'analytics_storage': 'granted',\n          'personalization_storage': 'granted'\n        });\n        \n        if (debug) {\n          // Analytics consent granted\n        }\n      };\n      \n      // Unified consent API\n      (function(){\n        function checkDoNotTrack(){\n          try {\n            return (\n              navigator.doNotTrack === '1' ||\n              navigator.doNotTrack === 'yes' ||\n              (navigator).msDoNotTrack === '1' ||\n              (window).doNotTrack === '1'\n            );\n          } catch (_) { return false; }\n        }\n        function hasConsent(){\n          try {\n            const cookieVal = document.cookie\n              .split('; ')\n              .find(row => row.startsWith('analytics-consent='))\n              ?.split('=')[1];\n            const ls = localStorage.getItem('cookie-consent');\n            return cookieVal === 'true' || cookieVal === 'granted' || ls === 'full';\n          } catch(_) { return false; }\n        }\n        function grantConsent(){\n          try {\n            document.cookie = 'analytics-consent=true; path=/; max-age=31536000; SameSite=Lax';\n          } catch(_) { void 0; }\n          if (typeof window.grantAnalyticsConsent === 'function') {\n            window.grantAnalyticsConsent();\n          }\n        }\n        function revokeConsent(){\n          try {\n            document.cookie = 'analytics-consent=false; path=/; max-age=31536000; SameSite=Lax';\n          } catch(_) { void 0; }\n          gtag('consent', 'update', {\n            'ad_storage': 'denied',\n            'analytics_storage': 'denied',\n            'personalization_storage': 'denied'\n          });\n        }\n        window.AnalyticsService = window.AnalyticsService || {};\n        window.AnalyticsService.grantConsent = grantConsent;\n        window.AnalyticsService.revokeConsent = revokeConsent;\n        window.AnalyticsService.hasConsent = hasConsent;\n        window.AnalyticsService.checkDoNotTrack = checkDoNotTrack;\n      })();\n      \n      // Web Vitals reporting to GA4\n      window.webVitalsToGA = function(metric) {\n        // Send events to GA4\n        gtag('event', 'web_vitals', {\n          event_category: 'Web Vitals',\n          event_label: metric.id,\n          value: Math.round(metric.value * 1000),\n          metric_id: metric.id,\n          metric_name: metric.name,\n          metric_value: metric.value,\n          metric_rating: metric.rating,\n          non_interaction: true,\n        });\n      };\n    })();<\/script>", "", "", `<div id="cookie-consent" class="hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 z-50 shadow-lg" data-astro-cid-msxkario><div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4" data-astro-cid-msxkario><div data-astro-cid-msxkario><p class="text-sm" data-astro-cid-msxkario><span data-i18n="cookies.message" data-astro-cid-msxkario>Este sitio utiliza cookies para mejorar su experiencia.</span><a href="/privacy" class="underline hover:text-blue-200 text-blue-300" data-i18n="cookies.privacyPolicy" data-astro-cid-msxkario>Pol\xEDtica de Privacidad</a>.</p></div><div class="flex gap-2" data-astro-cid-msxkario><button id="cookie-consent-accept" class="px-4 py-2 bg-green-700 hover:bg-green-800 rounded text-sm font-medium transition text-white" style="min-height: 44px; padding: 12px 16px;" data-i18n="cookies.acceptAll" data-astro-cid-msxkario>
Aceptar todas
</button><button id="cookie-consent-necessary" class="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm font-medium transition text-white" style="min-height: 44px; padding: 12px 16px;" data-i18n="cookies.necessaryOnly" data-astro-cid-msxkario>
Solo necesarias
</button></div></div></div><script>
      document.addEventListener('DOMContentLoaded', function() {
        const consentBanner = document.getElementById('cookie-consent');
        const ls = localStorage.getItem('cookie-consent');
        const cookieHas = document.cookie.includes('analytics-consent=');
        const hasFull = ls === 'full' || document.cookie.includes('analytics-consent=true') || document.cookie.includes('analytics-consent=granted');

        if (!cookieHas && ls !== 'full' && consentBanner) {
          setTimeout(() => {
            consentBanner.classList.remove('hidden');
          }, 1000);

          const accept = document.getElementById('cookie-consent-accept');
          const necessary = document.getElementById('cookie-consent-necessary');
          if (accept) accept.addEventListener('click', function() {
            try { localStorage.setItem('cookie-consent', 'full'); } catch(_) { void 0; }
            try { document.cookie = 'analytics-consent=true; path=/; max-age=31536000; SameSite=Lax'; } catch(_) { void 0; }
            consentBanner.classList.add('hidden');
            if (window.AnalyticsService && typeof window.AnalyticsService.grantConsent === 'function') {
              window.AnalyticsService.grantConsent();
            } else if (typeof window.grantAnalyticsConsent === 'function') {
              window.grantAnalyticsConsent();
            }
          });
          if (necessary) necessary.addEventListener('click', function() {
            try { localStorage.setItem('cookie-consent', 'necessary'); } catch(_) { void 0; }
            try { document.cookie = 'analytics-consent=false; path=/; max-age=31536000; SameSite=Lax'; } catch(_) { void 0; }
            consentBanner.classList.add('hidden');
            if (window.AnalyticsService && typeof window.AnalyticsService.revokeConsent === 'function') {
              window.AnalyticsService.revokeConsent();
            }
          });
        } else if (hasFull) {
          if (window.AnalyticsService && typeof window.AnalyticsService.grantConsent === 'function') {
            window.AnalyticsService.grantConsent();
          } else if (typeof window.grantAnalyticsConsent === 'function') {
            window.grantAnalyticsConsent();
          }
        }
      });
    <\/script>`])), defineScriptVars({ measurementId, debug, consentNeeded, anonymizeIP, disableAds }), !isLocalhost && renderTemplate(_a$8 || (_a$8 = __template$9(["<script async", "><\/script>"])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`, "src")), renderTemplate(_b$5 || (_b$5 = __template$9(["<script>\n        // Initialize Web Vitals tracking\n        document.addEventListener('DOMContentLoaded', function() {\n          // Import web-vitals.js when it's needed\n          const script = document.createElement('script');\n          script.src = 'https://unpkg.com/web-vitals/dist/web-vitals.attribution.iife.js';\n          script.async = true;\n          script.onload = function() {\n            // When the script loads, initialize metrics\n            if (typeof window !== 'undefined' && typeof window.webVitals !== 'undefined') {\n              const reportVitals = (metric) => {\n                // Report to GA4 if available\n                if (typeof window.webVitalsToGA === 'function') {\n                  window.webVitalsToGA(metric);\n                }\n              };\n              \n              // Capture Core Web Vitals \u2013 support v3 (`onCLS`) and v2 (`getCLS`)\n              const webVitals = window.webVitals;\n              const vitalsMap = {\n                CLS: webVitals.getCLS || webVitals.onCLS,\n                FID: webVitals.getFID || webVitals.onFID,\n                LCP: webVitals.getLCP || webVitals.onLCP,\n                FCP: webVitals.getFCP || webVitals.onFCP,\n                TTFB: webVitals.getTTFB || webVitals.onTTFB,\n              };\n\n              Object.values(vitalsMap).forEach(fn => {\n                if (typeof fn === 'function') {\n                  fn(reportVitals);\n                }\n              });\n            }\n          };\n          document.body.appendChild(script);\n        });\n      <\/script>"], ["<script>\n        // Initialize Web Vitals tracking\n        document.addEventListener('DOMContentLoaded', function() {\n          // Import web-vitals.js when it's needed\n          const script = document.createElement('script');\n          script.src = 'https://unpkg.com/web-vitals/dist/web-vitals.attribution.iife.js';\n          script.async = true;\n          script.onload = function() {\n            // When the script loads, initialize metrics\n            if (typeof window !== 'undefined' && typeof window.webVitals !== 'undefined') {\n              const reportVitals = (metric) => {\n                // Report to GA4 if available\n                if (typeof window.webVitalsToGA === 'function') {\n                  window.webVitalsToGA(metric);\n                }\n              };\n              \n              // Capture Core Web Vitals \u2013 support v3 (\\`onCLS\\`) and v2 (\\`getCLS\\`)\n              const webVitals = window.webVitals;\n              const vitalsMap = {\n                CLS: webVitals.getCLS || webVitals.onCLS,\n                FID: webVitals.getFID || webVitals.onFID,\n                LCP: webVitals.getLCP || webVitals.onLCP,\n                FCP: webVitals.getFCP || webVitals.onFCP,\n                TTFB: webVitals.getTTFB || webVitals.onTTFB,\n              };\n\n              Object.values(vitalsMap).forEach(fn => {\n                if (typeof fn === 'function') {\n                  fn(reportVitals);\n                }\n              });\n            }\n          };\n          document.body.appendChild(script);\n        });\n      <\/script>"]))), maybeRenderHead()) })}`}`;
}, "D:/MEGA/IzignaMx/izignamx/src/components/AnalyticsService.astro", void 0);
var __freeze$8 = Object.freeze;
var __defProp$8 = Object.defineProperty;
var __template$8 = (cooked, raw) => __freeze$8(__defProp$8(cooked, "raw", { value: __freeze$8(raw || cooked.slice()) }));
var _a$7;
const $$Astro$8 = createAstro("https://izignamx.com");
const $$StaticAnalyticsService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$StaticAnalyticsService;
  const {
    measurementId = "G-VK8WB5LG4E",
    debug = false,
    consentNeeded = true,
    respectDoNotTrack = true,
    anonymizeIP = true,
    disableAds = false
  } = Astro2.props;
  return renderTemplate(_a$7 || (_a$7 = __template$8(["<!-- Google Analytics 4 - Carga condicional --><script>(function(){", '\n  (function () {\n    "use strict";\n\n    // Funci\xF3n para verificar Do Not Track del lado del cliente\n    function checkDoNotTrack() {\n      if (!respectDoNotTrack) return false;\n\n      return (\n        navigator.doNotTrack === "1" ||\n        navigator.doNotTrack === "yes" ||\n        navigator.msDoNotTrack === "1" ||\n        window.doNotTrack === "1"\n      );\n    }\n\n    // Funci\xF3n para verificar consentimiento\n    function hasConsent() {\n      if (!consentNeeded) return true;\n      const consent = document.cookie\n        .split("; ")\n        .find((row) => row.startsWith("analytics-consent="))\n        ?.split("=")[1];\n      const ls = (() => {\n        try {\n          return localStorage.getItem("cookie-consent");\n        } catch (_) {\n          return null;\n        }\n      })();\n      return consent === "true" || consent === "granted" || ls === "full";\n    }\n\n    // Funci\xF3n para inicializar Analytics\n    function initializeAnalytics() {\n      if (checkDoNotTrack()) {\n        if (debug) {\n          console.log(\n            "\u{1F6AB} Analytics: Do Not Track detectado, omitiendo tracking",\n          );\n        }\n        return;\n      }\n\n      // Cargar Google Analytics\n      const script = document.createElement("script");\n      script.async = true;\n      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;\n      document.head.appendChild(script);\n\n      // Configurar gtag\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        window.dataLayer.push(arguments);\n      }\n      window.gtag = gtag;\n      gtag("consent", "default", {\n        ad_storage: consentNeeded ? "denied" : "granted",\n        analytics_storage: consentNeeded ? "denied" : "granted",\n        functionality_storage: "granted",\n        personalization_storage: consentNeeded ? "denied" : "granted",\n        security_storage: "granted",\n      });\n\n      gtag("js", new Date());\n\n      // Configuraci\xF3n de GA4\n      const config = {\n        anonymize_ip: anonymizeIP,\n        allow_google_signals: !disableAds,\n        allow_ad_personalization_signals: !disableAds,\n        cookie_flags: "SameSite=Lax;Secure",\n        cookie_expires: 63072000, // 2 a\xF1os\n        send_page_view: true,\n      };\n\n      if (debug) {\n        config.debug_mode = true;\n        console.log("\u{1F50D} Analytics: Modo debug habilitado");\n      }\n\n      gtag("config", measurementId, config);\n\n      if (debug) {\n        console.log("\u2705 Analytics: Google Analytics 4 inicializado");\n      }\n\n      // Inicializar Web Vitals\n      initializeWebVitals();\n    }\n\n    // Funci\xF3n para Web Vitals\n    function initializeWebVitals() {\n      // Implementaci\xF3n b\xE1sica de Web Vitals sin dependencias externas\n      function sendWebVital(name, value, id) {\n        if (\n          typeof window !== "undefined" &&\n          typeof window.gtag === "function"\n        ) {\n          window.gtag("event", name, {\n            event_category: "Web Vitals",\n            event_label: id,\n            value: Math.round(name === "CLS" ? value * 1000 : value),\n            non_interaction: true,\n          });\n\n          if (debug) {\n            console.log(`\u{1F4CA} Web Vital: ${name} = ${value} (${id})`);\n          }\n        }\n      }\n\n      // Largest Contentful Paint (LCP)\n      if ("PerformanceObserver" in window) {\n        try {\n          const lcpObserver = new PerformanceObserver((list) => {\n            const entries = list.getEntries();\n            const lastEntry = entries[entries.length - 1];\n            sendWebVital("LCP", lastEntry.startTime, lastEntry.id || "unknown");\n          });\n          lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });\n        } catch (e) {\n          if (debug) console.warn("\u26A0\uFE0F LCP observer error:", e);\n        }\n\n        // First Input Delay (FID)\n        try {\n          const fidObserver = new PerformanceObserver((list) => {\n            const entries = list.getEntries();\n            entries.forEach((entry) => {\n              sendWebVital(\n                "FID",\n                entry.processingStart - entry.startTime,\n                entry.name,\n              );\n            });\n          });\n          fidObserver.observe({ entryTypes: ["first-input"] });\n        } catch (e) {\n          if (debug) console.warn("\u26A0\uFE0F FID observer error:", e);\n        }\n\n        // Cumulative Layout Shift (CLS)\n        try {\n          let clsValue = 0;\n          const clsObserver = new PerformanceObserver((list) => {\n            const entries = list.getEntries();\n            entries.forEach((entry) => {\n              if (!entry.hadRecentInput) {\n                clsValue += entry.value;\n              }\n            });\n          });\n          clsObserver.observe({ entryTypes: ["layout-shift"] });\n\n          // Enviar CLS al salir de la p\xE1gina\n          window.addEventListener("beforeunload", () => {\n            sendWebVital("CLS", clsValue, "page-unload");\n          });\n        } catch (e) {\n          if (debug) console.warn("\u26A0\uFE0F CLS observer error:", e);\n        }\n      }\n\n      // First Contentful Paint (FCP)\n      if ("performance" in window && "getEntriesByType" in performance) {\n        window.addEventListener("load", () => {\n          setTimeout(() => {\n            const paintEntries = performance.getEntriesByType("paint");\n            const fcpEntry = paintEntries.find(\n              (entry) => entry.name === "first-contentful-paint",\n            );\n            if (fcpEntry) {\n              sendWebVital("FCP", fcpEntry.startTime, "page-load");\n            }\n          }, 0);\n        });\n      }\n    }\n\n    // Funci\xF3n para otorgar consentimiento\n    function grantConsent() {\n      try {\n        localStorage.setItem("cookie-consent", "full");\n      } catch (_) {\n        void 0;\n      }\n      document.cookie =\n        "analytics-consent=true; path=/; max-age=31536000; SameSite=Lax";\n      if (typeof window.gtag === "function") {\n        window.gtag("consent", "update", {\n          ad_storage: "granted",\n          analytics_storage: "granted",\n          personalization_storage: "granted",\n        });\n      }\n      if (debug) {\n        console.log("\u2705 Analytics: Consentimiento otorgado");\n      }\n    }\n\n    // Funci\xF3n para revocar consentimiento\n    function revokeConsent() {\n      try {\n        localStorage.setItem("cookie-consent", "necessary");\n      } catch (_) {\n        void 0;\n      }\n      document.cookie =\n        "analytics-consent=false; path=/; max-age=31536000; SameSite=Lax";\n      const gaCookies = document.cookie\n        .split(";")\n        .filter(\n          (cookie) =>\n            cookie.trim().startsWith("_ga") || cookie.trim().startsWith("_gid"),\n        );\n      gaCookies.forEach((cookie) => {\n        const cookieName = cookie.split("=")[0].trim();\n        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;\n      });\n      if (typeof window.gtag === "function") {\n        window.gtag("consent", "update", {\n          ad_storage: "denied",\n          analytics_storage: "denied",\n          personalization_storage: "denied",\n        });\n      }\n      if (debug) {\n        console.log("\u{1F6AB} Analytics: Consentimiento revocado");\n      }\n    }\n\n    // Exponer funciones globalmente\n    window.AnalyticsService = {\n      grantConsent,\n      revokeConsent,\n      hasConsent,\n      checkDoNotTrack,\n    };\n\n    // Auto-inicializaci\xF3n\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", initializeAnalytics);\n    } else {\n      initializeAnalytics();\n    }\n\n    // Re-inicializar en navegaci\xF3n SPA\n    document.addEventListener("astro:page-load", initializeAnalytics);\n  })();\n})();<\/script> <!-- Noscript fallback para tracking b\xE1sico -->', "<noscript><img", ' width="1" height="1" style="display:none" alt="" role="presentation"></noscript><!-- Estilos para banner de consentimiento (opcional) --><style>\n  .analytics-consent-banner {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.9);\n    color: white;\n    padding: 1rem;\n    z-index: 10000;\n    display: none;\n  }\n\n  .analytics-consent-banner.show {\n    display: block;\n  }\n\n  .analytics-consent-banner button {\n    background: #1d4ed8;\n    color: white;\n    border: none;\n    padding: 0.5rem 1rem;\n    margin: 0 0.5rem;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n\n  .analytics-consent-banner button:hover {\n    background: #1e40af;\n  }\n</style><!-- Banner de consentimiento (si est\xE1 habilitado) -->', "<script>(function(){", '\n  // Mostrar banner de consentimiento si es necesario\n  if (consentNeeded && typeof window !== "undefined") {\n    document.addEventListener("DOMContentLoaded", function () {\n      const banner = document.getElementById("analytics-consent-banner");\n      const hasConsent = document.cookie.includes("analytics-consent=");\n\n      if (!hasConsent && banner) {\n        setTimeout(() => {\n          banner.classList.add("show");\n        }, 2000); // Mostrar despu\xE9s de 2 segundos\n      }\n    });\n  }\n})();<\/script>'], ["<!-- Google Analytics 4 - Carga condicional --><script>(function(){", '\n  (function () {\n    "use strict";\n\n    // Funci\xF3n para verificar Do Not Track del lado del cliente\n    function checkDoNotTrack() {\n      if (!respectDoNotTrack) return false;\n\n      return (\n        navigator.doNotTrack === "1" ||\n        navigator.doNotTrack === "yes" ||\n        navigator.msDoNotTrack === "1" ||\n        window.doNotTrack === "1"\n      );\n    }\n\n    // Funci\xF3n para verificar consentimiento\n    function hasConsent() {\n      if (!consentNeeded) return true;\n      const consent = document.cookie\n        .split("; ")\n        .find((row) => row.startsWith("analytics-consent="))\n        ?.split("=")[1];\n      const ls = (() => {\n        try {\n          return localStorage.getItem("cookie-consent");\n        } catch (_) {\n          return null;\n        }\n      })();\n      return consent === "true" || consent === "granted" || ls === "full";\n    }\n\n    // Funci\xF3n para inicializar Analytics\n    function initializeAnalytics() {\n      if (checkDoNotTrack()) {\n        if (debug) {\n          console.log(\n            "\u{1F6AB} Analytics: Do Not Track detectado, omitiendo tracking",\n          );\n        }\n        return;\n      }\n\n      // Cargar Google Analytics\n      const script = document.createElement("script");\n      script.async = true;\n      script.src = \\`https://www.googletagmanager.com/gtag/js?id=\\${measurementId}\\`;\n      document.head.appendChild(script);\n\n      // Configurar gtag\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        window.dataLayer.push(arguments);\n      }\n      window.gtag = gtag;\n      gtag("consent", "default", {\n        ad_storage: consentNeeded ? "denied" : "granted",\n        analytics_storage: consentNeeded ? "denied" : "granted",\n        functionality_storage: "granted",\n        personalization_storage: consentNeeded ? "denied" : "granted",\n        security_storage: "granted",\n      });\n\n      gtag("js", new Date());\n\n      // Configuraci\xF3n de GA4\n      const config = {\n        anonymize_ip: anonymizeIP,\n        allow_google_signals: !disableAds,\n        allow_ad_personalization_signals: !disableAds,\n        cookie_flags: "SameSite=Lax;Secure",\n        cookie_expires: 63072000, // 2 a\xF1os\n        send_page_view: true,\n      };\n\n      if (debug) {\n        config.debug_mode = true;\n        console.log("\u{1F50D} Analytics: Modo debug habilitado");\n      }\n\n      gtag("config", measurementId, config);\n\n      if (debug) {\n        console.log("\u2705 Analytics: Google Analytics 4 inicializado");\n      }\n\n      // Inicializar Web Vitals\n      initializeWebVitals();\n    }\n\n    // Funci\xF3n para Web Vitals\n    function initializeWebVitals() {\n      // Implementaci\xF3n b\xE1sica de Web Vitals sin dependencias externas\n      function sendWebVital(name, value, id) {\n        if (\n          typeof window !== "undefined" &&\n          typeof window.gtag === "function"\n        ) {\n          window.gtag("event", name, {\n            event_category: "Web Vitals",\n            event_label: id,\n            value: Math.round(name === "CLS" ? value * 1000 : value),\n            non_interaction: true,\n          });\n\n          if (debug) {\n            console.log(\\`\u{1F4CA} Web Vital: \\${name} = \\${value} (\\${id})\\`);\n          }\n        }\n      }\n\n      // Largest Contentful Paint (LCP)\n      if ("PerformanceObserver" in window) {\n        try {\n          const lcpObserver = new PerformanceObserver((list) => {\n            const entries = list.getEntries();\n            const lastEntry = entries[entries.length - 1];\n            sendWebVital("LCP", lastEntry.startTime, lastEntry.id || "unknown");\n          });\n          lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });\n        } catch (e) {\n          if (debug) console.warn("\u26A0\uFE0F LCP observer error:", e);\n        }\n\n        // First Input Delay (FID)\n        try {\n          const fidObserver = new PerformanceObserver((list) => {\n            const entries = list.getEntries();\n            entries.forEach((entry) => {\n              sendWebVital(\n                "FID",\n                entry.processingStart - entry.startTime,\n                entry.name,\n              );\n            });\n          });\n          fidObserver.observe({ entryTypes: ["first-input"] });\n        } catch (e) {\n          if (debug) console.warn("\u26A0\uFE0F FID observer error:", e);\n        }\n\n        // Cumulative Layout Shift (CLS)\n        try {\n          let clsValue = 0;\n          const clsObserver = new PerformanceObserver((list) => {\n            const entries = list.getEntries();\n            entries.forEach((entry) => {\n              if (!entry.hadRecentInput) {\n                clsValue += entry.value;\n              }\n            });\n          });\n          clsObserver.observe({ entryTypes: ["layout-shift"] });\n\n          // Enviar CLS al salir de la p\xE1gina\n          window.addEventListener("beforeunload", () => {\n            sendWebVital("CLS", clsValue, "page-unload");\n          });\n        } catch (e) {\n          if (debug) console.warn("\u26A0\uFE0F CLS observer error:", e);\n        }\n      }\n\n      // First Contentful Paint (FCP)\n      if ("performance" in window && "getEntriesByType" in performance) {\n        window.addEventListener("load", () => {\n          setTimeout(() => {\n            const paintEntries = performance.getEntriesByType("paint");\n            const fcpEntry = paintEntries.find(\n              (entry) => entry.name === "first-contentful-paint",\n            );\n            if (fcpEntry) {\n              sendWebVital("FCP", fcpEntry.startTime, "page-load");\n            }\n          }, 0);\n        });\n      }\n    }\n\n    // Funci\xF3n para otorgar consentimiento\n    function grantConsent() {\n      try {\n        localStorage.setItem("cookie-consent", "full");\n      } catch (_) {\n        void 0;\n      }\n      document.cookie =\n        "analytics-consent=true; path=/; max-age=31536000; SameSite=Lax";\n      if (typeof window.gtag === "function") {\n        window.gtag("consent", "update", {\n          ad_storage: "granted",\n          analytics_storage: "granted",\n          personalization_storage: "granted",\n        });\n      }\n      if (debug) {\n        console.log("\u2705 Analytics: Consentimiento otorgado");\n      }\n    }\n\n    // Funci\xF3n para revocar consentimiento\n    function revokeConsent() {\n      try {\n        localStorage.setItem("cookie-consent", "necessary");\n      } catch (_) {\n        void 0;\n      }\n      document.cookie =\n        "analytics-consent=false; path=/; max-age=31536000; SameSite=Lax";\n      const gaCookies = document.cookie\n        .split(";")\n        .filter(\n          (cookie) =>\n            cookie.trim().startsWith("_ga") || cookie.trim().startsWith("_gid"),\n        );\n      gaCookies.forEach((cookie) => {\n        const cookieName = cookie.split("=")[0].trim();\n        document.cookie = \\`\\${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\\`;\n      });\n      if (typeof window.gtag === "function") {\n        window.gtag("consent", "update", {\n          ad_storage: "denied",\n          analytics_storage: "denied",\n          personalization_storage: "denied",\n        });\n      }\n      if (debug) {\n        console.log("\u{1F6AB} Analytics: Consentimiento revocado");\n      }\n    }\n\n    // Exponer funciones globalmente\n    window.AnalyticsService = {\n      grantConsent,\n      revokeConsent,\n      hasConsent,\n      checkDoNotTrack,\n    };\n\n    // Auto-inicializaci\xF3n\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", initializeAnalytics);\n    } else {\n      initializeAnalytics();\n    }\n\n    // Re-inicializar en navegaci\xF3n SPA\n    document.addEventListener("astro:page-load", initializeAnalytics);\n  })();\n})();<\/script> <!-- Noscript fallback para tracking b\xE1sico -->', "<noscript><img", ' width="1" height="1" style="display:none" alt="" role="presentation"></noscript><!-- Estilos para banner de consentimiento (opcional) --><style>\n  .analytics-consent-banner {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.9);\n    color: white;\n    padding: 1rem;\n    z-index: 10000;\n    display: none;\n  }\n\n  .analytics-consent-banner.show {\n    display: block;\n  }\n\n  .analytics-consent-banner button {\n    background: #1d4ed8;\n    color: white;\n    border: none;\n    padding: 0.5rem 1rem;\n    margin: 0 0.5rem;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n\n  .analytics-consent-banner button:hover {\n    background: #1e40af;\n  }\n</style><!-- Banner de consentimiento (si est\xE1 habilitado) -->', "<script>(function(){", '\n  // Mostrar banner de consentimiento si es necesario\n  if (consentNeeded && typeof window !== "undefined") {\n    document.addEventListener("DOMContentLoaded", function () {\n      const banner = document.getElementById("analytics-consent-banner");\n      const hasConsent = document.cookie.includes("analytics-consent=");\n\n      if (!hasConsent && banner) {\n        setTimeout(() => {\n          banner.classList.add("show");\n        }, 2000); // Mostrar despu\xE9s de 2 segundos\n      }\n    });\n  }\n})();<\/script>'])), defineScriptVars({
    measurementId,
    debug,
    consentNeeded,
    respectDoNotTrack,
    anonymizeIP,
    disableAds
  }), maybeRenderHead(), addAttribute(`https://www.google-analytics.com/collect?v=1&tid=${measurementId}&cid=555&t=pageview&dp=${encodeURIComponent(Astro2.url.pathname)}`, "src"), consentNeeded && renderTemplate`<div id="analytics-consent-banner" class="analytics-consent-banner"><div class="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"><p class="text-sm"><span data-i18n="cookies.message">
Utilizamos cookies y analíticas para mejorar tu experiencia.
</span>
&nbsp;
<a href="/privacy" class="underline" data-i18n="cookies.privacyPolicy">
Política de Privacidad
</a></p><div class="flex gap-2"><button type="button" onclick="window.AnalyticsService?.grantConsent(); this.parentElement.parentElement.parentElement.style.display='none'" data-i18n="cookies.acceptAll">
Aceptar
</button><button type="button" onclick="window.AnalyticsService?.revokeConsent(); this.parentElement.parentElement.parentElement.style.display='none'" data-i18n="cookies.necessaryOnly">
Rechazar
</button></div></div></div>`, defineScriptVars({ consentNeeded }));
}, "D:/MEGA/IzignaMx/izignamx/src/components/StaticAnalyticsService.astro", void 0);
var __freeze$7 = Object.freeze;
var __defProp$7 = Object.defineProperty;
var __template$7 = (cooked, raw) => __freeze$7(__defProp$7(cooked, "raw", { value: __freeze$7(raw || cooked.slice()) }));
var _a$6;
createComponent(($$result, $$props, $$slots) => {
  const showTester = false;
  return renderTemplate(_a$6 || (_a$6 = __template$7(["", "<script>\n    (function() {\n      let responsiveTesterInitialized = false;\n      \n      function initResponsiveTester() {\n        if (responsiveTesterInitialized) {\n          console.log('ResponsiveTester: Already initialized, skipping');\n          return;\n        }\n        \n        console.log('\u{1F527} ResponsiveTester: Starting initialization...');\n        \n        // Wait a bit more for elements to be ready\n        setTimeout(() => {\n          const tester = document.getElementById('responsive-tester');\n          const gridOverlay = document.getElementById('responsive-grid-overlay');\n          const currentWidth = document.getElementById('current-width');\n          const currentHeight = document.getElementById('current-height');\n          const currentBreakpoint = document.getElementById('current-breakpoint');\n          \n          console.log('\u{1F50D} ResponsiveTester: Checking elements...', {\n            tester: !!tester,\n            gridOverlay: !!gridOverlay,\n            currentWidth: !!currentWidth,\n            currentHeight: !!currentHeight,\n            currentBreakpoint: !!currentBreakpoint\n          });\n          \n          // Check if all elements exist\n          if (!tester || !gridOverlay || !currentWidth || !currentHeight || !currentBreakpoint) {\n            console.error('\u274C ResponsiveTester: Missing elements, retrying in 1 second...');\n            setTimeout(initResponsiveTester, 1000);\n            return;\n          }\n          \n          responsiveTesterInitialized = true;\n          console.log('\u2705 ResponsiveTester: All elements found, proceeding with initialization');\n      \n      // Show the tester with animation\n      setTimeout(() => {\n        if (tester) {\n          tester.classList.remove('translate-y-full', 'opacity-0');\n          tester.classList.add('translate-y-0', 'opacity-100');\n        }\n      }, 1000);\n      \n      // Toggle minimize\n      const minimizeBtn = document.getElementById('tester-minimize');\n      if (minimizeBtn) {\n        minimizeBtn.addEventListener('click', function() {\n          if (tester.classList.contains('minimized')) {\n            tester.classList.remove('minimized');\n            tester.style.height = 'auto';\n            this.textContent = '_';\n            this.title = 'Minimize';\n          } else {\n            tester.classList.add('minimized');\n            tester.style.height = '36px';\n            this.textContent = '\u25A1';\n            this.title = 'Restore';\n          }\n        });\n      }\n      \n      // Toggle grid overlay\n      const gridBtn = document.getElementById('tester-toggle-grid');\n      if (gridBtn) {\n        gridBtn.addEventListener('click', function() {\n          if (gridOverlay.style.display === 'none' || gridOverlay.style.display === '') {\n            gridOverlay.style.display = 'block';\n            setTimeout(() => {\n              gridOverlay.classList.remove('opacity-0');\n              gridOverlay.classList.add('opacity-100');\n            }, 10);\n            this.textContent = 'Hide Grid';\n            this.classList.add('bg-blue-600');\n          } else {\n            gridOverlay.classList.remove('opacity-100');\n            gridOverlay.classList.add('opacity-0');\n            setTimeout(() => {\n              gridOverlay.style.display = 'none';\n            }, 300);\n            this.textContent = 'Grid';\n            this.classList.remove('bg-blue-600');\n          }\n        });\n      }\n      \n      // Screenshot functionality\n      const screenshotBtn = document.getElementById('tester-screenshot');\n      if (screenshotBtn) {\n        screenshotBtn.addEventListener('click', function() {\n          // Show notification about screenshot\n          const notification = document.createElement('div');\n          notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300';\n          notification.textContent = 'Use browser DevTools to take screenshots (F12 \u2192 Device Mode \u2192 Screenshot)';\n          document.body.appendChild(notification);\n          \n          setTimeout(() => {\n            notification.style.opacity = '0';\n            setTimeout(() => {\n              if (notification.parentNode) {\n                document.body.removeChild(notification);\n              }\n            }, 300);\n          }, 4000);\n        });\n      }\n      \n          // Device preset buttons\n          const deviceButtons = document.querySelectorAll('.device-preset-btn');\n          console.log('\u{1F4F1} ResponsiveTester: Found device buttons:', deviceButtons.length);\n          \n          if (deviceButtons.length === 0) {\n            console.error('\u274C ResponsiveTester: No device preset buttons found!');\n            return;\n          }\n          \n          deviceButtons.forEach((btn, index) => {\n            console.log(`\u{1F518} ResponsiveTester: Setting up button ${index + 1}:`, btn.textContent.trim());\n            \n            btn.addEventListener('click', function(e) {\n              e.preventDefault();\n              e.stopPropagation();\n              \n              const width = parseInt(this.getAttribute('data-width'));\n              const height = parseInt(this.getAttribute('data-height'));\n              \n              console.log(`\u{1F5B1}\uFE0F ResponsiveTester: Device button clicked: ${width}x${height}`);\n              \n              // Remove active class from all buttons\n              deviceButtons.forEach(b => {\n                b.classList.remove('bg-blue-600', 'text-white');\n                b.classList.add('bg-gray-800', 'hover:bg-gray-700');\n              });\n              \n              // Add active class to clicked button\n              this.classList.remove('bg-gray-800', 'hover:bg-gray-700');\n              this.classList.add('bg-blue-600', 'text-white');\n              \n              console.log(`\u{1F4CF} ResponsiveTester: Updating display to ${width}x${height}`);\n              \n              // Always update display to show simulated size\n              updateSizeDisplay(width, height);\n              \n              // Show notification about simulation\n              const notification = document.createElement('div');\n              notification.className = 'fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300';\n              notification.innerHTML = `\n                <div class=\"text-sm font-medium\">\u{1F4F1} Simulating ${width}\xD7${height}</div>\n                <div class=\"text-xs opacity-90 mt-1\">Use DevTools Device Mode for actual resize (F12)</div>\n              `;\n              document.body.appendChild(notification);\n              \n              setTimeout(() => {\n                notification.style.opacity = '0';\n                setTimeout(() => {\n                  if (notification.parentNode) {\n                    document.body.removeChild(notification);\n                  }\n                }, 300);\n              }, 3000);\n            });\n          });\n          \n          console.log('\u2705 ResponsiveTester: Device buttons setup complete');\n          \n          // Update size display on resize\n          function updateSizeDisplay(w, h) {\n            const width = w || window.innerWidth;\n            const height = h || window.innerHeight;\n            \n            currentWidth.textContent = width;\n            currentHeight.textContent = height;\n            \n            // Update breakpoint indicator\n            let breakpoint = 'xs';\n            if (width >= 1536) breakpoint = '2xl';\n            else if (width >= 1280) breakpoint = 'xl';\n            else if (width >= 1024) breakpoint = 'lg';\n            else if (width >= 768) breakpoint = 'md';\n            else if (width >= 640) breakpoint = 'sm';\n            \n            currentBreakpoint.textContent = breakpoint;\n            \n            // Set color based on breakpoint\n            const colors = {\n              'xs': 'bg-red-800',\n              'sm': 'bg-orange-800',\n              'md': 'bg-yellow-800',\n              'lg': 'bg-green-800',\n              'xl': 'bg-blue-800',\n              '2xl': 'bg-purple-800'\n            };\n            \n            // Remove all color classes\n            Object.values(colors).forEach(color => {\n              currentBreakpoint.classList.remove(color);\n            });\n            \n            // Add current color class\n            currentBreakpoint.classList.add(colors[breakpoint]);\n          }\n          \n          // Initial update\n          updateSizeDisplay();\n      \n          // Update on resize\n          window.addEventListener('resize', function() {\n            updateSizeDisplay();\n          });\n          \n          console.log('\u{1F389} ResponsiveTester: Initialization complete!');\n        }, 100); // Small delay to ensure DOM is ready\n      }\n      \n      // Initialize when DOM is ready\n      if (document.readyState === 'loading') {\n        console.log('\u23F3 ResponsiveTester: DOM still loading, waiting for DOMContentLoaded...');\n        document.addEventListener('DOMContentLoaded', initResponsiveTester);\n      } else {\n        console.log('\u2705 ResponsiveTester: DOM already loaded, initializing immediately...');\n        initResponsiveTester();\n      }\n      \n      // Also try to initialize after delays as fallback\n      setTimeout(() => {\n        console.log('\u{1F504} ResponsiveTester: Fallback initialization attempt 1...');\n        initResponsiveTester();\n      }, 1000);\n      \n      setTimeout(() => {\n        console.log('\u{1F504} ResponsiveTester: Fallback initialization attempt 2...');\n        initResponsiveTester();\n      }, 2000);\n    })();\n  <\/script>"], ["", "<script>\n    (function() {\n      let responsiveTesterInitialized = false;\n      \n      function initResponsiveTester() {\n        if (responsiveTesterInitialized) {\n          console.log('ResponsiveTester: Already initialized, skipping');\n          return;\n        }\n        \n        console.log('\u{1F527} ResponsiveTester: Starting initialization...');\n        \n        // Wait a bit more for elements to be ready\n        setTimeout(() => {\n          const tester = document.getElementById('responsive-tester');\n          const gridOverlay = document.getElementById('responsive-grid-overlay');\n          const currentWidth = document.getElementById('current-width');\n          const currentHeight = document.getElementById('current-height');\n          const currentBreakpoint = document.getElementById('current-breakpoint');\n          \n          console.log('\u{1F50D} ResponsiveTester: Checking elements...', {\n            tester: !!tester,\n            gridOverlay: !!gridOverlay,\n            currentWidth: !!currentWidth,\n            currentHeight: !!currentHeight,\n            currentBreakpoint: !!currentBreakpoint\n          });\n          \n          // Check if all elements exist\n          if (!tester || !gridOverlay || !currentWidth || !currentHeight || !currentBreakpoint) {\n            console.error('\u274C ResponsiveTester: Missing elements, retrying in 1 second...');\n            setTimeout(initResponsiveTester, 1000);\n            return;\n          }\n          \n          responsiveTesterInitialized = true;\n          console.log('\u2705 ResponsiveTester: All elements found, proceeding with initialization');\n      \n      // Show the tester with animation\n      setTimeout(() => {\n        if (tester) {\n          tester.classList.remove('translate-y-full', 'opacity-0');\n          tester.classList.add('translate-y-0', 'opacity-100');\n        }\n      }, 1000);\n      \n      // Toggle minimize\n      const minimizeBtn = document.getElementById('tester-minimize');\n      if (minimizeBtn) {\n        minimizeBtn.addEventListener('click', function() {\n          if (tester.classList.contains('minimized')) {\n            tester.classList.remove('minimized');\n            tester.style.height = 'auto';\n            this.textContent = '_';\n            this.title = 'Minimize';\n          } else {\n            tester.classList.add('minimized');\n            tester.style.height = '36px';\n            this.textContent = '\u25A1';\n            this.title = 'Restore';\n          }\n        });\n      }\n      \n      // Toggle grid overlay\n      const gridBtn = document.getElementById('tester-toggle-grid');\n      if (gridBtn) {\n        gridBtn.addEventListener('click', function() {\n          if (gridOverlay.style.display === 'none' || gridOverlay.style.display === '') {\n            gridOverlay.style.display = 'block';\n            setTimeout(() => {\n              gridOverlay.classList.remove('opacity-0');\n              gridOverlay.classList.add('opacity-100');\n            }, 10);\n            this.textContent = 'Hide Grid';\n            this.classList.add('bg-blue-600');\n          } else {\n            gridOverlay.classList.remove('opacity-100');\n            gridOverlay.classList.add('opacity-0');\n            setTimeout(() => {\n              gridOverlay.style.display = 'none';\n            }, 300);\n            this.textContent = 'Grid';\n            this.classList.remove('bg-blue-600');\n          }\n        });\n      }\n      \n      // Screenshot functionality\n      const screenshotBtn = document.getElementById('tester-screenshot');\n      if (screenshotBtn) {\n        screenshotBtn.addEventListener('click', function() {\n          // Show notification about screenshot\n          const notification = document.createElement('div');\n          notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300';\n          notification.textContent = 'Use browser DevTools to take screenshots (F12 \u2192 Device Mode \u2192 Screenshot)';\n          document.body.appendChild(notification);\n          \n          setTimeout(() => {\n            notification.style.opacity = '0';\n            setTimeout(() => {\n              if (notification.parentNode) {\n                document.body.removeChild(notification);\n              }\n            }, 300);\n          }, 4000);\n        });\n      }\n      \n          // Device preset buttons\n          const deviceButtons = document.querySelectorAll('.device-preset-btn');\n          console.log('\u{1F4F1} ResponsiveTester: Found device buttons:', deviceButtons.length);\n          \n          if (deviceButtons.length === 0) {\n            console.error('\u274C ResponsiveTester: No device preset buttons found!');\n            return;\n          }\n          \n          deviceButtons.forEach((btn, index) => {\n            console.log(\\`\u{1F518} ResponsiveTester: Setting up button \\${index + 1}:\\`, btn.textContent.trim());\n            \n            btn.addEventListener('click', function(e) {\n              e.preventDefault();\n              e.stopPropagation();\n              \n              const width = parseInt(this.getAttribute('data-width'));\n              const height = parseInt(this.getAttribute('data-height'));\n              \n              console.log(\\`\u{1F5B1}\uFE0F ResponsiveTester: Device button clicked: \\${width}x\\${height}\\`);\n              \n              // Remove active class from all buttons\n              deviceButtons.forEach(b => {\n                b.classList.remove('bg-blue-600', 'text-white');\n                b.classList.add('bg-gray-800', 'hover:bg-gray-700');\n              });\n              \n              // Add active class to clicked button\n              this.classList.remove('bg-gray-800', 'hover:bg-gray-700');\n              this.classList.add('bg-blue-600', 'text-white');\n              \n              console.log(\\`\u{1F4CF} ResponsiveTester: Updating display to \\${width}x\\${height}\\`);\n              \n              // Always update display to show simulated size\n              updateSizeDisplay(width, height);\n              \n              // Show notification about simulation\n              const notification = document.createElement('div');\n              notification.className = 'fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300';\n              notification.innerHTML = \\`\n                <div class=\"text-sm font-medium\">\u{1F4F1} Simulating \\${width}\xD7\\${height}</div>\n                <div class=\"text-xs opacity-90 mt-1\">Use DevTools Device Mode for actual resize (F12)</div>\n              \\`;\n              document.body.appendChild(notification);\n              \n              setTimeout(() => {\n                notification.style.opacity = '0';\n                setTimeout(() => {\n                  if (notification.parentNode) {\n                    document.body.removeChild(notification);\n                  }\n                }, 300);\n              }, 3000);\n            });\n          });\n          \n          console.log('\u2705 ResponsiveTester: Device buttons setup complete');\n          \n          // Update size display on resize\n          function updateSizeDisplay(w, h) {\n            const width = w || window.innerWidth;\n            const height = h || window.innerHeight;\n            \n            currentWidth.textContent = width;\n            currentHeight.textContent = height;\n            \n            // Update breakpoint indicator\n            let breakpoint = 'xs';\n            if (width >= 1536) breakpoint = '2xl';\n            else if (width >= 1280) breakpoint = 'xl';\n            else if (width >= 1024) breakpoint = 'lg';\n            else if (width >= 768) breakpoint = 'md';\n            else if (width >= 640) breakpoint = 'sm';\n            \n            currentBreakpoint.textContent = breakpoint;\n            \n            // Set color based on breakpoint\n            const colors = {\n              'xs': 'bg-red-800',\n              'sm': 'bg-orange-800',\n              'md': 'bg-yellow-800',\n              'lg': 'bg-green-800',\n              'xl': 'bg-blue-800',\n              '2xl': 'bg-purple-800'\n            };\n            \n            // Remove all color classes\n            Object.values(colors).forEach(color => {\n              currentBreakpoint.classList.remove(color);\n            });\n            \n            // Add current color class\n            currentBreakpoint.classList.add(colors[breakpoint]);\n          }\n          \n          // Initial update\n          updateSizeDisplay();\n      \n          // Update on resize\n          window.addEventListener('resize', function() {\n            updateSizeDisplay();\n          });\n          \n          console.log('\u{1F389} ResponsiveTester: Initialization complete!');\n        }, 100); // Small delay to ensure DOM is ready\n      }\n      \n      // Initialize when DOM is ready\n      if (document.readyState === 'loading') {\n        console.log('\u23F3 ResponsiveTester: DOM still loading, waiting for DOMContentLoaded...');\n        document.addEventListener('DOMContentLoaded', initResponsiveTester);\n      } else {\n        console.log('\u2705 ResponsiveTester: DOM already loaded, initializing immediately...');\n        initResponsiveTester();\n      }\n      \n      // Also try to initialize after delays as fallback\n      setTimeout(() => {\n        console.log('\u{1F504} ResponsiveTester: Fallback initialization attempt 1...');\n        initResponsiveTester();\n      }, 1000);\n      \n      setTimeout(() => {\n        console.log('\u{1F504} ResponsiveTester: Fallback initialization attempt 2...');\n        initResponsiveTester();\n      }, 2000);\n    })();\n  <\/script>"])), showTester);
}, "D:/MEGA/IzignaMx/izignamx/src/components/ResponsiveTester.astro", void 0);
const $$CustomCursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="custom-cursor" aria-hidden="true" data-astro-cid-ofxtmv4x> <div class="cursor-dot" data-astro-cid-ofxtmv4x></div> <div class="cursor-ring" data-astro-cid-ofxtmv4x></div>  </div> `;
}, "D:/MEGA/IzignaMx/izignamx/src/components/CustomCursor.astro", void 0);
var __freeze$6 = Object.freeze;
var __defProp$6 = Object.defineProperty;
var __template$6 = (cooked, raw) => __freeze$6(__defProp$6(cooked, "raw", { value: __freeze$6(raw || cooked.slice()) }));
var _a$5, _b$4;
const $$Astro$7 = createAstro("https://izignamx.com");
const $$SecurityHeaders = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SecurityHeaders;
  const {
    enableCSP = false,
    enableHSTS = true,
    strictMode = false,
    environment = "production"
  } = Astro2.props;
  const securityHeaders = {
    "Strict-Transport-Security": enableHSTS && environment === "production" ? "max-age=31536000; includeSubDomains; preload" : null,
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": [
      "camera=()",
      "microphone=()",
      "geolocation=(self)",
      "payment=(self)",
      "usb=()",
      "magnetometer=()",
      "accelerometer=()",
      "gyroscope=()",
      "fullscreen=(self)"
    ].join(", "),
    "Cross-Origin-Embedder-Policy": strictMode ? "require-corp" : "unsafe-none",
    "Cross-Origin-Opener-Policy": environment === "production" ? "same-origin" : null,
    "Cross-Origin-Resource-Policy": environment === "production" ? "same-origin" : null
  };
  try {
    if (Astro2.response && false) ;
  } catch {
  }
  return renderTemplate(_b$4 || (_b$4 = __template$6(["<!-- Client-side security enhancements --><script data-security-enhancer>(function(){", `
  (function() {
    'use strict';
    
    if (typeof window === 'undefined') return;
    
    const SecurityEnhancer = {
      // Detect and warn about security issues
      detectSecurityIssues() {
        // Check for mixed content
        if (location.protocol === 'https:') {
          const mixedContent = document.querySelectorAll('img[src^="http:"], script[src^="http:"], link[href^="http:"]');
          if (mixedContent.length > 0) {
            console.warn('\u{1F512} Mixed content detected:', mixedContent.length, 'resources');
          }
        }
        
        // Check for external scripts without integrity
        const externalScripts = document.querySelectorAll('script[src]:not([integrity])');
        externalScripts.forEach(script => {
          if (!script.src.startsWith(location.origin)) {
            // Skip Google scripts that don't support SRI
            const isGoogleScript = script.src.includes('google.com/analytics') || 
                                  script.src.includes('googletagmanager.com/gtag') ||
                                  script.src.includes('google-analytics.com') ||
                                  script.src.includes('gstatic.com');
            
            if (!isGoogleScript) {
              console.warn('\u{1F512} External script without integrity:', script.src);
            }
          }
        });
        
        // Check for inline event handlers (potential XSS)
        const inlineHandlers = document.querySelectorAll('[onclick], [onload], [onerror]');
        if (inlineHandlers.length > 0) {
          console.warn('\u{1F512} Inline event handlers detected:', inlineHandlers.length);
        }
      },
      
      // Sanitize dynamic content
      sanitizeContent() {
        // Add noopener to external links
        const externalLinks = document.querySelectorAll('a[href^="http"]:not([href^="' + location.origin + '"])');
        externalLinks.forEach(link => {
          if (!link.rel.includes('noopener')) {
            link.rel += ' noopener';
          }
          if (!link.rel.includes('noreferrer')) {
            link.rel += ' noreferrer';
          }
        });
        
        // Validate form inputs
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          form.addEventListener('submit', this.validateFormSubmission.bind(this));
        });
      },
      
      validateFormSubmission(event) {
        const form = event.target;
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
          const value = input.value;
          
          // Basic XSS prevention
          if (this.containsSuspiciousContent(value)) {
            console.warn('\u{1F512} Suspicious content detected in form field:', input.name);
            // Could prevent submission or sanitize content
          }
        });
      },
      
      containsSuspiciousContent(value) {
        const suspiciousPatterns = [
          /<script[^>]*>.*?<\\/script>/gi,
          /javascript:/gi,
          /on\\w+\\s*=/gi,
          /<iframe[^>]*>.*?<\\/iframe>/gi
        ];
        
        return suspiciousPatterns.some(pattern => pattern.test(value));
      },
      
      // Monitor for CSP violations
      monitorCSPViolations() {
        if (!enableCSP) return;
        
        document.addEventListener('securitypolicyviolation', (event) => {
          console.error('\u{1F6A8} CSP Violation:', {
            directive: event.violatedDirective,
            blockedURI: event.blockedURI,
            originalPolicy: event.originalPolicy,
            sourceFile: event.sourceFile,
            lineNumber: event.lineNumber
          });
          
          // Send to analytics for monitoring
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'csp_violation', {
              event_category: 'Security',
              event_label: event.violatedDirective,
              custom_parameter_1: event.blockedURI
            });
          }
        });
      },
      
      // Feature policy compliance
      checkFeaturePolicies() {
        // Check if feature policy is supported
        if ('featurePolicy' in document) {
          // Feature policy status checked
        }
      },
      
      init() {
        this.detectSecurityIssues();
        this.sanitizeContent();
        this.monitorCSPViolations();
        this.checkFeaturePolicies();
        
        // Security Headers and Client Security initialized
      }
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => SecurityEnhancer.init());
    } else {
      SecurityEnhancer.init();
    }
  })();
})();<\/script> <!-- Development CSP Report -->`, ""], ["<!-- Client-side security enhancements --><script data-security-enhancer>(function(){", `
  (function() {
    'use strict';
    
    if (typeof window === 'undefined') return;
    
    const SecurityEnhancer = {
      // Detect and warn about security issues
      detectSecurityIssues() {
        // Check for mixed content
        if (location.protocol === 'https:') {
          const mixedContent = document.querySelectorAll('img[src^="http:"], script[src^="http:"], link[href^="http:"]');
          if (mixedContent.length > 0) {
            console.warn('\u{1F512} Mixed content detected:', mixedContent.length, 'resources');
          }
        }
        
        // Check for external scripts without integrity
        const externalScripts = document.querySelectorAll('script[src]:not([integrity])');
        externalScripts.forEach(script => {
          if (!script.src.startsWith(location.origin)) {
            // Skip Google scripts that don't support SRI
            const isGoogleScript = script.src.includes('google.com/analytics') || 
                                  script.src.includes('googletagmanager.com/gtag') ||
                                  script.src.includes('google-analytics.com') ||
                                  script.src.includes('gstatic.com');
            
            if (!isGoogleScript) {
              console.warn('\u{1F512} External script without integrity:', script.src);
            }
          }
        });
        
        // Check for inline event handlers (potential XSS)
        const inlineHandlers = document.querySelectorAll('[onclick], [onload], [onerror]');
        if (inlineHandlers.length > 0) {
          console.warn('\u{1F512} Inline event handlers detected:', inlineHandlers.length);
        }
      },
      
      // Sanitize dynamic content
      sanitizeContent() {
        // Add noopener to external links
        const externalLinks = document.querySelectorAll('a[href^="http"]:not([href^="' + location.origin + '"])');
        externalLinks.forEach(link => {
          if (!link.rel.includes('noopener')) {
            link.rel += ' noopener';
          }
          if (!link.rel.includes('noreferrer')) {
            link.rel += ' noreferrer';
          }
        });
        
        // Validate form inputs
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          form.addEventListener('submit', this.validateFormSubmission.bind(this));
        });
      },
      
      validateFormSubmission(event) {
        const form = event.target;
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
          const value = input.value;
          
          // Basic XSS prevention
          if (this.containsSuspiciousContent(value)) {
            console.warn('\u{1F512} Suspicious content detected in form field:', input.name);
            // Could prevent submission or sanitize content
          }
        });
      },
      
      containsSuspiciousContent(value) {
        const suspiciousPatterns = [
          /<script[^>]*>.*?<\\\\/script>/gi,
          /javascript:/gi,
          /on\\\\w+\\\\s*=/gi,
          /<iframe[^>]*>.*?<\\\\/iframe>/gi
        ];
        
        return suspiciousPatterns.some(pattern => pattern.test(value));
      },
      
      // Monitor for CSP violations
      monitorCSPViolations() {
        if (!enableCSP) return;
        
        document.addEventListener('securitypolicyviolation', (event) => {
          console.error('\u{1F6A8} CSP Violation:', {
            directive: event.violatedDirective,
            blockedURI: event.blockedURI,
            originalPolicy: event.originalPolicy,
            sourceFile: event.sourceFile,
            lineNumber: event.lineNumber
          });
          
          // Send to analytics for monitoring
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'csp_violation', {
              event_category: 'Security',
              event_label: event.violatedDirective,
              custom_parameter_1: event.blockedURI
            });
          }
        });
      },
      
      // Feature policy compliance
      checkFeaturePolicies() {
        // Check if feature policy is supported
        if ('featurePolicy' in document) {
          // Feature policy status checked
        }
      },
      
      init() {
        this.detectSecurityIssues();
        this.sanitizeContent();
        this.monitorCSPViolations();
        this.checkFeaturePolicies();
        
        // Security Headers and Client Security initialized
      }
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => SecurityEnhancer.init());
    } else {
      SecurityEnhancer.init();
    }
  })();
})();<\/script> <!-- Development CSP Report -->`, ""])), defineScriptVars({ environment, enableCSP }), environment === "development" && renderTemplate(_a$5 || (_a$5 = __template$6(["<script>\n    // CSP Reporting in development\n    // CSP Policy Active\n    if (window.location.search.includes('debug=security')) {\n      // Security Headers Debug\n      // Security configuration loaded\n    }\n  <\/script>"]))));
}, "D:/MEGA/IzignaMx/izignamx/src/components/SecurityHeaders.astro", void 0);
const $$Astro$6 = createAstro("https://izignamx.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    name,
    class: className,
    size = 24,
    color = "currentColor",
    stroke = 2,
    fill = "none",
    focusable = false,
    role = "img",
    ariaHidden = true,
    title
  } = Astro2.props;
  const ICON_MAP = {
    // Navegación
    menu: `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />`,
    close: `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />`,
    "chevron-right": `<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />`,
    "chevron-down": `<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />`,
    "chevron-left": `<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />`,
    "chevron-up": `<path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />`,
    "arrow-right": `<path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />`,
    "arrow-left": `<path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />`,
    // Acciones comunes
    search: `<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />`,
    plus: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />`,
    minus: `<path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />`,
    check: `<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />`,
    x: `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />`,
    // Comunicación
    mail: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`,
    chat: `<path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />`,
    phone: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />`,
    // Social
    facebook: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />`,
    twitter: `<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />`,
    instagram: `<path stroke-linecap="round" stroke-linejoin="round" d="M16 2h-8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-8a6 6 0 0 0-6-6z"></path><rect x="8" y="8" width="8" height="8" rx="2" ry="2"></rect><circle cx="16" cy="8" r="1"></circle>`,
    linkedin: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>`,
    whatsapp: `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" fill="${stroke === 2 ? color : fill}"/>`,
    // Negocios
    briefcase: `<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`,
    chart: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />`,
    presentation: `<path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />`,
    // UI/Interfaz
    user: `<path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />`,
    settings: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <circle cx="12" cy="12" r="3" />`,
    bell: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />`,
    question: `<path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    // Material Design
    home: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />`,
    info: `<path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
    warning: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>`,
    error: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
    // Aplicación específica
    code: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />`,
    server: `<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />`,
    database: `<path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />`,
    cloud: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />`,
    // Iconos adicionales
    gift: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />`,
    star: `<path fill="currentColor" stroke="none" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />`,
    lock: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />`,
    times: `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />`,
    // Icono predeterminado si no se encuentra el solicitado
    default: `<path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`
  };
  const iconPath = ICON_MAP[name] || ICON_MAP["default"];
  const calculatedSize = typeof size === "string" ? size : `${size}px`;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(calculatedSize, "width")}${addAttribute(calculatedSize, "height")} viewBox="0 0 24 24"${addAttribute(fill, "fill")}${addAttribute(color, "stroke")}${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}${addAttribute(focusable ? "true" : "false", "focusable")}${addAttribute(role, "role")}${addAttribute(ariaHidden ? "true" : "false", "aria-hidden")} data-astro-cid-patnjmll> ${title && renderTemplate`<title>${title}</title>`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(iconPath)}` })} </svg> `;
}, "D:/MEGA/IzignaMx/izignamx/src/components/Icon.astro", void 0);
var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$4;
const $$Astro$5 = createAstro("https://izignamx.com");
const $$ExitPopup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExitPopup;
  return renderTemplate(_a$4 || (_a$4 = __template$5(["", '<div id="exit-popup" class="hidden fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" data-astro-cid-y2nevnuy> <div class="popup-content relative bg-[#121212] max-w-md md:max-w-xl w-full rounded-xl border border-izigna-primary/20 shadow-xl p-8 transform -translate-y-10 transition-transform duration-500" data-astro-cid-y2nevnuy> <!-- Bot\xF3n de cerrar --> <button id="close-popup" class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" aria-label="Cerrar ventana emergente" title="Cerrar ventana emergente" data-astro-cid-y2nevnuy> ', ' </button> <!-- Contenido del popup --> <div class="text-center mb-6" data-astro-cid-y2nevnuy> <div class="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-izigna-primary to-izigna-info flex items-center justify-center mb-4" data-astro-cid-y2nevnuy> ', ' </div> <h3 class="text-2xl font-bold text-white" data-i18n="common.exitPopup.title" data-astro-cid-y2nevnuy>\n\xA1OFERTA EXCLUSIVA ONLINE!\n</h3> <p class="text-white/80 mt-2" data-i18n="common.exitPopup.description" data-astro-cid-y2nevnuy>\nRecibe AHORA un diagn\xF3stico digital gratuito valorado en $1,500 MXN y\n        descubre c\xF3mo aumentar tus conversiones hasta un 200%\n</p> <div class="mt-3 text-izigna-primary font-semibold" data-i18n="common.exitPopup.limitedSpots" data-astro-cid-y2nevnuy>\nSolo disponible para los pr\xF3ximos 5 solicitantes\n</div> </div> <!-- Mini formulario --> <form id="exit-popup-form" class="space-y-4" method="POST" action="https://forms.izignamx.com/relay" data-recaptcha-action="relay" data-astro-cid-y2nevnuy> <!-- FormHub Required Fields --> <input type="hidden" name="fh_id" value="exit-popup" data-astro-cid-y2nevnuy> <input type="hidden" name="fh_redirect" value="https://izignamx.com/gracias" data-astro-cid-y2nevnuy> <!-- FormHub Honeypot (Required) --> <input type="text" name="url" style="display:none !important;" tabindex="-1" autocomplete="off" data-astro-cid-y2nevnuy> <div data-astro-cid-y2nevnuy> <label for="popup-email" class="sr-only" data-astro-cid-y2nevnuy>Email</label> <input type="email" id="popup-email" name="email" required class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-izigna-primary focus:outline-none focus:ring-1 focus:ring-izigna-primary transition-all" placeholder="Tu correo electr\xF3nico" data-i18n="common.exitPopup.emailPlaceholder" data-astro-cid-y2nevnuy> </div> <p id="exit-popup-message" class="text-sm mt-3 text-center text-white/80 hidden" data-astro-cid-y2nevnuy></p> <div data-astro-cid-y2nevnuy> <label for="popup-name" class="sr-only" data-astro-cid-y2nevnuy>Nombre</label> <input type="text" id="popup-name" name="name" required class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-izigna-primary focus:outline-none focus:ring-1 focus:ring-izigna-primary transition-all" placeholder="Tu nombre" data-i18n="common.exitPopup.namePlaceholder" data-astro-cid-y2nevnuy> </div> <div class="flex justify-center mt-4" data-astro-cid-y2nevnuy> <button type="submit" class="popup-submit w-full group relative overflow-hidden bg-gradient-to-r from-izigna-primary to-izigna-info text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-izigna-primary/30" data-astro-cid-y2nevnuy> <span class="relative z-10" data-i18n="common.exitPopup.submit" data-astro-cid-y2nevnuy>\xA1QUIERO MI DIAGN\xD3STICO GRATUITO AHORA!</span> <div class="absolute inset-0 bg-gradient-to-r from-izigna-info to-izigna-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-y2nevnuy></div> </button> </div> </form> <!-- Beneficios y testimonial r\xE1pido --> <div class="mt-4 bg-white/5 p-3 rounded-lg border border-white/10" data-astro-cid-y2nevnuy> <p class="text-white text-sm mb-2" data-i18n-html="common.exitPopup.includesHtml" data-astro-cid-y2nevnuy> <strong data-astro-cid-y2nevnuy>Incluye:</strong> An\xE1lisis de conversi\xF3n, revisi\xF3n SEO, competencia\n        y estrategia recomendada\n</p> <div class="flex items-center gap-2" data-astro-cid-y2nevnuy> <div class="flex" data-astro-cid-y2nevnuy> ', ' </div> <p class="text-xs text-white/70" data-i18n="common.exitPopup.testimonial" data-astro-cid-y2nevnuy>\n"Aumentamos nuestras ventas un 85% en 2 meses" - Carlos M.\n</p> </div> </div> <!-- Mensaje de confianza --> <div class="flex items-center justify-center gap-2 mt-4 text-xs text-white/60" data-astro-cid-y2nevnuy> ', ' <span data-i18n="common.exitPopup.trust" data-astro-cid-y2nevnuy>Garantizamos 100% de confidencialidad. Sin compromisos ni spam.</span> </div> </div> </div> <script type="module">\n  import { submitRelayForm } from "/js/form-relay.js";\n\n  let popupShown = false;\n  let exitPopup = document.getElementById("exit-popup");\n  let closePopup = document.getElementById("close-popup");\n  let popupForm = document.getElementById("exit-popup-form");\n  let popupStatusMessage = document.getElementById("exit-popup-message");\n  let hasSubmittedSuccessfully = false;\n  let __redirectBannerEl;\n  async function i18nValue(key, fallback) {\n    try {\n      const val = await window?.i18n?.t?.(key);\n      if (typeof val === "string" && val.trim() && val !== key) return val;\n    } catch (_) {\n      // Ignore errors when translating\n    }\n    return fallback;\n  }\n\n  async function showRedirectBanner(seconds) {\n    const existing = document.getElementById("redirect-banner");\n    if (existing && existing.parentElement) existing.remove();\n    const banner = document.createElement("div");\n    banner.id = "redirect-banner";\n    banner.className =\n      "mt-3 text-center bg-gradient-to-r from-izigna-primary/20 to-izigna-info/20 p-3 rounded-lg border border-izigna-primary/30 text-white";\n    const bannerHtml = await i18nValue(\n      "common.exitPopup.redirectBannerHtml",\n      `You are about to be redirected. In <span id="redirect-counter">{{seconds}}</span>s we will go to <strong>/gracias</strong>.`,\n    );\n    banner.innerHTML = `<div class="flex items-center justify-center gap-3"><svg class="w-4 h-4 text-izigna-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p>${String(bannerHtml).replace("{{seconds}}", String(seconds))}</p></div>`;\n    const popupContent = exitPopup\n      ? exitPopup.querySelector(".popup-content")\n      : null;\n    if (popupContent) {\n      popupContent.appendChild(banner);\n      __redirectBannerEl = banner;\n    } else {\n      document.body.appendChild(banner);\n      __redirectBannerEl = banner;\n    }\n  }\n  function updateRedirectBanner(seconds) {\n    const el = document.getElementById("redirect-counter");\n    if (el) el.textContent = String(seconds);\n    if (__redirectBannerEl && seconds <= 0) {\n      __redirectBannerEl.remove();\n      __redirectBannerEl = undefined;\n    }\n  }\n\n  // Mostrar el popup\n  function showPopup() {\n    if (!popupShown && exitPopup) {\n      exitPopup.classList.remove("hidden");\n      exitPopup.classList.remove("opacity-0", "pointer-events-none");\n      const popupContent = exitPopup.querySelector(".popup-content");\n      if (popupContent) {\n        setTimeout(() => {\n          popupContent.classList.remove("-translate-y-10");\n        }, 10);\n      }\n      popupShown = true;\n\n      // Guardar en sessionStorage para no mostrar de nuevo en esta sesi\xF3n\n      sessionStorage.setItem("exitPopupShown", "true");\n\n      // Registrar evento en analytics\n      if (typeof window !== "undefined" && typeof window.gtag === "function") {\n        window.gtag("event", "exit_popup_shown", {\n          event_category: "Engagement",\n          event_label: "Exit Intent Popup",\n        });\n      }\n      if (\n        typeof window !== "undefined" &&\n        typeof window.trackEvent === "function"\n      ) {\n        window.trackEvent("exit_popup_shown", { source: "exit_intent" });\n      }\n    }\n  }\n\n  // Cerrar el popup\n  function closeExitPopup() {\n    if (exitPopup) {\n      exitPopup.classList.add("opacity-0", "pointer-events-none");\n      const popupContent = exitPopup.querySelector(".popup-content");\n      if (popupContent) {\n        popupContent.classList.add("-translate-y-10");\n      }\n      setTimeout(() => {\n        exitPopup?.classList.add("hidden");\n      }, 300);\n    }\n  }\n\n  // Detectar intento de salida (movimiento del mouse hacia la barra superior)\n  function handleMouseLeave(e) {\n    // Solo activar si el mouse sale por la parte superior de la ventana\n    if (e.clientY <= 20 && !sessionStorage.getItem("exitPopupShown")) {\n      showPopup();\n    }\n  }\n\n  function initializeExitPopup() {\n    exitPopup = document.getElementById("exit-popup");\n    closePopup = document.getElementById("close-popup");\n    popupForm = document.getElementById("exit-popup-form");\n    popupStatusMessage = document.getElementById("exit-popup-message");\n\n    if (!exitPopup) return;\n    if (exitPopup.dataset.initialized === "true") return;\n    exitPopup.dataset.initialized = "true";\n\n    if (sessionStorage.getItem("exitPopupShown")) {\n      return;\n    }\n\n    // Mostrar popup tras 30 segundos de inactividad\n    const inactivityTimer = setTimeout(() => {\n      if (!popupShown) {\n        showPopup();\n      }\n    }, 30000);\n\n    // Reiniciar el timer si hay actividad\n    document.addEventListener("mousemove", () => {\n      clearTimeout(inactivityTimer);\n    });\n\n    document.addEventListener("mouseleave", handleMouseLeave);\n\n    if (closePopup) {\n      closePopup.addEventListener("click", closeExitPopup);\n    }\n\n    if (popupForm) {\n      if (popupForm.dataset.initialized === "true") return;\n      popupForm.dataset.initialized = "true";\n      popupForm.addEventListener("submit", async (e) => {\n        e.preventDefault();\n\n        if (popupForm.dataset.submitting === "true") {\n          return;\n        }\n\n        popupForm.dataset.submitting = "true";\n\n        const submitButton = popupForm.querySelector(\'button[type="submit"]\');\n        const defaultButtonMarkup = submitButton ? submitButton.innerHTML : "";\n\n        if (submitButton) {\n          submitButton.disabled = true;\n          const sending = await i18nValue(\n            "common.exitPopup.sending",\n            "Enviando...",\n          );\n          submitButton.innerHTML = `<span class="relative z-10">${sending}</span>`;\n        }\n\n        const showStatus = (message, type = "success") => {\n          if (!popupStatusMessage) return;\n          popupStatusMessage.textContent = message;\n          popupStatusMessage.classList.remove(\n            "hidden",\n            "text-red-400",\n            "text-green-400",\n          );\n          popupStatusMessage.classList.add(\n            type === "error" ? "text-red-400" : "text-green-400",\n          );\n        };\n\n        if (typeof window !== "undefined") {\n          if (typeof window.gtag === "function") {\n            window.gtag("event", "form_submit", {\n              event_category: "Exit Popup",\n              event_label: "Exit Popup Form Attempt",\n            });\n          }\n          if (typeof window.trackEvent === "function") {\n            window.trackEvent("exit_popup_submit", { form_id: "exit-popup" });\n          }\n        }\n\n        if (typeof window !== "undefined" && typeof window.fbq === "function") {\n          window.fbq("track", "Lead", {\n            source: "exit_popup",\n          });\n        }\n\n        try {\n          const defaultSuccess = await i18nValue(\n            "common.exitPopup.success",\n            "\xA1Gracias! En breve nos pondremos en contacto.",\n          );\n          const defaultError = await i18nValue(\n            "common.exitPopup.error",\n            "No pudimos enviar tu mensaje. Intenta nuevamente.",\n          );\n\n          const result = await submitRelayForm(popupForm, {\n            redirectOnSuccess: false,\n            maxRetries: 3,\n            onSuccess: (message) => {\n              showStatus(message || defaultSuccess, "success");\n            },\n            onError: (message) => {\n              showStatus(message || defaultError, "error");\n            },\n          });\n\n          if (result && result.ok) {\n            hasSubmittedSuccessfully = true;\n            popupForm.dataset.sent = "true";\n            popupForm.reset();\n            if (\n              typeof window !== "undefined" &&\n              typeof window.trackEvent === "function"\n            ) {\n              window.trackEvent("form_success", {\n                form_id: "exit-popup",\n                redirect: "/gracias",\n              });\n            }\n            const redirectPath = "/gracias";\n            let canShowRedirect = false;\n            try {\n              const targetUrl = new URL(redirectPath, window.location.origin);\n              canShowRedirect =\n                targetUrl.origin === window.location.origin &&\n                targetUrl.pathname === "/gracias";\n            } catch (_) {\n              canShowRedirect = false;\n            }\n            if (canShowRedirect) {\n              if (submitButton) {\n                submitButton.disabled = true;\n                const redirectingTpl = await i18nValue(\n                  "common.exitPopup.redirecting",\n                  "Redirigiendo en {{seconds}}s...",\n                );\n                submitButton.innerHTML = `<span class="relative z-10">${String(redirectingTpl).replace("{{seconds}}", "5")}</span>`;\n              }\n              if (\n                typeof window !== "undefined" &&\n                typeof window.trackEvent === "function"\n              ) {\n                window.trackEvent("redirect_initiated", {\n                  form_id: "exit-popup",\n                  redirect: "/gracias",\n                });\n              }\n              showRedirectBanner(5);\n              let remaining = 5;\n              const redirectingTpl = await i18nValue(\n                "common.exitPopup.redirecting",\n                "Redirigiendo en {{seconds}}s...",\n              );\n              const interval = setInterval(() => {\n                remaining -= 1;\n                updateRedirectBanner(remaining);\n                if (submitButton) {\n                  submitButton.innerHTML = `<span class="relative z-10">${String(redirectingTpl).replace("{{seconds}}", String(remaining))}</span>`;\n                }\n                if (remaining <= 0) {\n                  clearInterval(interval);\n                  const targetUrl = new URL(\n                    redirectPath,\n                    window.location.origin,\n                  );\n                  if (\n                    typeof window !== "undefined" &&\n                    typeof window.trackEvent === "function"\n                  ) {\n                    window.trackEvent("redirect_complete", {\n                      form_id: "exit-popup",\n                      redirect: "/gracias",\n                    });\n                    window.trackEvent("lead_conversion", {\n                      form_id: "exit-popup",\n                      redirect: "/gracias",\n                      value: 1,\n                      currency: "USD",\n                    });\n                  }\n                  window.location.assign(targetUrl.toString());\n                }\n              }, 1000);\n            }\n          }\n        } catch (error) {\n          const unexpected = await i18nValue(\n            "common.exitPopup.unexpectedError",\n            "Ocurri\xF3 un error inesperado. Intenta nuevamente.",\n          );\n          showStatus(unexpected, "error");\n        } finally {\n          popupForm.dataset.submitting = "false";\n          if (!hasSubmittedSuccessfully) {\n            if (submitButton) {\n              submitButton.disabled = false;\n              submitButton.innerHTML = defaultButtonMarkup;\n            }\n          }\n        }\n      });\n    }\n  }\n\n  // Inicializar eventos cuando el DOM est\xE9 listo y en navegaci\xF3n de Astro\n  document.addEventListener("DOMContentLoaded", initializeExitPopup);\n  document.addEventListener("astro:page-load", initializeExitPopup);\n<\/script> '], ["", '<div id="exit-popup" class="hidden fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" data-astro-cid-y2nevnuy> <div class="popup-content relative bg-[#121212] max-w-md md:max-w-xl w-full rounded-xl border border-izigna-primary/20 shadow-xl p-8 transform -translate-y-10 transition-transform duration-500" data-astro-cid-y2nevnuy> <!-- Bot\xF3n de cerrar --> <button id="close-popup" class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" aria-label="Cerrar ventana emergente" title="Cerrar ventana emergente" data-astro-cid-y2nevnuy> ', ' </button> <!-- Contenido del popup --> <div class="text-center mb-6" data-astro-cid-y2nevnuy> <div class="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-izigna-primary to-izigna-info flex items-center justify-center mb-4" data-astro-cid-y2nevnuy> ', ' </div> <h3 class="text-2xl font-bold text-white" data-i18n="common.exitPopup.title" data-astro-cid-y2nevnuy>\n\xA1OFERTA EXCLUSIVA ONLINE!\n</h3> <p class="text-white/80 mt-2" data-i18n="common.exitPopup.description" data-astro-cid-y2nevnuy>\nRecibe AHORA un diagn\xF3stico digital gratuito valorado en $1,500 MXN y\n        descubre c\xF3mo aumentar tus conversiones hasta un 200%\n</p> <div class="mt-3 text-izigna-primary font-semibold" data-i18n="common.exitPopup.limitedSpots" data-astro-cid-y2nevnuy>\nSolo disponible para los pr\xF3ximos 5 solicitantes\n</div> </div> <!-- Mini formulario --> <form id="exit-popup-form" class="space-y-4" method="POST" action="https://forms.izignamx.com/relay" data-recaptcha-action="relay" data-astro-cid-y2nevnuy> <!-- FormHub Required Fields --> <input type="hidden" name="fh_id" value="exit-popup" data-astro-cid-y2nevnuy> <input type="hidden" name="fh_redirect" value="https://izignamx.com/gracias" data-astro-cid-y2nevnuy> <!-- FormHub Honeypot (Required) --> <input type="text" name="url" style="display:none !important;" tabindex="-1" autocomplete="off" data-astro-cid-y2nevnuy> <div data-astro-cid-y2nevnuy> <label for="popup-email" class="sr-only" data-astro-cid-y2nevnuy>Email</label> <input type="email" id="popup-email" name="email" required class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-izigna-primary focus:outline-none focus:ring-1 focus:ring-izigna-primary transition-all" placeholder="Tu correo electr\xF3nico" data-i18n="common.exitPopup.emailPlaceholder" data-astro-cid-y2nevnuy> </div> <p id="exit-popup-message" class="text-sm mt-3 text-center text-white/80 hidden" data-astro-cid-y2nevnuy></p> <div data-astro-cid-y2nevnuy> <label for="popup-name" class="sr-only" data-astro-cid-y2nevnuy>Nombre</label> <input type="text" id="popup-name" name="name" required class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-izigna-primary focus:outline-none focus:ring-1 focus:ring-izigna-primary transition-all" placeholder="Tu nombre" data-i18n="common.exitPopup.namePlaceholder" data-astro-cid-y2nevnuy> </div> <div class="flex justify-center mt-4" data-astro-cid-y2nevnuy> <button type="submit" class="popup-submit w-full group relative overflow-hidden bg-gradient-to-r from-izigna-primary to-izigna-info text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-izigna-primary/30" data-astro-cid-y2nevnuy> <span class="relative z-10" data-i18n="common.exitPopup.submit" data-astro-cid-y2nevnuy>\xA1QUIERO MI DIAGN\xD3STICO GRATUITO AHORA!</span> <div class="absolute inset-0 bg-gradient-to-r from-izigna-info to-izigna-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-y2nevnuy></div> </button> </div> </form> <!-- Beneficios y testimonial r\xE1pido --> <div class="mt-4 bg-white/5 p-3 rounded-lg border border-white/10" data-astro-cid-y2nevnuy> <p class="text-white text-sm mb-2" data-i18n-html="common.exitPopup.includesHtml" data-astro-cid-y2nevnuy> <strong data-astro-cid-y2nevnuy>Incluye:</strong> An\xE1lisis de conversi\xF3n, revisi\xF3n SEO, competencia\n        y estrategia recomendada\n</p> <div class="flex items-center gap-2" data-astro-cid-y2nevnuy> <div class="flex" data-astro-cid-y2nevnuy> ', ' </div> <p class="text-xs text-white/70" data-i18n="common.exitPopup.testimonial" data-astro-cid-y2nevnuy>\n"Aumentamos nuestras ventas un 85% en 2 meses" - Carlos M.\n</p> </div> </div> <!-- Mensaje de confianza --> <div class="flex items-center justify-center gap-2 mt-4 text-xs text-white/60" data-astro-cid-y2nevnuy> ', ' <span data-i18n="common.exitPopup.trust" data-astro-cid-y2nevnuy>Garantizamos 100% de confidencialidad. Sin compromisos ni spam.</span> </div> </div> </div> <script type="module">\n  import { submitRelayForm } from "/js/form-relay.js";\n\n  let popupShown = false;\n  let exitPopup = document.getElementById("exit-popup");\n  let closePopup = document.getElementById("close-popup");\n  let popupForm = document.getElementById("exit-popup-form");\n  let popupStatusMessage = document.getElementById("exit-popup-message");\n  let hasSubmittedSuccessfully = false;\n  let __redirectBannerEl;\n  async function i18nValue(key, fallback) {\n    try {\n      const val = await window?.i18n?.t?.(key);\n      if (typeof val === "string" && val.trim() && val !== key) return val;\n    } catch (_) {\n      // Ignore errors when translating\n    }\n    return fallback;\n  }\n\n  async function showRedirectBanner(seconds) {\n    const existing = document.getElementById("redirect-banner");\n    if (existing && existing.parentElement) existing.remove();\n    const banner = document.createElement("div");\n    banner.id = "redirect-banner";\n    banner.className =\n      "mt-3 text-center bg-gradient-to-r from-izigna-primary/20 to-izigna-info/20 p-3 rounded-lg border border-izigna-primary/30 text-white";\n    const bannerHtml = await i18nValue(\n      "common.exitPopup.redirectBannerHtml",\n      \\`You are about to be redirected. In <span id="redirect-counter">{{seconds}}</span>s we will go to <strong>/gracias</strong>.\\`,\n    );\n    banner.innerHTML = \\`<div class="flex items-center justify-center gap-3"><svg class="w-4 h-4 text-izigna-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p>\\${String(bannerHtml).replace("{{seconds}}", String(seconds))}</p></div>\\`;\n    const popupContent = exitPopup\n      ? exitPopup.querySelector(".popup-content")\n      : null;\n    if (popupContent) {\n      popupContent.appendChild(banner);\n      __redirectBannerEl = banner;\n    } else {\n      document.body.appendChild(banner);\n      __redirectBannerEl = banner;\n    }\n  }\n  function updateRedirectBanner(seconds) {\n    const el = document.getElementById("redirect-counter");\n    if (el) el.textContent = String(seconds);\n    if (__redirectBannerEl && seconds <= 0) {\n      __redirectBannerEl.remove();\n      __redirectBannerEl = undefined;\n    }\n  }\n\n  // Mostrar el popup\n  function showPopup() {\n    if (!popupShown && exitPopup) {\n      exitPopup.classList.remove("hidden");\n      exitPopup.classList.remove("opacity-0", "pointer-events-none");\n      const popupContent = exitPopup.querySelector(".popup-content");\n      if (popupContent) {\n        setTimeout(() => {\n          popupContent.classList.remove("-translate-y-10");\n        }, 10);\n      }\n      popupShown = true;\n\n      // Guardar en sessionStorage para no mostrar de nuevo en esta sesi\xF3n\n      sessionStorage.setItem("exitPopupShown", "true");\n\n      // Registrar evento en analytics\n      if (typeof window !== "undefined" && typeof window.gtag === "function") {\n        window.gtag("event", "exit_popup_shown", {\n          event_category: "Engagement",\n          event_label: "Exit Intent Popup",\n        });\n      }\n      if (\n        typeof window !== "undefined" &&\n        typeof window.trackEvent === "function"\n      ) {\n        window.trackEvent("exit_popup_shown", { source: "exit_intent" });\n      }\n    }\n  }\n\n  // Cerrar el popup\n  function closeExitPopup() {\n    if (exitPopup) {\n      exitPopup.classList.add("opacity-0", "pointer-events-none");\n      const popupContent = exitPopup.querySelector(".popup-content");\n      if (popupContent) {\n        popupContent.classList.add("-translate-y-10");\n      }\n      setTimeout(() => {\n        exitPopup?.classList.add("hidden");\n      }, 300);\n    }\n  }\n\n  // Detectar intento de salida (movimiento del mouse hacia la barra superior)\n  function handleMouseLeave(e) {\n    // Solo activar si el mouse sale por la parte superior de la ventana\n    if (e.clientY <= 20 && !sessionStorage.getItem("exitPopupShown")) {\n      showPopup();\n    }\n  }\n\n  function initializeExitPopup() {\n    exitPopup = document.getElementById("exit-popup");\n    closePopup = document.getElementById("close-popup");\n    popupForm = document.getElementById("exit-popup-form");\n    popupStatusMessage = document.getElementById("exit-popup-message");\n\n    if (!exitPopup) return;\n    if (exitPopup.dataset.initialized === "true") return;\n    exitPopup.dataset.initialized = "true";\n\n    if (sessionStorage.getItem("exitPopupShown")) {\n      return;\n    }\n\n    // Mostrar popup tras 30 segundos de inactividad\n    const inactivityTimer = setTimeout(() => {\n      if (!popupShown) {\n        showPopup();\n      }\n    }, 30000);\n\n    // Reiniciar el timer si hay actividad\n    document.addEventListener("mousemove", () => {\n      clearTimeout(inactivityTimer);\n    });\n\n    document.addEventListener("mouseleave", handleMouseLeave);\n\n    if (closePopup) {\n      closePopup.addEventListener("click", closeExitPopup);\n    }\n\n    if (popupForm) {\n      if (popupForm.dataset.initialized === "true") return;\n      popupForm.dataset.initialized = "true";\n      popupForm.addEventListener("submit", async (e) => {\n        e.preventDefault();\n\n        if (popupForm.dataset.submitting === "true") {\n          return;\n        }\n\n        popupForm.dataset.submitting = "true";\n\n        const submitButton = popupForm.querySelector(\'button[type="submit"]\');\n        const defaultButtonMarkup = submitButton ? submitButton.innerHTML : "";\n\n        if (submitButton) {\n          submitButton.disabled = true;\n          const sending = await i18nValue(\n            "common.exitPopup.sending",\n            "Enviando...",\n          );\n          submitButton.innerHTML = \\`<span class="relative z-10">\\${sending}</span>\\`;\n        }\n\n        const showStatus = (message, type = "success") => {\n          if (!popupStatusMessage) return;\n          popupStatusMessage.textContent = message;\n          popupStatusMessage.classList.remove(\n            "hidden",\n            "text-red-400",\n            "text-green-400",\n          );\n          popupStatusMessage.classList.add(\n            type === "error" ? "text-red-400" : "text-green-400",\n          );\n        };\n\n        if (typeof window !== "undefined") {\n          if (typeof window.gtag === "function") {\n            window.gtag("event", "form_submit", {\n              event_category: "Exit Popup",\n              event_label: "Exit Popup Form Attempt",\n            });\n          }\n          if (typeof window.trackEvent === "function") {\n            window.trackEvent("exit_popup_submit", { form_id: "exit-popup" });\n          }\n        }\n\n        if (typeof window !== "undefined" && typeof window.fbq === "function") {\n          window.fbq("track", "Lead", {\n            source: "exit_popup",\n          });\n        }\n\n        try {\n          const defaultSuccess = await i18nValue(\n            "common.exitPopup.success",\n            "\xA1Gracias! En breve nos pondremos en contacto.",\n          );\n          const defaultError = await i18nValue(\n            "common.exitPopup.error",\n            "No pudimos enviar tu mensaje. Intenta nuevamente.",\n          );\n\n          const result = await submitRelayForm(popupForm, {\n            redirectOnSuccess: false,\n            maxRetries: 3,\n            onSuccess: (message) => {\n              showStatus(message || defaultSuccess, "success");\n            },\n            onError: (message) => {\n              showStatus(message || defaultError, "error");\n            },\n          });\n\n          if (result && result.ok) {\n            hasSubmittedSuccessfully = true;\n            popupForm.dataset.sent = "true";\n            popupForm.reset();\n            if (\n              typeof window !== "undefined" &&\n              typeof window.trackEvent === "function"\n            ) {\n              window.trackEvent("form_success", {\n                form_id: "exit-popup",\n                redirect: "/gracias",\n              });\n            }\n            const redirectPath = "/gracias";\n            let canShowRedirect = false;\n            try {\n              const targetUrl = new URL(redirectPath, window.location.origin);\n              canShowRedirect =\n                targetUrl.origin === window.location.origin &&\n                targetUrl.pathname === "/gracias";\n            } catch (_) {\n              canShowRedirect = false;\n            }\n            if (canShowRedirect) {\n              if (submitButton) {\n                submitButton.disabled = true;\n                const redirectingTpl = await i18nValue(\n                  "common.exitPopup.redirecting",\n                  "Redirigiendo en {{seconds}}s...",\n                );\n                submitButton.innerHTML = \\`<span class="relative z-10">\\${String(redirectingTpl).replace("{{seconds}}", "5")}</span>\\`;\n              }\n              if (\n                typeof window !== "undefined" &&\n                typeof window.trackEvent === "function"\n              ) {\n                window.trackEvent("redirect_initiated", {\n                  form_id: "exit-popup",\n                  redirect: "/gracias",\n                });\n              }\n              showRedirectBanner(5);\n              let remaining = 5;\n              const redirectingTpl = await i18nValue(\n                "common.exitPopup.redirecting",\n                "Redirigiendo en {{seconds}}s...",\n              );\n              const interval = setInterval(() => {\n                remaining -= 1;\n                updateRedirectBanner(remaining);\n                if (submitButton) {\n                  submitButton.innerHTML = \\`<span class="relative z-10">\\${String(redirectingTpl).replace("{{seconds}}", String(remaining))}</span>\\`;\n                }\n                if (remaining <= 0) {\n                  clearInterval(interval);\n                  const targetUrl = new URL(\n                    redirectPath,\n                    window.location.origin,\n                  );\n                  if (\n                    typeof window !== "undefined" &&\n                    typeof window.trackEvent === "function"\n                  ) {\n                    window.trackEvent("redirect_complete", {\n                      form_id: "exit-popup",\n                      redirect: "/gracias",\n                    });\n                    window.trackEvent("lead_conversion", {\n                      form_id: "exit-popup",\n                      redirect: "/gracias",\n                      value: 1,\n                      currency: "USD",\n                    });\n                  }\n                  window.location.assign(targetUrl.toString());\n                }\n              }, 1000);\n            }\n          }\n        } catch (error) {\n          const unexpected = await i18nValue(\n            "common.exitPopup.unexpectedError",\n            "Ocurri\xF3 un error inesperado. Intenta nuevamente.",\n          );\n          showStatus(unexpected, "error");\n        } finally {\n          popupForm.dataset.submitting = "false";\n          if (!hasSubmittedSuccessfully) {\n            if (submitButton) {\n              submitButton.disabled = false;\n              submitButton.innerHTML = defaultButtonMarkup;\n            }\n          }\n        }\n      });\n    }\n  }\n\n  // Inicializar eventos cuando el DOM est\xE9 listo y en navegaci\xF3n de Astro\n  document.addEventListener("DOMContentLoaded", initializeExitPopup);\n  document.addEventListener("astro:page-load", initializeExitPopup);\n<\/script> '])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "times", "class": "w-5 h-5", "aria-hidden": "true", "data-astro-cid-y2nevnuy": true }), renderComponent($$result, "Icon", $$Icon, { "name": "gift", "class": "w-8 h-8 text-white", "data-astro-cid-y2nevnuy": true }), Array.from({ length: 5 }).map((_) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "star", "class": "h-3 w-3 text-yellow-500", "data-astro-cid-y2nevnuy": true })}`), renderComponent($$result, "Icon", $$Icon, { "name": "lock", "class": "w-3 h-3", "data-astro-cid-y2nevnuy": true }));
}, "D:/MEGA/IzignaMx/izignamx/src/components/ExitPopup.astro", void 0);
var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$3, _b$3;
const $$Astro$4 = createAstro("https://izignamx.com");
const $$AdvancedSEOOptimizer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AdvancedSEOOptimizer;
  const {
    pageType,
    title,
    description,
    keywords = [],
    serviceData,
    breadcrumbs = [],
    enableLocalSEO = true,
    enableBreadcrumbs = true,
    enableFAQSchema = false,
    faqData = [],
    reviewData
  } = Astro2.props;
  const currentUrl = Astro2.url.href;
  const siteName = "IzignaMx";
  const siteUrl = "https://izignamx.com";
  const generateBreadcrumbs = () => {
    if (breadcrumbs.length > 0) return breadcrumbs;
    const pathSegments = Astro2.url.pathname.split("/").filter(Boolean);
    const autoBreadcrumbs = [
      { name: "Inicio", url: "/" }
    ];
    let currentPath = "";
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      let name = segment;
      if (segment === "services") name = "Servicios";
      else if (segment === "about") name = "Acerca de";
      else if (segment === "contact") name = "Contacto";
      else {
        name = segment.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      }
      autoBreadcrumbs.push({
        name,
        url: currentPath
      });
    });
    return autoBreadcrumbs;
  };
  const finalBreadcrumbs = enableBreadcrumbs ? generateBreadcrumbs() : [];
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": siteName,
    "alternateName": "Izigna Mexico",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/assets/img/logo.svg`,
      "width": "200",
      "height": "60"
    },
    "image": `${siteUrl}/assets/img/logo.svg`,
    "description": "Agencia digital especializada en desarrollo web, dise\xF1o gr\xE1fico y marketing digital en M\xE9xico.",
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "Equipo IzignaMx"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad de M\xE9xico",
      "addressRegion": "CDMX",
      "addressCountry": "MX"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+52-55-3376-0889",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"],
        "areaServed": "MX"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/izignamx",
      "https://www.linkedin.com/company/izignamx",
      "https://twitter.com/izignamx"
    ],
    "aggregateRating": reviewData ? {
      "@type": "AggregateRating",
      "ratingValue": reviewData.ratingValue,
      "reviewCount": reviewData.reviewCount,
      "bestRating": reviewData.bestRating || 5,
      "worstRating": reviewData.worstRating || 1
    } : void 0,
    "priceRange": "$$-$$$",
    "paymentAccepted": ["Credit Card", "Bank Transfer", "Cash"],
    "currenciesAccepted": "MXN",
    "serviceArea": {
      "@type": "Country",
      "name": "Mexico"
    }
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": siteName,
    "description": "Agencia digital especializada en desarrollo web, dise\xF1o gr\xE1fico y marketing digital.",
    "publisher": {
      "@id": `${siteUrl}/#organization`
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteUrl}/buscar?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "inLanguage": "es-MX"
  };
  let pageSchema = {};
  if (pageType === "homepage") {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      "url": currentUrl,
      "name": title,
      "description": description,
      "isPartOf": {
        "@id": `${siteUrl}/#website`
      },
      "about": {
        "@id": `${siteUrl}/#organization`
      },
      "mainEntity": {
        "@id": `${siteUrl}/#organization`
      },
      "inLanguage": "es-MX",
      "datePublished": "2020-01-01",
      "dateModified": (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
  } else if (pageType === "service" && serviceData) {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${currentUrl}#service`,
      "name": serviceData.name,
      "description": serviceData.description,
      "provider": {
        "@id": `${siteUrl}/#organization`
      },
      "serviceType": serviceData.category,
      "category": serviceData.category,
      "areaServed": {
        "@type": "Country",
        "name": "Mexico"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceData.name} - Servicios`,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": serviceData.name,
              "description": serviceData.description
            },
            "price": serviceData.price || "0",
            "priceCurrency": "MXN",
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0],
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": `${siteUrl}/#organization`
            }
          }
        ]
      },
      "aggregateRating": reviewData ? {
        "@type": "AggregateRating",
        "ratingValue": reviewData.ratingValue,
        "reviewCount": reviewData.reviewCount,
        "bestRating": reviewData.bestRating || 5,
        "worstRating": reviewData.worstRating || 1
      } : void 0
    };
  }
  const breadcrumbsSchema = finalBreadcrumbs.length > 1 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": finalBreadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.url}`
    }))
  } : null;
  const faqSchema = enableFAQSchema && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;
  const localBusinessSchema = enableLocalSEO ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    "name": siteName,
    "image": `${siteUrl}/assets/img/logo.svg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Agencia Digital",
      "addressLocality": "Ciudad de M\xE9xico",
      "addressRegion": "CDMX",
      "postalCode": "01000",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.4326,
      "longitude": -99.1332
    },
    "telephone": "+52-55-3376-0889",
    "email": "contacto@izignamx.com",
    "url": siteUrl,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$-$$$",
    "currenciesAccepted": "MXN",
    "paymentAccepted": ["Credit Card", "Bank Transfer", "Cash"],
    "areaServed": {
      "@type": "Country",
      "name": "Mexico"
    }
  } : null;
  detectUserLanguage(Astro2);
  const schemas = [
    organizationSchema,
    websiteSchema,
    pageSchema,
    breadcrumbsSchema,
    faqSchema,
    localBusinessSchema
  ].filter(Boolean);
  return renderTemplate(_b$3 || (_b$3 = __template$4(["<!-- Enhanced Meta Tags --><!-- Eliminado meta description duplicada, HeadMetaTags gestionar\xE1 la etiqueta -->", "<!-- Geo Tags for Local SEO Mexico -->", '<!-- Language and Regional Tags --><meta name="language" content="es-MX"><meta name="content-language" content="es-MX"><!-- Enhanced Open Graph --><!-- Eliminadas OG tags duplicadas; HeadMetaTags gestiona og:title, og:description, og:url, og:image --><!-- REMOVED to prevent duplicates: og:type, og:site_name, og:locale, og:image:width, og:image:height, og:image:type. HeadMetaTags already outputs the necessary OG tags. --><!-- Enhanced Canonical --><!-- Eliminado: canonical centralizado en HeadMetaTags --><!-- Enhanced Twitter Card --><!-- REMOVED to prevent duplicates: twitter:card, twitter:site, twitter:creator, twitter:title, twitter:description, twitter:image. HeadMetaTags already outputs Twitter Card tags. --><!-- Article Tags for Blog Posts -->', "<!-- Enhanced Canonical --><!-- Eliminado: canonical centralizado en HeadMetaTags --><!-- JSON-LD Structured Data -->", "<!-- Breadcrumbs HTML (for visual display) -->", `<!-- SEO Performance Optimizer --><script>
  (function() {
    'use strict';
    
    if (typeof window === 'undefined') return;
    
    const SEOPerformanceOptimizer = {
      // Optimize page for Core Web Vitals and SEO
      optimizeForSEO() {
        // Preload critical CSS
        this.preloadCriticalCSS();
        
        // Optimize images for SEO
        this.optimizeImagesForSEO();
        
        // Add missing alt attributes
        this.addMissingAltAttributes();
        
        // Optimize internal linking
        this.optimizeInternalLinking();
        
        // Monitor scroll depth for analytics
        this.trackScrollDepth();
      },
      
      preloadCriticalCSS() {
        // No critical CSS to preload; removed missing references
      },
      
      optimizeImagesForSEO() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          // Add loading attribute if missing
          if (!img.hasAttribute('loading')) {
            const rect = img.getBoundingClientRect();
            const isAboveFold = rect.top < window.innerHeight;
            img.loading = isAboveFold ? 'eager' : 'lazy';
          }
          
          // Add dimensions to prevent CLS
          if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
            const w = img.naturalWidth;
            const h = img.naturalHeight;
            if (w > 0 && h > 0) {
              img.setAttribute('width', String(w));
              img.setAttribute('height', String(h));
            } else {
              img.addEventListener('load', () => {
                if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
                  const nw = img.naturalWidth;
                  const nh = img.naturalHeight;
                  if (nw > 0 && nh > 0) {
                    img.setAttribute('width', String(nw));
                    img.setAttribute('height', String(nh));
                  }
                }
              }, { once: true });
              img.style.aspectRatio = '16/9';
              img.style.width = '100%';
              img.style.height = 'auto';
            }
          }
          
          // Optimize for SEO - only warn about actual missing alt text
          if (!img.alt && !img.hasAttribute('role') && !img.closest('[role="presentation"]')) {
            // Skip decorative images and icons
            const isIcon = img.src.includes('/icons/') || img.classList.contains('icon');
            const isDecorative = img.classList.contains('decorative') || img.getAttribute('aria-hidden') === 'true';
            
            if (!isIcon && !isDecorative) {
              if (window.location.hostname === 'localhost') {
                console.warn('Image missing alt text:', img.src);
              }
            }
          }
        });
      },
      
      addMissingAltAttributes() {
        const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
        imagesWithoutAlt.forEach(img => {
          // Try to derive alt text from context
          const figure = img.closest('figure');
          const figcaption = figure?.querySelector('figcaption');
          
          if (figcaption) {
            img.alt = figcaption.textContent.trim();
          } else {
            // Use filename as fallback
            const filename = img.src.split('/').pop().split('.')[0];
            img.alt = filename.replace(/-/g, ' ').replace(/_/g, ' ');
          }
        });
      },
      
      optimizeInternalLinking() {
        const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
        internalLinks.forEach(link => {
          // Add rel="noopener" for security
          if (link.target === '_blank' && !link.rel.includes('noopener')) {
            link.rel += ' noopener';
          }
          
          // Add title attribute if missing and text is available
          if (!link.title && link.textContent.trim()) {
            link.title = link.textContent.trim();
          }
        });
      },
      
      trackScrollDepth() {
        let maxScroll = 0;
        const milestones = [25, 50, 75, 90, 100];
        const tracked = new Set();
        
        const trackScroll = () => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          );
          
          maxScroll = Math.max(maxScroll, scrollPercent);
          
          milestones.forEach(milestone => {
            if (scrollPercent >= milestone && !tracked.has(milestone)) {
              tracked.add(milestone);
              
              // Send to analytics
              if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                window.gtag('event', 'scroll_depth', {
                  event_category: 'Engagement',
                  event_label: \`\${milestone}%\`,
                  value: milestone
                });
              }
            }
          });
        };
        
        let ticking = false;
        const onScroll = () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              trackScroll();
              ticking = false;
            });
            ticking = true;
          }
        };
        
        window.addEventListener('scroll', onScroll, { passive: true });
      },
      
      init() {
        this.optimizeForSEO();
        // SEO Performance Optimizer initialized
      }
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => SEOPerformanceOptimizer.init());
    } else {
      SEOPerformanceOptimizer.init();
    }
  })();
<\/script><!-- Breadcrumb Styles -->`], ["<!-- Enhanced Meta Tags --><!-- Eliminado meta description duplicada, HeadMetaTags gestionar\xE1 la etiqueta -->", "<!-- Geo Tags for Local SEO Mexico -->", '<!-- Language and Regional Tags --><meta name="language" content="es-MX"><meta name="content-language" content="es-MX"><!-- Enhanced Open Graph --><!-- Eliminadas OG tags duplicadas; HeadMetaTags gestiona og:title, og:description, og:url, og:image --><!-- REMOVED to prevent duplicates: og:type, og:site_name, og:locale, og:image:width, og:image:height, og:image:type. HeadMetaTags already outputs the necessary OG tags. --><!-- Enhanced Canonical --><!-- Eliminado: canonical centralizado en HeadMetaTags --><!-- Enhanced Twitter Card --><!-- REMOVED to prevent duplicates: twitter:card, twitter:site, twitter:creator, twitter:title, twitter:description, twitter:image. HeadMetaTags already outputs Twitter Card tags. --><!-- Article Tags for Blog Posts -->', "<!-- Enhanced Canonical --><!-- Eliminado: canonical centralizado en HeadMetaTags --><!-- JSON-LD Structured Data -->", "<!-- Breadcrumbs HTML (for visual display) -->", `<!-- SEO Performance Optimizer --><script>
  (function() {
    'use strict';
    
    if (typeof window === 'undefined') return;
    
    const SEOPerformanceOptimizer = {
      // Optimize page for Core Web Vitals and SEO
      optimizeForSEO() {
        // Preload critical CSS
        this.preloadCriticalCSS();
        
        // Optimize images for SEO
        this.optimizeImagesForSEO();
        
        // Add missing alt attributes
        this.addMissingAltAttributes();
        
        // Optimize internal linking
        this.optimizeInternalLinking();
        
        // Monitor scroll depth for analytics
        this.trackScrollDepth();
      },
      
      preloadCriticalCSS() {
        // No critical CSS to preload; removed missing references
      },
      
      optimizeImagesForSEO() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          // Add loading attribute if missing
          if (!img.hasAttribute('loading')) {
            const rect = img.getBoundingClientRect();
            const isAboveFold = rect.top < window.innerHeight;
            img.loading = isAboveFold ? 'eager' : 'lazy';
          }
          
          // Add dimensions to prevent CLS
          if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
            const w = img.naturalWidth;
            const h = img.naturalHeight;
            if (w > 0 && h > 0) {
              img.setAttribute('width', String(w));
              img.setAttribute('height', String(h));
            } else {
              img.addEventListener('load', () => {
                if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
                  const nw = img.naturalWidth;
                  const nh = img.naturalHeight;
                  if (nw > 0 && nh > 0) {
                    img.setAttribute('width', String(nw));
                    img.setAttribute('height', String(nh));
                  }
                }
              }, { once: true });
              img.style.aspectRatio = '16/9';
              img.style.width = '100%';
              img.style.height = 'auto';
            }
          }
          
          // Optimize for SEO - only warn about actual missing alt text
          if (!img.alt && !img.hasAttribute('role') && !img.closest('[role="presentation"]')) {
            // Skip decorative images and icons
            const isIcon = img.src.includes('/icons/') || img.classList.contains('icon');
            const isDecorative = img.classList.contains('decorative') || img.getAttribute('aria-hidden') === 'true';
            
            if (!isIcon && !isDecorative) {
              if (window.location.hostname === 'localhost') {
                console.warn('Image missing alt text:', img.src);
              }
            }
          }
        });
      },
      
      addMissingAltAttributes() {
        const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
        imagesWithoutAlt.forEach(img => {
          // Try to derive alt text from context
          const figure = img.closest('figure');
          const figcaption = figure?.querySelector('figcaption');
          
          if (figcaption) {
            img.alt = figcaption.textContent.trim();
          } else {
            // Use filename as fallback
            const filename = img.src.split('/').pop().split('.')[0];
            img.alt = filename.replace(/-/g, ' ').replace(/_/g, ' ');
          }
        });
      },
      
      optimizeInternalLinking() {
        const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
        internalLinks.forEach(link => {
          // Add rel="noopener" for security
          if (link.target === '_blank' && !link.rel.includes('noopener')) {
            link.rel += ' noopener';
          }
          
          // Add title attribute if missing and text is available
          if (!link.title && link.textContent.trim()) {
            link.title = link.textContent.trim();
          }
        });
      },
      
      trackScrollDepth() {
        let maxScroll = 0;
        const milestones = [25, 50, 75, 90, 100];
        const tracked = new Set();
        
        const trackScroll = () => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          );
          
          maxScroll = Math.max(maxScroll, scrollPercent);
          
          milestones.forEach(milestone => {
            if (scrollPercent >= milestone && !tracked.has(milestone)) {
              tracked.add(milestone);
              
              // Send to analytics
              if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                window.gtag('event', 'scroll_depth', {
                  event_category: 'Engagement',
                  event_label: \\\`\\\${milestone}%\\\`,
                  value: milestone
                });
              }
            }
          });
        };
        
        let ticking = false;
        const onScroll = () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              trackScroll();
              ticking = false;
            });
            ticking = true;
          }
        };
        
        window.addEventListener('scroll', onScroll, { passive: true });
      },
      
      init() {
        this.optimizeForSEO();
        // SEO Performance Optimizer initialized
      }
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => SEOPerformanceOptimizer.init());
    } else {
      SEOPerformanceOptimizer.init();
    }
  })();
<\/script><!-- Breadcrumb Styles -->`])), keywords.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(keywords.join(", "), "content")}>`, enableLocalSEO && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta name="geo.region" content="MX-CMX"><meta name="geo.placename" content="Ciudad de México"><meta name="geo.position" content="19.4326;-99.1332"><meta name="ICBM" content="19.4326, -99.1332">` })}`, pageType === "blog" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:publisher" content="https://www.facebook.com/izignamx"><meta property="article:author" content="IzignaMx"><meta property="article:section" content="Digital Marketing"><meta property="article:tag"${addAttribute(keywords.join(","), "content")}>` })}`, schemas.map((schema) => renderTemplate(_a$3 || (_a$3 = __template$4(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema, null, 0)))), enableBreadcrumbs && finalBreadcrumbs.length > 1 && renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="breadcrumbs" data-component="breadcrumbs"><ol class="breadcrumb-list">${finalBreadcrumbs.map((crumb, index) => renderTemplate`<li class="breadcrumb-item">${index === finalBreadcrumbs.length - 1 ? renderTemplate`<span aria-current="page" class="breadcrumb-current">${crumb.name}</span>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<a${addAttribute(crumb.url, "href")} class="breadcrumb-link">${crumb.name}</a><span class="breadcrumb-separator" aria-hidden="true">/</span>` })}`}</li>`)}</ol></nav>`);
}, "D:/MEGA/IzignaMx/izignamx/src/components/AdvancedSEOOptimizer.astro", void 0);
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$2, _b$2, _c$2;
const $$Astro$3 = createAstro("https://izignamx.com");
const $$StaticSEOOptimizer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StaticSEOOptimizer;
  const {
    title,
    description,
    keywords = [],
    serviceData,
    breadcrumbs = [],
    enableLocalSEO = true,
    enableBreadcrumbs = true,
    enableFAQSchema = false,
    faqData = [],
    reviewData
  } = Astro2.props;
  const businessInfo = {
    name: "IzignaMx",
    legalName: "IzignaMx",
    url: "https://izignamx.com",
    logo: "https://izignamx.com/assets/img/logo.png",
    description: "Agencia digital especializada en desarrollo web, dise\xF1o gr\xE1fico y soluciones tecnol\xF3gicas innovadoras en M\xE9xico.",
    address: {
      streetAddress: "Av. Revoluci\xF3n 123",
      addressLocality: "Ciudad de M\xE9xico",
      addressRegion: "CDMX",
      postalCode: "06000",
      addressCountry: "MX"
    },
    contactPoint: {
      telephone: "+52-55-1234-5678",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"]
    },
    sameAs: [
      "https://www.facebook.com/izignamx",
      "https://www.instagram.com/izignamx",
      "https://www.linkedin.com/company/izignamx",
      "https://twitter.com/izignamx"
    ]
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessInfo.name,
    "legalName": businessInfo.legalName,
    "url": businessInfo.url,
    "logo": businessInfo.logo,
    "description": businessInfo.description,
    "address": {
      "@type": "PostalAddress",
      ...businessInfo.address
    },
    "contactPoint": {
      "@type": "ContactPoint",
      ...businessInfo.contactPoint
    },
    "sameAs": businessInfo.sameAs
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": Astro2.url.href,
    "isPartOf": {
      "@type": "WebSite",
      "name": businessInfo.name,
      "url": businessInfo.url
    },
    "about": {
      "@type": "Organization",
      "name": businessInfo.name
    },
    "publisher": {
      "@type": "Organization",
      "name": businessInfo.name,
      "logo": businessInfo.logo
    }
  };
  const serviceSchema = serviceData ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "provider": {
      "@type": "Organization",
      "name": businessInfo.name,
      "url": businessInfo.url
    },
    "category": serviceData.category,
    "areaServed": {
      "@type": "Country",
      "name": "Mexico"
    },
    ...serviceData.price && {
      "offers": {
        "@type": "Offer",
        "price": serviceData.price,
        "priceCurrency": "MXN"
      }
    }
  } : null;
  const breadcrumbSchema = enableBreadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;
  const faqSchema = enableFAQSchema && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;
  const reviewSchema = reviewData ? {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": reviewData.ratingValue,
    "reviewCount": reviewData.reviewCount,
    "bestRating": reviewData.bestRating || 5,
    "worstRating": reviewData.worstRating || 1
  } : null;
  const allSchemas = [organizationSchema, webPageSchema, serviceSchema, breadcrumbSchema, faqSchema, reviewSchema].filter(Boolean);
  return renderTemplate(_c$2 || (_c$2 = __template$3(["<!-- Meta tags adicionales para SEO -->", '<!-- Meta tags espec\xEDficos para M\xE9xico --><meta name="geo.region" content="MX"><meta name="geo.country" content="Mexico"><meta name="geo.placename" content="Ciudad de M\xE9xico"><meta name="language" content="es-MX"><!-- Meta tags para redes sociales locales --><meta property="og:locale" content="es_MX"><meta property="og:locale:alternate" content="en_US"><!-- Schema.org JSON-LD -->', "<!-- Breadcrumbs microdata (fallback) -->", "<!-- Local Business SEO (si est\xE1 habilitado) -->", `<!-- Meta tags para performance --><meta name="format-detection" content="telephone=no"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><!-- DNS prefetch para recursos externos --><link rel="dns-prefetch" href="//fonts.googleapis.com"><link rel="dns-prefetch" href="//fonts.gstatic.com"><link rel="dns-prefetch" href="//www.google-analytics.com"><!-- Preconnect para recursos cr\xEDticos --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><style>
  /* Estilos cr\xEDticos para SEO */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  /* Optimizaci\xF3n para Core Web Vitals */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Prevenir layout shift */
  [loading="lazy"] {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  [loading="lazy"].loaded {
    opacity: 1;
  }
</style><script>
  // Optimizaciones SEO del lado del cliente
  (function() {
    'use strict';
    
    // Marcar im\xE1genes lazy como cargadas
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
      });
    }
    
    // Optimizar enlaces externos
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('rel', 'noopener noreferrer');
        if (!link.hasAttribute('target')) {
          link.setAttribute('target', '_blank');
        }
      }
    });
    
    // Mejorar accesibilidad de enlaces
    document.querySelectorAll('a').forEach(link => {
      if (!link.getAttribute('aria-label') && !link.textContent.trim()) {
        const img = link.querySelector('img');
        if (img && img.alt) {
          link.setAttribute('aria-label', img.alt);
        }
      }
    });
    
    console.log('\u2705 SEO est\xE1tico inicializado');
  })();
<\/script>`])), keywords.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(keywords.join(", "), "content")}>`, allSchemas.map((schema) => renderTemplate(_a$2 || (_a$2 = __template$3(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)))), enableBreadcrumbs && breadcrumbs.length > 0 && renderTemplate`${maybeRenderHead()}<div itemscope itemtype="https://schema.org/BreadcrumbList" style="display: none;">${breadcrumbs.map((crumb, index) => renderTemplate`<div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a itemprop="item"${addAttribute(crumb.url, "href")}><span itemprop="name">${crumb.name}</span></a><meta itemprop="position"${addAttribute(String(index + 1), "content")}></div>`)}</div>`, enableLocalSEO && renderTemplate(_b$2 || (_b$2 = __template$3(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "description": businessInfo.description,
    "url": businessInfo.url,
    "telephone": businessInfo.contactPoint.telephone,
    "address": {
      "@type": "PostalAddress",
      ...businessInfo.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.4326",
      "longitude": "-99.1332"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "sameAs": businessInfo.sameAs
  }))));
}, "D:/MEGA/IzignaMx/izignamx/src/components/StaticSEOOptimizer.astro", void 0);
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$1, _b$1, _c$1, _e;
const $$Astro$2 = createAstro("https://izignamx.com");
const $$AdvancedServerOptimizer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AdvancedServerOptimizer;
  const {
    enableNeuroMarketing = true,
    enablePerformanceMonitoring = true,
    enableAdvancedCaching = true,
    performanceBudget = {
      lcp: 2500,
      fid: 100,
      cls: 0.1,
      fcp: 1800,
      inp: 200
    },
    cacheStrategy = "moderate",
    enableA11yEnhancements = true
  } = Astro2.props;
  const isProduction = true;
  const isDevelopment = false;
  const cacheStrategies = {
    aggressive: {
      static: "max-age=31536000, immutable",
      // 1 año
      dynamic: "max-age=3600, stale-while-revalidate=86400",
      // 1 hora
      api: "max-age=300, stale-while-revalidate=600"
      // 5 minutos
    },
    moderate: {
      static: "max-age=2592000, immutable",
      // 30 días
      dynamic: "max-age=1800, stale-while-revalidate=3600",
      // 30 minutos  
      api: "max-age=120, stale-while-revalidate=300"
      // 2 minutos
    },
    conservative: {
      static: "max-age=86400",
      // 1 día
      dynamic: "max-age=300, stale-while-revalidate=600",
      // 5 minutos
      api: "max-age=60, stale-while-revalidate=120"
      // 1 minuto
    }
  };
  const currentCacheStrategy = cacheStrategies[cacheStrategy];
  return renderTemplate(_e || (_e = __template$2(["<!-- Core Web Vitals Optimizer --><script>(function(){", "\n  (function() {\n    'use strict';\n    \n    if (!enablePerformanceMonitoring || typeof window === 'undefined') return;\n    \n    // Advanced Core Web Vitals Monitoring\n    const CoreWebVitalsOptimizer = {\n      metrics: {},\n      budgets: performanceBudget,\n      \n      // Optimized LCP (Largest Contentful Paint)\n      optimizeLCP() {\n        // Preload critical resources\n        const criticalResources = [\n          '/fonts/ADAM.CG PRO-webfont.woff2'\n        ];\n        \n        criticalResources.forEach(resource => {\n          if (!document.querySelector(`link[href=\"${resource}\"]`)) {\n            const link = document.createElement('link');\n            link.rel = 'preload';\n            link.href = resource;\n            link.as = resource.includes('font') ? 'font' : 'image';\n            if (resource.includes('font')) link.crossOrigin = 'anonymous';\n            document.head.appendChild(link);\n          }\n        });\n        \n        // Optimize images for LCP\n        const heroImages = document.querySelectorAll('img[data-lcp-candidate=\"true\"], .hero img, .banner img');\n        heroImages.forEach(img => {\n          img.loading = 'eager';\n          img.fetchPriority = 'high';\n        });\n      },\n      \n      // Optimized FID/INP (First Input Delay / Interaction to Next Paint)\n      optimizeInteractivity() {\n        // Defer non-critical JavaScript\n        const nonCriticalScripts = document.querySelectorAll('script[data-defer=\"true\"]');\n        nonCriticalScripts.forEach(script => {\n          if (script.src) {\n            const newScript = document.createElement('script');\n            newScript.src = script.src;\n            newScript.defer = true;\n            script.parentNode.replaceChild(newScript, script);\n          }\n        });\n        \n        // Optimize event listeners with passive handlers\n        const optimizeEventListeners = () => {\n          ['touchstart', 'touchmove', 'wheel', 'scroll'].forEach(eventType => {\n            document.addEventListener(eventType, () => {}, { passive: true });\n          });\n        };\n        \n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', optimizeEventListeners);\n        } else {\n          optimizeEventListeners();\n        }\n      },\n      \n      // Optimized CLS (Cumulative Layout Shift)\n      optimizeCLS() {\n        const images = document.querySelectorAll('img:not([width]):not([height])');\n        images.forEach(img => {\n          const w = img.naturalWidth;\n          const h = img.naturalHeight;\n          if (w > 0 && h > 0) {\n            img.setAttribute('width', String(w));\n            img.setAttribute('height', String(h));\n            if (!img.hasAttribute('decoding')) {\n              img.setAttribute('decoding', 'async');\n            }\n          } else {\n            img.addEventListener('load', () => {\n              if (!img.hasAttribute('width') && !img.hasAttribute('height')) {\n                const nw = img.naturalWidth;\n                const nh = img.naturalHeight;\n                if (nw > 0 && nh > 0) {\n                  img.setAttribute('width', String(nw));\n                  img.setAttribute('height', String(nh));\n                  if (!img.hasAttribute('decoding')) {\n                    img.setAttribute('decoding', 'async');\n                  }\n                }\n              }\n            }, { once: true });\n            img.style.aspectRatio = '16/9';\n            img.style.width = '100%';\n            img.style.height = 'auto';\n          }\n        });\n        \n        // Reserve space for dynamic content\n        const dynamicElements = document.querySelectorAll('[data-dynamic-content]');\n        dynamicElements.forEach(el => {\n          if (!el.style.minHeight) {\n            el.style.minHeight = el.dataset.dynamicContentHeight || '200px';\n          }\n          if (!el.style.contentVisibility) {\n            el.style.contentVisibility = 'auto';\n          }\n          el.style.setProperty('contain-intrinsic-size', el.dataset.dynamicContentHeight || '0 200px');\n        });\n        \n        // Optimize font loading to prevent FOIT/FOUT\n        if ('fontDisplay' in document.documentElement.style) {\n          const style = document.createElement('style');\n          style.textContent = `\n            @font-face {\n              font-family: system;\n              font-display: swap;\n            }\n          `;\n          document.head.appendChild(style);\n        }\n      },\n      \n      // Performance monitoring and alerting\n      monitorMetrics() {\n        if (!('PerformanceObserver' in window)) return;\n        \n        // Monitor LCP\n        new PerformanceObserver((entryList) => {\n          const entries = entryList.getEntries();\n          const lastEntry = entries[entries.length - 1];\n          this.metrics.lcp = lastEntry.startTime;\n          \n          if (this.metrics.lcp > this.budgets.lcp) {\n            console.warn(`\u26A0\uFE0F LCP budget exceeded: ${this.metrics.lcp}ms (budget: ${this.budgets.lcp}ms)`);\n            this.triggerPerformanceAlert('lcp', this.metrics.lcp);\n          }\n        }).observe({ type: 'largest-contentful-paint', buffered: true });\n        \n        // Monitor FID\n        new PerformanceObserver((entryList) => {\n          entryList.getEntries().forEach(entry => {\n            this.metrics.fid = entry.processingStart - entry.startTime;\n            \n            if (this.metrics.fid > this.budgets.fid) {\n              console.warn(`\u26A0\uFE0F FID budget exceeded: ${this.metrics.fid}ms (budget: ${this.budgets.fid}ms)`);\n              this.triggerPerformanceAlert('fid', this.metrics.fid);\n            }\n          });\n        }).observe({ type: 'first-input', buffered: true });\n        \n        // Monitor CLS\n        let clsValue = 0;\n        new PerformanceObserver((entryList) => {\n          entryList.getEntries().forEach(entry => {\n            if (!entry.hadRecentInput) {\n              clsValue += entry.value;\n            }\n          });\n          \n          this.metrics.cls = clsValue;\n          \n          if (this.metrics.cls > this.budgets.cls) {\n            console.warn(`\u26A0\uFE0F CLS budget exceeded: ${this.metrics.cls} (budget: ${this.budgets.cls})`);\n            this.triggerPerformanceAlert('cls', this.metrics.cls);\n          }\n        }).observe({ type: 'layout-shift', buffered: true });\n      },\n      \n      triggerPerformanceAlert(metric, value) {\n        // Send to analytics or monitoring service\n        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {\n          window.gtag('event', 'performance_budget_exceeded', {\n            custom_parameter_1: metric,\n            custom_parameter_2: value,\n            value: value\n          });\n        }\n        \n        // Send to console in development\n        if (window.location.hostname === 'localhost') {\n          console.group('\u{1F6A8} Performance Budget Alert');\n          // Performance budget exceeded\n          console.groupEnd();\n        }\n      },\n      \n      init() {\n        // Run optimizations\n        this.optimizeLCP();\n        this.optimizeInteractivity();\n        this.optimizeCLS();\n        \n        // Start monitoring\n        if (enablePerformanceMonitoring) {\n          this.monitorMetrics();\n        }\n        \n        // Advanced Core Web Vitals Optimizer initialized\n      }\n    };\n    \n    // Initialize when DOM is ready\n    if (document.readyState === 'loading') {\n      document.addEventListener('DOMContentLoaded', () => CoreWebVitalsOptimizer.init());\n    } else {\n      CoreWebVitalsOptimizer.init();\n    }\n  })();\n})();<\/script> <!-- Advanced Caching Strategy -->", "<!-- Neuro-Marketing Optimizer -->", "<!-- Enhanced Accessibility Features -->", "<!-- Development-only performance insights -->", "<!-- CSS for neuro-marketing and accessibility enhancements -->"], ["<!-- Core Web Vitals Optimizer --><script>(function(){", "\n  (function() {\n    'use strict';\n    \n    if (!enablePerformanceMonitoring || typeof window === 'undefined') return;\n    \n    // Advanced Core Web Vitals Monitoring\n    const CoreWebVitalsOptimizer = {\n      metrics: {},\n      budgets: performanceBudget,\n      \n      // Optimized LCP (Largest Contentful Paint)\n      optimizeLCP() {\n        // Preload critical resources\n        const criticalResources = [\n          '/fonts/ADAM.CG PRO-webfont.woff2'\n        ];\n        \n        criticalResources.forEach(resource => {\n          if (!document.querySelector(\\`link[href=\"\\${resource}\"]\\`)) {\n            const link = document.createElement('link');\n            link.rel = 'preload';\n            link.href = resource;\n            link.as = resource.includes('font') ? 'font' : 'image';\n            if (resource.includes('font')) link.crossOrigin = 'anonymous';\n            document.head.appendChild(link);\n          }\n        });\n        \n        // Optimize images for LCP\n        const heroImages = document.querySelectorAll('img[data-lcp-candidate=\"true\"], .hero img, .banner img');\n        heroImages.forEach(img => {\n          img.loading = 'eager';\n          img.fetchPriority = 'high';\n        });\n      },\n      \n      // Optimized FID/INP (First Input Delay / Interaction to Next Paint)\n      optimizeInteractivity() {\n        // Defer non-critical JavaScript\n        const nonCriticalScripts = document.querySelectorAll('script[data-defer=\"true\"]');\n        nonCriticalScripts.forEach(script => {\n          if (script.src) {\n            const newScript = document.createElement('script');\n            newScript.src = script.src;\n            newScript.defer = true;\n            script.parentNode.replaceChild(newScript, script);\n          }\n        });\n        \n        // Optimize event listeners with passive handlers\n        const optimizeEventListeners = () => {\n          ['touchstart', 'touchmove', 'wheel', 'scroll'].forEach(eventType => {\n            document.addEventListener(eventType, () => {}, { passive: true });\n          });\n        };\n        \n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', optimizeEventListeners);\n        } else {\n          optimizeEventListeners();\n        }\n      },\n      \n      // Optimized CLS (Cumulative Layout Shift)\n      optimizeCLS() {\n        const images = document.querySelectorAll('img:not([width]):not([height])');\n        images.forEach(img => {\n          const w = img.naturalWidth;\n          const h = img.naturalHeight;\n          if (w > 0 && h > 0) {\n            img.setAttribute('width', String(w));\n            img.setAttribute('height', String(h));\n            if (!img.hasAttribute('decoding')) {\n              img.setAttribute('decoding', 'async');\n            }\n          } else {\n            img.addEventListener('load', () => {\n              if (!img.hasAttribute('width') && !img.hasAttribute('height')) {\n                const nw = img.naturalWidth;\n                const nh = img.naturalHeight;\n                if (nw > 0 && nh > 0) {\n                  img.setAttribute('width', String(nw));\n                  img.setAttribute('height', String(nh));\n                  if (!img.hasAttribute('decoding')) {\n                    img.setAttribute('decoding', 'async');\n                  }\n                }\n              }\n            }, { once: true });\n            img.style.aspectRatio = '16/9';\n            img.style.width = '100%';\n            img.style.height = 'auto';\n          }\n        });\n        \n        // Reserve space for dynamic content\n        const dynamicElements = document.querySelectorAll('[data-dynamic-content]');\n        dynamicElements.forEach(el => {\n          if (!el.style.minHeight) {\n            el.style.minHeight = el.dataset.dynamicContentHeight || '200px';\n          }\n          if (!el.style.contentVisibility) {\n            el.style.contentVisibility = 'auto';\n          }\n          el.style.setProperty('contain-intrinsic-size', el.dataset.dynamicContentHeight || '0 200px');\n        });\n        \n        // Optimize font loading to prevent FOIT/FOUT\n        if ('fontDisplay' in document.documentElement.style) {\n          const style = document.createElement('style');\n          style.textContent = \\`\n            @font-face {\n              font-family: system;\n              font-display: swap;\n            }\n          \\`;\n          document.head.appendChild(style);\n        }\n      },\n      \n      // Performance monitoring and alerting\n      monitorMetrics() {\n        if (!('PerformanceObserver' in window)) return;\n        \n        // Monitor LCP\n        new PerformanceObserver((entryList) => {\n          const entries = entryList.getEntries();\n          const lastEntry = entries[entries.length - 1];\n          this.metrics.lcp = lastEntry.startTime;\n          \n          if (this.metrics.lcp > this.budgets.lcp) {\n            console.warn(\\`\u26A0\uFE0F LCP budget exceeded: \\${this.metrics.lcp}ms (budget: \\${this.budgets.lcp}ms)\\`);\n            this.triggerPerformanceAlert('lcp', this.metrics.lcp);\n          }\n        }).observe({ type: 'largest-contentful-paint', buffered: true });\n        \n        // Monitor FID\n        new PerformanceObserver((entryList) => {\n          entryList.getEntries().forEach(entry => {\n            this.metrics.fid = entry.processingStart - entry.startTime;\n            \n            if (this.metrics.fid > this.budgets.fid) {\n              console.warn(\\`\u26A0\uFE0F FID budget exceeded: \\${this.metrics.fid}ms (budget: \\${this.budgets.fid}ms)\\`);\n              this.triggerPerformanceAlert('fid', this.metrics.fid);\n            }\n          });\n        }).observe({ type: 'first-input', buffered: true });\n        \n        // Monitor CLS\n        let clsValue = 0;\n        new PerformanceObserver((entryList) => {\n          entryList.getEntries().forEach(entry => {\n            if (!entry.hadRecentInput) {\n              clsValue += entry.value;\n            }\n          });\n          \n          this.metrics.cls = clsValue;\n          \n          if (this.metrics.cls > this.budgets.cls) {\n            console.warn(\\`\u26A0\uFE0F CLS budget exceeded: \\${this.metrics.cls} (budget: \\${this.budgets.cls})\\`);\n            this.triggerPerformanceAlert('cls', this.metrics.cls);\n          }\n        }).observe({ type: 'layout-shift', buffered: true });\n      },\n      \n      triggerPerformanceAlert(metric, value) {\n        // Send to analytics or monitoring service\n        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {\n          window.gtag('event', 'performance_budget_exceeded', {\n            custom_parameter_1: metric,\n            custom_parameter_2: value,\n            value: value\n          });\n        }\n        \n        // Send to console in development\n        if (window.location.hostname === 'localhost') {\n          console.group('\u{1F6A8} Performance Budget Alert');\n          // Performance budget exceeded\n          console.groupEnd();\n        }\n      },\n      \n      init() {\n        // Run optimizations\n        this.optimizeLCP();\n        this.optimizeInteractivity();\n        this.optimizeCLS();\n        \n        // Start monitoring\n        if (enablePerformanceMonitoring) {\n          this.monitorMetrics();\n        }\n        \n        // Advanced Core Web Vitals Optimizer initialized\n      }\n    };\n    \n    // Initialize when DOM is ready\n    if (document.readyState === 'loading') {\n      document.addEventListener('DOMContentLoaded', () => CoreWebVitalsOptimizer.init());\n    } else {\n      CoreWebVitalsOptimizer.init();\n    }\n  })();\n})();<\/script> <!-- Advanced Caching Strategy -->", "<!-- Neuro-Marketing Optimizer -->", "<!-- Enhanced Accessibility Features -->", "<!-- Development-only performance insights -->", "<!-- CSS for neuro-marketing and accessibility enhancements -->"])), defineScriptVars({ performanceBudget, enablePerformanceMonitoring }), enableAdvancedCaching && renderTemplate(_a$1 || (_a$1 = __template$2(["<script>(function(){", `
    (function() {
      'use strict';
      
      if (typeof window === 'undefined' || !('caches' in window)) return;
      
      const AdvancedCacheManager = {
        strategy: cacheStrategy,
        config: currentCacheStrategy,
        
        // Intelligent cache warming
        warmCriticalCache() {
          const criticalResources = [
            '/',
            '/about',
            '/services/web-development'
          ];
          
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
              criticalResources.forEach(url => {
                fetch(url, { 
                  cache: 'force-cache',
                  mode: 'no-cors' 
                }).catch(() => {
                  // Silent fail for cross-origin resources
                });
              });
            });
          }
        },
        
        // Smart prefetching based on user behavior
        smartPrefetch() {
          // Evitar en desarrollo o conexiones lentas/ahorro de datos
          try {
            if (!isProd) return;
            if (navigator.connection && (navigator.connection.saveData || (navigator.connection.effectiveType && navigator.connection.effectiveType.includes('2g')))) {
              return;
            }
          } catch (_) { /* no-op */ }
          let prefetchedUrls = new Set();
          let mouseTimer;
          
          const prefetchUrl = (url) => {
            if (prefetchedUrls.has(url)) return;
            
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = url;
            document.head.appendChild(link);
            prefetchedUrls.add(url);
          };
          
          // Prefetch on mouse hover with delay
          document.addEventListener('mouseover', (e) => {
            const link = e.target.closest('a[href]');
            if (link && link.hostname === location.hostname) {
              clearTimeout(mouseTimer);
              mouseTimer = setTimeout(() => {
                prefetchUrl(link.href);
              }, 200); // 200ms delay to avoid over-prefetching
            }
          });
          
          // Prefetch visible links in viewport
          if ('IntersectionObserver' in window) {
            const linkObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const link = entry.target;
                  setTimeout(() => prefetchUrl(link.href), 1000);
                  linkObserver.unobserve(link);
                }
              });
            }, { rootMargin: '0px 0px 200px 0px' });
            
            // Observe internal links
            setTimeout(() => {
              document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').forEach(link => {
                linkObserver.observe(link);
              });
            }, 1200);
          }
        },
        
        // Memory-aware caching
        manageCacheMemory() {
          if ('storage' in navigator && 'estimate' in navigator.storage) {
            navigator.storage.estimate().then(estimate => {
              const usagePercentage = (estimate.usage / estimate.quota) * 100;
              
              if (usagePercentage > 80) {
                console.warn('\u{1F5C2}\uFE0F Storage usage high, cleaning old cache entries');
                // Trigger cache cleanup
                this.cleanOldCacheEntries();
              }
            });
          }
        },
        
        async cleanOldCacheEntries() {
          try {
            const cacheNames = await caches.keys();
            const oldCaches = cacheNames.filter(name => 
              name.includes('izigna-cache') && !name.includes('v1')
            );
            
            await Promise.all(oldCaches.map(name => caches.delete(name)));
            // Cleaned old cache entries
          } catch (error) {
            console.warn('Cache cleanup failed:', error);
          }
        },
        
        init() {
          this.warmCriticalCache();
          this.smartPrefetch();
          this.manageCacheMemory();
          
          // Advanced Cache Manager initialized
        }
      };
      
      // Initialize after page load
      window.addEventListener('load', () => {
        setTimeout(() => AdvancedCacheManager.init(), 1000);
      });
    })();
  })();<\/script>`])), defineScriptVars({ currentCacheStrategy, cacheStrategy, isProd: isProduction })), enableNeuroMarketing && renderTemplate(_b$1 || (_b$1 = __template$2([`<script>
    (function() {
      'use strict';
      
      if (typeof window === 'undefined') return;
      
      const NeuroMarketingOptimizer = {
        // Scarcity and urgency psychology
        createUrgency() {
          const urgencyTriggers = document.querySelectorAll('[data-urgency]');
          urgencyTriggers.forEach(element => {
            const urgencyType = element.dataset.urgency;
            
            switch (urgencyType) {
              case 'time':
                this.addTimeCountdown(element);
                break;
              case 'quantity':
                this.addQuantityScarcity(element);
                break;
              case 'social':
                this.addSocialProof(element);
                break;
            }
          });
        },
        
        addTimeCountdown(element) {
          const endTime = element.dataset.endTime || (Date.now() + 24 * 60 * 60 * 1000);
          const updateCountdown = () => {
            const timeLeft = new Date(endTime) - new Date();
            if (timeLeft > 0) {
              const hours = Math.floor(timeLeft / (1000 * 60 * 60));
              const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
              element.textContent = \`\u23F0 \${hours}h \${minutes}m restantes\`;
            }
          };
          
          updateCountdown();
          setInterval(updateCountdown, 60000); // Update every minute
        },
        
        addQuantityScarcity(element) {
          const remaining = element.dataset.remaining || Math.floor(Math.random() * 10) + 5;
          element.innerHTML = \`\u{1F525} Solo quedan <strong>\${remaining}</strong> disponibles\`;
        },
        
        addSocialProof(element) {
          const views = element.dataset.views || (Math.floor(Math.random() * 50) + 20);
          element.innerHTML = \`\u{1F465} <strong>\${views}</strong> personas est\xE1n viendo esto\`;
        },
        
        // Simplified interactions
        simplifyInteractions() {
          // Don't simplify forms that should remain as single-step
          const excludedFormIds = ['contactForm', 'contact-form', 'formulario-contacto', 'aiProjectForm', 'exit-popup-form'];
          const excludedSelectors = ['#contact form', '[data-single-step]', '.contact-form'];
          const forms = document.querySelectorAll('form');
          
          forms.forEach(form => {
            // Skip excluded forms (main contact form should stay single-step)
            if (excludedFormIds.includes(form.id) || form.hasAttribute('data-single-step')) {
              return;
            }
            
            // Check if form matches any excluded selector
            const isExcluded = excludedSelectors.some(selector => {
              try {
                return form.matches(selector) || form.closest(selector);
              } catch {
                return false;
              }
            });
            
            if (isExcluded) {
              return;
            }
            
            const formGroups = form.querySelectorAll('.form-group, .field-group, .input-group');
            if (formGroups.length <= 3) return; // Don't split small forms
            
            this.splitIntoGroups(formGroups);
          });
          
          this.addSmartDefaults();
        },
        
        splitIntoGroups(formGroups) {
          const groupsArray = Array.from(formGroups);
          const groupSize = 3;
          let currentGroup = 0;
          
          // Hide all but first group
          groupsArray.forEach((group, index) => {
            if (index >= groupSize) {
              group.style.display = 'none';
            }
          });
          
          // Add "Continue" buttons - only for forms that need multistep
          for (let i = groupSize - 1; i < groupsArray.length; i += groupSize) {
            if (i < groupsArray.length - 1) {
              const continueBtn = document.createElement('button');
              continueBtn.type = 'button';
              continueBtn.textContent = 'Continuar \u2192';
              continueBtn.className = 'btn btn-secondary mt-4';
              continueBtn.setAttribute('aria-label', 'Continuar al siguiente paso del formulario');
              
              continueBtn.addEventListener('click', () => {
                currentGroup++;
                const startIndex = currentGroup * groupSize;
                const endIndex = startIndex + groupSize;
                
                for (let j = startIndex; j < endIndex && j < groupsArray.length; j++) {
                  groupsArray[j].style.display = 'block';
                }
                
                continueBtn.style.display = 'none';
                
                // Focus on first field of newly shown group for accessibility
                const firstNewField = groupsArray[startIndex]?.querySelector('input, select, textarea');
                if (firstNewField) {
                  firstNewField.focus();
                }
              });
              
              groupsArray[i].after(continueBtn);
            }
          }
        },
        
        addSmartDefaults() {
          // Auto-fill country based on locale
          const countrySelects = document.querySelectorAll('select[name*="country"], select[name*="pais"]');
          countrySelects.forEach(select => {
            const mexicoOption = select.querySelector('option[value="MX"], option[value="Mexico"]');
            if (mexicoOption) {
              mexicoOption.selected = true;
            }
          });
        },
        
        // Emotional engagement
        enhanceEmotionalConnection() {
          // Add micro-interactions
          const buttons = document.querySelectorAll('button, .btn, [role="button"]');
          buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
              btn.style.transform = 'translateY(-2px)';
              btn.style.transition = 'transform 0.2s ease';
            });
            
            btn.addEventListener('mouseleave', () => {
              btn.style.transform = 'translateY(0)';
            });
            
            btn.addEventListener('click', () => {
              btn.style.transform = 'scale(0.95)';
              setTimeout(() => {
                btn.style.transform = 'translateY(-2px)';
              }, 150);
            });
          });
          
          // Add success celebrations
          this.addSuccessCelebrations();
        },
        
        addSuccessCelebrations() {
          const forms = document.querySelectorAll('form');
          forms.forEach(form => {
            form.addEventListener('submit', () => {
              if (form.checkValidity()) {
                this.triggerSuccessAnimation(form);
              }
            });
          });
        },
        
        triggerSuccessAnimation(element) {
        // Create confetti effect
        if (typeof window !== 'undefined' && typeof window.confetti === 'function') {
          window.confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } else {
            // Simple CSS animation fallback
            element.style.animation = 'pulse 0.6s ease-in-out';
          }
        },
        
        // Personalization
        implementPersonalization() {
          // Detect returning visitor
          const isReturning = localStorage.getItem('izigna_returning_visitor');
          if (isReturning) {
            document.body.classList.add('returning-visitor');
            this.personalizeForReturningVisitor();
          } else {
            localStorage.setItem('izigna_returning_visitor', 'true');
            document.body.classList.add('first-time-visitor');
          }
          
          // Detect user preferences
          this.detectUserPreferences();
        },
        
        personalizeForReturningVisitor() {
          // Show different messaging for returning visitors
          const welcomeTexts = document.querySelectorAll('[data-welcome-text]');
          welcomeTexts.forEach(text => {
            text.textContent = '\xA1Bienvenido de vuelta! \u{1F44B}';
          });
          
          // Pre-fill previous form data
          this.restorePreviousFormData();
        },
        
        restorePreviousFormData() {
          const savedData = JSON.parse(localStorage.getItem('izigna_form_data') || '{}');
          Object.keys(savedData).forEach(fieldName => {
            const field = document.querySelector(\`[name="\${fieldName}"]\`);
            if (field && field.type !== 'password') {
              field.value = savedData[fieldName];
            }
          });
        },
        
        detectUserPreferences() {
          // Detect device type and optimize accordingly
          const isMobile = window.innerWidth < 768;
          const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
          
          if (isMobile) {
            document.body.classList.add('mobile-optimized');
            this.optimizeForMobile();
          } else if (isTablet) {
            document.body.classList.add('tablet-optimized');
          }
          
          // Detect connection speed
          if ('connection' in navigator) {
            const connection = navigator.connection;
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
              document.body.classList.add('slow-connection');
              this.optimizeForSlowConnection();
            }
          }
        },
        
        optimizeForMobile() {
          // Increase touch targets
          const buttons = document.querySelectorAll('button, .btn, a');
          buttons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            if (rect.height < 44) {
              btn.style.minHeight = '44px';
              btn.style.padding = '12px 16px';
            }
          });
        },
        
        optimizeForSlowConnection() {
          // Reduce animations
          document.body.classList.add('reduced-motion');
          
          // Lazy load more aggressively
          const images = document.querySelectorAll('img[loading="lazy"]');
          images.forEach(img => {
            img.loading = 'lazy';
          });
        },
        
        init() {
          this.createUrgency();
          this.simplifyInteractions();
          this.enhanceEmotionalConnection();
          this.implementPersonalization();
          
          // Neuro-Marketing Optimizer initialized
        }
      };
      
      // Initialize when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => NeuroMarketingOptimizer.createUrgency());
      } else {
        NeuroMarketingOptimizer.createUrgency();
      }
    })();
  <\/script>`], [`<script>
    (function() {
      'use strict';
      
      if (typeof window === 'undefined') return;
      
      const NeuroMarketingOptimizer = {
        // Scarcity and urgency psychology
        createUrgency() {
          const urgencyTriggers = document.querySelectorAll('[data-urgency]');
          urgencyTriggers.forEach(element => {
            const urgencyType = element.dataset.urgency;
            
            switch (urgencyType) {
              case 'time':
                this.addTimeCountdown(element);
                break;
              case 'quantity':
                this.addQuantityScarcity(element);
                break;
              case 'social':
                this.addSocialProof(element);
                break;
            }
          });
        },
        
        addTimeCountdown(element) {
          const endTime = element.dataset.endTime || (Date.now() + 24 * 60 * 60 * 1000);
          const updateCountdown = () => {
            const timeLeft = new Date(endTime) - new Date();
            if (timeLeft > 0) {
              const hours = Math.floor(timeLeft / (1000 * 60 * 60));
              const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
              element.textContent = \\\`\u23F0 \\\${hours}h \\\${minutes}m restantes\\\`;
            }
          };
          
          updateCountdown();
          setInterval(updateCountdown, 60000); // Update every minute
        },
        
        addQuantityScarcity(element) {
          const remaining = element.dataset.remaining || Math.floor(Math.random() * 10) + 5;
          element.innerHTML = \\\`\u{1F525} Solo quedan <strong>\\\${remaining}</strong> disponibles\\\`;
        },
        
        addSocialProof(element) {
          const views = element.dataset.views || (Math.floor(Math.random() * 50) + 20);
          element.innerHTML = \\\`\u{1F465} <strong>\\\${views}</strong> personas est\xE1n viendo esto\\\`;
        },
        
        // Simplified interactions
        simplifyInteractions() {
          // Don't simplify forms that should remain as single-step
          const excludedFormIds = ['contactForm', 'contact-form', 'formulario-contacto', 'aiProjectForm', 'exit-popup-form'];
          const excludedSelectors = ['#contact form', '[data-single-step]', '.contact-form'];
          const forms = document.querySelectorAll('form');
          
          forms.forEach(form => {
            // Skip excluded forms (main contact form should stay single-step)
            if (excludedFormIds.includes(form.id) || form.hasAttribute('data-single-step')) {
              return;
            }
            
            // Check if form matches any excluded selector
            const isExcluded = excludedSelectors.some(selector => {
              try {
                return form.matches(selector) || form.closest(selector);
              } catch {
                return false;
              }
            });
            
            if (isExcluded) {
              return;
            }
            
            const formGroups = form.querySelectorAll('.form-group, .field-group, .input-group');
            if (formGroups.length <= 3) return; // Don't split small forms
            
            this.splitIntoGroups(formGroups);
          });
          
          this.addSmartDefaults();
        },
        
        splitIntoGroups(formGroups) {
          const groupsArray = Array.from(formGroups);
          const groupSize = 3;
          let currentGroup = 0;
          
          // Hide all but first group
          groupsArray.forEach((group, index) => {
            if (index >= groupSize) {
              group.style.display = 'none';
            }
          });
          
          // Add "Continue" buttons - only for forms that need multistep
          for (let i = groupSize - 1; i < groupsArray.length; i += groupSize) {
            if (i < groupsArray.length - 1) {
              const continueBtn = document.createElement('button');
              continueBtn.type = 'button';
              continueBtn.textContent = 'Continuar \u2192';
              continueBtn.className = 'btn btn-secondary mt-4';
              continueBtn.setAttribute('aria-label', 'Continuar al siguiente paso del formulario');
              
              continueBtn.addEventListener('click', () => {
                currentGroup++;
                const startIndex = currentGroup * groupSize;
                const endIndex = startIndex + groupSize;
                
                for (let j = startIndex; j < endIndex && j < groupsArray.length; j++) {
                  groupsArray[j].style.display = 'block';
                }
                
                continueBtn.style.display = 'none';
                
                // Focus on first field of newly shown group for accessibility
                const firstNewField = groupsArray[startIndex]?.querySelector('input, select, textarea');
                if (firstNewField) {
                  firstNewField.focus();
                }
              });
              
              groupsArray[i].after(continueBtn);
            }
          }
        },
        
        addSmartDefaults() {
          // Auto-fill country based on locale
          const countrySelects = document.querySelectorAll('select[name*="country"], select[name*="pais"]');
          countrySelects.forEach(select => {
            const mexicoOption = select.querySelector('option[value="MX"], option[value="Mexico"]');
            if (mexicoOption) {
              mexicoOption.selected = true;
            }
          });
        },
        
        // Emotional engagement
        enhanceEmotionalConnection() {
          // Add micro-interactions
          const buttons = document.querySelectorAll('button, .btn, [role="button"]');
          buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
              btn.style.transform = 'translateY(-2px)';
              btn.style.transition = 'transform 0.2s ease';
            });
            
            btn.addEventListener('mouseleave', () => {
              btn.style.transform = 'translateY(0)';
            });
            
            btn.addEventListener('click', () => {
              btn.style.transform = 'scale(0.95)';
              setTimeout(() => {
                btn.style.transform = 'translateY(-2px)';
              }, 150);
            });
          });
          
          // Add success celebrations
          this.addSuccessCelebrations();
        },
        
        addSuccessCelebrations() {
          const forms = document.querySelectorAll('form');
          forms.forEach(form => {
            form.addEventListener('submit', () => {
              if (form.checkValidity()) {
                this.triggerSuccessAnimation(form);
              }
            });
          });
        },
        
        triggerSuccessAnimation(element) {
        // Create confetti effect
        if (typeof window !== 'undefined' && typeof window.confetti === 'function') {
          window.confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } else {
            // Simple CSS animation fallback
            element.style.animation = 'pulse 0.6s ease-in-out';
          }
        },
        
        // Personalization
        implementPersonalization() {
          // Detect returning visitor
          const isReturning = localStorage.getItem('izigna_returning_visitor');
          if (isReturning) {
            document.body.classList.add('returning-visitor');
            this.personalizeForReturningVisitor();
          } else {
            localStorage.setItem('izigna_returning_visitor', 'true');
            document.body.classList.add('first-time-visitor');
          }
          
          // Detect user preferences
          this.detectUserPreferences();
        },
        
        personalizeForReturningVisitor() {
          // Show different messaging for returning visitors
          const welcomeTexts = document.querySelectorAll('[data-welcome-text]');
          welcomeTexts.forEach(text => {
            text.textContent = '\xA1Bienvenido de vuelta! \u{1F44B}';
          });
          
          // Pre-fill previous form data
          this.restorePreviousFormData();
        },
        
        restorePreviousFormData() {
          const savedData = JSON.parse(localStorage.getItem('izigna_form_data') || '{}');
          Object.keys(savedData).forEach(fieldName => {
            const field = document.querySelector(\\\`[name="\\\${fieldName}"]\\\`);
            if (field && field.type !== 'password') {
              field.value = savedData[fieldName];
            }
          });
        },
        
        detectUserPreferences() {
          // Detect device type and optimize accordingly
          const isMobile = window.innerWidth < 768;
          const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
          
          if (isMobile) {
            document.body.classList.add('mobile-optimized');
            this.optimizeForMobile();
          } else if (isTablet) {
            document.body.classList.add('tablet-optimized');
          }
          
          // Detect connection speed
          if ('connection' in navigator) {
            const connection = navigator.connection;
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
              document.body.classList.add('slow-connection');
              this.optimizeForSlowConnection();
            }
          }
        },
        
        optimizeForMobile() {
          // Increase touch targets
          const buttons = document.querySelectorAll('button, .btn, a');
          buttons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            if (rect.height < 44) {
              btn.style.minHeight = '44px';
              btn.style.padding = '12px 16px';
            }
          });
        },
        
        optimizeForSlowConnection() {
          // Reduce animations
          document.body.classList.add('reduced-motion');
          
          // Lazy load more aggressively
          const images = document.querySelectorAll('img[loading="lazy"]');
          images.forEach(img => {
            img.loading = 'lazy';
          });
        },
        
        init() {
          this.createUrgency();
          this.simplifyInteractions();
          this.enhanceEmotionalConnection();
          this.implementPersonalization();
          
          // Neuro-Marketing Optimizer initialized
        }
      };
      
      // Initialize when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => NeuroMarketingOptimizer.createUrgency());
      } else {
        NeuroMarketingOptimizer.createUrgency();
      }
    })();
  <\/script>`]))), enableA11yEnhancements && renderTemplate(_c$1 || (_c$1 = __template$2([`<script>
    (function() {
      'use strict';
      
      if (typeof window === 'undefined') return;
      
      const AccessibilityEnhancer = {
        // WCAG 2.1 AAA Compliance
        enhanceWCAGCompliance() {
          // Ensure all images have alt text
          const images = document.querySelectorAll('img:not([alt])');
          images.forEach(img => {
            img.alt = img.title || 'Imagen decorativa';
            img.setAttribute('role', 'presentation');
          });
          
          // Ensure proper heading hierarchy
          this.validateHeadingHierarchy();
          
          // Add focus indicators for custom elements
          this.enhanceFocusIndicators();
          
          // Add ARIA labels for interactive elements
          this.addMissingAriaLabels();
        },
        
        validateHeadingHierarchy() {
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          let previousLevel = 0;
          
          headings.forEach(heading => {
            const currentLevel = parseInt(heading.tagName.charAt(1));
            
            if (currentLevel - previousLevel > 1) {
              console.warn(\`\u26A0\uFE0F Heading hierarchy violation: \${heading.tagName} follows h\${previousLevel}\`);
              
              // Fix automatically if possible
              if (previousLevel > 0) {
                const correctedLevel = Math.min(previousLevel + 1, 6);
                const correctedTag = \`h\${correctedLevel}\`;
                const newHeading = document.createElement(correctedTag);
                newHeading.innerHTML = heading.innerHTML;
                newHeading.className = heading.className;
                heading.parentNode.replaceChild(newHeading, heading);
              }
            }
            
            previousLevel = currentLevel;
          });
        },
        
        enhanceFocusIndicators() {
          const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="button"]'
          );
          
          focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
              element.style.outline = '3px solid rgba(59, 130, 246, 0.8)';
              element.style.outlineOffset = '2px';
              element.style.borderRadius = '4px';
            });
            
            element.addEventListener('blur', () => {
              element.style.outline = '';
              element.style.outlineOffset = '';
            });
          });
        },
        
        addMissingAriaLabels() {
          // Add aria-label to buttons without accessible text
          const buttons = document.querySelectorAll('button:not([aria-label])');
          buttons.forEach(button => {
            if (!button.textContent.trim() && !button.querySelector('span:not([aria-hidden="true"])')) {
              const action = button.className.includes('close') ? 'Cerrar' :
                           button.className.includes('menu') ? 'Men\xFA' :
                           button.className.includes('search') ? 'Buscar' :
                           'Bot\xF3n';
              button.setAttribute('aria-label', action);
            }
          });
          
          // Add aria-hidden to decorative icons
          const decorativeIcons = document.querySelectorAll('i[class*="fa-"], svg:not([aria-label]):not([role])');
          decorativeIcons.forEach(icon => {
            if (!icon.hasAttribute('aria-hidden')) {
              icon.setAttribute('aria-hidden', 'true');
            }
          });
        },
        
        // Enhanced keyboard navigation
        enhanceKeyboardNavigation() {
          // Skip links
          if (!document.querySelector('.skip-to-content')) {
            const skipLink = document.createElement('a');
            skipLink.href = '#main-content';
            skipLink.className = 'skip-to-content';
            skipLink.textContent = 'Saltar al contenido principal';
            skipLink.style.cssText = \`
              position: absolute;
              top: -40px;
              left: 0;
              background: #000;
              color: #fff;
              padding: 8px 16px;
              text-decoration: none;
              z-index: 9999;
              transition: top 0.3s ease;
            \`;
            
            skipLink.addEventListener('focus', () => {
              skipLink.style.top = '0';
            });
            
            skipLink.addEventListener('blur', () => {
              skipLink.style.top = '-40px';
            });
            
            document.body.insertBefore(skipLink, document.body.firstChild);
          }
          
          // Enhanced tab navigation
          this.enhanceTabNavigation();
        },
        
        enhanceTabNavigation() {
          document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
              document.body.classList.add('keyboard-navigation');
              // track active element if needed
            }
            
            // Escape key handling for modals/dropdowns
            if (e.key === 'Escape') {
              const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
              if (openModal) {
                this.closeModal(openModal);
              }
              
              const openDropdown = document.querySelector('[aria-expanded="true"]');
              if (openDropdown) {
                openDropdown.setAttribute('aria-expanded', 'false');
                openDropdown.focus();
              }
            }
          });
          
          document.addEventListener('click', () => {
            document.body.classList.remove('keyboard-navigation');
          });
        },
        
        closeModal(modal) {
          modal.setAttribute('aria-hidden', 'true');
          modal.style.display = 'none';
          
          // Return focus to trigger element
          const triggerId = modal.dataset.triggeredBy;
          if (triggerId) {
            const trigger = document.getElementById(triggerId);
            if (trigger) trigger.focus();
          }
        },
        
        // Screen reader enhancements
        enhanceScreenReaderExperience() {
          // Add live regions for dynamic content
          if (!document.querySelector('[aria-live]')) {
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            liveRegion.id = 'live-region';
            document.body.appendChild(liveRegion);
          }
          
          // Announce page changes
          this.announcePageChanges();
          
          // Add landmarks if missing
          this.addLandmarks();
        },
        
        announcePageChanges() {
          const liveRegion = document.getElementById('live-region');
          if (!liveRegion) return;
          
          // Announce navigation changes
          let previousUrl = window.location.href;
          
          const observer = new MutationObserver(() => {
            if (window.location.href !== previousUrl) {
              previousUrl = window.location.href;
              const pageTitle = document.title.split(' | ')[0];
              liveRegion.textContent = \`P\xE1gina cargada: \${pageTitle}\`;
            }
          });
          
          observer.observe(document.body, { childList: true, subtree: true });
        },
        
        addLandmarks() {
          // Add main landmark if missing
          if (!document.querySelector('main, [role="main"]')) {
            const mainContent = document.querySelector('#main-content, .main-content, .container:first-of-type');
            if (mainContent && !mainContent.tagName === 'MAIN') {
              mainContent.setAttribute('role', 'main');
              mainContent.id = 'main-content';
            }
          }
          
          // Add navigation landmarks
          const navElements = document.querySelectorAll('nav:not([role]), .navigation:not([role])');
          navElements.forEach((nav, index) => {
            if (!nav.hasAttribute('role')) {
              nav.setAttribute('role', 'navigation');
              if (!nav.hasAttribute('aria-label')) {
                nav.setAttribute('aria-label', \`Navegaci\xF3n \${index + 1}\`);
              }
            }
          });
        },
        
        init() {
          this.enhanceWCAGCompliance();
          this.enhanceKeyboardNavigation();
          this.enhanceScreenReaderExperience();
          
          // Enhanced Accessibility features initialized
        }
      };
      
      // Initialize when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => AccessibilityEnhancer.init());
      } else {
        AccessibilityEnhancer.init();
      }
    })();
  <\/script>`], [`<script>
    (function() {
      'use strict';
      
      if (typeof window === 'undefined') return;
      
      const AccessibilityEnhancer = {
        // WCAG 2.1 AAA Compliance
        enhanceWCAGCompliance() {
          // Ensure all images have alt text
          const images = document.querySelectorAll('img:not([alt])');
          images.forEach(img => {
            img.alt = img.title || 'Imagen decorativa';
            img.setAttribute('role', 'presentation');
          });
          
          // Ensure proper heading hierarchy
          this.validateHeadingHierarchy();
          
          // Add focus indicators for custom elements
          this.enhanceFocusIndicators();
          
          // Add ARIA labels for interactive elements
          this.addMissingAriaLabels();
        },
        
        validateHeadingHierarchy() {
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          let previousLevel = 0;
          
          headings.forEach(heading => {
            const currentLevel = parseInt(heading.tagName.charAt(1));
            
            if (currentLevel - previousLevel > 1) {
              console.warn(\\\`\u26A0\uFE0F Heading hierarchy violation: \\\${heading.tagName} follows h\\\${previousLevel}\\\`);
              
              // Fix automatically if possible
              if (previousLevel > 0) {
                const correctedLevel = Math.min(previousLevel + 1, 6);
                const correctedTag = \\\`h\\\${correctedLevel}\\\`;
                const newHeading = document.createElement(correctedTag);
                newHeading.innerHTML = heading.innerHTML;
                newHeading.className = heading.className;
                heading.parentNode.replaceChild(newHeading, heading);
              }
            }
            
            previousLevel = currentLevel;
          });
        },
        
        enhanceFocusIndicators() {
          const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="button"]'
          );
          
          focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
              element.style.outline = '3px solid rgba(59, 130, 246, 0.8)';
              element.style.outlineOffset = '2px';
              element.style.borderRadius = '4px';
            });
            
            element.addEventListener('blur', () => {
              element.style.outline = '';
              element.style.outlineOffset = '';
            });
          });
        },
        
        addMissingAriaLabels() {
          // Add aria-label to buttons without accessible text
          const buttons = document.querySelectorAll('button:not([aria-label])');
          buttons.forEach(button => {
            if (!button.textContent.trim() && !button.querySelector('span:not([aria-hidden="true"])')) {
              const action = button.className.includes('close') ? 'Cerrar' :
                           button.className.includes('menu') ? 'Men\xFA' :
                           button.className.includes('search') ? 'Buscar' :
                           'Bot\xF3n';
              button.setAttribute('aria-label', action);
            }
          });
          
          // Add aria-hidden to decorative icons
          const decorativeIcons = document.querySelectorAll('i[class*="fa-"], svg:not([aria-label]):not([role])');
          decorativeIcons.forEach(icon => {
            if (!icon.hasAttribute('aria-hidden')) {
              icon.setAttribute('aria-hidden', 'true');
            }
          });
        },
        
        // Enhanced keyboard navigation
        enhanceKeyboardNavigation() {
          // Skip links
          if (!document.querySelector('.skip-to-content')) {
            const skipLink = document.createElement('a');
            skipLink.href = '#main-content';
            skipLink.className = 'skip-to-content';
            skipLink.textContent = 'Saltar al contenido principal';
            skipLink.style.cssText = \\\`
              position: absolute;
              top: -40px;
              left: 0;
              background: #000;
              color: #fff;
              padding: 8px 16px;
              text-decoration: none;
              z-index: 9999;
              transition: top 0.3s ease;
            \\\`;
            
            skipLink.addEventListener('focus', () => {
              skipLink.style.top = '0';
            });
            
            skipLink.addEventListener('blur', () => {
              skipLink.style.top = '-40px';
            });
            
            document.body.insertBefore(skipLink, document.body.firstChild);
          }
          
          // Enhanced tab navigation
          this.enhanceTabNavigation();
        },
        
        enhanceTabNavigation() {
          document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
              document.body.classList.add('keyboard-navigation');
              // track active element if needed
            }
            
            // Escape key handling for modals/dropdowns
            if (e.key === 'Escape') {
              const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
              if (openModal) {
                this.closeModal(openModal);
              }
              
              const openDropdown = document.querySelector('[aria-expanded="true"]');
              if (openDropdown) {
                openDropdown.setAttribute('aria-expanded', 'false');
                openDropdown.focus();
              }
            }
          });
          
          document.addEventListener('click', () => {
            document.body.classList.remove('keyboard-navigation');
          });
        },
        
        closeModal(modal) {
          modal.setAttribute('aria-hidden', 'true');
          modal.style.display = 'none';
          
          // Return focus to trigger element
          const triggerId = modal.dataset.triggeredBy;
          if (triggerId) {
            const trigger = document.getElementById(triggerId);
            if (trigger) trigger.focus();
          }
        },
        
        // Screen reader enhancements
        enhanceScreenReaderExperience() {
          // Add live regions for dynamic content
          if (!document.querySelector('[aria-live]')) {
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            liveRegion.id = 'live-region';
            document.body.appendChild(liveRegion);
          }
          
          // Announce page changes
          this.announcePageChanges();
          
          // Add landmarks if missing
          this.addLandmarks();
        },
        
        announcePageChanges() {
          const liveRegion = document.getElementById('live-region');
          if (!liveRegion) return;
          
          // Announce navigation changes
          let previousUrl = window.location.href;
          
          const observer = new MutationObserver(() => {
            if (window.location.href !== previousUrl) {
              previousUrl = window.location.href;
              const pageTitle = document.title.split(' | ')[0];
              liveRegion.textContent = \\\`P\xE1gina cargada: \\\${pageTitle}\\\`;
            }
          });
          
          observer.observe(document.body, { childList: true, subtree: true });
        },
        
        addLandmarks() {
          // Add main landmark if missing
          if (!document.querySelector('main, [role="main"]')) {
            const mainContent = document.querySelector('#main-content, .main-content, .container:first-of-type');
            if (mainContent && !mainContent.tagName === 'MAIN') {
              mainContent.setAttribute('role', 'main');
              mainContent.id = 'main-content';
            }
          }
          
          // Add navigation landmarks
          const navElements = document.querySelectorAll('nav:not([role]), .navigation:not([role])');
          navElements.forEach((nav, index) => {
            if (!nav.hasAttribute('role')) {
              nav.setAttribute('role', 'navigation');
              if (!nav.hasAttribute('aria-label')) {
                nav.setAttribute('aria-label', \\\`Navegaci\xF3n \\\${index + 1}\\\`);
              }
            }
          });
        },
        
        init() {
          this.enhanceWCAGCompliance();
          this.enhanceKeyboardNavigation();
          this.enhanceScreenReaderExperience();
          
          // Enhanced Accessibility features initialized
        }
      };
      
      // Initialize when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => AccessibilityEnhancer.init());
      } else {
        AccessibilityEnhancer.init();
      }
    })();
  <\/script>`]))), isDevelopment);
}, "D:/MEGA/IzignaMx/izignamx/src/components/AdvancedServerOptimizer.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://izignamx.com");
const $$AdvancedStorageManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdvancedStorageManager;
  const {
    enableLocalStorage = true,
    enableSessionStorage = true,
    enableIndexedDB = true,
    enableDataCompression = true,
    enableEncryption = false,
    // Solo para datos muy sensibles
    maxLocalStorageSize = 5e3,
    // 5MB
    maxSessionStorageSize = 2e3,
    // 2MB
    dbVersion = 1
  } = Astro2.props;
  const isDevelopment = false;
  return renderTemplate(_a || (_a = __template$1(["<script>(function(){", "\n  (function() {\n    'use strict';\n    \n    if (typeof window === 'undefined') return;\n    \n    // SOLID Principles Implementation\n    \n    // 1. Single Responsibility Principle - Each class has one responsibility\n    class StorageError extends Error {\n      constructor(message, storageType, operation) {\n        super(message);\n        this.name = 'StorageError';\n        this.storageType = storageType;\n        this.operation = operation;\n      }\n    }\n    \n    // 2. Interface Segregation Principle - Small, focused interfaces\n    class IStorageProvider {\n      async setItem(key, value, options = {}) {\n        key; value; options;\n        throw new Error('setItem must be implemented');\n      }\n      \n      async getItem(key, defaultValue = null) {\n        key; defaultValue;\n        throw new Error('getItem must be implemented');\n      }\n      \n      async removeItem(key) {\n        key;\n        throw new Error('removeItem must be implemented');\n      }\n      \n      async clear() {\n        throw new Error('clear must be implemented');\n      }\n      \n      async getSize() {\n        throw new Error('getSize must be implemented');\n      }\n      \n      isAvailable() {\n        throw new Error('isAvailable must be implemented');\n      }\n    }\n    \n    // 3. Open/Closed Principle - Open for extension, closed for modification\n    class LocalStorageProvider extends IStorageProvider {\n      constructor() {\n        super();\n        this.storage = window.localStorage;\n        this.prefix = 'izigna_';\n      }\n      \n      isAvailable() {\n        try {\n          const test = '__storage_test__';\n          this.storage.setItem(test, test);\n          this.storage.removeItem(test);\n          return true;\n        } catch {\n          return false;\n        }\n      }\n      \n      _getKey(key) {\n        return this.prefix + key;\n      }\n      \n      async setItem(key, value, options = {}) {\n        if (!this.isAvailable()) {\n          throw new StorageError('LocalStorage not available', 'localStorage', 'setItem');\n        }\n        \n        try {\n          const data = {\n            value,\n            timestamp: Date.now(),\n            expires: options.expires || null,\n            compressed: false,\n            encrypted: false\n          };\n          \n          let serialized = JSON.stringify(data);\n          \n          // Compression for large data\n          if (enableDataCompression && serialized.length > 1000) {\n            serialized = await this._compress(serialized);\n            data.compressed = true;\n          }\n          \n          // Encryption for sensitive data\n          if (enableEncryption && options.sensitive) {\n            serialized = await this._encrypt(serialized);\n            data.encrypted = true;\n          }\n          \n          // Check size limits\n          const size = new Blob([serialized]).size / 1024; // KB\n          if (size > maxLocalStorageSize) {\n            throw new StorageError(`Data too large: ${size}KB > ${maxLocalStorageSize}KB`, 'localStorage', 'setItem');\n          }\n          \n          this.storage.setItem(this._getKey(key), serialized);\n          \n          if (isDevelopment) {\n            // LocalStorage item stored\n          }\n        } catch (error) {\n          throw new StorageError(`Failed to store item: ${error.message}`, 'localStorage', 'setItem');\n        }\n      }\n      \n      async getItem(key, defaultValue = null) {\n        if (!this.isAvailable()) {\n          return defaultValue;\n        }\n        \n        try {\n          const item = this.storage.getItem(this._getKey(key));\n          if (!item) return defaultValue;\n          \n          let data = JSON.parse(item);\n          \n          // Check expiration\n          if (data.expires && Date.now() > data.expires) {\n            await this.removeItem(key);\n            return defaultValue;\n          }\n          \n          // Decompress if needed\n          if (data.compressed) {\n            data.value = await this._decompress(data.value);\n          }\n          \n          // Decrypt if needed\n          if (data.encrypted) {\n            data.value = await this._decrypt(data.value);\n          }\n          \n          return data.value;\n        } catch (error) {\n          console.warn(`Failed to retrieve item ${key}:`, error);\n          return defaultValue;\n        }\n      }\n      \n      async removeItem(key) {\n        if (!this.isAvailable()) return;\n        \n        try {\n          this.storage.removeItem(this._getKey(key));\n        } catch (error) {\n          throw new StorageError(`Failed to remove item: ${error.message}`, 'localStorage', 'removeItem');\n        }\n      }\n      \n      async clear() {\n        if (!this.isAvailable()) return;\n        \n        try {\n          const keys = Object.keys(this.storage).filter(key => key.startsWith(this.prefix));\n          keys.forEach(key => this.storage.removeItem(key));\n        } catch (error) {\n          throw new StorageError(`Failed to clear storage: ${error.message}`, 'localStorage', 'clear');\n        }\n      }\n      \n      async getSize() {\n        if (!this.isAvailable()) return 0;\n        \n        let size = 0;\n        try {\n          for (let key in this.storage) {\n            if (key.startsWith(this.prefix)) {\n              size += this.storage[key].length;\n            }\n          }\n          return size / 1024; // KB\n        } catch (error) {\n          return 0;\n        }\n      }\n      \n      async _compress(data) {\n        try {\n          const bytes = new TextEncoder().encode(data);\n          let binary = '';\n          for (let i = 0; i < bytes.length; i++) {\n            binary += String.fromCharCode(bytes[i]);\n          }\n          return btoa(binary);\n        } catch (error) {\n          console.warn('Compression failed, storing uncompressed:', error);\n          return data;\n        }\n      }\n      \n      async _decompress(data) {\n        try {\n          const binary = atob(data);\n          const bytes = new Uint8Array(binary.length);\n          for (let i = 0; i < binary.length; i++) {\n            bytes[i] = binary.charCodeAt(i);\n          }\n          return new TextDecoder().decode(bytes);\n        } catch (error) {\n          console.warn('Decompression failed:', error);\n          return data;\n        }\n      }\n      \n      async _encrypt(data) {\n        // Basic XOR encryption - for production use Web Crypto API\n        const key = 'izigna_secret_key_123';\n        let encrypted = '';\n        for (let i = 0; i < data.length; i++) {\n          encrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));\n        }\n        return btoa(encrypted);\n      }\n      \n      async _decrypt(data) {\n        const key = 'izigna_secret_key_123';\n        try {\n          const decoded = atob(data);\n          let decrypted = '';\n          for (let i = 0; i < decoded.length; i++) {\n            decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));\n          }\n          return decrypted;\n        } catch (error) {\n          console.warn('Decryption failed:', error);\n          return data;\n        }\n      }\n    }\n    \n    class SessionStorageProvider extends IStorageProvider {\n      constructor() {\n        super();\n        this.storage = window.sessionStorage;\n        this.prefix = 'izigna_session_';\n      }\n      \n      isAvailable() {\n        try {\n          const test = '__session_test__';\n          this.storage.setItem(test, test);\n          this.storage.removeItem(test);\n          return true;\n        } catch {\n          return false;\n        }\n      }\n      \n      _getKey(key) {\n        return this.prefix + key;\n      }\n      \n      async setItem(key, value) {\n        if (!this.isAvailable()) {\n          throw new StorageError('SessionStorage not available', 'sessionStorage', 'setItem');\n        }\n        \n        try {\n          const data = {\n            value,\n            timestamp: Date.now()\n          };\n          \n          const serialized = JSON.stringify(data);\n          const size = new Blob([serialized]).size / 1024; // KB\n          \n          if (size > maxSessionStorageSize) {\n            throw new StorageError(`Data too large: ${size}KB > ${maxSessionStorageSize}KB`, 'sessionStorage', 'setItem');\n          }\n          \n          this.storage.setItem(this._getKey(key), serialized);\n          \n          if (isDevelopment) {\n            // SessionStorage item stored\n          }\n        } catch (error) {\n          throw new StorageError(`Failed to store session item: ${error.message}`, 'sessionStorage', 'setItem');\n        }\n      }\n      \n      async getItem(key, defaultValue = null) {\n        if (!this.isAvailable()) return defaultValue;\n        \n        try {\n          const item = this.storage.getItem(this._getKey(key));\n          if (!item) return defaultValue;\n          \n          const data = JSON.parse(item);\n          return data.value;\n        } catch (error) {\n          console.warn(`Failed to retrieve session item ${key}:`, error);\n          return defaultValue;\n        }\n      }\n      \n      async removeItem(key) {\n        if (!this.isAvailable()) return;\n        \n        try {\n          this.storage.removeItem(this._getKey(key));\n        } catch (error) {\n          throw new StorageError(`Failed to remove session item: ${error.message}`, 'sessionStorage', 'removeItem');\n        }\n      }\n      \n      async clear() {\n        if (!this.isAvailable()) return;\n        \n        try {\n          const keys = Object.keys(this.storage).filter(key => key.startsWith(this.prefix));\n          keys.forEach(key => this.storage.removeItem(key));\n        } catch (error) {\n          throw new StorageError(`Failed to clear session storage: ${error.message}`, 'sessionStorage', 'clear');\n        }\n      }\n      \n      async getSize() {\n        if (!this.isAvailable()) return 0;\n        \n        let size = 0;\n        try {\n          for (let key in this.storage) {\n            if (key.startsWith(this.prefix)) {\n              size += this.storage[key].length;\n            }\n          }\n          return size / 1024; // KB\n        } catch (error) {\n          return 0;\n        }\n      }\n    }\n    \n    class IndexedDBProvider extends IStorageProvider {\n      constructor() {\n        super();\n        this.dbName = 'izignaDB';\n        this.storeName = 'data';\n        this.db = null;\n      }\n      \n      isAvailable() {\n        return 'indexedDB' in window;\n      }\n      \n      async _openDB() {\n        if (this.db) return this.db;\n        \n        return new Promise((resolve, reject) => {\n          const request = indexedDB.open(this.dbName, dbVersion);\n          \n          request.onerror = () => reject(new StorageError('Failed to open IndexedDB', 'indexedDB', 'open'));\n          \n          request.onsuccess = () => {\n            this.db = request.result;\n            resolve(this.db);\n          };\n          \n          request.onupgradeneeded = (event) => {\n            const db = event.target.result;\n            \n            if (!db.objectStoreNames.contains(this.storeName)) {\n              const store = db.createObjectStore(this.storeName, { keyPath: 'key' });\n              store.createIndex('timestamp', 'timestamp', { unique: false });\n              store.createIndex('tags', 'tags', { unique: false, multiEntry: true });\n            }\n          };\n        });\n      }\n      \n      async setItem(key, value, options = {}) {\n        if (!this.isAvailable()) {\n          throw new StorageError('IndexedDB not available', 'indexedDB', 'setItem');\n        }\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readwrite');\n          const store = transaction.objectStore(this.storeName);\n          \n          const data = {\n            key,\n            value,\n            timestamp: Date.now(),\n            expires: options.expires || null,\n            tags: options.tags || [],\n            metadata: options.metadata || {}\n          };\n          \n          await new Promise((resolve, reject) => {\n            const request = store.put(data);\n            request.onsuccess = () => resolve(request.result);\n            request.onerror = () => reject(request.error);\n          });\n          \n          \n        } catch (error) {\n          throw new StorageError(`Failed to store IndexedDB item: ${error.message}`, 'indexedDB', 'setItem');\n        }\n      }\n      \n      async getItem(key, defaultValue = null) {\n        if (!this.isAvailable()) return defaultValue;\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readonly');\n          const store = transaction.objectStore(this.storeName);\n          \n          const data = await new Promise((resolve, reject) => {\n            const request = store.get(key);\n            request.onsuccess = () => resolve(request.result);\n            request.onerror = () => reject(request.error);\n          });\n          \n          if (!data) return defaultValue;\n          \n          // Check expiration\n          if (data.expires && Date.now() > data.expires) {\n            await this.removeItem(key);\n            return defaultValue;\n          }\n          \n          return data.value;\n        } catch (error) {\n          console.warn(`Failed to retrieve IndexedDB item ${key}:`, error);\n          return defaultValue;\n        }\n      }\n      \n      async removeItem(key) {\n        if (!this.isAvailable()) return;\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readwrite');\n          const store = transaction.objectStore(this.storeName);\n          \n          await new Promise((resolve, reject) => {\n            const request = store.delete(key);\n            request.onsuccess = () => resolve();\n            request.onerror = () => reject(request.error);\n          });\n        } catch (error) {\n          throw new StorageError(`Failed to remove IndexedDB item: ${error.message}`, 'indexedDB', 'removeItem');\n        }\n      }\n      \n      async clear() {\n        if (!this.isAvailable()) return;\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readwrite');\n          const store = transaction.objectStore(this.storeName);\n          \n          await new Promise((resolve, reject) => {\n            const request = store.clear();\n            request.onsuccess = () => resolve();\n            request.onerror = () => reject(request.error);\n          });\n        } catch (error) {\n          throw new StorageError(`Failed to clear IndexedDB: ${error.message}`, 'indexedDB', 'clear');\n        }\n      }\n      \n      async getSize() {\n        if (!this.isAvailable()) return 0;\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readonly');\n          const store = transaction.objectStore(this.storeName);\n          \n          const count = await new Promise((resolve, reject) => {\n            const request = store.count();\n            request.onsuccess = () => resolve(request.result);\n            request.onerror = () => reject(request.error);\n          });\n          \n          return count;\n        } catch (error) {\n          return 0;\n        }\n      }\n      \n      // Additional IndexedDB specific methods\n      async findByTag(tag) {\n        if (!this.isAvailable()) return [];\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readonly');\n          const store = transaction.objectStore(this.storeName);\n          const index = store.index('tags');\n          \n          const results = await new Promise((resolve, reject) => {\n            const request = index.getAll(tag);\n            request.onsuccess = () => resolve(request.result);\n            request.onerror = () => reject(request.error);\n          });\n          \n          return results.map(item => ({ key: item.key, value: item.value }));\n        } catch (error) {\n          console.warn(`Failed to find items by tag ${tag}:`, error);\n          return [];\n        }\n      }\n    }\n    \n    // 4. Dependency Inversion Principle - Depend on abstractions, not concretions\n    class AdvancedStorageManager {\n      constructor() {\n        this.providers = new Map();\n        this.defaultProvider = null;\n        \n        this._initializeProviders();\n      }\n      \n      _initializeProviders() {\n        if (enableLocalStorage) {\n          const localStorage = new LocalStorageProvider();\n          if (localStorage.isAvailable()) {\n            this.providers.set('local', localStorage);\n            this.defaultProvider = 'local';\n          }\n        }\n        \n        if (enableSessionStorage) {\n          const sessionStorage = new SessionStorageProvider();\n          if (sessionStorage.isAvailable()) {\n            this.providers.set('session', sessionStorage);\n            if (!this.defaultProvider) this.defaultProvider = 'session';\n          }\n        }\n        \n        if (enableIndexedDB) {\n          const indexedDB = new IndexedDBProvider();\n          if (indexedDB.isAvailable()) {\n            this.providers.set('indexed', indexedDB);\n            if (!this.defaultProvider) this.defaultProvider = 'indexed';\n          }\n        }\n      }\n      \n      getProvider(type = this.defaultProvider) {\n        const provider = this.providers.get(type);\n        if (!provider) {\n          throw new Error(`Storage provider '${type}' not available`);\n        }\n        return provider;\n      }\n      \n      // High-level API methods\n      async setUserPreference(key, value, options = {}) {\n        try {\n          const provider = this.getProvider('local');\n          await provider.setItem(`pref_${key}`, value, {\n            ...options,\n            expires: options.expires || (Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year\n          });\n        } catch (error) {\n          console.warn('Failed to set user preference:', error);\n        }\n      }\n      \n      async getUserPreference(key, defaultValue = null) {\n        try {\n          const provider = this.getProvider('local');\n          return await provider.getItem(`pref_${key}`, defaultValue);\n        } catch (error) {\n          console.warn('Failed to get user preference:', error);\n          return defaultValue;\n        }\n      }\n      \n      async setSessionData(key, value) {\n        try {\n          const provider = this.getProvider('session');\n          await provider.setItem(`session_${key}`, value);\n        } catch (error) {\n          console.warn('Failed to set session data:', error);\n        }\n      }\n      \n      async getSessionData(key, defaultValue = null) {\n        try {\n          const provider = this.getProvider('session');\n          return await provider.getItem(`session_${key}`, defaultValue);\n        } catch (error) {\n          console.warn('Failed to get session data:', error);\n          return defaultValue;\n        }\n      }\n      \n      async cacheData(key, value, options = {}) {\n        try {\n          // Use IndexedDB for large data, LocalStorage for small data\n          const dataSize = JSON.stringify(value).length;\n          const provider = dataSize > 50000 ? \n            this.getProvider('indexed') : \n            this.getProvider('local');\n          \n          await provider.setItem(`cache_${key}`, value, {\n            ...options,\n            expires: options.expires || (Date.now() + 24 * 60 * 60 * 1000) // 24 hours\n          });\n        } catch (error) {\n          console.warn('Failed to cache data:', error);\n        }\n      }\n      \n      async getCachedData(key, defaultValue = null) {\n        try {\n          // Try IndexedDB first, then LocalStorage\n          for (const providerType of ['indexed', 'local']) {\n            try {\n              const provider = this.getProvider(providerType);\n              const result = await provider.getItem(`cache_${key}`, undefined);\n              if (result !== undefined && result !== null) {\n                return result;\n              }\n            } catch (error) {\n              // Continue to next provider\n            }\n          }\n          return defaultValue;\n        } catch (error) {\n          console.warn('Failed to get cached data:', error);\n          return defaultValue;\n        }\n      }\n      \n      // Performance monitoring\n      async getStorageStats() {\n        const stats = {};\n        \n        for (const [type, provider] of this.providers) {\n          try {\n            stats[type] = {\n              available: provider.isAvailable(),\n              size: await provider.getSize()\n            };\n          } catch (error) {\n            stats[type] = {\n              available: false,\n              size: 0,\n              error: error.message\n            };\n          }\n        }\n        \n        return stats;\n      }\n      \n      // Cleanup expired data\n      async cleanup() {\n        // Running storage cleanup\n        \n        for (const [type, provider] of this.providers) {\n          try {\n            // This is a simplified cleanup - in production you'd want more sophisticated logic\n            if (type === 'local') {\n              const size = await provider.getSize();\n              if (size > maxLocalStorageSize * 0.8) {\n                console.warn(`LocalStorage approaching size limit: ${size}KB`);\n              }\n            }\n          } catch (error) {\n            console.warn(`Cleanup failed for ${type}:`, error);\n          }\n        }\n      }\n    }\n    \n    // Initialize global storage manager\n    window.IzignaStorage = new AdvancedStorageManager();\n    \n    // Auto-cleanup on page unload\n    window.addEventListener('beforeunload', () => {\n      if (window.IzignaStorage) {\n        window.IzignaStorage.cleanup();\n      }\n    });\n    \n    // Performance monitoring\n    if (isDevelopment) {\n      setTimeout(async () => {\n        const stats = await window.IzignaStorage.getStorageStats();\n        console.group('\u{1F5C4}\uFE0F Storage Stats');\n        console.table(stats);\n        console.groupEnd();\n      }, 2000);\n    }\n    \n    // Advanced Storage Manager initialized\n  })();\n})();<\/script> <!-- Usage Examples --><script>\n  // Example usage - these will be available globally\n  if (typeof window !== 'undefined' && window.IzignaStorage) {\n    // Save user preferences\n    // await window.IzignaStorage.setUserPreference('theme', 'dark');\n    \n    // Get user preferences\n    // const theme = await window.IzignaStorage.getUserPreference('theme', 'light');\n    \n    // Cache API responses\n    // await window.IzignaStorage.cacheData('api_services', servicesData, { expires: Date.now() + 60*60*1000 });\n    \n    // Get cached data\n    // const cachedServices = await window.IzignaStorage.getCachedData('api_services');\n    \n    // Session data for form progress\n    // await window.IzignaStorage.setSessionData('form_progress', { step: 2, data: formData });\n  }\n<\/script>"], ["<script>(function(){", "\n  (function() {\n    'use strict';\n    \n    if (typeof window === 'undefined') return;\n    \n    // SOLID Principles Implementation\n    \n    // 1. Single Responsibility Principle - Each class has one responsibility\n    class StorageError extends Error {\n      constructor(message, storageType, operation) {\n        super(message);\n        this.name = 'StorageError';\n        this.storageType = storageType;\n        this.operation = operation;\n      }\n    }\n    \n    // 2. Interface Segregation Principle - Small, focused interfaces\n    class IStorageProvider {\n      async setItem(key, value, options = {}) {\n        key; value; options;\n        throw new Error('setItem must be implemented');\n      }\n      \n      async getItem(key, defaultValue = null) {\n        key; defaultValue;\n        throw new Error('getItem must be implemented');\n      }\n      \n      async removeItem(key) {\n        key;\n        throw new Error('removeItem must be implemented');\n      }\n      \n      async clear() {\n        throw new Error('clear must be implemented');\n      }\n      \n      async getSize() {\n        throw new Error('getSize must be implemented');\n      }\n      \n      isAvailable() {\n        throw new Error('isAvailable must be implemented');\n      }\n    }\n    \n    // 3. Open/Closed Principle - Open for extension, closed for modification\n    class LocalStorageProvider extends IStorageProvider {\n      constructor() {\n        super();\n        this.storage = window.localStorage;\n        this.prefix = 'izigna_';\n      }\n      \n      isAvailable() {\n        try {\n          const test = '__storage_test__';\n          this.storage.setItem(test, test);\n          this.storage.removeItem(test);\n          return true;\n        } catch {\n          return false;\n        }\n      }\n      \n      _getKey(key) {\n        return this.prefix + key;\n      }\n      \n      async setItem(key, value, options = {}) {\n        if (!this.isAvailable()) {\n          throw new StorageError('LocalStorage not available', 'localStorage', 'setItem');\n        }\n        \n        try {\n          const data = {\n            value,\n            timestamp: Date.now(),\n            expires: options.expires || null,\n            compressed: false,\n            encrypted: false\n          };\n          \n          let serialized = JSON.stringify(data);\n          \n          // Compression for large data\n          if (enableDataCompression && serialized.length > 1000) {\n            serialized = await this._compress(serialized);\n            data.compressed = true;\n          }\n          \n          // Encryption for sensitive data\n          if (enableEncryption && options.sensitive) {\n            serialized = await this._encrypt(serialized);\n            data.encrypted = true;\n          }\n          \n          // Check size limits\n          const size = new Blob([serialized]).size / 1024; // KB\n          if (size > maxLocalStorageSize) {\n            throw new StorageError(\\`Data too large: \\${size}KB > \\${maxLocalStorageSize}KB\\`, 'localStorage', 'setItem');\n          }\n          \n          this.storage.setItem(this._getKey(key), serialized);\n          \n          if (isDevelopment) {\n            // LocalStorage item stored\n          }\n        } catch (error) {\n          throw new StorageError(\\`Failed to store item: \\${error.message}\\`, 'localStorage', 'setItem');\n        }\n      }\n      \n      async getItem(key, defaultValue = null) {\n        if (!this.isAvailable()) {\n          return defaultValue;\n        }\n        \n        try {\n          const item = this.storage.getItem(this._getKey(key));\n          if (!item) return defaultValue;\n          \n          let data = JSON.parse(item);\n          \n          // Check expiration\n          if (data.expires && Date.now() > data.expires) {\n            await this.removeItem(key);\n            return defaultValue;\n          }\n          \n          // Decompress if needed\n          if (data.compressed) {\n            data.value = await this._decompress(data.value);\n          }\n          \n          // Decrypt if needed\n          if (data.encrypted) {\n            data.value = await this._decrypt(data.value);\n          }\n          \n          return data.value;\n        } catch (error) {\n          console.warn(\\`Failed to retrieve item \\${key}:\\`, error);\n          return defaultValue;\n        }\n      }\n      \n      async removeItem(key) {\n        if (!this.isAvailable()) return;\n        \n        try {\n          this.storage.removeItem(this._getKey(key));\n        } catch (error) {\n          throw new StorageError(\\`Failed to remove item: \\${error.message}\\`, 'localStorage', 'removeItem');\n        }\n      }\n      \n      async clear() {\n        if (!this.isAvailable()) return;\n        \n        try {\n          const keys = Object.keys(this.storage).filter(key => key.startsWith(this.prefix));\n          keys.forEach(key => this.storage.removeItem(key));\n        } catch (error) {\n          throw new StorageError(\\`Failed to clear storage: \\${error.message}\\`, 'localStorage', 'clear');\n        }\n      }\n      \n      async getSize() {\n        if (!this.isAvailable()) return 0;\n        \n        let size = 0;\n        try {\n          for (let key in this.storage) {\n            if (key.startsWith(this.prefix)) {\n              size += this.storage[key].length;\n            }\n          }\n          return size / 1024; // KB\n        } catch (error) {\n          return 0;\n        }\n      }\n      \n      async _compress(data) {\n        try {\n          const bytes = new TextEncoder().encode(data);\n          let binary = '';\n          for (let i = 0; i < bytes.length; i++) {\n            binary += String.fromCharCode(bytes[i]);\n          }\n          return btoa(binary);\n        } catch (error) {\n          console.warn('Compression failed, storing uncompressed:', error);\n          return data;\n        }\n      }\n      \n      async _decompress(data) {\n        try {\n          const binary = atob(data);\n          const bytes = new Uint8Array(binary.length);\n          for (let i = 0; i < binary.length; i++) {\n            bytes[i] = binary.charCodeAt(i);\n          }\n          return new TextDecoder().decode(bytes);\n        } catch (error) {\n          console.warn('Decompression failed:', error);\n          return data;\n        }\n      }\n      \n      async _encrypt(data) {\n        // Basic XOR encryption - for production use Web Crypto API\n        const key = 'izigna_secret_key_123';\n        let encrypted = '';\n        for (let i = 0; i < data.length; i++) {\n          encrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));\n        }\n        return btoa(encrypted);\n      }\n      \n      async _decrypt(data) {\n        const key = 'izigna_secret_key_123';\n        try {\n          const decoded = atob(data);\n          let decrypted = '';\n          for (let i = 0; i < decoded.length; i++) {\n            decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));\n          }\n          return decrypted;\n        } catch (error) {\n          console.warn('Decryption failed:', error);\n          return data;\n        }\n      }\n    }\n    \n    class SessionStorageProvider extends IStorageProvider {\n      constructor() {\n        super();\n        this.storage = window.sessionStorage;\n        this.prefix = 'izigna_session_';\n      }\n      \n      isAvailable() {\n        try {\n          const test = '__session_test__';\n          this.storage.setItem(test, test);\n          this.storage.removeItem(test);\n          return true;\n        } catch {\n          return false;\n        }\n      }\n      \n      _getKey(key) {\n        return this.prefix + key;\n      }\n      \n      async setItem(key, value) {\n        if (!this.isAvailable()) {\n          throw new StorageError('SessionStorage not available', 'sessionStorage', 'setItem');\n        }\n        \n        try {\n          const data = {\n            value,\n            timestamp: Date.now()\n          };\n          \n          const serialized = JSON.stringify(data);\n          const size = new Blob([serialized]).size / 1024; // KB\n          \n          if (size > maxSessionStorageSize) {\n            throw new StorageError(\\`Data too large: \\${size}KB > \\${maxSessionStorageSize}KB\\`, 'sessionStorage', 'setItem');\n          }\n          \n          this.storage.setItem(this._getKey(key), serialized);\n          \n          if (isDevelopment) {\n            // SessionStorage item stored\n          }\n        } catch (error) {\n          throw new StorageError(\\`Failed to store session item: \\${error.message}\\`, 'sessionStorage', 'setItem');\n        }\n      }\n      \n      async getItem(key, defaultValue = null) {\n        if (!this.isAvailable()) return defaultValue;\n        \n        try {\n          const item = this.storage.getItem(this._getKey(key));\n          if (!item) return defaultValue;\n          \n          const data = JSON.parse(item);\n          return data.value;\n        } catch (error) {\n          console.warn(\\`Failed to retrieve session item \\${key}:\\`, error);\n          return defaultValue;\n        }\n      }\n      \n      async removeItem(key) {\n        if (!this.isAvailable()) return;\n        \n        try {\n          this.storage.removeItem(this._getKey(key));\n        } catch (error) {\n          throw new StorageError(\\`Failed to remove session item: \\${error.message}\\`, 'sessionStorage', 'removeItem');\n        }\n      }\n      \n      async clear() {\n        if (!this.isAvailable()) return;\n        \n        try {\n          const keys = Object.keys(this.storage).filter(key => key.startsWith(this.prefix));\n          keys.forEach(key => this.storage.removeItem(key));\n        } catch (error) {\n          throw new StorageError(\\`Failed to clear session storage: \\${error.message}\\`, 'sessionStorage', 'clear');\n        }\n      }\n      \n      async getSize() {\n        if (!this.isAvailable()) return 0;\n        \n        let size = 0;\n        try {\n          for (let key in this.storage) {\n            if (key.startsWith(this.prefix)) {\n              size += this.storage[key].length;\n            }\n          }\n          return size / 1024; // KB\n        } catch (error) {\n          return 0;\n        }\n      }\n    }\n    \n    class IndexedDBProvider extends IStorageProvider {\n      constructor() {\n        super();\n        this.dbName = 'izignaDB';\n        this.storeName = 'data';\n        this.db = null;\n      }\n      \n      isAvailable() {\n        return 'indexedDB' in window;\n      }\n      \n      async _openDB() {\n        if (this.db) return this.db;\n        \n        return new Promise((resolve, reject) => {\n          const request = indexedDB.open(this.dbName, dbVersion);\n          \n          request.onerror = () => reject(new StorageError('Failed to open IndexedDB', 'indexedDB', 'open'));\n          \n          request.onsuccess = () => {\n            this.db = request.result;\n            resolve(this.db);\n          };\n          \n          request.onupgradeneeded = (event) => {\n            const db = event.target.result;\n            \n            if (!db.objectStoreNames.contains(this.storeName)) {\n              const store = db.createObjectStore(this.storeName, { keyPath: 'key' });\n              store.createIndex('timestamp', 'timestamp', { unique: false });\n              store.createIndex('tags', 'tags', { unique: false, multiEntry: true });\n            }\n          };\n        });\n      }\n      \n      async setItem(key, value, options = {}) {\n        if (!this.isAvailable()) {\n          throw new StorageError('IndexedDB not available', 'indexedDB', 'setItem');\n        }\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readwrite');\n          const store = transaction.objectStore(this.storeName);\n          \n          const data = {\n            key,\n            value,\n            timestamp: Date.now(),\n            expires: options.expires || null,\n            tags: options.tags || [],\n            metadata: options.metadata || {}\n          };\n          \n          await new Promise((resolve, reject) => {\n            const request = store.put(data);\n            request.onsuccess = () => resolve(request.result);\n            request.onerror = () => reject(request.error);\n          });\n          \n          \n        } catch (error) {\n          throw new StorageError(\\`Failed to store IndexedDB item: \\${error.message}\\`, 'indexedDB', 'setItem');\n        }\n      }\n      \n      async getItem(key, defaultValue = null) {\n        if (!this.isAvailable()) return defaultValue;\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readonly');\n          const store = transaction.objectStore(this.storeName);\n          \n          const data = await new Promise((resolve, reject) => {\n            const request = store.get(key);\n            request.onsuccess = () => resolve(request.result);\n            request.onerror = () => reject(request.error);\n          });\n          \n          if (!data) return defaultValue;\n          \n          // Check expiration\n          if (data.expires && Date.now() > data.expires) {\n            await this.removeItem(key);\n            return defaultValue;\n          }\n          \n          return data.value;\n        } catch (error) {\n          console.warn(\\`Failed to retrieve IndexedDB item \\${key}:\\`, error);\n          return defaultValue;\n        }\n      }\n      \n      async removeItem(key) {\n        if (!this.isAvailable()) return;\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readwrite');\n          const store = transaction.objectStore(this.storeName);\n          \n          await new Promise((resolve, reject) => {\n            const request = store.delete(key);\n            request.onsuccess = () => resolve();\n            request.onerror = () => reject(request.error);\n          });\n        } catch (error) {\n          throw new StorageError(\\`Failed to remove IndexedDB item: \\${error.message}\\`, 'indexedDB', 'removeItem');\n        }\n      }\n      \n      async clear() {\n        if (!this.isAvailable()) return;\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readwrite');\n          const store = transaction.objectStore(this.storeName);\n          \n          await new Promise((resolve, reject) => {\n            const request = store.clear();\n            request.onsuccess = () => resolve();\n            request.onerror = () => reject(request.error);\n          });\n        } catch (error) {\n          throw new StorageError(\\`Failed to clear IndexedDB: \\${error.message}\\`, 'indexedDB', 'clear');\n        }\n      }\n      \n      async getSize() {\n        if (!this.isAvailable()) return 0;\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readonly');\n          const store = transaction.objectStore(this.storeName);\n          \n          const count = await new Promise((resolve, reject) => {\n            const request = store.count();\n            request.onsuccess = () => resolve(request.result);\n            request.onerror = () => reject(request.error);\n          });\n          \n          return count;\n        } catch (error) {\n          return 0;\n        }\n      }\n      \n      // Additional IndexedDB specific methods\n      async findByTag(tag) {\n        if (!this.isAvailable()) return [];\n        \n        try {\n          const db = await this._openDB();\n          const transaction = db.transaction([this.storeName], 'readonly');\n          const store = transaction.objectStore(this.storeName);\n          const index = store.index('tags');\n          \n          const results = await new Promise((resolve, reject) => {\n            const request = index.getAll(tag);\n            request.onsuccess = () => resolve(request.result);\n            request.onerror = () => reject(request.error);\n          });\n          \n          return results.map(item => ({ key: item.key, value: item.value }));\n        } catch (error) {\n          console.warn(\\`Failed to find items by tag \\${tag}:\\`, error);\n          return [];\n        }\n      }\n    }\n    \n    // 4. Dependency Inversion Principle - Depend on abstractions, not concretions\n    class AdvancedStorageManager {\n      constructor() {\n        this.providers = new Map();\n        this.defaultProvider = null;\n        \n        this._initializeProviders();\n      }\n      \n      _initializeProviders() {\n        if (enableLocalStorage) {\n          const localStorage = new LocalStorageProvider();\n          if (localStorage.isAvailable()) {\n            this.providers.set('local', localStorage);\n            this.defaultProvider = 'local';\n          }\n        }\n        \n        if (enableSessionStorage) {\n          const sessionStorage = new SessionStorageProvider();\n          if (sessionStorage.isAvailable()) {\n            this.providers.set('session', sessionStorage);\n            if (!this.defaultProvider) this.defaultProvider = 'session';\n          }\n        }\n        \n        if (enableIndexedDB) {\n          const indexedDB = new IndexedDBProvider();\n          if (indexedDB.isAvailable()) {\n            this.providers.set('indexed', indexedDB);\n            if (!this.defaultProvider) this.defaultProvider = 'indexed';\n          }\n        }\n      }\n      \n      getProvider(type = this.defaultProvider) {\n        const provider = this.providers.get(type);\n        if (!provider) {\n          throw new Error(\\`Storage provider '\\${type}' not available\\`);\n        }\n        return provider;\n      }\n      \n      // High-level API methods\n      async setUserPreference(key, value, options = {}) {\n        try {\n          const provider = this.getProvider('local');\n          await provider.setItem(\\`pref_\\${key}\\`, value, {\n            ...options,\n            expires: options.expires || (Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year\n          });\n        } catch (error) {\n          console.warn('Failed to set user preference:', error);\n        }\n      }\n      \n      async getUserPreference(key, defaultValue = null) {\n        try {\n          const provider = this.getProvider('local');\n          return await provider.getItem(\\`pref_\\${key}\\`, defaultValue);\n        } catch (error) {\n          console.warn('Failed to get user preference:', error);\n          return defaultValue;\n        }\n      }\n      \n      async setSessionData(key, value) {\n        try {\n          const provider = this.getProvider('session');\n          await provider.setItem(\\`session_\\${key}\\`, value);\n        } catch (error) {\n          console.warn('Failed to set session data:', error);\n        }\n      }\n      \n      async getSessionData(key, defaultValue = null) {\n        try {\n          const provider = this.getProvider('session');\n          return await provider.getItem(\\`session_\\${key}\\`, defaultValue);\n        } catch (error) {\n          console.warn('Failed to get session data:', error);\n          return defaultValue;\n        }\n      }\n      \n      async cacheData(key, value, options = {}) {\n        try {\n          // Use IndexedDB for large data, LocalStorage for small data\n          const dataSize = JSON.stringify(value).length;\n          const provider = dataSize > 50000 ? \n            this.getProvider('indexed') : \n            this.getProvider('local');\n          \n          await provider.setItem(\\`cache_\\${key}\\`, value, {\n            ...options,\n            expires: options.expires || (Date.now() + 24 * 60 * 60 * 1000) // 24 hours\n          });\n        } catch (error) {\n          console.warn('Failed to cache data:', error);\n        }\n      }\n      \n      async getCachedData(key, defaultValue = null) {\n        try {\n          // Try IndexedDB first, then LocalStorage\n          for (const providerType of ['indexed', 'local']) {\n            try {\n              const provider = this.getProvider(providerType);\n              const result = await provider.getItem(\\`cache_\\${key}\\`, undefined);\n              if (result !== undefined && result !== null) {\n                return result;\n              }\n            } catch (error) {\n              // Continue to next provider\n            }\n          }\n          return defaultValue;\n        } catch (error) {\n          console.warn('Failed to get cached data:', error);\n          return defaultValue;\n        }\n      }\n      \n      // Performance monitoring\n      async getStorageStats() {\n        const stats = {};\n        \n        for (const [type, provider] of this.providers) {\n          try {\n            stats[type] = {\n              available: provider.isAvailable(),\n              size: await provider.getSize()\n            };\n          } catch (error) {\n            stats[type] = {\n              available: false,\n              size: 0,\n              error: error.message\n            };\n          }\n        }\n        \n        return stats;\n      }\n      \n      // Cleanup expired data\n      async cleanup() {\n        // Running storage cleanup\n        \n        for (const [type, provider] of this.providers) {\n          try {\n            // This is a simplified cleanup - in production you'd want more sophisticated logic\n            if (type === 'local') {\n              const size = await provider.getSize();\n              if (size > maxLocalStorageSize * 0.8) {\n                console.warn(\\`LocalStorage approaching size limit: \\${size}KB\\`);\n              }\n            }\n          } catch (error) {\n            console.warn(\\`Cleanup failed for \\${type}:\\`, error);\n          }\n        }\n      }\n    }\n    \n    // Initialize global storage manager\n    window.IzignaStorage = new AdvancedStorageManager();\n    \n    // Auto-cleanup on page unload\n    window.addEventListener('beforeunload', () => {\n      if (window.IzignaStorage) {\n        window.IzignaStorage.cleanup();\n      }\n    });\n    \n    // Performance monitoring\n    if (isDevelopment) {\n      setTimeout(async () => {\n        const stats = await window.IzignaStorage.getStorageStats();\n        console.group('\u{1F5C4}\uFE0F Storage Stats');\n        console.table(stats);\n        console.groupEnd();\n      }, 2000);\n    }\n    \n    // Advanced Storage Manager initialized\n  })();\n})();<\/script> <!-- Usage Examples --><script>\n  // Example usage - these will be available globally\n  if (typeof window !== 'undefined' && window.IzignaStorage) {\n    // Save user preferences\n    // await window.IzignaStorage.setUserPreference('theme', 'dark');\n    \n    // Get user preferences\n    // const theme = await window.IzignaStorage.getUserPreference('theme', 'light');\n    \n    // Cache API responses\n    // await window.IzignaStorage.cacheData('api_services', servicesData, { expires: Date.now() + 60*60*1000 });\n    \n    // Get cached data\n    // const cachedServices = await window.IzignaStorage.getCachedData('api_services');\n    \n    // Session data for form progress\n    // await window.IzignaStorage.setSessionData('form_progress', { step: 2, data: formData });\n  }\n<\/script>"])), defineScriptVars({
    enableLocalStorage,
    enableSessionStorage,
    enableIndexedDB,
    enableDataCompression,
    enableEncryption,
    maxLocalStorageSize,
    maxSessionStorageSize,
    dbVersion,
    isDevelopment
  }));
}, "D:/MEGA/IzignaMx/izignamx/src/components/AdvancedStorageManager.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _b, _c, _d;
const $$Astro = createAstro("https://izignamx.com");
const $$UnifiedLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UnifiedLayout;
  const isDev = false;
  const isStatic = process.env.IS_STATIC_CPANEL === "1";
  let currentLang;
  try {
    currentLang = detectUserLanguage(Astro2);
  } catch {
    currentLang = "es-MX";
  }
  const translations = {
    skipToContent: isStatic ? "Saltar al contenido principal" : await t("common.skipToContent", currentLang),
    backToTop: isStatic ? "Volver arriba" : await t("common.backToTop", currentLang),
    darkModeActivated: isStatic ? "Modo oscuro activado" : await t("common.darkModeActivated", currentLang),
    lightModeActivated: isStatic ? "Modo claro activado" : await t("common.lightModeActivated", currentLang),
    returningToTop: isStatic ? "Volviendo arriba" : await t("common.returningToTop", currentLang)
  };
  const {
    title,
    description = "IzignaMx - Tecnolog\xEDa de vanguardia. Desarrollo web, aplicaciones m\xF3viles, dise\xF1o gr\xE1fico y soluciones digitales innovadoras.",
    type = "website",
    image = "/assets/images/og-image.jpg",
    canonical,
    canonicalURL,
    noindex = false,
    nofollow = false,
    publishedTime,
    modifiedTime,
    author,
    twitterUsername,
    keywords,
    // Feature flags con defaults inteligentes
    enableCustomCursor = true,
    enableAnalytics = true,
    enableAdvancedSEO = !isStatic,
    // SEO avanzado solo en desarrollo
    enableLocalSEO = true,
    enableResponsiveTester = isDev,
    // Solo en desarrollo
    // SEO props  
    pageType = Astro2.url.pathname === "/" ? "homepage" : Astro2.url.pathname.startsWith("/services/") ? "service" : Astro2.url.pathname === "/about" ? "about" : Astro2.url.pathname === "/contact" ? "contact" : Astro2.url.pathname.includes("/blog/") ? "blog" : "homepage",
    serviceData,
    breadcrumbs = [],
    enableBreadcrumbs = true,
    enableFAQSchema = false,
    faqData = [],
    reviewData,
    // Analytics props
    measurementId = "G-VK8WB5LG4E",
    consentNeeded = true
  } = Astro2.props;
  let siteUrl = "https://izignamx.com";
  try {
    if (Astro2.url?.origin) {
      siteUrl = Astro2.url.origin;
    } else if (Astro2.site) {
      siteUrl = new URL(Astro2.site).origin;
    }
  } catch {
    siteUrl = "https://izignamx.com";
  }
  const finalCanonical = canonicalURL || canonical || Astro2.url.pathname;
  const canonicalUrl = new URL(finalCanonical, siteUrl).toString();
  const keywordsArray = keywords ? keywords.split(",").map((k) => k.trim()) : [];
  const seoConfig = {
    defaultReviewData: {
      ratingValue: 4.8,
      reviewCount: 127,
      bestRating: 5,
      worstRating: 1
    }
  };
  const getPerformanceBudget = (pathname) => {
    if (pathname === "/") {
      return { lcp: 2e3, fid: 100, cls: 0.05, fcp: 1500, inp: 150 };
    } else if (pathname.startsWith("/services/")) {
      return { lcp: 2500, fid: 100, cls: 0.1, fcp: 1800, inp: 200 };
    } else {
      return { lcp: 3e3, fid: 150, cls: 0.15, fcp: 2e3, inp: 250 };
    }
  };
  const currentPerformanceBudget = null;
  const getCacheStrategy = (pathname) => {
    if (pathname.startsWith("/api/")) {
      return "conservative";
    } else if (pathname.startsWith("/services/") || pathname === "/") {
      return "moderate";
    } else {
      return "aggressive";
    }
  };
  const currentCacheStrategy = "conservative";
  const staticPerformanceBudget = getPerformanceBudget(Astro2.url.pathname);
  const staticCacheStrategy = getCacheStrategy(Astro2.url.pathname);
  const shouldRenderAdvancedServerOptimizer = isStatic || Boolean(currentPerformanceBudget);
  const optimizerPerformanceBudget = isStatic ? staticPerformanceBudget : currentPerformanceBudget;
  const optimizerCacheStrategy = isStatic ? staticCacheStrategy : currentCacheStrategy;
  const shouldMountExitPopup = Astro2.url.pathname !== "/gracias" && Astro2.url.pathname !== "/privacy" && Astro2.url.pathname !== "/terms" && Astro2.url.pathname !== "/contact";
  return renderTemplate(_d || (_d = __template(["<html", ' class="scroll-smooth" dir="ltr"> <head><!-- Charset y viewport b\xE1sicos --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, shrink-to-fit=no"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Security Headers (condicional) -->', "<!-- SEO Optimizer b\xE1sico para compatibilidad -->", "", "<script>(function(){", `
      (function(){
        var flags = {
          advancedServerOptimizer: shouldRenderAdvancedServerOptimizer,
          cacheStrategies: shouldRenderAdvancedServerOptimizer,
          neuroMarketing: shouldRenderAdvancedServerOptimizer,
          securityHeaders: true,
          performanceBudgets: shouldRenderAdvancedServerOptimizer
        };
        if (!('__IZIGNA_OPTIMIZATIONS__' in window)) {
          window.__IZIGNA_OPTIMIZATIONS__ = flags;
        } else {
          try {
            Object.assign(window.__IZIGNA_OPTIMIZATIONS__, flags);
          } catch (e) {
            window.__IZIGNA_OPTIMIZATIONS__ = flags;
          }
        }
      })();
    })();<\/script><meta name="optimizer-flag" content="AdvancedServerOptimizer"><meta name="cacheStrategy" content="enabled"><script>
      try {
        var hasPO = ('PerformanceObserver' in window);
        window.__po_flag__ = hasPO ? 1 : 0;
      } catch (e) {
        window.__po_flag__ = 0;
      }
    <\/script><!-- Optimizaciones avanzadas (solo desarrollo) -->`, "<!-- Gesti\xF3n avanzada de almacenamiento (solo desarrollo) -->", "<!-- Meta SEO b\xE1sicos unificados -->", "<!-- PWA Setup -->", "<!-- Resource Hints -->", '<!-- Favicon adicional para compatibilidad --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- Precargar fuentes cr\xEDticas --><link rel="preload" href="/fonts/ADAM.CG PRO-webfont.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Adamas-Regular.woff" as="font" type="font/woff" crossorigin><!-- Optimizaciones LCP para homepage -->', "<!-- Estilos espec\xEDficos para layout est\xE1tico -->", "<!-- Shim temprana para detecci\xF3n de idioma en builds est\xE1ticos --><script>\n      (function () {\n        if (typeof window === 'undefined' || typeof navigator === 'undefined') {\n          return;\n        }\n\n        const supportedLanguages = ['es-MX','en','fr','de','nl','ja','zh','hi','ar','pt','fi','ru','tr','it','ko','pl','eo','la'];\n\n        function fallbackDetect() {\n          const navLangs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'es-MX'];\n          for (const lang of navLangs) {\n            const base = (lang || '').toLowerCase();\n            const match = supportedLanguages.find((code) => code.toLowerCase() === base || code.toLowerCase().startsWith(base.split('-')[0]));\n            if (match) {\n              return match;\n            }\n          }\n          return 'es-MX';\n        }\n\n        if (typeof window.detectUserLanguage !== 'function') {\n          window.detectUserLanguage = function () {\n            const lang = fallbackDetect();\n            window.__detectedLanguage = lang;\n            return lang;\n          };\n        }\n\n        if (typeof window.getPreferredLanguage !== 'function') {\n          window.getPreferredLanguage = function () {\n            return window.detectUserLanguage();\n          };\n        }\n      })();\n    <\/script><!-- SEO Avanzado Unificado (condicional por entorno) -->", "", "<!-- Estilos cr\xEDticos unificados en l\xEDnea --><style>\n      :root {\n        --color-primary: #2E96FF;\n        --color-secondary: #0f4c8a;\n        --color-text: #333333;\n        --color-background: #ffffff;\n        --izigna-primary: #2E96FF;\n      }\n      \n      body {\n        margin: 0;\n        padding: 0;\n        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;\n        color: var(--color-text);\n        background-color: var(--color-background);\n        line-height: 1.6;\n      }\n      \n      /* Skip to content link unificado */\n      .skip-to-content {\n        position: absolute;\n        top: -100px;\n        left: 0;\n        background: #0f0f0f;\n        color: white;\n        padding: 0.75rem 1.5rem;\n        z-index: 10000;\n        text-decoration: none;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n        border-radius: 0 0 0.5rem 0;\n        transition: top 0.2s ease;\n        font-weight: 500;\n      }\n      \n      .skip-to-content:focus,\n      .skip-to-content:focus-visible {\n        top: 0;\n      }\n      \n      /* Loading state unificado */\n      html:not(.loaded) {\n        overflow: hidden;\n      }\n      \n      html.loaded {\n        overflow: auto;\n      }\n      \n      /* Back to top button unificado */\n      #back-to-top {\n        position: fixed;\n        bottom: 2rem;\n        right: 2rem;\n        width: 3rem;\n        height: 3rem;\n        background: var(--izigna-primary);\n        color: white;\n        border: none;\n        border-radius: 50%;\n        cursor: pointer;\n        font-size: 1.2rem;\n        z-index: 1000;\n        opacity: 0;\n        visibility: hidden;\n        transition: all 0.3s ease;\n        box-shadow: 0 4px 12px rgba(46, 150, 255, 0.3);\n        transform: translateY(20px);\n        pointer-events: none;\n      }\n      \n      #back-to-top.visible {\n        opacity: 1;\n        visibility: visible;\n        transform: translateY(0);\n        pointer-events: auto;\n      }\n      \n      #back-to-top:hover {\n        background: var(--color-secondary);\n        transform: translateY(-2px);\n        box-shadow: 0 6px 16px rgba(46, 150, 255, 0.4);\n      }\n\n      /* Placeholder shimmer para evitar CLS */\n      .placeholder {\n        background-color: #f5f5f5;\n        position: relative;\n        overflow: hidden;\n      }\n      \n      .placeholder::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);\n        animation: placeholder-shimmer 1.5s infinite;\n      }\n      \n      @keyframes placeholder-shimmer {\n        0% { transform: translateX(-100%); }\n        100% { transform: translateX(100%); }\n      }\n\n      /* Evitar FOUC */\n      html.js .no-js-only { display: none; }\n      html:not(.js) .js-only { display: none; }\n\n      /* Custom cursor styles cuando est\xE9 habilitado */\n      .custom-cursor-active,\n      .custom-cursor-active * {\n        cursor: none !important;\n      }\n      \n      /* Solo en dispositivos con pointer preciso */\n      @media (pointer: coarse) {\n        .custom-cursor-active,\n        .custom-cursor-active * {\n          cursor: auto !important;\n        }\n      }\n    </style><!-- Scripts cr\xEDticos inline --><script>(function(){", "\n      // Marcar JavaScript disponible\n      document.documentElement.classList.add('js');\n      \n      // Hacer traducciones disponibles globalmente\n      window.__TRANSLATIONS__ = translations;\n      \n      // Metadata de optimizaciones para testing\n      if (typeof window !== 'undefined') {\n        window.__IZIGNA_UNIFIED_LAYOUT__ = {\n          version: '1.0.0',\n          environment: isDev ? 'development' : 'production',\n          isStatic: isStatic,\n          optimizations: {\n            unifiedLayout: true,\n            conditionalSEO: true,\n            performanceBudgets: !isStatic,\n            securityHeaders: !isStatic,\n            advancedOptimizations: !isStatic\n          },\n          timestamp: Date.now()\n        };\n      }\n    })();<\/script><!-- Debug helpers en desarrollo -->", "", '</head> <body class="dark bg-background text-foreground"> <!-- Skip to content link for accessibility --> <a href="#main-content" class="skip-to-content" data-anchor-link tabindex="1">', '</a> <!-- Accessibility announcement area for screen readers --> <div id="accessibility-announcer" class="sr-only" aria-live="polite"></div> <!-- Custom cursor (temporalmente deshabilitado por error de build) --> ', "  <!-- Accessibility features --> ", ' <!-- Main content with ID for skip link --> <main id="main-content"> ', ' </main> <!-- Back to top button unificado --> <button id="back-to-top"', '> <span class="sr-only">', "</span>\n\u2191\n</button> ", " <!-- Development tools (solo en dev mode) --> ", ' <!-- Sistema de Animaciones Unificado --> <script src="/js/animations.js"><\/script> <!-- Detector de Idioma del Cliente --> <script src="/js/language-detector.js"><\/script> <!-- Analytics condicional por entorno --> ', " ", " <script>\n      (function(){\n        if (typeof window !== 'undefined') {\n          window.dataLayer = window.dataLayer || [];\n          window.trackEvent = function(name, params){\n            let allowGA = true;\n            try {\n              if (window.AnalyticsService && typeof window.AnalyticsService.hasConsent === 'function') {\n                allowGA = !!window.AnalyticsService.hasConsent();\n              } else {\n                allowGA = document.cookie.includes('analytics-consent=true') || document.cookie.includes('analytics-consent=granted');\n              }\n            } catch(_) { allowGA = true; }\n            try { if (allowGA && window.gtag) { window.gtag('event', name, params || {}); } } catch(_) { void 0; }\n            try { window.dataLayer.push(Object.assign({ event: name }, params || {})); } catch(_) { void 0; }\n          };\n        }\n      })();\n    <\/script> <!-- Web Vitals tracking --> ", " <!-- Optimizaciones avanzadas ahora est\xE1n correctamente ubicadas en el head --> <!-- Scripts de funcionalidad unificada --> <script>(function(){", `
      // Funci\xF3n de inicializaci\xF3n unificada
      function initializeUnifiedLayout() {
        console.log('\u{1F3D7}\uFE0F Inicializando UnifiedLayout...', {
          environment: isDev ? 'development' : 'production', 
          isStatic,
          customCursor: enableCustomCursor
        });
        
        // 1. Detecci\xF3n y aplicaci\xF3n de tema
        function detectColorScheme() {
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme === 'dark' || savedTheme === 'light') {
            return savedTheme;
          }
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        function applyTheme(theme) {
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          localStorage.setItem('theme', theme);

          // Anunciar cambio de tema para lectores de pantalla
          const announcer = document.getElementById('accessibility-announcer');
          if (announcer && window.__TRANSLATIONS__) {
            announcer.textContent = theme === 'dark' ? 
              window.__TRANSLATIONS__.darkModeActivated : 
              window.__TRANSLATIONS__.lightModeActivated;
            setTimeout(() => announcer.textContent = '', 3000);
          }
        }

        applyTheme(detectColorScheme());
        
        // 2. Back to top functionality unificada
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
          let scrollTimeout;
          
          window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              if (window.scrollY > 300) {
                backToTop.classList.add('visible');
              } else {
                backToTop.classList.remove('visible');
              }
            }, 10);
          }, { passive: true });
          
          backToTop.addEventListener('click', function() {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            
            // Anunciar para lectores de pantalla
            const announcer = document.getElementById('accessibility-announcer');
            if (announcer && window.__TRANSLATIONS__) {
              announcer.textContent = window.__TRANSLATIONS__.returningToTop;
              setTimeout(() => announcer.textContent = '', 3000);
            }
          });
        }
        
        // 3. Anchor link handling mejorado
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
          anchor.addEventListener('click', function(e) {
            if (this.classList.contains('skip-to-content')) return;
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        });
        
        // 4. Skip link functionality mejorada
        const skipLink = document.querySelector('.skip-to-content');
        if (skipLink) {
          if (skipLink.dataset.skipInit === '1') return;
          skipLink.dataset.skipInit = '1';

          const activateSkip = (e) => {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (!(mainContent instanceof HTMLElement)) return;

            const hadTabIndex = mainContent.hasAttribute('tabindex');
            if (!hadTabIndex) {
              mainContent.setAttribute('tabindex', '-1');
              const removeTabIndex = () => {
                if (!hadTabIndex) {
                  mainContent.removeAttribute('tabindex');
                }
                mainContent.removeEventListener('blur', removeTabIndex);
              };
              mainContent.addEventListener('blur', removeTabIndex);
            }

            try {
              mainContent.focus({ preventScroll: true });
            } catch {
              mainContent.focus();
            }
            mainContent.scrollIntoView({ behavior: 'smooth' });
          };

          skipLink.addEventListener('click', activateSkip);
          skipLink.addEventListener('keydown', (e) => {
            if (e.key !== ' ') return;
            activateSkip(e);
          });
        }
        
        // 5. ARIA attributes mejorados
        document.querySelectorAll('button:not([type])').forEach(function(button) {
          button.setAttribute('type', 'button');
        });
        
        document.querySelectorAll('svg, img[src*="/icons/"]').forEach(icon => {
          if (!icon.getAttribute('aria-hidden')) {
            icon.setAttribute('aria-hidden', 'true');
          }
        });

        // 6. Service cards keyboard navigation
        document.querySelectorAll('.service-card').forEach(card => {
          if (card instanceof HTMLElement && !card.getAttribute('tabindex')) {
            card.setAttribute('tabindex', '0');
            card.addEventListener('keydown', (e) => {
              if (e.key === 'Enter') {
                const link = card.querySelector('a');
                if (link) link.click();
              }
            });
          }
        });

        // 7. External links security
        document.querySelectorAll('a[href^="http"]:not([href^="' + location.origin + '"])').forEach(link => {
          if (!link.rel.includes('noopener')) {
            link.rel += ' noopener noreferrer';
          }
        });

        // 8. Optimizar im\xE1genes lazy loading (solo para est\xE1tico)
        if (isStatic && 'IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                }
                img.classList.add('loaded');
                imageObserver.unobserve(img);
              }
            });
          });
          
          document.querySelectorAll('img[data-src], img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
          });
        }

        // 9. Marcar como completamente cargado
        document.documentElement.classList.add('loaded');
        
        // 10. Performance marking
        if (window.performance && performance.mark) {
          performance.mark('unified_layout_loaded');
        }
        
        console.log('\u2705 UnifiedLayout inicializado correctamente');
      }
      
      // Inicializar cuando el DOM est\xE9 listo
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeUnifiedLayout);
      } else {
        initializeUnifiedLayout();
      }
      
      // Reinicializar en navegaci\xF3n SPA (solo si no es est\xE1tico)
      if (!isStatic) {
        document.addEventListener('astro:page-load', initializeUnifiedLayout);
      }
    })();<\/script> <!-- Event bridge para navegaci\xF3n SPA (solo desarrollo) --> `, ` <!-- Fix height restriction para scrolling --> <script>
      function fixHeightRestriction() {
        document.body.style.height = 'auto';
        document.body.style.minHeight = 'auto';
        document.documentElement.style.height = 'auto';
        document.documentElement.style.minHeight = 'auto';
        document.body.style.overflowY = 'auto';
        document.documentElement.style.overflowY = 'auto';
      }
      
      // Detectar si es build est\xE1tico basado en la presencia del script de i18n
      const isStatic = document.querySelector('script[src="/js/dynamic-i18n.js"]') !== null;
      
      fixHeightRestriction();
      document.addEventListener('DOMContentLoaded', fixHeightRestriction);
      if (!isStatic) {
        document.addEventListener('astro:page-load', fixHeightRestriction);
      }
    <\/script> <!-- Slot para scripts adicionales --> `, " <!-- Script de i18n din\xE1mico para builds est\xE1ticos --> ", " <!-- FormHub reCAPTCHA Helper centralizado (solo producci\xF3n) --> ", " </body> </html> "])), addAttribute(currentLang, "lang"), !isStatic && renderTemplate`${renderComponent($$result, "SecurityHeaders", $$SecurityHeaders, { "enableCSP": true, "enableHSTS": !isDev, "strictMode": false })}`, !isStatic && enableAdvancedSEO && renderTemplate`<meta name="seo-optimizer" content="advanced">`, isStatic && renderTemplate`<meta name="seo-optimizer" content="static">`, defineScriptVars({ isStatic, shouldRenderAdvancedServerOptimizer }), shouldRenderAdvancedServerOptimizer && optimizerPerformanceBudget && renderTemplate`${renderComponent($$result, "AdvancedServerOptimizer", $$AdvancedServerOptimizer, { "enableAdvancedSecurity": false, "enableNeuroMarketing": true, "enablePerformanceMonitoring": true, "enableAdvancedCaching": true, "performanceBudget": optimizerPerformanceBudget, "cacheStrategy": optimizerCacheStrategy, "enableA11yEnhancements": true })}`, !isStatic && renderTemplate`${renderComponent($$result, "AdvancedStorageManager", $$AdvancedStorageManager, { "enableLocalStorage": true, "enableSessionStorage": true, "enableIndexedDB": true, "enableDataCompression": true, "enableEncryption": false })}`, renderComponent($$result, "HeadMetaTags", $$HeadMetaTags, { "title": title, "description": description, "type": type, "image": image, "canonicalURL": canonicalUrl, "siteName": "IzignaMx", "publishedTime": publishedTime, "modifiedTime": modifiedTime, "author": author, "twitterUsername": twitterUsername, "noindex": noindex || isDev, "nofollow": nofollow, "keywords": keywords }), renderComponent($$result, "PWASetup", $$PWASetup, {}), renderComponent($$result, "ResourceHints", $$ResourceHints, {}), Astro2.url.pathname === "/" && renderTemplate`<link rel="preload" as="image" href="/assets/img/city-background-main.jpg" fetchpriority="high">`, isStatic && renderTemplate`<link rel="stylesheet" href="/css/static-layout.css">`, !isStatic && enableAdvancedSEO && renderTemplate`${renderComponent($$result, "AdvancedSEOOptimizer", $$AdvancedSEOOptimizer, { "pageType": pageType, "title": title, "description": description, "keywords": keywordsArray, "serviceData": serviceData, "breadcrumbs": breadcrumbs, "enableLocalSEO": enableLocalSEO, "enableBreadcrumbs": enableBreadcrumbs, "enableFAQSchema": enableFAQSchema, "faqData": faqData, "reviewData": reviewData || seoConfig.defaultReviewData })}`, isStatic && renderTemplate`${renderComponent($$result, "StaticSEOOptimizer", $$StaticSEOOptimizer, { "pageType": pageType, "title": title, "description": description, "keywords": keywordsArray, "serviceData": serviceData, "breadcrumbs": breadcrumbs, "enableLocalSEO": enableLocalSEO, "enableBreadcrumbs": enableBreadcrumbs, "enableFAQSchema": enableFAQSchema, "faqData": faqData, "reviewData": reviewData || seoConfig.defaultReviewData })}`, defineScriptVars({ translations, isDev, isStatic }), isDev, renderHead(), translations.skipToContent, enableCustomCursor && renderTemplate`${renderComponent($$result, "CustomCursor", $$CustomCursor, {})}`, renderComponent($$result, "AccessibilityProvider", $$AccessibilityProvider, {}), renderSlot($$result, $$slots["default"]), addAttribute(translations.backToTop, "aria-label"), translations.backToTop, shouldMountExitPopup && renderTemplate`${renderComponent($$result, "ExitPopup", $$ExitPopup, {})}`, enableResponsiveTester && isDev, enableAnalytics && isStatic && renderTemplate`${renderComponent($$result, "StaticAnalyticsService", $$StaticAnalyticsService, { "measurementId": measurementId, "debug": false, "consentNeeded": consentNeeded, "respectDoNotTrack": true, "anonymizeIP": true, "disableAds": false })}`, enableAnalytics && !isStatic && renderTemplate`${renderComponent($$result, "AnalyticsService", $$AnalyticsService, { "measurementId": measurementId, "debug": isDev, "respectDoNotTrack": true })}`, renderComponent($$result, "WebVitals", $$WebVitals, { "debug": isDev }), defineScriptVars({ isStatic, isDev, enableCustomCursor }), !isStatic && renderTemplate(_b || (_b = __template(["<script>\n        (() => {\n          let firstLoad = true;\n          let isNavigating = false;\n          \n          document.addEventListener('astro:before-preparation', () => {\n            isNavigating = true;\n          });\n          \n          document.addEventListener('astro:page-load', () => {\n            if (firstLoad) {\n              firstLoad = false;\n              isNavigating = false;\n              return;\n            }\n            \n            if (isNavigating) {\n              setTimeout(() => {\n                if (!isNavigating) {\n                  document.dispatchEvent(new CustomEvent('deferred-page-load'));\n                }\n              }, 100);\n              return;\n            }\n            \n            // Re-dispatch DOMContentLoaded para scripts que lo necesiten\n            const needsDOMReady = document.querySelectorAll('[data-needs-dom-ready]').length > 0;\n            if (needsDOMReady) {\n              document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));\n            }\n            \n            isNavigating = false;\n          });\n\n          // Global error handler para navegaci\xF3n\n          window.addEventListener('error', (event) => {\n            if (event.message && event.message.includes('triggerEvent')) {\n              event.preventDefault();\n              isNavigating = false;\n              return true;\n            }\n          });\n        })();\n      <\/script>"]))), renderSlot($$result, $$slots["after-footer"]), renderComponent($$result, "I18nScript", $$I18NScript, {}), isStatic && renderTemplate(_c || (_c = __template(["<script>\n        if (!window.formHubRecaptchaLoaded) {\n          const script = document.createElement('script');\n          script.src = 'https://forms.izignamx.com/public/recaptcha-helper.js';\n          script.defer = true;\n          script.onload = () => { \n            window.formHubRecaptchaLoaded = true;\n          };\n          script.onerror = () => {\n            console.warn('FormHub script failed to load - forms will still work via direct submission');\n          };\n          document.head.appendChild(script);\n        }\n      <\/script>"]))));
}, "D:/MEGA/IzignaMx/izignamx/src/layouts/UnifiedLayout.astro", void 0);
export {
  $$Icon,
  $$UnifiedLayout
};
