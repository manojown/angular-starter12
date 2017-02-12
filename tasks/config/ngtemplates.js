/* global process */
module.exports = function(grunt) {

  var argv = require('minimist')(process.argv.slice(2));

  var BOOTSTRAP_ANGULAR_APP_NAME = 'titan.Cache';

  var source = ['app/**/tpl/**.tpl.html', 'app/**/**/**.modal.html'];
  var dest = '<%= config.appFolder %>/templates.js';
  var devDest = '<%= config.devFolder %>/<%= config.appFolder %>/templates.js';
  var cwd = '';

  if (argv.source) {
    source = argv.source;
  }

  if (argv.dest) {
    dest = argv.dest;
  }

  if (argv.cwd) {
    cwd = argv.cwd;
  }


  grunt.config.set('ngtemplates', {
    dev: {
      cwd: cwd,
      src: source,
      dest: devDest,
      options: {
        bootstrap: function(module, script) {
          return 'angular.module(\'' + BOOTSTRAP_ANGULAR_APP_NAME + '\', []);\n';
        }
      }
    },
    prod: {
      cwd: cwd,
      src: source,
      dest: dest,
      options: {
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        bootstrap: function(module, script) {
          return 'angular.module(\'' + BOOTSTRAP_ANGULAR_APP_NAME + '\', []).run([\'$templateCache\', function($templateCache) { ' + script + '}]);';
        }
      }
    }
  });

  // grunt.loadNpmTasks('grunt-angular-templates');

};
