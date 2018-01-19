'use strict';
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const path = require('path');

module.exports = {
    entry: {
        page1: './src/client/pages/page1.js',
        page2: './src/client/pages/page2.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: '/',
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2 })
    ]
};