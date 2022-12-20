"use strict";
require('./test_helpers/global_before');
require('./test_helpers/global_after');
const testsContext = require.context(".", true, /\.test$/); // @types/webpack-env
testsContext.keys().forEach(testsContext);
//# sourceMappingURL=index_test.js.map