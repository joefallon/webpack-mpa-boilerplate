'use strict';
const path = require('path');

module.exports = {
    entry: './src/client/index_test.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/index_test.js"
    },

    devtool: 'inline-source-map',

    watchOptions: {
        aggregateTimeout: 250,
        poll: false,
        ignored: [ /node_modules/, "src/server/**/*", "src/**/*.ts", "src/**/*.scss", "src/**/*.css" ]
    },

    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    plugins: [
    ]
};