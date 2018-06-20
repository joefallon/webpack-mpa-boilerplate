/* webpack.base.js */
'use strict';
const path    = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['jquery'],
        page1: './src/client/pages/page1.js',
        page2: './src/client/pages/page2.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' }
        ]
    },
    optimization: {

    },
    plugins: [
        new webpack.ProvidePlugin({Promise: 'es6-promise'})
    ]
};