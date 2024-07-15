import { r as redirect } from './index-1dce6fb5.js';

const load = async (serverloadEvent) => {
  throw redirect(302, "/");
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-3ba93dd3.js')).default;
const universal_id = "src/routes/(portfolio)/fr/+page.js";
const imports = ["_app/immutable/nodes/6.548a2cae.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.0276e308.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-7f26eebb.js.map
