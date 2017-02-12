/* global process */
module.exports = function(grunt) {

  var jsHintSettings = {
    globals: {
      require: true,
      module: true,
      angular: true,
      define: true,
      jQuery: true,
      Raven: true,
      _: true,
      nodeRequire: true,
      q: true,
      rfHandle: true,
      rtHandle: true,
      responseUtils: true,
      emit: true // CouchDB
    },
    sub: true,
    curly: true,
    latedef: 'nofunc',
    noarg: true,
    freeze: true,
    shadow: true,
    unused: true,
    eqnull: true,
    browser: true,
    camelcase: true,
    devel: false,
    undef: true,
    reporter: require('jshint-stylish')
  };

  var argv = require('minimist')(process.argv.slice(2));

  var source = ['<%= config.appDir %>/**/**/*.js'];
  var ignores = ['<%= config.bowerDir %>/**/*.js'];

  if (argv.source) {
    source = argv.source;
  }
  if (argv.ignores) {
    ignores = argv.ignores;
  }

  jsHintSettings.ignores = ignores;

  grunt.config.set('jshint', {
    options: jsHintSettings,
    appLint: source
  });

  // grunt.loadNpmTasks('grunt-contrib-jshint');
};
