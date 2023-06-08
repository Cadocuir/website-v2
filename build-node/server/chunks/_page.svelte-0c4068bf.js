import { c as create_ssr_component, v as validate_component } from './index3-e904a6bd.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}div.svelte-1qhm3ih{width:300px;height:auto}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { randomPhoto } = data;
  let { Component, photoData } = randomPhoto;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="svelte-1qhm3ih">${validate_component(Component, "Component").$$render($$result, { photoData }, {}, {})}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0c4068bf.js.map
