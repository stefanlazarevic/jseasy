/* global __dirname */
const webpack = require('webpack');

module.exports = {
    entry: {
        'jseasy': './src/js/index.js',
        'jseasy.min': './src/js/index.js',
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist/js`
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
        }),
    ]
};
