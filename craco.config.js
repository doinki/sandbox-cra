const path = require('node:path');

/**
 * @type {import('@craco/craco').CracoConfig}
 */
const cracoConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};

module.exports = cracoConfig;
