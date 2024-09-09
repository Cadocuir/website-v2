const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","fonts/BebasNeue.ttf","fonts/Comfortaa.ttf","images/blank.png","images/cadocuir-1.png","images/cadocuir-1.webp","images/cadocuir-2.png","images/cadocuir-2.webp","images/cadocuir-3.png","images/cadocuir-3.webp","images/cadocuir-bagagerie.jpg","images/cadocuir-bg.jpg","images/cadocuir-caisse.jpg","images/cadocuir-dehors.jpg","images/cadocuir-entree.jpg","images/cadocuir-facade.jpg","images/cadocuir-sortie.jpg","images/cadocuir1964.jpg","images/cadocuircro.jpg","images/cadocuircro.png","images/cadocuircro.webp","images/ecrou.png","images/facebook-colored.png","images/facebookHover.png","images/favicon.jpg","images/git-book-img.png","images/git-book.svg","images/header-bg.png","images/instagram-colored.png","images/instagramHover.png","images/logo_desc.JPG","images/logo_desc.webp","images/moins.png","images/noise.png","images/Planification salles.xlsx","images/play.png","images/plus.png","images/shopping-bag.png","main.scss","models/floating/license.txt","models/floating/scene.bin","models/floating/scene.gltf","models/floating/textures/artichoke_baseColor.jpeg","models/floating/textures/artichoke_metallicRoughness.png","models/floating/textures/artichoke_normal.jpeg","models/floating/textures/battery_baseColor.jpeg","models/floating/textures/battery_metallicRoughness.png","models/floating/textures/battery_normal.png","models/floating/textures/bolts_baseColor.jpeg","models/floating/textures/bolts_metallicRoughness.png","models/floating/textures/bolts_normal.png","models/floating/textures/book_A_baseColor.jpeg","models/floating/textures/book_A_metallicRoughness.png","models/floating/textures/book_A_normal.jpeg","models/floating/textures/book_B_baseColor.jpeg","models/floating/textures/book_B_normal.jpeg","models/floating/textures/bucket_baseColor.jpeg","models/floating/textures/bucket_metallicRoughness.png","models/floating/textures/bucket_normal.png","models/floating/textures/cable_baseColor.jpeg","models/floating/textures/cable_metallicRoughness.png","models/floating/textures/cable_normal.png","models/floating/textures/crates_baseColor.jpeg","models/floating/textures/crates_metallicRoughness.png","models/floating/textures/crates_normal.jpeg","models/floating/textures/curtain_baseColor.jpeg","models/floating/textures/curtain_metallicRoughness.png","models/floating/textures/curtain_normal.jpeg","models/floating/textures/dome_baseColor.jpeg","models/floating/textures/dome_metallicRoughness.png","models/floating/textures/dome_normal.jpeg","models/floating/textures/floors_baseColor.jpeg","models/floating/textures/floors_metallicRoughness.png","models/floating/textures/floors_normal.jpeg","models/floating/textures/floor_baseColor.jpeg","models/floating/textures/floor_metallicRoughness.png","models/floating/textures/flowerpot_baseColor.jpeg","models/floating/textures/flowerpot_metallicRoughness.png","models/floating/textures/flowerpot_normal.jpeg","models/floating/textures/frames_baseColor.jpeg","models/floating/textures/frames_metallicRoughness.png","models/floating/textures/frames_normal.jpeg","models/floating/textures/ginger_baseColor.jpeg","models/floating/textures/ginger_metallicRoughness.png","models/floating/textures/ginger_normal.jpeg","models/floating/textures/greenhouse_glass_baseColor.png","models/floating/textures/greenhouse_glass_metallicRoughness.png","models/floating/textures/greenhouse_glass_normal.jpeg","models/floating/textures/greenhouse_metal_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_metallicRoughness.png","models/floating/textures/greenhouse_metal_inside_normal.jpeg","models/floating/textures/greenhouse_metal_metallicRoughness.png","models/floating/textures/greenhouse_metal_normal.jpeg","models/floating/textures/klampe_baseColor.jpeg","models/floating/textures/klampe_metallicRoughness.png","models/floating/textures/klampe_normal.jpeg","models/floating/textures/lamp_A_baseColor.jpeg","models/floating/textures/lamp_A_emissive.jpeg","models/floating/textures/lamp_A_metallicRoughness.png","models/floating/textures/lamp_A_normal.jpeg","models/floating/textures/lamp_B_baseColor.jpeg","models/floating/textures/lamp_B_emissive.jpeg","models/floating/textures/lamp_B_metallicRoughness.png","models/floating/textures/lamp_B_normal.png","models/floating/textures/lantern_A_baseColor.jpeg","models/floating/textures/lantern_A_emissive.jpeg","models/floating/textures/lantern_A_metallicRoughness.png","models/floating/textures/lantern_A_normal.jpeg","models/floating/textures/lantern_B_baseColor.jpeg","models/floating/textures/lantern_B_metallicRoughness.png","models/floating/textures/lantern_B_normal.jpeg","models/floating/textures/leaf_A_baseColor.jpeg","models/floating/textures/leaf_A_normal.jpeg","models/floating/textures/leaf_B.001_baseColor.jpeg","models/floating/textures/leaf_B.001_normal.jpeg","models/floating/textures/lighthouselamp_baseColor.jpeg","models/floating/textures/lighthouselamp_emissive.jpeg","models/floating/textures/lighthouselamp_metallicRoughness.png","models/floating/textures/lighthouselamp_normal.jpeg","models/floating/textures/log_A_baseColor.jpeg","models/floating/textures/log_A_metallicRoughness.png","models/floating/textures/log_A_normal.jpeg","models/floating/textures/log_B_baseColor.jpeg","models/floating/textures/log_B_metallicRoughness.png","models/floating/textures/log_B_normal.jpeg","models/floating/textures/mushroom_huge_A_baseColor.jpeg","models/floating/textures/mushroom_huge_A_metallicRoughness.png","models/floating/textures/mushroom_huge_A_normal.jpeg","models/floating/textures/mushroom_medium_A_baseColor.jpeg","models/floating/textures/mushroom_medium_A_metallicRoughness.png","models/floating/textures/mushroom_medium_A_normal.jpeg","models/floating/textures/mushroom_medium_B_baseColor.jpeg","models/floating/textures/mushroom_medium_B_metallicRoughness.png","models/floating/textures/mushroom_medium_B_normal.jpeg","models/floating/textures/mushroom_medium_C_baseColor.jpeg","models/floating/textures/mushroom_medium_C_metallicRoughness.png","models/floating/textures/mushroom_medium_C_normal.jpeg","models/floating/textures/mushroom_small_A_baseColor.jpeg","models/floating/textures/mushroom_small_A_metallicRoughness.png","models/floating/textures/mushroom_small_A_normal.jpeg","models/floating/textures/mushroom_small_C_baseColor.jpeg","models/floating/textures/mushroom_small_C_metallicRoughness.png","models/floating/textures/mushroom_small_C_normal.jpeg","models/floating/textures/mushroom_tiny_A_baseColor.jpeg","models/floating/textures/mushroom_tiny_A_metallicRoughness.png","models/floating/textures/mushroom_tiny_A_normal.jpeg","models/floating/textures/mushroom_tiny_C_baseColor.jpeg","models/floating/textures/mushroom_tiny_C_metallicRoughness.png","models/floating/textures/mushroom_tiny_C_normal.jpeg","models/floating/textures/platform_baseColor.jpeg","models/floating/textures/platform_metallicRoughness.png","models/floating/textures/platform_normal.jpeg","models/floating/textures/platform_up_baseColor.jpeg","models/floating/textures/platform_up_normal.jpeg","models/floating/textures/rocks_baseColor.jpeg","models/floating/textures/rocks_metallicRoughness.png","models/floating/textures/rocks_normal.jpeg","models/floating/textures/rock_5_baseColor.jpeg","models/floating/textures/rock_5_metallicRoughness.png","models/floating/textures/rock_5_normal.jpeg","models/floating/textures/sticks_A_baseColor.jpeg","models/floating/textures/sticks_A_metallicRoughness.png","models/floating/textures/sticks_A_normal.jpeg","models/floating/textures/sticks_B_baseColor.jpeg","models/floating/textures/sticks_B_metallicRoughness.png","models/floating/textures/sticks_B_normal.jpeg","models/floating/textures/sticks_C_baseColor.jpeg","models/floating/textures/sticks_C_metallicRoughness.png","models/floating/textures/sticks_C_normal.jpeg","models/floating/textures/sticks_D_baseColor.jpeg","models/floating/textures/sticks_D_metallicRoughness.png","models/floating/textures/sticks_D_normal.jpeg","models/floating/textures/stone_A_baseColor.jpeg","models/floating/textures/stone_A_metallicRoughness.png","models/floating/textures/stone_A_normal.jpeg","models/floating/textures/stone_B_baseColor.jpeg","models/floating/textures/stone_B_metallicRoughness.png","models/floating/textures/stone_B_normal.jpeg","models/floating/textures/stone_C_baseColor.jpeg","models/floating/textures/stone_C_metallicRoughness.png","models/floating/textures/stone_C_normal.jpeg","models/floating/textures/stone_D_baseColor.jpeg","models/floating/textures/stone_D_metallicRoughness.png","models/floating/textures/stone_D_normal.jpeg","models/floating/textures/stone_stairs_baseColor.jpeg","models/floating/textures/stone_stairs_metallicRoughness.png","models/floating/textures/stone_stairs_normal.jpeg","models/floating/textures/window_baseColor.jpeg","models/floating/textures/window_metallicRoughness.png","models/floating/textures/window_normal.jpeg","models/floating/textures/wood_baseColor.jpeg","models/floating/textures/wood_normal.jpeg","models/gitgui/gitgui.gltf","models/gitgui/untitled.gltf","models/switch/license.txt","models/switch/scene.bin","models/switch/scene.gltf","models/switch/textures/BaseCol_baseColor.png","models/switch/textures/Opacity_Stuff_baseColor.png","robot.txt","scripts/favicon_io.zip","styles/base.scss","styles/favicon.ico","styles/reset.scss"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".webp":"image/webp",".jpg":"image/jpeg",".svg":"image/svg+xml",".JPG":"image/jpeg",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".jpeg":"image/jpeg",".zip":"application/zip"},
	_: {
		client: {"start":"_app/immutable/entry/start.a1309fdb.js","app":"_app/immutable/entry/app.5f56b111.js","imports":["_app/immutable/entry/start.a1309fdb.js","_app/immutable/chunks/index.f212c07f.js","_app/immutable/chunks/singletons.77aa075f.js","_app/immutable/chunks/index.7f081118.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/entry/app.5f56b111.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.f212c07f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-2285ad57.js')),
			__memo(() => import('./chunks/1-a24f99aa.js')),
			__memo(() => import('./chunks/2-c0bae686.js').then(function (n) { return n._; })),
			__memo(() => import('./chunks/4-c7067a40.js')),
			__memo(() => import('./chunks/5-e8165dac.js')),
			__memo(() => import('./chunks/6-02804555.js')),
			__memo(() => import('./chunks/7-119b06c8.js'))
		],
		routes: [
			{
				id: "/(portfolio)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(api)/api/instagram",
				pattern: /^\/api\/instagram\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-dbfe6d73.js'))
			},
			{
				id: "/(portfolio)/en",
				pattern: /^\/en\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(portfolio)/fr",
				pattern: /^\/fr\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(portfolio)/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/","/__data.json"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
