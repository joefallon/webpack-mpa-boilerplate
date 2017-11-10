// Require all modules ending in "test.js" from the current directory and all subdirectories.
var testsContext = require.context(".", true, /\.test$/);
testsContext.keys().forEach(testsContext);
