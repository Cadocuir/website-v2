import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component, f as null_to_empty, h as each } from './index3-9cccdbaa.js';
import { p as page } from './stores-4336c9e3.js';
import { t as t2, l as locale, a as locales } from './2-d063c1df.js';
import './index2-f64d651d.js';

const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#FF9F1C;--color-light:#F9F5FF;--color-darkblue:#28262C;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}@media only screen and (max-width : 960px){:root{font-size:12px}}button.svelte-fr0zg3.svelte-fr0zg3{position:fixed;top:0;right:0;width:16px;height:16px;margin:16px 16px;z-index:999;cursor:pointer}button.svelte-fr0zg3 img.svelte-fr0zg3{width:100%;height:100%}#popup-settings.svelte-fr0zg3.svelte-fr0zg3{position:fixed;top:0;right:0;background-color:rgba(40, 38, 44, 0.7);backdrop-filter:brightness(1.5) blur(4px);margin:32px;z-index:999;padding:16px;box-shadow:3px 3px 10px -5px #000000;opacity:0;transition:cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s all;border-top-right-radius:32px;border-bottom-left-radius:32px;pointer-events:none}#popup-settings.popup-open.svelte-fr0zg3.svelte-fr0zg3{pointer-events:all;opacity:1}#popup-settings.svelte-fr0zg3 table.svelte-fr0zg3{border-collapse:unset;border-spacing:unset}#popup-settings.svelte-fr0zg3 table tr.svelte-fr0zg3{padding:8px;color:#F9F5FF;font-family:"Comfortaa"}#popup-settings.svelte-fr0zg3 table tr td.svelte-fr0zg3{padding:8px}#popup-settings.svelte-fr0zg3 table tr td select.svelte-fr0zg3{border-radius:16px;text-align:center;border:none}',
  map: null
};
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_locale;
  let $locales, $$unsubscribe_locales;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => value);
  $$unsubscribe_locales = subscribe(locales, (value) => $locales = value);
  let popupPanel;
  $$result.css.add(css$1);
  $$unsubscribe_t();
  $$unsubscribe_locale();
  $$unsubscribe_locales();
  return `<button title="Toggle settings button" name="settings" class="svelte-fr0zg3"><img alt="parametres" src="/images/ecrou.png" class="svelte-fr0zg3"></button>

<div id="popup-settings" class="${escape(null_to_empty(""), true) + " svelte-fr0zg3"}"${add_attribute("this", popupPanel, 0)}><table class="svelte-fr0zg3"><tr class="svelte-fr0zg3"><td class="svelte-fr0zg3">${escape($t("common.Setting_Language"))}</td>
            <td class="svelte-fr0zg3"><select class="svelte-fr0zg3">${each($locales, (value) => {
    return `<option${add_attribute("value", value, 0)}>${escape($t(`lang.${value}`))}</option>`;
  })}</select></td></tr></table>

</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>${validate_component(Settings, "Settings").$$render($$result, {}, {}, {})}</header>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#FF9F1C;--color-light:#F9F5FF;--color-darkblue:#28262C;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}@media only screen and (max-width : 960px){:root{font-size:12px}}footer.svelte-9tgvth{margin-top:50px;width:100%;height:50px;font-family:"Bebas Neue";display:flex;justify-content:center;align-items:center;flex-direction:column;position:relative;z-index:1}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-9tgvth">© 2023 Cadocuir Maroquinerie.

</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1mhw16t_START --><link rel="icon"${add_attribute("href", $page.data.icon || "/favicon.png", 0)}>${$$result.title = `<title>${escape($page.data.title || "Selte Begins")}</title>`, ""}<!-- HEAD_svelte-1mhw16t_END -->`, ""}

<div class="app">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main>${slots.default ? slots.default({}) : ``}</main>
    
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-92a04e42.js.map
