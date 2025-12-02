// svelte.config.js (The Correct Vercel Setup)
// 🚨 CHANGE IMPORT: Use the vercel adapter directly
import adapter from '@sveltejs/adapter-vercel'; 
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // 🚨 FIX: Use the specific adapter with the required configuration
        adapter: adapter({
            // This is the CRITICAL part that makes Vercel expose the secret
            env: { 
                private: ['DATABASE_URL'] 
            }
        // Use 'as any' to keep TypeScript happy if it complains
        }) 
    }
};

export default config;