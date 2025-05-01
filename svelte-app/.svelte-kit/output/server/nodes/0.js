import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.94zQ_0rS.js","_app/immutable/chunks/CSsSgPTk.js","_app/immutable/chunks/ByBKs_gt.js","_app/immutable/chunks/DoMMstDn.js","_app/immutable/chunks/Bsvuzwaw.js","_app/immutable/chunks/U2x_SJ4B.js"];
export const stylesheets = ["_app/immutable/assets/0.DixzrEdU.css","_app/immutable/assets/Modal.D3dw5Ksd.css","_app/immutable/assets/_page.B1UbyjT4.css"];
export const fonts = [];
