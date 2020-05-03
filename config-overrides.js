const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = (config, env) => {
  if (env === 'production') {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        routes: ['/'],
        staticDir: path.join(__dirname, 'build')
      })
    ]);
  }
  //自定义目录符号
  config.resolve.alias['@'] = path.resolve(__dirname, './src');
  //配置eslint
  config.module.rules = config.module.rules.concat([
    {
      test: /\.jsx?$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      include: /src/
    }
  ]);
  return config;
};
