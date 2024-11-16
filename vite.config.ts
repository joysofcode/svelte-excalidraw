import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.IS_PREACT': JSON.stringify('true'),
	},
})
