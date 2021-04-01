const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');
const paths = require('react-scripts/config/paths');
const createCNAME = require('./createCNAME');
paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs');
const outPut = path.join(__dirname, 'docs');
module.exports = (config, env) => {
  if (env === 'production') {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        routes: ['/'],
        staticDir: outPut
      }),
      new createCNAME(outPut)
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
