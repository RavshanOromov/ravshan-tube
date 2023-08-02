const path = require('path');

module.exports = {
  // ... other webpack config options ...
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify")
    }
  },
};
