# react-babel-sass-webpack
Simple Webpack starter with for React with Sass

## What's included?

### Html Webpack Plugin
This will generate an index.html file and include any generated webpack bundles, css and other assets as `<script>` and `<link>` tags.

The plugin is configured to take a template at `./src/templates/index.html`. The template is loaded by `html-loader`. EJS and lodash templates also supported.

### Split Configuration
Multiple configurations can be maintained in a single `webpack.config.js` file. Utilising [webpack-merge](https://www.npmjs.com/package/webpack-merge), a common configuration is defined to branch  off from. Included configurations:

**Development Server**
**Build** (Coming soon)
**ghPages Deployment** (Coming soon)

## Webpack Dev Server
Hot Module Replacement (HMR) enabled.

## CSS and Sass Style Loaders
Save your stylesheets in `./src/styles` and require your root stylesheet in to `index.js`.  Use `.scss` or
`.sass` extensions to run the `sass-loader`.

## Babel
Use ES2015 today! presets set in `.babelrc`

`babel-core` ^6.7.6
`babel-preset-es2015` ^6.6.0
`babel-preset-react` ^6.5.0

## React

`react` ^15.0.1
`react-dom` ^15.0.1  



##Npm Install Webpack Plugin
Detects changes to the Webpack configuration and automatically grabs any loaders and their dependencies from npm \o/.

##Credit
The development of this starter pack was heavily influenced from the very excellent [SurviveJS - Webpack](http://survivejs.com/webpack/introduction/) by Juho Vepsäläinen.




TODO

- Seperate entry points for styles and JS.
