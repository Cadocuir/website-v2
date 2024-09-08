<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay } from 'swiper/modules';
	import H2 from '$lib/components/H2.svelte';
	import 'swiper/css';
	import { t } from '$lib/translations';

	let { type = 'loading', last_update = null, publish = [] } = {};

	onMount((_) => {
		setTimeout(async (_) => {
			await loadData();
			window.swiper = new Swiper('.swiper', {
				spaceBetween: 16,
				modules: [Autoplay],
				speed: 800,
				direction: 'horizontal',
				loop: true,
				enabled: true,
				slidesPerView: 1,
				init: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: true,


				},
				breakpoints: {
					640: {
						slidesPerView: 2
					},
					960: {
						slidesPerView: 3
					}
				},
			});
			swiper.init();
		}, 0);
	});

	async function play(event) {
		const video = event.currentTarget.firstElementChild;
		const btn = event.currentTarget.lastElementChild;

		video.addEventListener('play', () => {
			video.dataset.already = 'true';
			btn.style.display = 'none';
			window.swiper.autoplay.stop();
		});

		video.addEventListener('pause', () => {
			btn.style.display = 'block';
			window.swiper.autoplay.start();
		});
		video.addEventListener('ended', () => {
			btn.style.display = 'block';
			video.pause();
			window.swiper.autoplay.start();
		});

		if (video.paused || video.dataset.already == null) {
			video.play();
		} else {
			video.pause();
		}
	}

	async function loadData() {
		const data = await fetch('/uploads/data.json')
			.then((result) => result.json())
			.catch((err) => {
				return { type: 'failure', last_update: null, publish: [] };
			});

		last_update = data.last_update;
		publish = data.publish;
		type = data.type;
	}
</script>

{#if type === 'loading'}
	<div class="giga-container" id="loading">
		<div class="center">
			<H2 innerText={$t('home.instagram-title')} />
		</div>
	</div>
{:else if type === 'success'}
	<div class="giga-container" id="success">
		<div class="center">
			<H2 innerText={$t('home.instagram-title')} />
		</div>
		<div class="content-block">
			<div class="block-100">
				<div class="swiper swiper-instagram">
					<!-- Additional required wrapper -->
					<div class="swiper-wrapper">
						{#each publish as pub, index}
							<!-- Slides -->
							<div class="swiper-slide">
								<div class="swiper-slide-inner">
									<img src={pub.cover.url} alt={pub.titre} />
									{#if pub.video != null}
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<div class="video" id="video-{index}" on:click={play}>
											<video
												id="lecteur-{index}"
												width={pub.video.width}
												muted
												height={pub.video.height}
											>
												<source src={pub.video.url} />
												<track kind="captions" />
											</video>
											<div class="play play-{index}">
												<img src="/images/play.png" alt="play-video" />
											</div>
										</div>
									{/if}
									<div class="info">
										<a href="https://www.instagram.com/cadocuir/?hl=fr" target="_blank">
											<p>{pub.titre}</p>
											<div class="sub">
												<span>{pub.like_count} likes</span>
												<span>{new Date(pub.date * 1000).toLocaleDateString('fr-FR')}</span>
											</div>
										</a>
									</div>
								</div>
							</div>
						{/each}
					</div>

					<div class="swiper-pagination" />
				</div>
			</div>
		</div>
		<div />
	</div>
{:else}
	<div />
{/if}

<style lang="scss">
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.block-100 {
		margin: 32px 16px;
	}
	.swiper-instagram {
		.swiper-wrapper {
			.swiper-slide {
				height: 60vh;
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

					.video {
						z-index: 20;
						position: relative;
						height: 100%;
						.play {
							cursor: pointer;
							position: absolute;
							width: 50px;
							height: 50px;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							z-index: 30;
						}
					}

					.info {
						opacity: 0;
						position: absolute;
						bottom: 0;
						z-index: 40;
						background-color: rgba($color: #000000, $alpha: 0.7);
						width: 100%;
						padding: 16px;
						display: flex;
						flex-direction: column;

						transition: all 0.3s ease-in-out;
						a {
							text-decoration: none;
							color: $color-light;
						}
						p {
							color: $color-light;
							font-family: $font-family-secondary;
							width: fit-content;
							font-size: 0.8rem;
						}

						.sub {
							margin-top: 16px;
							display: flex;
							justify-content: space-between;
							align-items: center;
							span {
								color: $color-light;
								font-family: $font-family-main;
								font-size: 0.8rem;
								border-bottom: 2px solid $color-primary;
								width: fit-content;
							}
						}
					}
				}
			}

			.swiper-slide:hover {
				.info {
					opacity: 1;
				}
			}
		}
	}
</style>
