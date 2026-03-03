import { d as stringify, e as slot } from "../../chunks/index.js";
import "clsx";
/* empty css                                               */
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function Header($$payload) {
  $$payload.out += `<header class="svelte-u3r3b6"><div class="logo"></div> `;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
function Navigation($$payload) {
  $$payload.out += `<nav class="svelte-3ntpuz"><ul class="svelte-3ntpuz"><li class="svelte-3ntpuz"><a${attr("href", `${stringify(base)}/`)} class="svelte-3ntpuz">Home Page</a></li> <li class="svelte-3ntpuz"><a${attr("href", `${stringify(base)}/art`)} class="svelte-3ntpuz">My Artwork</a></li> <li class="svelte-3ntpuz"><a${attr("href", `${stringify(base)}/games`)} class="svelte-3ntpuz">Games I have created</a></li> <li class="svelte-3ntpuz"><a${attr("href", `${stringify(base)}/webDev`)} class="svelte-3ntpuz">Web Development</a></li> <li class="svelte-3ntpuz"><a${attr("href", `${stringify(base)}/AboutMe`)} class="svelte-3ntpuz">About Me</a></li></ul></nav>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1nt1av3"><h3 class="svelte-1nt1av3">© 2025, Liam Treacy Portfolio. All Rights Reserved</h3></footer>`;
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-1h6v5wy"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
