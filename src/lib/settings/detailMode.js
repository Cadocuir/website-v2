import { writable } from 'svelte/store';
import {browser} from '$app/environment';



export const setting_ldm_store = writable(browser && (localStorage.getItem("setting.ldm") || ""));
setting_ldm_store.subscribe(value => {
    if(browser){
        localStorage.setItem("setting.ldm",value.length > 0 ? value : "");
    }
   
});
