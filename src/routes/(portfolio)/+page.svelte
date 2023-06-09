<script>
	import { setting_ldm_store } from '$lib/settings/detailMode.js';
	import H1 from '$lib/components/H1.svelte';
    import H2 from '$lib/components/H2.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let img2Elem;
	let img3Elem;

	onMount(async (_) => {
		if (browser) {
			const module = await import('leaflet');
			const L = module.default;

			let map = L.map('map', {
				center: [45.67594775933373, 6.389657607867016],
				zoom: 15,
				scrollWheelZoom: false
			});

			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			L.marker([45.67594775933373, 6.389657607867016])
				.addTo(map)
				.bindPopup(
					'<strong>Cadocuir Maroquinerie</strong><br>67 rue de la république 73200 Albertville'
				)
				.openPopup();
		}


        gsap.registerPlugin(ScrollTrigger);
        

        document.querySelectorAll("p:not(.title p)").forEach(pElem =>{

            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pElem,
                markers: false,
                start: 'top +=85%',
                end: 'center +=65%',
                once: true,
            }
            });
            tl.fromTo( pElem, {
                x: -100,
            },{
                x: 0,
                ease: "power2.out",
                duration: 0.3,
                autoAlpha: 1,
                stagger:0.1,
            });
        })
     



	});

	function mouseMoving(e) {
		let x = e.clientX / window.innerWidth;

		if (img2Elem && img3Elem) {
			img2Elem.style.transform = `translate(-${x * 15}px)`;
			img3Elem.style.transform = `translate(${x * 15}px)`;
		}
	}
</script>


<svelte:head>

    <title>{$t('home.title')}</title>
    <meta name="description" content="{$t('home.meta-description')}">
    <meta name="keywords" content="{$t('home.meta-keywords')}">
    <meta name="author" content="{$t('home.meta-author')}">
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:description" content="{$t('home.meta-description')}">
    <meta property="og:title" content="{$t('home.title')}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://www.cadocuir.com" />
    <meta property="og:image" content="/images/cadocuir-bg.jpg" />
    <meta property="og:site_name" content="CADOCUIR, maroquinerie bagagerie" />
    
</svelte:head>

<div on:mousemove={mouseMoving} id="top">
	<div id="paralax">
		<img src="/images/cadocuir-1.webp" alt="cadocuir entrée" />
		<img bind:this={img2Elem} style="left:15px" src="/images/cadocuir-2.webp" alt="longchamps" />
		<img bind:this={img3Elem} style="left:-15px" src="/images/cadocuir-3.webp" alt="portefeuils" />
	</div>

	<div class="title">
		<H1 innerText={$t('home.titre')} />
		<p>{$t('home.sous-titre')}</p>
	</div>


    <div class="scroll-down">
        <a href="#informations">
            <img src="/images/shopping-bag.png" alt="scroll down" />
        </a>
    </div>
</div>

<div class="giga-container" id="informations">
	<div class="content-block">
        <H2 innerText={$t('home.informations')} />
		<div class="block-100">
			<p data-traduction="Home-Info-Desc-Name">Maroquinerie Bagagerie Maniglier</p>
			<p data-traduction="Home-Info-Desc-Adresse">67 rue de la république 73200 Albertville</p>
			<a class="link-decoration" href="tel:+33479320026">
				<p data-traduction="Home-Info-Desc-Tel">04 79 32 00 26</p>
			</a>
			<a
				class="link-decoration"
				href="mailto:info@cadocuir.com?subject=contact&amp;body=Send%20by%20cadocuir.com"
			>
				<p data-traduction="Home-Info-Desc-Mail">info@cadocuir.com</p>
			</a>

			<div class="block-logo">
				<a href="https://www.facebook.com/profile.php?id=100057362923916" target="_blank">
					<img src="/images/facebook-colored.png" loading="lazy" alt="Facebook" />
				</a>
				<a href="https://www.instagram.com/cadocuir/" target="_blank">
					<img src="/images/instagram-colored.png" loading="lazy" alt="Instagram" />
				</a>
			</div>
		</div>
	</div>
</div>

