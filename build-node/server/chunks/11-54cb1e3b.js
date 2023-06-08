import { c as create_ssr_component, e as escape, b as add_attribute } from './index3-e904a6bd.js';
import { e as error } from './index-36410280.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}.container.svelte-ptmxso.svelte-ptmxso{margin:16px;padding:8px;backdrop-filter:blur(15px) brightness(120%);background-color:rgba(42, 102, 255, 0.02);width:100%;height:100%;border-radius:30px}.container.svelte-ptmxso #img.svelte-ptmxso{border-top-left-radius:30px;border-top-right-radius:30px;width:100%;height:80%;object-fit:cover}',
  map: null
};
const Photo_component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { photoData } = $$props;
  let { id = "unknown" } = photoData.id;
  let { regular = "unknown" } = photoData.urls;
  let { alt_description = "No alternate description" } = photoData;
  let { description = "No description" } = photoData;
  if ($$props.photoData === void 0 && $$bindings.photoData && photoData !== void 0)
    $$bindings.photoData(photoData);
  $$result.css.add(css);
  return `<div class="container svelte-ptmxso" id="${"photo-" + escape(id, true)}"><img id="img"${add_attribute("src", regular, 0)}${add_attribute("alt", alt_description, 0)} class="svelte-ptmxso">
    <div class="description-wrapper"><div class="description"><h1>${escape(alt_description)}</h1>
            <p>${escape(description)}</p></div></div>
</div>`;
});
const load$1 = async (loadEvent) => {
  const { data } = loadEvent;
  return {
    title: data.alt_description,
    icon: data.urls.thumb,
    randomPhoto: {
      photoData: data,
      Component: Photo_component
    }
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const UNSPLASH_API_KEY = "S_vBTCKYQ5qL4vgOVeFxK7-Zn-bXQRF-r8h7vi5u5dM";
const load = async (serverloadEvent) => {
  const { fetch } = serverloadEvent;
  const response = await fetch("https://api.unsplash.com/photos/random", {
    headers: {
      "Accept-Version": "v1",
      "Authorization": `Client-ID ${UNSPLASH_API_KEY}`
    }
  });
  if (!response.ok)
    throw error(response.status, { message: `Error: ${response.status} ${response.statusText}` });
  let photo = await response.json();
  return photo;
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
const component = async () => (await import('./_page.svelte-0c4068bf.js')).default;
const universal_id = "src/routes/(tests)/unsplash/random/+page.js";
const server_id = "src/routes/(tests)/unsplash/random/+page.server.js";
const imports = ["_app/immutable/nodes/11.1beef673.js","_app/immutable/chunks/index.f42e8665.js"];
const stylesheets = ["_app/immutable/assets/11.9724ed64.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=11-54cb1e3b.js.map
