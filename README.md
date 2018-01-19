# Webpack Bootstrap Boilerplate
Build script boilerplate using Webpack, Babel, SASS, and Autoprefixer with support for importing individual Bootstrap 4 modules

# Commands

## Install
```sh
$ npm install
```

## Build
```sh
$ npm run build
```

## Watch
```sh
$ npm run watch
```
# Bootstrap 4

Webpack has been configured such that you can use individual Bootstrap 4 JS modules rather than the entire framework. This results in a more compact bundle potentially with fewer dependencies. Likewise the entry stylesheet only includes the base SCSS modules needed for utilizing the Bootstrap grid. See /scripts/scripts.js and /styles/styles.scss for examples.

* Some Bootstrap 4 modules require Popper.js which is not bundled by default.
