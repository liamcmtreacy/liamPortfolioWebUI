export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","ABsplash.png","AMU.png","artwork.zip","aseprite.png","dingle.png","dingleTrio.png","emailDraw.png","endScreen1.png","favicon.png","gameplayAB.png","githubDrawing.png","goodEnding.png","liamcv.pdf","linked.png","linkedIN.png","logo.png","mayaHouse.png","mmCode.png","pencil.jpg","phoneDraw.png","portrait.png","pubSketch.png","randomPlaceholder.jpg","SCR.png","shopForAB.png","whaleCrash.gif"]),
	mimeTypes: {".png":"image/png",".zip":"application/zip",".pdf":"application/pdf",".jpg":"image/jpeg",".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.BsmNqP4Z.js",app:"_app/immutable/entry/app.CFY4tdkf.js",imports:["_app/immutable/entry/start.BsmNqP4Z.js","_app/immutable/chunks/D7cvCACA.js","_app/immutable/chunks/B30d4j3m.js","_app/immutable/chunks/mOdrqEop.js","_app/immutable/chunks/Aka9zKYx.js","_app/immutable/entry/app.CFY4tdkf.js","_app/immutable/chunks/B30d4j3m.js","_app/immutable/chunks/BVDRu8dZ.js","_app/immutable/chunks/C07lPC62.js","_app/immutable/chunks/CQ8WSNVD.js","_app/immutable/chunks/Aka9zKYx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/aboutme","/art","/games","/whales"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
