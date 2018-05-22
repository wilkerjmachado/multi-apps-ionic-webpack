const chalk = require("chalk");
const fs = require('fs');
const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;

useDefaultConfig[env].resolve.alias = {
  "@common": path.resolve('./src/common/')
};

module.exports = function () {
  return useDefaultConfig;
};
