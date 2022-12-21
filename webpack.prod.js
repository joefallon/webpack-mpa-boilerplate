/* webpack.prod.js */
'use strict';
const base           = require('./webpack.base.js');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack        = require('webpack');

const NODE_ENV = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
};

module.exports = merge(base, {
    mode: 'production',

    plugins: [
        // new UglifyJSPlugin(),
        new webpack.DefinePlugin(NODE_ENV)
    ]
});
