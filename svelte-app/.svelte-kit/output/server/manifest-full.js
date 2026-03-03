export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","ABsplash.png","AMU.png","APD_Image.png","artwork.zip","blender.png","character.png","codeHome.png","desertBackground.png","dingle.png","dingleTrio.png","emailDraw.png","endScreen1.png","favicon.png","gameplayAB.png","githubDrawing.png","goodEnding.png","JohnTLessons.png","kkAnimated.jpeg","kkSelfie.jpg","liamLounge.png","Liam_Treacy_CV.pdf","linked.png","linkedIN.png","logo.png","mayaHouse.png","mmCode.png","oceanZine.png","pencil.jpg","phoneDraw.png","portrait.png","pubSketch.png","randomPlaceholder.jpg","SCR.png","SCR_sunset.png","shopForAB.png","starFishedited.mp4","testBlender.png","whaleCrash.gif","woodenPallette.png","worldWhales.png"]),
	mimeTypes: {".png":"image/png",".zip":"application/zip",".jpeg":"image/jpeg",".jpg":"image/jpeg",".pdf":"application/pdf",".mp4":"video/mp4",".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.KIkHgbNq.js",app:"_app/immutable/entry/app.CqDJABze.js",imports:["_app/immutable/entry/start.KIkHgbNq.js","_app/immutable/chunks/yCqY4vKF.js","_app/immutable/chunks/CHV90XBu.js","_app/immutable/chunks/BNbo40nS.js","_app/immutable/chunks/BCwlLHde.js","_app/immutable/entry/app.CqDJABze.js","_app/immutable/chunks/CHV90XBu.js","_app/immutable/chunks/DPRCrmrb.js","_app/immutable/chunks/Cu-BSaIE.js","_app/immutable/chunks/B9Gk7Stz.js","_app/immutable/chunks/BCwlLHde.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/AboutMe",
				pattern: /^\/AboutMe\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/art",
				pattern: /^\/art\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/games",
				pattern: /^\/games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/webDev",
				pattern: /^\/webDev\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
