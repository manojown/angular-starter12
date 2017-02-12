module.exports = function(grunt) {

  var argv = require('minimist')(process.argv.slice(2));

  var source = './index.html';

  if (argv.source) {
    source = argv.source;
  }

  grunt.config.set('filerev_replace', {
    options: {
      assets_root: ''
    },
    views: {
      src: source
    }
  });

  // grunt.loadNpmTasks('grunt-filerev-replace');

};