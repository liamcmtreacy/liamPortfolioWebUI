import { f as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                                               */
import { a as attr } from "../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<h1 class="svelte-1vl8mh">Hello, my name is Liam Treacy</h1> <h2 class="svelte-1vl8mh">I am a student at SETU Carlow studying Computing in Interactive Digital Art and Design, welcome to my Portfolio</h2> <img id="me"${attr("src", `${stringify(base)}/kkAnimated.jpeg`)} alt="portrait of me with a black and white filter" class="svelte-1vl8mh"> <h3 class="svelte-1vl8mh">Have a look around, hopefully you like what you see!</h3>`;
}
export {
  _page as default
};
