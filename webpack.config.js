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
                loader: 'babel-loader'
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