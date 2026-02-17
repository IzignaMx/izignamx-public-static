import { createAstro, createComponent, maybeRenderHead, addAttribute, renderTemplate } from "./CfGiqa0J.js";
import "kleur/colors";
import "clsx";
const $$Astro = createAstro("https://izignamx.com");
const $$TitleHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleHeader;
  const {
    title,
    subtitle,
    backgroundImage
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="title-header relative w-full py-20 overflow-hidden" data-astro-cid-k4epie6l> ${backgroundImage && renderTemplate`<div class="absolute inset-0 z-0" data-astro-cid-k4epie6l> <img${addAttribute(backgroundImage, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover object-center opacity-20" data-astro-cid-k4epie6l> <div class="absolute inset-0 bg-gradient-to-b from-[#000]/60 to-[#121212] mix-blend-multiply" data-astro-cid-k4epie6l></div> </div>`} <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10" data-astro-cid-k4epie6l> <div class="max-w-4xl mx-auto text-center" data-astro-cid-k4epie6l> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white font-adamcg" data-astro-cid-k4epie6l> ${title} </h1> <p class="text-xl text-gray-300" data-astro-cid-k4epie6l> ${subtitle} </p> <div class="mt-8 flex items-center justify-center" data-astro-cid-k4epie6l> <div class="h-1 w-16 bg-izigna-primary" data-astro-cid-k4epie6l></div> <div class="mx-4" data-astro-cid-k4epie6l> <img src="/assets/img/iz-miin0.png" alt="IzignaMx Logo" class="h-8" data-astro-cid-k4epie6l> </div> <div class="h-1 w-16 bg-izigna-primary" data-astro-cid-k4epie6l></div> </div> </div> </div> </div> `;
}, "D:/MEGA/IzignaMx/izignamx/src/components/TitleHeader.astro", void 0);
export {
  $$TitleHeader
};
