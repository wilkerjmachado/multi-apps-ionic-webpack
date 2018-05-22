const config = require('../node_modules/@ionic/app-scripts/config/copy.config');

module.exports = Object.assign(config, {
  copyResources: {
    src: ['{{ROOT}}/src/apps/app-b/resources/**'],
    dest: '{{ROOT}}/resources'
  },
  copyConfig: {
    src: ['{{ROOT}}/src/apps/app-b/config.xml', '{{ROOT}}/src/apps/app-b/ionic.config.json'],
    dest: '{{ROOT}}'
  },
  copySRC: {
    src: ['{{ROOT}}/src/apps/app-b/src/**'],
    dest: '{{ROOT}}/src'
  }
})
