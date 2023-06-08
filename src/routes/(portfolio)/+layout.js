import { locale, loadTranslations } from '$lib/translations';
export const load = async ({ url }) => {
	const { pathname } = url;

	const defaultLocale = 'fr'; 
	const initLocale = locale.get() || defaultLocale; 
	await loadTranslations(initLocale, pathname); 

	return {};
};
