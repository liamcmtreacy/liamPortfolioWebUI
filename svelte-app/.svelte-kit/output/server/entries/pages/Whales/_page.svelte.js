import "clsx";
import { b as base } from "../../../chunks/paths.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload) {
  $$payload.out += `<h1 class="svelte-138antj">Here is the link to the website I made, as part of a group project</h1> <div class="gifBG svelte-138antj"><div class="overlay"></div></div> <a href="https://liamcmtreacy.github.io/WebUI_LiamMikeyJess_groupProject/" class="svelte-138antj">Link to The World of Whales</a>  ${html(`<style> 
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
