import { c as create_ssr_component, b as add_attribute } from './index3-e904a6bd.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}canvas.svelte-7u7asf{width:100vw;height:100vh;display:block;position:fixed;top:0;left:0;background:rgb(74, 74, 74);background:radial-gradient(circle, rgb(74, 74, 74) 0%, rgb(14, 14, 14) 48%, rgb(0, 0, 0) 100%)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let el;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1p0pas8_START -->${$$result.title = `<title>Three.js</title>`, ""}<meta name="description" content="Three.js gltf app built with Svelte"><!-- HEAD_svelte-1p0pas8_END -->`, ""}

<canvas class="svelte-7u7asf"${add_attribute("this", el, 0)}></canvas>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ccd45c77.js.map
