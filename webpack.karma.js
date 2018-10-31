'use strict';
const path    = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',

    entry: './src/client/index_test.ts',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/index_test.js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    devtool: 'inline-cheap-module-source-map',

    watchOptions: {
        aggregateTimeout: 500,
        poll: false,
        ignored: [ /node_modules/, "src/server/**/*" ]
    },

    module: {
        rules: [
            {
                test: /\.worker\.ts$/,
                use: {
                    loader: 'worker-loader',
                    options: { inline: false, fallback: true }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/],
                options: {
                    transpileOnly: true
                }
            },
            { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' }
        ]
    },

    plugins: [
        // for ie11
        // new webpack.ProvidePlugin({Promise: 'es6-promise'})
    ]
};
