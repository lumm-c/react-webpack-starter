const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        new HtmlWebpackPlugin({ template: './public/index.html' })
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
        open: true
    }
};