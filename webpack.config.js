const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 抽离css、js文件,防止将样式打包在js中引起页面样式加载错乱的现象。

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
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
                        presets: ['@babel/preset-env']
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
            // 图片的处理
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
        plugins: [
            // 抽离出来的css文件的名字
            new ExtractTextPlugin("styles.css"),
        ]
    }
};