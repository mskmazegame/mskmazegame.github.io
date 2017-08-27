const path = require('path');

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
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }

        ]
    },
    plugins: []
};