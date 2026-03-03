import { f as bind_props, c as pop, p as push, d as stringify } from "../../../chunks/index.js";
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
  $$payload.out += `<div class="stylingDiv svelte-1a2it32"><h1 class="svelte-1a2it32">About Me</h1> <p class="svelte-1a2it32">My name is Liam Treacy. I was born on February 24th, 2004 in County Kilkenny
    and currently live in Ballinkillen, County Carlow.</p> <p class="svelte-1a2it32">I am currently studying Computing in Interactive Digital Art and Design and
    will graduate in 2027. I enjoy constantly improving my skills and exploring
    new ways of creating things. My long-term goal is to work in animation and
    eventually create an animated series of my own.</p> <p class="svelte-1a2it32">I currently work in Eddie Rockets in Carlow and volunteer at the VISUAL
    Centre for Contemporary Art &amp; Theatre. After graduating, I hope to continue
    my education by completing the IADT MA in Animation.</p> <h1 class="svelte-1a2it32">Events &amp; Industry Experiences</h1> <div class="projectGrid svelte-1a2it32"><div class="project svelte-1a2it32"><h2 class="svelte-1a2it32">Dingle Animation Festival 2025</h2> <img class="projectImage svelte-1a2it32"${attr("src", `${stringify(base)}/dingle.png`)} alt="Two classmates and I at Dingle Animation Festival"> <p class="svelte-1a2it32">From March 20th–22nd 2025, I attended Dingle Animation Festival as part
        of my course. It was an incredible opportunity to meet industry
        professionals, build connections, and take part in events like Pitch for
        a Pint and workshops with artists such as Will Sliney.</p> <a href="https://www.setu.ie/news/setu-students-shortlisted-at-dingle-animation-festival" target="_blank" class="svelte-1a2it32">Read the SETU article about our trip</a> <img class="projectImage svelte-1a2it32"${attr("src", `${stringify(base)}/dingleTrio.png`)} alt="Group photo from Dingle Animation Festival"></div> <div class="project svelte-1a2it32"><h2 class="svelte-1a2it32">Brown Bag Films &amp; Kilkenny Animated</h2> <img class="projectImage svelte-1a2it32"${attr("src", `${stringify(base)}/kkSelfie.jpg`)} alt="Photo from Kilkenny Animated"> <p class="svelte-1a2it32">In April 2025 I attended a Brown Bag Films event covering storyboarding,
        Unreal Engine in animation, and directing. I also attended Kilkenny
        Animated later that year, which gave me more opportunities to meet both
        aspiring artists and industry professionals.</p></div></div> <h1 class="svelte-1a2it32">What I'm Studying</h1> <p class="svelte-1a2it32">I am enrolled in Computing in Interactive Digital Art and Design at SETU
    Carlow. The course covers animation, game design, web development and
    creative technologies, while also preparing students for real industry
    workflows.</p> <a href="https://www.setu.ie/courses/bsc-hons-in-computing-in-interactive-digital-art-and-design" target="_blank" class="svelte-1a2it32">Learn more about IDAD at SETU</a> <a href="https://iadt.ie/courses/ma-animation/" target="_blank" class="svelte-1a2it32">IADT MA Animation Course</a> <h1 class="svelte-1a2it32">Contact &amp; Links</h1> <div class="contactGrid svelte-1a2it32">`;
  Card($$payload, {
    title: "GitHub",
    src: `${stringify(base)}/githubDrawing.png`,
    alt: "GitHub drawing",
    description: "You can view my repositories at:\r\n      https://github.com/liamcmtreacy"
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "LinkedIn",
    src: `${stringify(base)}/linkedIN.png`,
    alt: "LinkedIn drawing",
    description: "Connect with me on LinkedIn:\r\n      https://www.linkedin.com/in/liam-treacy-cw/"
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Email",
    src: `${stringify(base)}/emailDraw.png`,
    alt: "Drawing of an envelope",
    description: "Personal: Liamtreacy100@hotmail.com\r\n      College: C00298242@setu.ie"
  });
  $$payload.out += `<!----></div> <a${attr("href", `${stringify(base)}/Liam_Treacy_CV.pdf`)} download="liamcv.pdf" aria-label="Download my CV" class="svelte-1a2it32">⬇️ Download My CV</a></div>`;
  pop();
}
export {
  _page as default
};
