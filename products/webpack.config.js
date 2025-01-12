const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  // Dev Server 열기
  devServer: {
    port: 8081,
  },
  plugins: [
    // 빌드 결과물을 HTML에 추가(연결)
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // Module Federation Plugin 추가
    new ModuleFederationPlugin({
      // 이름 지정
      name: 'products',
      // 파일 이름 지정
      filename: 'remoteEntry.js',
      // export할 모듈 지정
      exposes: {
        './ProductsIndex': './src/index',
      },
      shared: ['faker'],
    }),
  ],
};
