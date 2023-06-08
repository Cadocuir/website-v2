<script>
    export let innerText = innerText.length <= 0 ? "Undefined" : innerText

	import { onMount } from 'svelte';
    import gsap from 'gsap/dist/gsap.min.js';
    import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
    onMount(_=>{
        gsap.registerPlugin(ScrollTrigger,SplitText);
        

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "h1",
                markers: false,
                start: 'top +=85%',
                end: 'center +=65%',
                once: true,
                pin: false,
                refreshPriority: 1,
            }
        });
        // let splitTitle =  new SplitText("h1", {type:"chars, words"})
        tl.fromTo( "h1", {
            y: -16,
        },{
            y: 0,
            duration: 0.6,
            autoAlpha: 1,
            stagger:0.1,
        });


    })
   
</script>
<h1>{innerText}</h1>

<style lang="scss">

    h1{
        color:$color-light;
        font-family: $font-family-main;
        font-size: 5rem;
        border-bottom: 8px solid $color-primary;
        width: fit-content;
        line-height: 4.8rem;
        letter-spacing: 0.8rem;
        margin: 16px;
        visibility: hidden;
        
    }
</style>