import { d as slot } from "../../chunks/index.js";
import "clsx";
/* empty css                                               */
import { a as attr } from "../../chunks/attributes.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                                               */
function Header($$payload) {
  $$payload.out += `<header class="svelte-u3r3b6"><div class="logo"></div> `;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
function Navigation($$payload) {
  $$payload.out += `<nav class="svelte-3laqx1"><ul class="svelte-3laqx1"><li class="svelte-3laqx1"><a${attr("href", `${base}/`)} class="svelte-3laqx1">Home Page</a></li> <li class="svelte-3laqx1"><a${attr("href", `${base}/art`)} class="svelte-3laqx1">My Artwork</a></li> <li class="svelte-3laqx1"><a${attr("href", `${base}/games`)} class="svelte-3laqx1">Games I have created</a></li> <li class="svelte-3laqx1"><a${attr("href", `${base}/Whales`)} class="svelte-3laqx1">Web Development</a></li> <li class="svelte-3laqx1"><a${attr("href", `${base}/AboutMe`)} class="svelte-3laqx1">About Me</a></li></ul></nav>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1nt1av3"><h3 class="svelte-1nt1av3">© 2025, Liam Treacy Portfolio. All Rights Reserved</h3></footer>`;
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-12ui1mb"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
