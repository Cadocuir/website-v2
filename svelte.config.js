
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocessor from'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocessor({
		scss: {
            prependData: "@import './static/main.scss';"
        }
	})],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapterNode({
            out: 'build-node', //Must be the same name as the one in dockerfile COPY --from=build /app/build-node
            precompress: false,
            envPrefix: '',
            polyfill: true
        }),
		prerender:{
			crawl:true
		}
	}
};

export default config;
