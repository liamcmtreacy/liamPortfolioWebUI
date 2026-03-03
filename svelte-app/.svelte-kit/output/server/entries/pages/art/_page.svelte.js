import { d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<div class="stylingDiv svelte-14h8y7l"><h1 class="svelte-14h8y7l">Art &amp; Visual Work</h1> <p class="svelte-14h8y7l">I have always enjoyed drawing and sketching from a young age. My art style
    is admittedly a bit goofy, but at this point it feels second nature to me.
    Over time it has slowly evolved into something that feels like my own.</p> <p class="svelte-14h8y7l">Two of the biggest influences on my style were the <em>Henry Stickmin</em> games, which I used to play (and trace) when I was younger, and <em>South Park</em>, particularly its exaggerated character designs and
    strong use of simple visual traits like hats and large eyes to distinguish
    characters.</p> <div class="projectGrid svelte-14h8y7l"><div class="project svelte-14h8y7l"><h2 class="svelte-14h8y7l">3D Modelling: Maya/Blender</h2> <img class="projectImage svelte-14h8y7l"${attr("src", `${stringify(base)}/mayaHouse.png`)} alt="A house model created in Maya with fences, grass and trees"> <p class="svelte-14h8y7l">This is a 3D environment piece created in Maya. I focused on clean,
        readable shapes and colour contrast rather than realism, as I prefer
        stylised visuals that feel approachable and clear.</p></div> <div class="project svelte-14h8y7l"><h2 class="svelte-14h8y7l">Sketches &amp; Character Art</h2> <img class="projectImage svelte-14h8y7l"${attr("src", `${stringify(base)}/SCR_sunset.png`)} alt="Doodle of two characters in my art style drinking and smoking"> <p class="svelte-14h8y7l">Most of my 2D work revolves around loose sketches and character designs.
        I tend to exaggerate proportions and facial features, leaning into a
        cartoon style that prioritises personality over realism. Inspirations include Ren and Stimpy, The Simpsons, South Park, Sonic The Hedgehog and Mr Men.</p></div> <div class="project svelte-14h8y7l"><h2 class="svelte-14h8y7l">Animation</h2> <video class="projectVideo svelte-14h8y7l" controls preload="metadata"><source${attr("src", `${stringify(base)}/starFishedited.mp4`)} type="video/mp4"> Your browser does not support the video tag.</video> <p class="svelte-14h8y7l">This is a short animation project focusing on movement, timing and visual
        clarity. I enjoy animation as a way to bring the characters and styles I
        draw to life, even in small, simple pieces like this.</p></div></div> <a${attr("href", `${stringify(base)}/artwork.zip`)} download="liamTreacy_artwork.zip" aria-label="Download my artwork folder" class="svelte-14h8y7l">⬇️ Download a folder with more examples of my artwork</a></div>`;
}
export {
  _page as default
};
