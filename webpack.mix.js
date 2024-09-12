const mix = require('laravel-mix');

mix.ts('resources/ts/app.tsx', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
