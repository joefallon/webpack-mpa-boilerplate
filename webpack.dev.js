/* webpack.dev.js */
'use strict';
const base    = require('./webpack.base.js');
const merge   = require('webpack-merge');
const webpack = require('webpack');

const NODE_ENV = {
    'process.env': {
        'NODE_ENV': JSON.stringify('development')
    }
};

module.exports = merge(base, {
    mode: 'development',

    devtool: 'inline-source-map',

    watchOptions: {
        aggregateTimeout: 250,
        poll: false,
        ignored: [/node_modules/, "src/**/*.ts", "src/**/*.test.*"]
    },

    plugins: [
        new webpack.DefinePlugin(NODE_ENV)
    ]
});