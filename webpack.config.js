module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'jseasy.js',
        path: `${__dirname}/js`
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
}
