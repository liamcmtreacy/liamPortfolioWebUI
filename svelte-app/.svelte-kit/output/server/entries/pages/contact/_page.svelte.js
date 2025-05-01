import { e as bind_props, c as pop, p as push, f as stringify } from "../../../chunks/index.js";
/* empty css                                                  */
import { b as base } from "../../../chunks/paths.js";
/* empty css                                                  */
import { h as fallback } from "../../../chunks/utils.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Card($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "Card Title");
  let src = fallback($$props["src"], "");
  let alt = fallback($$props["alt"], "");
  let description = fallback($$props["description"], "Description");
  const link = "";
  $$payload.out += `<div class="Card svelte-366625"><img${attr("src", src)}${attr("alt", alt)} class="svelte-366625"> <div class="content svelte-366625"><h2 class="svelte-366625">${escape_html(title)}</h2></div> <p class="svelte-366625">${escape_html(description.substring(0, 5) + "...")}</p> <button class="read-more svelte-366625">${escape_html("Read More")}</button></div>`;
  bind_props($$props, { title, src, alt, description, link });
  pop();
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<h1 class="svelte-1yy0gmh">Here you can find any relevant contact information for me!</h1>  <div class="contactInfo svelte-1yy0gmh">`;
  Card($$payload, {
    title: "Phone",
    src: `${stringify(base)}/phoneDraw.png`,
    alt: "Drawing of Phone",
    description: "My personal phone number is: 085-211-1818"
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Github",
    src: `${stringify(base)}/githubDrawing.png`,
    alt: "Github DrawingS",
    description: "If you would like to add me on Github, my name is Liamcmtreacy, you can also follow this link:\r\n        https://github.com/liamcmtreacy?tab=repositories"
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Linkedin",
    src: `${stringify(base)}/linkedIN.png`,
    alt: "You will be redirected to my Linkedin if you use the link",
    description: "The following link will take you directly to my Linkedin: https://www.linkedin.com/in/liam-treacy-cw/"
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Emails",
    src: `${stringify(base)}/emailDraw.png`,
    alt: "drawing of a blue envelope, used as the image to depict the contact email",
    description: "If you would like to contact me via email, you can contact me personally by emailing Liamtreacy100@hotmail.com, or you can contact me via my college email by messaging C00298242@setu.ie"
  });
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
