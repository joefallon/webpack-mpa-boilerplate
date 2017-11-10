'use strict';
const base  = require('./webpack.base.js');
const merge = require('webpack-merge');

module.exports = merge(base, {
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000
    }
});