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
    watchOptions: {
        aggregateTimeout: 250,
        poll: false,
        ignored: [
            /node_modules/,
            "src/**/*.tsx",
            "src/**/*.ts",
            "src/**/*.test.*",
            "src/**/*.scss",
            "src/server/**/*"
        ]
    },
    plugins: [
        new webpack.DefinePlugin(NODE_ENV)
    ]
});