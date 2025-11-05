export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","ABsplash.png","AMU.png","artwork.zip","dingle.png","dingleTrio.png","emailDraw.png","endScreen1.png","favicon.png","gameplayAB.png","githubDrawing.png","goodEnding.png","kkAnimated.jpeg","kkSelfie.jpg","Liam_Treacy_CV.pdf","linked.png","linkedIN.png","logo.png","mayaHouse.png","mmCode.png","pencil.jpg","phoneDraw.png","portrait.png","pubSketch.png","randomPlaceholder.jpg","SCR.png","shopForAB.png","whaleCrash.gif"]),
	mimeTypes: {".png":"image/png",".zip":"application/zip",".jpeg":"image/jpeg",".jpg":"image/jpeg",".pdf":"application/pdf",".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.C8BCBqSt.js",app:"_app/immutable/entry/app.DKrR1JgW.js",imports:["_app/immutable/entry/start.C8BCBqSt.js","_app/immutable/chunks/Dnw23hTr.js","_app/immutable/chunks/B30d4j3m.js","_app/immutable/chunks/DOM1iRSV.js","_app/immutable/chunks/Aka9zKYx.js","_app/immutable/entry/app.DKrR1JgW.js","_app/immutable/chunks/B30d4j3m.js","_app/immutable/chunks/BVDRu8dZ.js","_app/immutable/chunks/C07lPC62.js","_app/immutable/chunks/CQ8WSNVD.js","_app/immutable/chunks/Aka9zKYx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/AboutMe","/Whales","/art","/games"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
