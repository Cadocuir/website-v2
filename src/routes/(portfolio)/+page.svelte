
<script>

    import { setting_ldm_store } from '$lib/settings/detailMode.js'
    import H1 from "$lib/components/H1.svelte";
  //  import GitGui from "$lib/components/GitGui.svelte";
    import { t } from '$lib/translations';


</script>

<div id="top">


    <H1 innerText="{$t('home.titre')}" />

    <p>{$t('home.sous-titre')}</p>

</div>

<a href="/about">a propos</a>
{#if $setting_ldm_store > 0}
    <!-- //<GitGui /> -->
{/if}

<style lang="scss">

#top{

    	
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    p{
        font-size: 1.5rem;
        margin: 0;
        font-family: $font-family-secondary;
        color: $color-light;

    }
}

</style>