const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: './src/index.js', // Khai báo điểm bắt đầu
    output: {
        filename: 'bundle.js',
        // Khai bao thu muc file (duong dan tuyet doi)
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [{
            use: 'babel-loader',
            exclude: /node_modules/,
            test: /\.js$/
        }, {
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/public/path/to/',
                    },
                },
                'css-loader',
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', // name of html file to be created
            template: './index.html' // source from which html file would be created
        })
    ],
}

module.exports = config;