import setCookie from 'set-cookie-parser';

const username_to_fetch = 'guillian_vibert';

// fetch(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${username_to_fetch}`, {
// 	headers: {
// 		'x-ig-app-id': '1217981644879628', //Important
// 		Referer: `https://www.instagram.com/${username_to_fetch}`
// 	},
// 	body: null,
// 	method: 'GET'
// }).then(async function (response) {
// 	console.log(response.status);
// 	const data = await response.json();
// 	console.log(data);
// });

// fetch(`https://www.instagram.com/api/v1/feed/user?username=${username_to_fetch}`, {
// 	headers: {
// 		'x-ig-app-id': '1217981644879628', //Important
// 		Referer: `https://www.instagram.com/${username_to_fetch}`
// 	},
// 	body: null,
// 	method: 'GET'
// }).then(async function (response) {
// 	console.log(response.status);
// 	const data = await response.json();
// 	console.log(data);
// });

const getPosts = async (cookies) => {
	fetch(
		'https://www.instagram.com/api/v1/media/3451243029806645758/comments/?can_support_threading=true&permalink_enabled=false',
		{
			headers: {
				'x-ig-app-id': '936619743392459',
				cookie: cookies,
				Referer: 'https://www.instagram.com/p/C_lR0AJKwH-/?img_index=1'
			},
			body: null,
			method: 'GET'
		}
	).then(async function (response) {
		console.log(response.status);
		const data = await response.json();
		console.log(data);
	});
};

fetch('https://www.instagram.com/api/v1/web/accounts/login/ajax/', {
	credentials: 'include',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
	
		'x-csrftoken': 'Np2gT43WCJyhPDp5vTgbgH',
		'x-ig-app-id': '936619743392459',
		cookie:
			'csrftoken=Np2gT43WCJyhPDp5vTgbgH; mid=ZuAG-AALAAERq4VQUwpaJsWgpAyg; ig_did=24DD070F-8CBC-465A-AF99-9B4FE046F744',
		Referer:
			'https://www.instagram.com/',
	},
	body: 'enc_password=%23PWD_INSTAGRAM_BROWSER%3A10%3A1725957897%3AAdxQANp1lgRLyPWoo09E0v5yYEIsDF%2FvBKuRsGDPkCUTOGUVg0TYM3jdX%2BzSgTp83wPJ1J%2FuB189PcCnKxt%2FBxgz1gPw8hW%2Bp5oEctQcTV5NZAgYBFBk19sHyVrJKjEcsy%2FzD8Pf2ctQcge%2BI3xTjk1cPw%3D%3D&caaF2DebugGroup=0&loginAttemptSubmissionCount=0&optIntoOneTap=false&queryParams=%7B%22next%22%3A%22https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252Fp%252FC_lR0AJKwH-%252F%26__coig_login%3D1%22%7D&trustedDeviceRecords=%7B%7D&username=vibertvg',
	method: 'POST'
}).then(async function (response) {
	console.log(await response.json());
	return;
	const cookies = setCookie(response);
	getPosts(convertCookiesToText(cookies));
});

function convertCookiesToText(cookies) {
	return cookies
		.map((cookie) => {
			let cookieString = `${cookie.name}=${cookie.value}`;
			if (cookie.domain) cookieString += `; domain=${cookie.domain}`;
			if (cookie.path) cookieString += `; path=${cookie.path}`;
			if (cookie.secure) cookieString += `; secure`;
			if (cookie.httpOnly) cookieString += `; httpOnly`;
			return cookieString;
		})
		.join('; ');
}
