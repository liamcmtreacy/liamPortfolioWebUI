import { e as bind_props, c as pop, p as push, f as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
/* empty css                                                  */
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
  $$payload.out += `<div class="aboutGrid svelte-1b1v33k"><h1 class="svelte-1b1v33k">About Me</h1> <p class="svelte-1b1v33k">My name is Liam Treacy, I was born on February 24th 2004 in county Kilkenny, I currently live in Ballinkillen County Carlow. <br> I am always interested to improve my skills, or to try a different way of completing a task, I am currently in my second year of Computing in Interactive Digital Art and Design, I will graduate in 2027.
I hope to obtain a career working in Animation, my ultimate goal would be to have an animated series of my own one day.</p> <p class="svelte-1b1v33k">I currently work in the Eddie Rockets Diner in Shamrock Plaza, Carlow, I am also a volunteer at Visual Gallery and Theathre in Carlow. My future plan is too enroll in the IADT DL931 Animation Masters once I graduate.</p> <h1 class="svelte-1b1v33k">Events I've taken part in</h1> <h2 class="svelte-1b1v33k">Dingle Animation Festival 2025</h2> <img id="dinglePhoto"${attr("src", `${stringify(base)}/dingle.png`)} alt="Two of my classmates and I at Dingle Animation Festival" class="svelte-1b1v33k"> <p class="svelte-1b1v33k">From March 20th - 22nd 2025, I had the pleasure of attending Dingle Animation Festival as a part of my course. During this event it was amazing to meet many lovely industry professionals, who offered their advice and I was able to gain many new Linkedin connections.
    Some other highlights include learning to draw with Will Sliney, taking part in the Pitch for a Pint event and showing my ideas to an executive, and seeing the sights of Dingle, Kerry. <br> <a href="https://www.setu.ie/news/setu-students-shortlisted-at-dingle-animation-festival">We also had an article written about us for SETU Carlow</a></p> <img id="dingleTrio"${attr("src", `${stringify(base)}/dingleTrio.png`)} alt="group of us from Dingle" class="svelte-1b1v33k"> <h2 class="svelte-1b1v33k">Brownbag Films and Kilkenny animated</h2> <p class="svelte-1b1v33k">On April 24th 2025, I had the pleasure of attending a Brown Bag Films event, where their staff gave talks about Storyboarding, the use of Unreal Engine in animation and Animation Directing, afterwards there was an hour for Networking where I had the chance to speak to their staff and talk, including co-founder Darragh O'Connell and Matthew Lloyd. Likewise with Kilkenny Animated, I was able to attend from October 3rd to October 5th, it was a great opportunity to meet other aspiring artists, and industry professionals. <img id="kkSelfie"${attr("src", `${stringify(base)}/kkSelfie.jpg`)} alt="group of us from Kilkenny Animated" class="svelte-1b1v33k"></p> <div class="grid01"><h1 class="svelte-1b1v33k">So what exactly am I studying?</h1> <p class="svelte-1b1v33k">I am enrolled in a course in SETU Carlow called Computing in Interactive Digital Art and Design "IDAD". In this course we learn about 
    Animation, Game Design, Web Development and also learn about the industries and how to effectively work in them. I also plan to complete an animation masters in IADT.</p> <a href="https://www.setu.ie/courses/bsc-hons-in-computing-in-interactive-digital-art-and-design">Link to information page for IDAD at SETU Carlow</a> <a href="https://iadt.ie/courses/ma-animation/">IADT Animation Masters info page</a></div> <h1 class="svelte-1b1v33k">Here you can find any relevant contact information for me!</h1>  <div class="contactInfo svelte-1b1v33k">`;
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
  $$payload.out += `<!----></div> <a${attr("href", `${stringify(base)}/Liam_Treacy_CV.pdf`)} download="liamcv.pdf" aria-label="Download My CV"><span aria-hidden="true">⬇️</span> Download My CV</a></div>`;
  pop();
}
export {
  _page as default
};
