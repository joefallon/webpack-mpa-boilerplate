/* webpack.karma.js */
'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',

    entry: './src/client/index_test.ts',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/index_test.js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        // Add support for TypeScripts fully qualified ESM imports.
    },

    devtool: 'inline-cheap-module-source-map',

    watchOptions: {
        aggregateTimeout: 500,
        poll: false,
        ignored: '**/node_modules'
    },

    module: {
        rules: [
            // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
            { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' }
        ]
    },

    plugins: [
        // for ie11
        // new webpack.ProvidePlugin({Promise: 'es6-promise'})
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
};
