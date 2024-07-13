import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.t2del.com',
    base: '/',
    integrations: [sitemap()],
    // output: 'server',
    // adapter: nodejs(),
});
