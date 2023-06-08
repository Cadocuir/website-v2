<script>
import { t,locales, locale, } from '$lib/translations';
import {page} from '$app/stores'

let navActive = false;
let {url} = $page;
function toggleNav(){
    navActive =!navActive

}

function setNavActive(pathname = null){
    if(pathname == null || url == null){
        return false;
    }

    return url.pathname == pathname;
    
}

</script>
<div id="navContainer">
    <button name="toggle nav" class="{navActive ? 'active' : ''}" on:click={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
    </button>
    
    <nav class="{navActive ? 'active' : ''}">
    

        <div id="linksContainer">

            <span class="{setNavActive("/about") ? "active": ""}" style="--m:1">
                <a  href="/about">{$t("common.about")}</a>
            </span>

            <span class="{setNavActive("/") ? "active": ""}"  style="--m:2">
                <a href="/">{$t("common.homepage")}</a>
            </span>

            <span class="{setNavActive("/projects") ? "active": ""}"  style="--m:3">
                <a href="/projects">{$t("common.projects")}</a>
            </span>

          
        </div>
    
    
    </nav>
</div>



<style lang="scss">

#navContainer{
    position: fixed;
    top: 0;
    right: 48px;
    width: 16px;
    height: 16px;
    margin: 16px 16px;
    z-index: 10;


    nav{

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color-darkblue,  1);
     
        clip-path: polygon(0 0, 30% 0, 30% 0, 0 0, 0 30%, 0 30%);
        backdrop-filter: brightness(3.5);
        box-shadow: 3px 3px 10px -5px #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

        &.active{
            clip-path: polygon(0 0, 30% 0, 100% 70%, 100% 100%, 70% 100%, 0 30%);

        }
        #linksContainer{
            display: flex;
            justify-content: space-evenly;

            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;

 
            span{

               
                font-family: $font-family-main;
                font-size: 3rem;
                line-height: 2.8rem;
                letter-spacing: 0.8rem;
         
                text-align: center;
                width: 100%;
                transform:  translateX(calc(var(--m) * (33vw - 7%)  - 50vw));

                a{
                 
                    color: $color-light;
                    margin: 16px;
                    text-decoration: none;

                }

                &.active a{
                    border-bottom: 8px solid $color-primary;
                }
            }
        }
    }

button{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    cursor: pointer;
    &.active{

        span:nth-child(1){

            transform:rotate(45deg);
            width: 100%;
            border-radius: 8px;
            bottom: -10%;
        }
        span:nth-child(2){

          opacity: 0;
          width: 0%;

        }
        span:nth-child(3){

            transform: rotate(-45deg);
            width: 100%;
            border-radius: 8px;
            top: -10%;
        }
    }

    span {
        transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    span:nth-child(1){
        width: 100%;
            height: 10%;
            background-color: $color-light;
            border-top-left-radius: 8px;
            display: block;
            position:relative;
            bottom: 20%;
    }

    span:nth-child(2){
        width: 100%;
        height: 10%;
        background-color: $color-light;
        display: block;
        position:relative;
    }

    span:nth-child(3){
            border-bottom-right-radius: 8px;
            width: 80%;
            height:10%;
            background-color: $color-light;
            display: block;
            position:relative;
            top: 20%;
    }

}
}

</style>