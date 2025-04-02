import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
// import siteConfig from './src/data/site-config';  // Esta línea ya no es necesaria

export default defineConfig({
    site: 'https://Arnold-star-lab.github.io',  // Aquí colocas directamente la URL de tu sitio
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});
