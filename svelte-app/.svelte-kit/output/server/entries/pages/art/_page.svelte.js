import { f as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<div class="stylingDiv svelte-1ofcfza"><h1 class="svelte-1ofcfza">Welcome to my Art Page!</h1> <img id="mayaHou"${attr("src", `${stringify(base)}/mayaHouse.png`)} alt="a house which is cream and red and was constructed in Maya, it has fences, grass and trees too." class="svelte-1ofcfza"> <img id="SCR"${attr("src", `${stringify(base)}/pubSketch.png`)} alt="Doodle I did of two characters in my art style, drinking and smoking" class="svelte-1ofcfza"> <p class="svelte-1ofcfza">I have always enjoyed Drawing and Sketching since I was young, my art style is admittedly rather goofy, however it is just second nature now. The two biggest inspirations for my art style was the Henry Stickman series of games, I used to play these 
    a lot and would trace the characters, until I got a bit older and started adding more details and progressively turning it into my own style.

    The other main inspiration was South Park, I always liked how the show had characters with rather exaggerated features, for example huge eyes, and how characters often had hats or clothing to help distinguish them.</p><p class="svelte-1ofcfza"><a${attr("href", `${stringify(base)}/artwork.zip`)} download="liamTreacy_artwork.zip" aria-label="Download My Folder" class="svelte-1ofcfza"><span aria-hidden="true">⬇️</span> If you would like to access to a folder with more examples of my art, download this folder</a></p></div>`;
}
export {
  _page as default
};
