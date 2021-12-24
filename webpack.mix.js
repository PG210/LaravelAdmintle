const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*mix.postCss(['resources/vendor/css/all.min.css', 'resources/vendor/css/adminlte.min.css'],  'public/css/plantilla.css')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .scripts(['resources/vendor/js/adminlte.min.js', 'resources/vendor/js/demo.js'], 'public/js/plantilla.js');

*/

mix.postCss('resources/vendor/css/all.min.css', 'public/css/plantilla.css',[
        require('postcss-custom-properties')
    ]);

mix.postCss('resources/vendor/css/adminlte.min.css', 'public/css/plantilla.css',[
    require('postcss-custom-properties')
]);
mix.scripts('resources/vendor/js/adminlte.min.js', 'public/js/plantilla.js',[
    require('postcss-custom-properties')
]);

mix.scripts('resources/vendor/js/demo.js', 'public/js/plantilla.js',[
    require('postcss-custom-properties')
]);

mix.copy('resources/vendor/fontawesome/webfonts', 'public/webfonts',[
    require('postcss-custom-properties')
]);

/*(['resources/vendor/js/adminlte.min.js', 'resources/vendor/js/demo.js'], 'public/js/plantilla.js') */