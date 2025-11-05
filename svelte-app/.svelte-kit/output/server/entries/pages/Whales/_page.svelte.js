import "clsx";
import { b as base } from "../../../chunks/paths.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload) {
  $$payload.out += `<h1 class="svelte-gib76s">Website Development</h1> <p class="svelte-gib76s">During College I have learned to use HTML, CSS, Javascript and Svelte, currentl my portfolio and this group project are the main websites I have made, my game "Angry Man's Utopia" was made using HTML, CSS and Javascript</p> <h1 class="svelte-gib76s">Here is the link to the website I made, as part of a group project</h1> <div class="gifBG svelte-gib76s"><div class="overlay"></div></div> <a href="https://liamcmtreacy.github.io/WebUI_LiamMikeyJess_groupProject/" class="svelte-gib76s">Link to The World of Whales</a>  ${html(`<style> 
    @keyframes gifs { 
        0%, 100% { 
            background-image: url('${base}/whaleCrash.gif');
            opacity: 0.5;
            
        }
}
</style`)}`;
}
export {
  _page as default
};
