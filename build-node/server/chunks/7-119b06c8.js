import { r as redirect } from './index-4dc5572a.js';

const load = async (serverloadEvent) => {
  throw redirect(302, "/");
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-93853e7b.js')).default;
const universal_id = "src/routes/(portfolio)/projects/+page.js";
const imports = ["_app/immutable/nodes/7.25be6a6a.js","_app/immutable/chunks/index.c6708bed.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.f212c07f.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=7-119b06c8.js.map