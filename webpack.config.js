const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        path: path.join(__dirname, 'output'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['es2017']},
                }],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    plugins: []
};