<div class="giga-container" id="horaires">
	<div class="center">
        <H2 innerText={$t('home.horaires')} />
		
	</div>

	<div class="horaires-wrapper">
		<table>
			<tr>
				<td>{$t('home.lundi')}</td>
				<td>{$t('home.ferme')}</td>
			</tr>
			<tr>
				<td>{$t('home.mardi')}</td>
				<td>09:30–19:00</td>
			</tr>
			<tr>
				<td>{$t('home.mercredi')}</td>
				<td>09:30–19:00</td>
			</tr>
			<tr>
				<td>{$t('home.jeudi')}</td>
				<td>09:30–19:00</td>
			</tr>
			<tr>
				<td>{$t('home.vendredi')}</td>
				<td>09:30–19:00</td>
			</tr>
			<tr>
				<td>{$t('home.samedi')}</td>
				<td>09:30–19:00</td>
			</tr>
			<tr>
				<td>{$t('home.dimanche')}</td>
				<td>{$t('home.ferme')}</td>
			</tr>
		</table>

		<p>
			<a href="https://www.google.com/search?q=cadocuir+albertville+horaires" target="_blank">
				{$t('home.horaires-exception')}
			</a>
		</p>
	</div>
</div>

<div id="map" />

<div class="giga-container" id="bloc-seo">
	<div class="center">
        <H2 innerText={$t('home.informations-title')} />
	</div>
	<div class="block-100">
		<p>{$t('home.informations-desc-1')}</p>

		<p>{$t('home.informations-desc-2')}</p>
		<p>{$t('home.informations-desc-3')}</p>
		<p>{$t('home.informations-desc-4')}</p>
		<p>{$t('home.informations-desc-5')}</p>
	</div>
</div>

<style lang="scss">
	#top {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.title {
			background-color: rgba($color-darkblue, 0.7);
			padding: 32px;
			border-top-right-radius: 16px;
			border-bottom-left-radius: 16px;
			backdrop-filter: brightness(1.5) blur(4px);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			z-index: 1;
		}

		p {
			font-size: 1.5rem;
			margin: 0;
			font-family: $font-family-secondary;
			color: $color-light;
		}
		&::after {
			content: '';
			background: rgb(249, 245, 255);
			background: linear-gradient(0deg, rgba(249, 245, 255, 1) 0%, rgba(249, 245, 255, 0) 100%);
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 5px;
		}
	}

	#paralax {
		overflow-x: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
			top: 0;
			left: 0;
			opacity: 1;
		}
	}

	#horaires {
		.center {
			display: flex;
			justify-content: center;
			align-items: center;

		}

		.horaires-wrapper {
			justify-content: center;
			display: flex;
			align-items: center;
			flex-direction: column;
			font-family: $font-family-secondary;
			table {
				margin: 32px;
				border-collapse: unset;
				border-spacing: unset;
				tr {
					td {
						padding: 8px 16px;
					}
				}
			}
			p {
				margin: 0 20%;
			}
		}
	}

	#map {
		width: 100%;
		height: 70vh;
		box-shadow: -3px -3px 7px #ffffffa6, 3px 3px 5px rgba(94, 104, 121, 0.712);
	}

	#informations {
		@media #{$media-mobile} {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 16px;
		}
	}

	#bloc-seo {
		p {
			font-size: 1.2rem;
		}
	}

	.giga-container {
		padding: 32px;
		margin: 32px;

		@media #{$media-mobile} {
			padding: 0;
			margin: 32px 0;
		}

		.content-block {
			border-top-right-radius: 16px;
			border-bottom-left-radius: 16px;
			padding: 32px;
			margin: 32px;
			backdrop-filter: brightness(1.5) blur(4px);
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: -3px -3px 7px #ffffffa6, 3px 3px 5px rgba(94, 104, 121, 0.712);
			position: relative;

			@media #{$media-mobile} {
				flex-direction: column;
				width: fit-content;
				padding: 0;
				margin: 0;
			}

			.block-logo {
				img {
					width: 48px;
					height: 48px;
					margin: 16px;
				}
			}
		}
	}



	.block-100 {
		font-family: $font-family-secondary;

		p {
			font-size: 1.5rem;
			margin: 8px;
			padding: 8px;
			color: $color-darkblue;
		}
	}

	a {
		text-decoration-color: $color-primary;
		color: $color-darkblue;
	}

    p:not(.title p){
        visibility: hidden;
        @media #{$media-mobile} {
            text-align: justify;
        }
    }
  

    .scroll-down{


        position: absolute;
        bottom: 0;

        img{
            width: 100px;
            height: 100px;
            object-fit: contain;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
            100% {
                transform: translateY(0);
            }
        }
    }
</style>
