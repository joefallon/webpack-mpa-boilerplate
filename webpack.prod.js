/* webpack.prod.js */
'use strict';
const base           = require('./webpack.base.js');
const merge          = require('webpack-merge');
const webpack        = require('webpack');

const NODE_ENV = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
};

module.exports = merge(base, {
    mode: 'production',

    plugins: [
        new webpack.DefinePlugin(NODE_ENV)
    ]
});