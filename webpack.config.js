const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 抽离css、js文件,防止将样式打包在js中引起页面样式加载错乱的现象。
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成一个 HTML5 文件

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            // react(jsx)语法的处理
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // css文件的处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // sass文件的处理
            {
                test: /\.s[ac]ss$/i,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            },
            // 图片的处理,url-loader是file-loader的再次封装，文件大小小于一定限制时，直接转成base64，减少外部引用的文件
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            // name为随机生成的变量，ext为文件后缀
                            name:'resource/[name].[ext]'
                        },
                    },
                ],
            },
            // 字体图标的处理
            {
                test: /\.(ttf|otf|eot|svg|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'resource/[name].[ext]'
                        },
                    },
                ],
            },
        ],
    },
    // webpack 4.x 删除了教程里面webpack3.x的 webpack.optimize.commonChunksPlugin api
    // 抽离公共模块
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                common: {
                    name: "common",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        // 生成html文件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 抽离出来的css文件的名字
        new ExtractTextPlugin("css/[name].css"),
    ]
};