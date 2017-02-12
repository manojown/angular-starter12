module.exports = function(grunt) {

  var argv = require('minimist')(process.argv.slice(2));

  var source = ['app-dist.js'];
  var dest = './';

  if (argv.source) {
    source = argv.source;
  }
  if (argv.dest) {
    dest = argv.dest;
  }

  grunt.config.set('filerev', {
    options: {
      algorithm: 'md5',
      length: 8
    },
    images: {
      src: source,
      dest: dest
    }
  });

  // grunt.loadNpmTasks('grunt-filerev');

};