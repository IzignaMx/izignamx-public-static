import { createAstro, createComponent, maybeRenderHead, addAttribute, renderSlot, renderTemplate } from "./CfGiqa0J.js";
import "kleur/colors";
import "clsx";
const $$Astro = createAstro("https://izignamx.com");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container mx-auto px-4 md:px-6 lg:px-8 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/MEGA/IzignaMx/izignamx/src/components/Container.astro", void 0);
export {
  $$Container
};
