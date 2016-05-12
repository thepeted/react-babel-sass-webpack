# Simple React, Babel & Sass Webpack Starter
Simple Webpack based starter for front-end development with React, Babel, Sass and Autoprefixer.

The aim of this starter pack is to keep things feature light, simple and easily manageable.  

## Whats Included?

- [Autoprefixer](https://www.npmjs.com/package/autoprefixer) `^6.3.6`
- [Babel](https://babeljs.io/)
  - `babel-core` ^6.7.6
  - `babel-preset-es2015` ^6.6.0
  - `babel-preset-react` ^6.5.0
- [node-sass](https://github.com/sass/node-sass) `^3.4.2`
- [React](https://github.com/facebook/react) `^15.0.1`
- [Webpack](https://webpack.github.io/) `^1.12.15`
- [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) `^1.14.1` (Hot Module Replacement (HMR) enabled)

## Prerequisites
- node `^4.2.0`
- npm `^3.0.0`

## Installation

```
$ git clone https://github.com/thepeted/react-babel-sass-webpack.git
$ cd react-babel-sass-webpack
$ npm install
$ rm -rf .git && git init         # start a fresh git repo
```

## Project Structure

```
.
├── src
│   ├── components
│   │   └── component.js
│   ├── index.js                # Entry point for webpack.  Require your stylesheet here.
│   ├── styles                  # webpack will work on .css, .sass or .scss files here
│   │   ├── main.css            
│   │   └── resets              # Import resets as preferred to your root stylesheet
│   │       ├── normalize.css
│   │       └── reset.css
│   └── templates
│       └── index.html          # EJS and lodash templates also supported
├── .babelrc                    # Babel presets are defined here
├── package.json
└── webpack.config.js
```

## Included Scripts
```
$ npm start               # Start the Development Server at localhost:8080
$ npm run build           # Generates minified bundle.js, styles.css and index.html to /build
$ npm run deployghpages   # Publish the files in /build to a gh-pages branch
```

### Configuration Tips
The development setup and the build setup are both maintained in a single `webpack.config.js` file. Define common settings on the `common` object in `webpack.config.js` and edit/create conditionals based on the value of `process.env.npm_lifecycle_event`.

`npm-install-webpack-plugin` detects changes to the `webpack.config.js` and automatically grabs any loaders and their dependencies from npm \o/.

## Contributions
Are welcome!

## Acknowledgement
The development of this starter pack was heavily influenced by studying [SurviveJS - Webpack](http://survivejs.com/webpack/introduction/) by Juho Vepsäläinen.
