const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { WebpackDevServer } = require('webpack-dev-server');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Insert the changes you found here:
  config.devServer = {
    ...config.devServer,
    webpack: {
      constructor: WebpackDevServer,
      options: {
        ...config.devServer
      },
      compiler: env.webpackCompiler
    },
  };
  
  return config;
};
