/* webpack.base.js */
'use strict';
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        hello_world: './src/client/pages/hello_world.ts',
        page1: './src/client/pages/page1.ts',
        page2: './src/client/pages/page2.ts'
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
            { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' }
        ]
    },
    optimization: {
        // runtimeChunk: 'single',  // creates runtime.js
        runtimeChunk: {
            name: 'common'  // places webpack runtime in manifest.js
        },
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all',  // or 'all' or 'initial'
                    minChunks: 2,
                    minSize: 0
                }
            }
        }
    },
    plugins: [
        // for ie11
        // new webpack.ProvidePlugin({Promise: 'es6-promise'})
    ]
}
