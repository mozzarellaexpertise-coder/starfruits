// svelte.config.js
import adapter from '@sveltejs/adapter-vercel'; 
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            // THIS SECTION IS THE ONLY THING THAT FIXES THE ERROR ABOVE!
            env: { 
                private: ['DATABASE_URL'] // Must list the variable name here
            }
        }) 
    }
};

export default config;