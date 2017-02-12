module.exports = function(grunt) {

  var argv = require('minimist')(process.argv.slice(2));

  grunt.config.set('version', {
    project: {
      src: ['package.json']
    },
    app: {
      src: ['./app-dist.js'],
      options: {
        prefix: 'ver=\\\\\''
      }
    }
  });

  // grunt.loadNpmTasks('grunt-version');

};

