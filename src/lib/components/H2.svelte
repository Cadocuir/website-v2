<script>
    export let innerText = innerText.length <= 0 ? "Undefined" : innerText

	import { onMount } from 'svelte';
    import gsap from 'gsap/dist/gsap.min.js';
    import ScrollTrigger  from 'gsap/dist/ScrollTrigger';

    let h2Elem;

    onMount(_=>{
        gsap.registerPlugin(ScrollTrigger);
        

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: h2Elem,
                markers: false,
                start: 'top +=85%',
                end: 'center +=65%',
                once: true,
                pin: false,
                refreshPriority: 1,
            }
        });
        tl.fromTo( h2Elem, {
            y: -16,
        },{
            y: 0,
            duration: 0.6,
            autoAlpha: 1,
            stagger:0.1,
        });


    })
   
</script>
<h2 bind:this={h2Elem}>
    {innerText}
</h2>

<style lang="scss">
	h2 {
		color: $color-darkblue;
		font-family: $font-family-main;
		font-size: 3rem;
		border-bottom: 8px solid $color-primary;
		width: fit-content;
		line-height: 2.8rem;
		letter-spacing: 0.8rem;
		margin: 16px;
        visibility: hidden;
	}

</style>