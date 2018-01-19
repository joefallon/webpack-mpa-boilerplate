'use strict';
const base           = require('./webpack.base.js');
const merge          = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack        = require('webpack');

const NODE_ENV = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
};

module.exports = merge(base, {
    plugins: [
        new UglifyJSPlugin({parallel: true}),
        new webpack.DefinePlugin(NODE_ENV)
    ]
});