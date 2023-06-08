import { writable } from 'svelte/store';
import {browser} from '$app/environment';



export const setting_language_store = writable(browser && (localStorage.getItem("setting.language") || "fr"));
setting_language_store.subscribe(value => {
    if(browser){
        localStorage.setItem("setting.language",value.length > 0 ? value : "fr");
    }
   
});