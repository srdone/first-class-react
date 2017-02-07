// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const baseDir = path.resolve(__dirname, '../app');

// load the dev config from react-boilerplate
const devConfig = require('../internals/webpack/webpack.dev.babel');

module.exports = function genConfig(storybookBaseConfig) {
  // concat loaders from dev config
  /* eslint-disable no-param-reassign */
  storybookBaseConfig.module.loaders = storybookBaseConfig.module
    .loaders.concat(devConfig.module.loaders);

  // add the "app" folder to the resolve list
  storybookBaseConfig.resolve.fallback.push(baseDir);

  // return the altered config
  return storybookBaseConfig;
};
