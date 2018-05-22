const config = require('../node_modules/@ionic/app-scripts/config/copy.config');

module.exports = Object.assign(config, {
  copyResources: {
    src: ['{{ROOT}}/src/apps/app-a/resources/**'],
    dest: '{{ROOT}}/resources'
  },
  copyConfig: {
    src: ['{{ROOT}}/src/apps/app-a/config.xml', '{{ROOT}}/src/apps/app-a/ionic.config.json'],
    dest: '{{ROOT}}'
  },
  copySRC: {
    src: ['{{ROOT}}/src/apps/app-a/src/**'],
    dest: '{{ROOT}}/src'
  }
})
