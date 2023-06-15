import { redirect } from '@sveltejs/kit';

export const load = async (serverloadEvent) =>{
   
	throw redirect(302, '/')
  
}