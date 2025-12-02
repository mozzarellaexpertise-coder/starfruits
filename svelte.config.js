// svelte.config.js
// 🚨 NEW IMPORT: adapter-netlify
import adapter from '@sveltejs/adapter-netlify'; 
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // 🚨 NEW CONFIG: Simple adapter call
        adapter: adapter() 
    }
};

export default config;