require('./styles/main.sass') // root stylesheeet - .css, .scss or .sass

var component = require('./components/component.js');

document.body.appendChild(component());
