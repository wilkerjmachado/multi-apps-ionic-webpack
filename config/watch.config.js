const watchConfig = require('@ionic/app-scripts/config/watch.config');

// Since we build multiple apps on the same repo and share a common component module among them,
// we need to add path of common components to make ionic-cli watch for changes of it
watchConfig.srcFiles.paths.push('{{SRC}}/../../../common/**/*.(ts|html|s(c|a)ss)');
