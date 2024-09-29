const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
const dotenv = require('dotenv');

// 加載 .env 文件
dotenv.config();

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sass|css|scss)$/, // 處理 SASS 文件
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // 處理圖片文件的規則
                type: 'asset/resource',  // 將圖片作為資源單獨打包
                generator: {
                    filename: 'images/[name][ext]', // 指定輸出圖片的目錄
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,  // 處理字體文件的規則
                type: 'asset/resource', // 將字體作為資源單獨打包
                generator: {
                    filename: 'fonts/[name][ext]',  // 指定輸出字體的目錄
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new webpack.DefinePlugin({
            'process.env.REACT_APP_VERSION': JSON.stringify(require("./package.json").version),
            'process.env.REACT_APP_I18N_API_URL': JSON.stringify(process.env.REACT_APP_I18N_API_URL || ''), // 這可以保留
            'process.env.Google_Analytics_ID': JSON.stringify(process.env.Google_Analytics_ID || ''), // 這可以保留
            'process.env.EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.EMAILJS_PUBLIC_KEY),
            'process.env.EMAILJS_SERVICE_ID': JSON.stringify(process.env.EMAILJS_SERVICE_ID),
            'process.env.EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
            'process.env.REACT_APP_SECRET_KEY': JSON.stringify(process.env.REACT_APP_SECRET_KEY)
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),  // 使用 @ 表示 src 文件所在路徑
        },
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
    }
};