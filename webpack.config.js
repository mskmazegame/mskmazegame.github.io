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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
    ]
};