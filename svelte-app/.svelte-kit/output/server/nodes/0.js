import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DufSLlgA.js","_app/immutable/chunks/C07lPC62.js","_app/immutable/chunks/B30d4j3m.js","_app/immutable/chunks/CmyAzgDf.js","_app/immutable/chunks/BrI-lf-r.js","_app/immutable/chunks/DOM1iRSV.js"];
export const stylesheets = ["_app/immutable/assets/0.DixzrEdU.css","_app/immutable/assets/Modal.OCLoZ6_8.css","_app/immutable/assets/_page.CI6aSFGS.css"];
export const fonts = [];
