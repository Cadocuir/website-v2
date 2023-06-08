


<script>
    import {page} from '$app/stores'
    import Header from '$lib/components/Header.svelte'

</script>

<svelte:head>
    <link rel="icon" href="{$page.data.icon || "/favicon.png"}" />
    <title>{$page.data.title || 'Selte Begins'}</title>
</svelte:head>

<div class="app">
    <Header />

	<main>
		<slot />
	</main>

</div>





