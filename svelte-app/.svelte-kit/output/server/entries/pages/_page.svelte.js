import { d as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<div class="homeWrapper svelte-1g88xa"><h1 class="fadeIn svelte-1g88xa">Hello, my name is Liam Treacy</h1> <h3 class="tagline fadeIn delay1 svelte-1g88xa">Animation • Games • Visual Storytelling</h3> <h2 class="fadeIn delay2 svelte-1g88xa">I am a student at SETU Carlow studying Computing in Interactive
		Digital Art and Design.</h2> <p class="goal fadeIn delay3 svelte-1g88xa">Wanna be animator and creative developer, passionite in storytelling,
		character animation and all around creative work.</p> <div class="imageWrap fadeIn delay4 svelte-1g88xa"><img id="me"${attr("src", `${stringify(base)}/kkAnimated.jpeg`)} alt="Group of us at Kilkenny Animated" class="svelte-1g88xa"></div> <div class="featured fadeIn delay5 svelte-1g88xa"><h2 class="svelte-1g88xa">What you can expect to see!</h2> <div class="grid svelte-1g88xa"><div class="card svelte-1g88xa"><img${attr("src", `${stringify(base)}/character.png`)} alt="2D Illustration" class="svelte-1g88xa"> <p class="svelte-1g88xa">2D Character Illustations</p></div> <div class="card svelte-1g88xa"><img${attr("src", `${stringify(base)}/codeHome.png`)} alt="Proof I can code" class="svelte-1g88xa"> <p class="svelte-1g88xa">Code Based Projects</p></div> <div class="card svelte-1g88xa"><img${attr("src", `${stringify(base)}/testBlender.png`)} alt="3D Model" class="svelte-1g88xa"> <p class="svelte-1g88xa">3D Modelling</p></div></div> <h3 class="fadeIn delay6 svelte-1g88xa">Have a look around — hopefully you like what you see</h3> <p class="navHint fadeIn delay7 svelte-1g88xa">Explore my animation, games and artwork using the navigation above.</p></div></div>`;
}
export {
  _page as default
};
