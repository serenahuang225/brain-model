const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,  // This disables the fs module
    path: require.resolve('path-browserify'),
  };

  return config;
};
