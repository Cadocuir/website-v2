<script>

import { setting_ldm_store } from '$lib/settings/detailMode.js'
import { onMount } from 'svelte';
import { goto, invalidateAll } from "$app/navigation"
import {page} from '$app/stores'
import { t,locales, locale, } from '$lib/translations';


let popupPanel;
let popupPanelOpen = false;

let switchElem;

function togglePopupPanel(){
    popupPanelOpen = !popupPanelOpen;
  
}
function detailMode(){
    $setting_ldm_store = switchElem.checked ? "1" : ""
}

onMount(_=>{

    switchElem.checked = $setting_ldm_store.length > 0 ? true : false; 


})

</script>

<button title="Toggle settings button" name="settings" on:click={togglePopupPanel}><img alt="parametres" src="/images/ecrou.png" /></button>

<div bind:this={popupPanel} id="popup-settings" class="{popupPanelOpen ? "popup-open" : ""}">

    <table>
        <tr>
            <td>{$t('common.Setting_LDM')}</td>
            <td>
                <label class="switch">
                    <input bind:this={switchElem} on:click={detailMode} type="checkbox">
                    <span class="slider round"></span>
                </label>
            </td>
        </tr>
        <tr>
            <td>{$t('common.Setting_Language')}</td>
            <td>
                <select bind:value="{$locale}">
                    {#each $locales as value}
                      <option value="{value}">{$t(`lang.${value}`)}</option>
                    {/each}
                  </select>
            </td>
        </tr>
    </table>

</div>

<style lang="scss">



button{
    position: fixed;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    margin: 16px 16px;
    z-index: 10;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        filter: invert(1);
    }
}


/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 16px;
   

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $color-light;
        -webkit-transition: .4s;
        transition: .4s;
        
        &::before{
        position: absolute;
        content: "";
        height: 12px;
        width: 12px;
        left: 2px;
        bottom: 2px;
        background-color:  $color-darkblue;
        -webkit-transition: .4s;
        transition: .4s;
        }

        &.round{
            border-radius: 34px;
            &::before{
                border-radius: 50%;
            }
        }
    }


input:checked + .slider {
  background-color: $color-light;
}

input:focus + .slider {
  box-shadow: 0 0 1px $color-light;
}

input:checked + .slider:before {
  -webkit-transform: translateX(32px);
  -ms-transform: translateX(32px);
  transform: translateX(32px);
  background-color: $color-primary;
}

}



#popup-settings{
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba($color-darkblue, 0.7) ;
    backdrop-filter: brightness(1.5) blur(4px);
    margin:32px;
    z-index: 20;
    padding: 16px;
    box-shadow: 3px 3px 10px -5px #000000;
    opacity: 0;
    transition: cubic-bezier(0.39, 0.575, 0.565, 1) .3s all;
    border-top-right-radius: 32px;
    border-bottom-left-radius: 32px;
    pointer-events: none;
    &.popup-open{
        pointer-events: all;
        opacity: 1;
    }
    table{
        border-collapse: unset;
        border-spacing: unset;
        tr {

            padding: 8px;
            color: $color-light;
            font-family: $font-family-secondary;
            td{
                padding: 8px;
                select{
                    border-radius: 16px;
                    text-align: center;
                    border: none;
                }
            }
        }
    }
    

}


</style>