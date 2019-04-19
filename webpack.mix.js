let mix = require('laravel-mix');
require( 'laravel-mix-stylelint' );
const LiveReloadPlugin = require('webpack-livereload-plugin');

/*
    |--------------------------------------------------------------------------
    | Options
    |--------------------------------------------------------------------------
    |
    */

let postCssProcessors = [
   require('postcss-import'),
   require('postcss-custom-properties')({
       preserve: false //'computed'
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
   files: ['**/*.css', '**/*.vue', '**/*.html.twig'],
   syntax: ""
}

/*
    |--------------------------------------------------------------------------
    | Options
    |--------------------------------------------------------------------------
    |
    */

mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin()
    ]
});


/*
    |--------------------------------------------------------------------------
    | Mix Asset Management
    |--------------------------------------------------------------------------
    |
    */

mix.setPublicPath('dist')
    .stylelint(stylelintOptions)
    .postCss('resources/styles/app.css', 'css/app.css', postCssProcessors)
    .js('resources/js/app.js', 'js/app.js')
    .options({
        processCssUrls: false
    })
    .version()
    .disableSuccessNotifications();
