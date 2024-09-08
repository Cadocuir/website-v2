<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import H2 from '$lib/components/H2.svelte';
	import 'swiper/css';
	import { t } from '$lib/translations';

	let { type = 'loading', last_update = null, publish = [] } = {};

	onMount((_) => {
		setTimeout(async (_) => {
			await loadData();
			const swiper = new Swiper('.swiper', {
				speed: 800,
				direction: 'horizontal',
				loop: true,
				enabled: true,
				slidesPerView: 3,
				init: true,
				autoplay: true
			});
			swiper.init();
		}, 0);
	});

	async function error(event) {
		//event.target.src = event.target.dataset.src
	}

	async function loadData() {
		const data = await fetch('/api/instagram')
			.then((result) => result.json())
			.catch((err) => {
				return { type: 'failure', last_update: null, publish: [] };
			});

		last_update = data.last_update;
		publish = data.publish;
		type = data.type;
		for (const pub of publish) {
			const result = await fetch(pub.cover.url);
			const body = URL.createObjectURL(new Blob([result.body], { type: 'image/png' } /* (1) */));
			pub.cover.blob = body
			
		}
	}
</script>

{#if type === 'loading'}
	<div class="giga-container" id="loading">
		<div class="content-block">
			<H2 innerText="Nos dernieres publications" />
		</div>
	</div>
{:else if type === 'success'}
	<div class="giga-container" id="success">
		<div class="content-block">
			<H2 innerText="Nos dernieres publications" />

			<div class="swiper swiper-instagram">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					{#each publish as pub}
						<!-- Slides -->
						<div class="swiper-slide">
							<div class="swiper-slide-inner">
								<img
									on:error={error}
									data-src={pub.cover.url}
									src={pub.cover.blob}
									alt="instagram pub"
								/>
								{#if pub.video != null}
									<video width={pub.video.width} muted height={pub.video.height}>
										<source src={pub.video.url} />
										<track kind="captions" />
									</video>
								{/if}
								<p>{pub.titre}</p>
								<span>{pub.like_count}</span>
								<span>{pub.date}</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div />
	</div>
{/if}

<style lang="scss">
	.swiper-instagram {
		.swiper-wrapper {
			.swiper-slide {
				height: 60vh;
				padding: 16px;

				.swiper-slide-inner {
					width: 100%;
					height: 100%;
					border-top-right-radius: 16px;
					border-bottom-left-radius: 16px;
					overflow: hidden;

					position: relative;
					img,
					video {
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						object-fit: cover;
						background-size: cover;
						z-index: 10;
					}

					video : {
						z-index: 20;
					}
				}
			}
		}
	}
</style>
