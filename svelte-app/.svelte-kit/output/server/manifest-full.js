export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","ABsplash.png","AMU.png","artwork.zip","aseprite.png","dingle.png","dingleTrio.png","emailDraw.png","endScreen1.png","favicon.png","gameplayAB.png","githubDrawing.png","goodEnding.png","liamCV.pdf","linked.png","linkedIN.png","logo.png","mayaHouse.png","mmCode.png","pencil.jpg","phoneDraw.png","portrait.png","pubSketch.png","randomPlaceholder.jpg","SCR.png","shopForAB.png","whaleCrash.gif"]),
	mimeTypes: {".png":"image/png",".zip":"application/zip",".pdf":"application/pdf",".jpg":"image/jpeg",".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.BxVb5lft.js",app:"_app/immutable/entry/app.AK0E0e1H.js",imports:["_app/immutable/entry/start.BxVb5lft.js","_app/immutable/chunks/Bf8siII2.js","_app/immutable/chunks/ByBKs_gt.js","_app/immutable/chunks/U2x_SJ4B.js","_app/immutable/chunks/CDrXRaYA.js","_app/immutable/entry/app.AK0E0e1H.js","_app/immutable/chunks/ByBKs_gt.js","_app/immutable/chunks/ClA812vB.js","_app/immutable/chunks/CSsSgPTk.js","_app/immutable/chunks/JllczrCn.js","_app/immutable/chunks/CDrXRaYA.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
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
				id: "/Whales",
				pattern: /^\/Whales\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
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
				id: "/college",
				pattern: /^\/college\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/games",
				pattern: /^\/games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
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
