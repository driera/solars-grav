let mix = require('laravel-mix');
require( 'laravel-mix-stylelint' );

let postCssProcessors = [
   require('postcss-import'),
   require('postcss-custom-properties')({
       preserve: 'computed'
   }),
   require('postcss-apply'),
   require('postcss-mixins'),
   require('postcss-for'),
   require('postcss-nested'),
   require('postcss-custom-media'),
   require('postcss-media-minmax'),
   require('postcss-color-function'),
   require('autoprefixer')({
      "browsers": ["last 2 versions"],
      "flexbox": "no-2009",
      "grid": false
   }),
   require('cssnano')({
      "discardComments": {
         "removeAll": true
      },
      "safe": true
   })
];

let stylelintOptions = {
   configFile:  path.join('./.stylelintrc'),
   files: ['**/*.css', '**/*.vue', '**/*.blade.php'],
   syntax: ""
}

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

mix.setPublicPath('dist')
   .stylelint(stylelintOptions)
   .js('resources/js/app.js', 'js/app.js')
   .postCss('resources/styles/app.css', 'css/app.css', postCssProcessors)
   // .sass('resources/sass/app.sass', 'css/app.css')
   .options({
      processCssUrls: false
    })
   .version()
   .browserSync({
      proxy: 'localhost:8000',
      files: [
         'dist/styles/{*,**/*}.css',
         'dist/js/{*,**/*}.js',
         'templates/{*,**/*}.html.twig'
     ]
  });
