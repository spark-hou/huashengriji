/**
 * @author  sparkHou
 * @date 2021-04-01 16:31
 * @Description:
 */
const fs = require('fs');
const path = require('path');

function copy() {
  fs.writeFileSync(path.join(__dirname, `/${process.env.REACT_APP_OUT}/CNAME`), fs.readFileSync(path.join(__dirname, './CNAME')));
}

function createCNAME(options) {
  // 使用 options 设置插件实例……
  //把目录下的CNAME移到打包目录
  console.log(options);
}

createCNAME.prototype.apply = function (compiler) {
  compiler.plugin('done', function () {
    console.log('Hello World!',);
    copy();
  });
};

module.exports = createCNAME;
