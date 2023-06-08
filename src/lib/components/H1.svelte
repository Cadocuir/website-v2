<script>
    export let innerText = innerText.length <= 0 ? "Undefined" : innerText

</script>
<h1>{innerText}</h1>

<style lang="scss">

    h1{
        color:$color-light;
        font-family: $font-family-main;
        font-size: 3rem;
        border-bottom: 8px solid $color-primary;
        width: fit-content;
        line-height: 2.8rem;
        letter-spacing: 0.8rem;
        margin: 16px;
    }
</style>