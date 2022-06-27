const path = require('path')
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径 绝对路径
    filename: 'bundle.js', // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      filename: 'index.html', // 生成文件的名称
    }),
    new CleanWebpackPlugin(), // 删除的是ouput path 里配置的那个输出文件的文件夹
    // 默认情况下dist
  ],
  devServer: {
    // port: 3000, // 端口号
    open: true,
  },
 module:{
    rules: [
        // loader的规则
        // css
        {
          test: /\.css$/, // 匹配所有的css文件
          use: ['style-loader', 'css-loader'],
        },
        // less
        {
            test: /\.less$/, // 匹配执行类型的文件
            use: [ "style-loader", "css-loader", 'less-loader']
        },
        // webpack4
        {
            test: /\.(png|jpg|gif|jpeg)$/i,
            use: [
              {
                loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
                // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
                options: {
                  limit: 8 * 1024,
                },
              },
            ],
        },
        // webpack5
        { // 图片文件的配置(仅适用于webpack5版本)
            test: /\.(png|jpg|gif|jpeg)$/i,
            type: 'asset', // 在导出一个 data URI 和发送一个单独的文件之间自动选择
            // 如果你设置的是asset模式
            // 以8KB大小区分图片文件
            // 小于8KB的, 把图片文件转base64, 打包进js中
            // 大于8KB的, 直接把图片文件输出到dist下
              
            // type: 'asset/resource' // 发送一个单独的文件并导出 URL
            // type: 'asset/inline' // 导出一个资源的 data URI
        },
        // 加载器 - 处理高版本js语法
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                }
            }
        }
      ],
 }

}
// __dirname 可以用来动态获取当前文件所属目录的绝对路径
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口

// path.resolve(__dirname, "dist"),
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口/dist
