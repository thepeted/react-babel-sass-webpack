# react-babel-sass-webpack
Simple Webpack starter with for React with Sass

## What's included?

### Html Webpack Plugin
This will generate an index.html file and include any generated webpack bundles, css and other assets as `<script>` and `<link>` tags.

### Split Configuration
Multiple configurations can be maintained in a single `webpack.config.js` file. Utilising [webpack-merge](https://www.npmjs.com/package/webpack-merge), a common configuration is defined to branch  off from. Included configurations:

**Development Server**
**Build**
**ghPages Deployment**

## Webpack Dev Server
Hot Module Replacement (HMR) enabled.

## CSS and Sass Style Loaders
Save your stylesheets in `./src/styles` and require your root stylesheet in to `index.js`.  Use `.scss` or 
`.sass` extensions to run the `sass-loader`.

##Npm Install Webpack Plugin
Detects changes to the Webpack configuration and automatically grabs any loaders and their dependencies from npm \o/.

##Credit
The development of this starter pack was heavily influenced by [SurviveJS - Webpack](http://survivejs.com/webpack/introduction/) by Juho Vepsäläinen.




TODO

- Set up Sass
- Set up html template
- Multiple entry points for styles and JS(?)
