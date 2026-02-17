import { createAstro, createComponent, renderTemplate, defineScriptVars, addAttribute, renderSlot, renderHead } from "./CfGiqa0J.js";
import "kleur/colors";
import "clsx";
import { detectUserLanguage, t } from "./CjVOP6b_.js";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://izignamx.com");
const $$ServiceLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceLayout;
  const currentLang = detectUserLanguage(Astro2);
  const { service } = Astro2.props;
  const colorSchemes = {
    web: {
      primary: "#3B82F6",
      secondary: "#2563EB",
      accent: "#60A5FA",
      gradient: "from-blue-600 to-indigo-700"
    },
    app: {
      primary: "#A855F7",
      secondary: "#9333EA",
      accent: "#C084FC",
      gradient: "from-purple-600 to-violet-700"
    },
    graphic: {
      primary: "#EC4899",
      secondary: "#DB2777",
      accent: "#F472B6",
      gradient: "from-pink-600 to-rose-700"
    },
    marketing: {
      primary: "#F59E0B",
      secondary: "#D97706",
      accent: "#FBBF24",
      gradient: "from-amber-500 to-yellow-600"
    },
    blockchain: {
      primary: "#8B5CF6",
      secondary: "#7C3AED",
      accent: "#A78BFA",
      gradient: "from-violet-600 to-purple-700"
    },
    ai: {
      primary: "#6366F1",
      secondary: "#4F46E5",
      accent: "#818CF8",
      gradient: "from-indigo-600 to-blue-700"
    },
    seo: {
      primary: "#F97316",
      secondary: "#EA580C",
      accent: "#FB923C",
      gradient: "from-orange-500 to-amber-600"
    },
    cloud: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      accent: "#22D3EE",
      gradient: "from-cyan-600 to-sky-700"
    },
    hosting: {
      primary: "#0EA5E9",
      secondary: "#0369A1",
      accent: "#38BDF8",
      gradient: "from-sky-500 to-blue-600"
    },
    iot: {
      primary: "#10B981",
      secondary: "#059669",
      accent: "#34D399",
      gradient: "from-emerald-600 to-teal-700"
    },
    "3d-printing": {
      primary: "#EF4444",
      secondary: "#DC2626",
      accent: "#F87171",
      gradient: "from-red-600 to-rose-700"
    },
    consulting: {
      primary: "#6838E2",
      secondary: "#532CA3",
      accent: "#A56CD9",
      gradient: "from-purple-600 to-violet-700"
    },
    "3d-modeling": {
      primary: "#2DD4BF",
      secondary: "#0D9488",
      accent: "#5EEAD4",
      gradient: "from-teal-500 to-cyan-600"
    }
  };
  const serviceId = service?.id || "web";
  const colorScheme = colorSchemes[serviceId] || colorSchemes.web;
  const techGroups = service?.technologies ? Array.isArray(service.technologies) ? service.technologies : typeof service.technologies === "string" ? service.technologies.split(",") : [] : [];
  const translations = {
    premiumService: await t("common.premiumService", currentLang),
    requestProposal: await t("common.requestProposal", currentLang),
    benefits: await t("common.benefits", currentLang),
    more: await t("common.more", currentLang)
  };
  return renderTemplate(_b || (_b = __template(["<head>", "", '</head> <!-- Service layout content (no nested Layout wrapper) --> <div class="service-page"', " data-astro-cid-a5hfqa4e> <!-- Hero Section with Parallax Effect --> ", ' <!-- Main Content --> <div class="bg-[#0f0f0f] text-white" data-astro-cid-a5hfqa4e> <div class="service-details" data-astro-cid-a5hfqa4e> ', " <!-- Benefits Section --> ", " </div> </div> </div>  <script>(function(){", `
  document.addEventListener('DOMContentLoaded', () => {
    // SVG icons are now loaded directly from files
    
    // Add ARIA attributes to icons
    document.querySelectorAll('svg, img[src*="/icons/"]').forEach(icon => {
      if (!icon.getAttribute('aria-hidden')) {
        icon.setAttribute('aria-hidden', 'true');
      }
    });
    
    // Ensure all interactive elements without text have aria-labels
    document.querySelectorAll('a:not(:has(span)), button:not(:has(span))').forEach(element => {
      if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
        const nearestText = element.querySelector('title')?.textContent || 
                           element.getAttribute('title') || 
                           'Interactive element';
        element.setAttribute('aria-label', nearestText);
      }
    });
    
    // Canvas-based particles handled by particle-system-init.ts
  });
})();<\/script>`])), service?.image && renderTemplate`<link rel="preload" as="image"${addAttribute(service.image, "href")}>`, renderHead(), addAttribute(`--service-primary:${colorScheme.primary}; --service-secondary:${colorScheme.secondary}; --service-accent:${colorScheme.accent}; --izigna-primary:${colorScheme.primary};`, "style"), service && renderTemplate(_a || (_a = __template(['<section class="hero-section relative min-h-[70vh] flex items-center justify-center overflow-hidden"', ' data-astro-cid-a5hfqa4e> <div class="absolute inset-0 opacity-40 mix-blend-overlay"', ' data-astro-cid-a5hfqa4e></div> <!-- Geometric patterns for futuristic look --> <div class="absolute inset-0 geometric-patterns opacity-20" data-astro-cid-a5hfqa4e></div> <!-- Animated particles (canvas) --> <canvas id="service-particles-canvas" class="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" role="presentation" data-particle-count="60"', ' data-size-min="1" data-size-max="3" data-speed-min="0.2" data-speed-max="0.8"', ` data-line-thickness="1" data-connection-radius="120" data-fps="30" data-disable-on-coarse-pointer="true" data-disable-on-mobile="true" data-min-width="640" data-density="15000" data-astro-cid-a5hfqa4e></canvas> <script type="module">import '../scripts/particle-system-init.ts';<\/script> <div class="container mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10 text-center" data-astro-cid-a5hfqa4e> <div class="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" data-astro-cid-a5hfqa4e> <span class="text-sm font-medium text-white" data-astro-cid-a5hfqa4e>`, '</span> </div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-astro-cid-a5hfqa4e> ', ' <span class="block text-xl md:text-2xl font-normal mt-2 text-white/80" data-astro-cid-a5hfqa4e>', '</span> </h1> <p class="max-w-2xl mx-auto text-lg text-white/90 mb-8" data-astro-cid-a5hfqa4e> ', ' </p> <div class="flex flex-wrap justify-center gap-3 mb-8" data-astro-cid-a5hfqa4e> ', " ", ' </div> <a href="#contact" data-anchor-link class="cta-button cta-primary cta-service" data-astro-cid-a5hfqa4e> <span data-astro-cid-a5hfqa4e>', '</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-a5hfqa4e> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-a5hfqa4e></path> </svg> </a> </div> <!-- Bottom wave shape --> <div class="absolute bottom-0 left-0 right-0" data-astro-cid-a5hfqa4e> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-auto" preserveAspectRatio="none" aria-hidden="true" data-astro-cid-a5hfqa4e> <path fill="#0f0f0f" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" data-astro-cid-a5hfqa4e></path> </svg> </div> </section>'])), addAttribute(`background-image: linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.7)), url(${service.image}); background-size: cover; background-position: center;`, "style"), addAttribute(`background: linear-gradient(90deg, ${colorScheme.secondary}, ${colorScheme.primary});`, "style"), addAttribute(colorScheme.accent, "data-particle-color"), addAttribute(colorScheme.accent, "data-line-color"), translations.premiumService, service.title, service.subtitle, service.description, techGroups.slice(0, 8).map((tech) => renderTemplate`<span class="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm" data-astro-cid-a5hfqa4e> ${tech.trim()} </span>`), techGroups.length > 8 && renderTemplate`<span class="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm" data-astro-cid-a5hfqa4e>
+${techGroups.length - 8} ${translations.more} </span>`, translations.requestProposal), renderSlot($$result, $$slots["default"]), service?.benefits && renderTemplate`<section class="py-16 bg-[#0f0f0f]" data-astro-cid-a5hfqa4e> <div class="container mx-auto px-4 md:px-6 lg:px-8" data-astro-cid-a5hfqa4e> <h2 class="text-3xl font-bold text-center mb-12" data-astro-cid-a5hfqa4e> <span class="text-improved-contrast" data-astro-cid-a5hfqa4e>${translations.benefits}</span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-a5hfqa4e> ${service.benefits.map((benefit) => renderTemplate`<div class="card-surface transition-all hover:scale-105 group" data-astro-cid-a5hfqa4e> <div class="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:!bg-[var(--service-primary)]"${addAttribute(`background-color: ${colorScheme.primary}26;`, "style")} data-astro-cid-a5hfqa4e> <div class="h-7 w-7 transition-colors duration-300 group-hover:!bg-white"${addAttribute({
    backgroundColor: colorScheme.primary,
    mask: `url(/icons/ui/services/${benefit.icon}.svg) no-repeat center / contain`,
    WebkitMask: `url(/icons/ui/services/${benefit.icon}.svg) no-repeat center / contain`
  }, "style")} aria-hidden="true" data-astro-cid-a5hfqa4e></div> </div> <h3 class="text-xl font-semibold mb-3" data-astro-cid-a5hfqa4e>${benefit.title}</h3> <p data-astro-cid-a5hfqa4e>${benefit.description}</p> </div>`)} </div> </div> </section>`, defineScriptVars({ colorScheme }));
}, "D:/MEGA/IzignaMx/izignamx/src/components/ServiceLayout.astro", void 0);
export {
  $$ServiceLayout
};
