const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');
const paths = require('react-scripts/config/paths');
const createCNAME = require('./createCNAME');
paths.appBuild = path.join(path.dirname(paths.appBuild), process.env.REACT_APP_OUT);
const outPut = path.join(__dirname, process.env.REACT_APP_OUT);
module.exports = (config, env) => {
  if (env === 'production') {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        routes: ['/'],
        staticDir: outPut
      }),
      new createCNAME()
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
