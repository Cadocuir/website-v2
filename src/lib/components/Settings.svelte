<script>

import { t,locales, locale, } from '$lib/translations';


let popupPanel;
let popupPanelOpen = false;

function togglePopupPanel(){
    popupPanelOpen = !popupPanelOpen;
  
}


</script>

<button title="Toggle settings button" name="settings" on:click={togglePopupPanel}><img alt="parametres" src="/images/ecrou.png" /></button>

<div bind:this={popupPanel} id="popup-settings" class="{popupPanelOpen ? "popup-open" : ""}">

    <table>
   
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
    z-index: 999;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
    }
}



#popup-settings{
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba($color-darkblue, 0.7) ;
    backdrop-filter: brightness(1.5) blur(4px);
    margin:32px;
    z-index: 999;
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