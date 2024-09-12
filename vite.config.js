import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/ts/app.tsx', 'resources/sass/app.scss'],
            refresh: true,
        }),
    ],
});
