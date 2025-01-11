const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  ],
};
