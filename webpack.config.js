/* webpack.config.js */
const path = require('path');
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
        // runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                common: {
                    // enforce: true,
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                    name: 'common'
                },
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new webpack.ProvidePlugin({Promise: 'es6-promise'})
    ]
};