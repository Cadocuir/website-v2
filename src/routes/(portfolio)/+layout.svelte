


<script>
    import {page} from '$app/stores'
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
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
    
    <Footer />

</div>







