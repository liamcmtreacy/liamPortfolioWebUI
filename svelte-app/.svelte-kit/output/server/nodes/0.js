import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BK9rGkkL.js","_app/immutable/chunks/Cu-BSaIE.js","_app/immutable/chunks/CHV90XBu.js","_app/immutable/chunks/Dom_1FmW.js","_app/immutable/chunks/CPjokQAr.js","_app/immutable/chunks/BNbo40nS.js"];
export const stylesheets = ["_app/immutable/assets/0.DpwLHvdl.css","_app/immutable/assets/Modal.Ch95_Ykh.css"];
export const fonts = [];
