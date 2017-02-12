module.exports = function(grunt) {

  var source = ['<%= config.appFolder %>/**/**/*.js'];
  var dest = './';
  var cwd = '<%= config.devFolder %>';

  var requireJsSrcPath = '<%= config.bowerDir %>/requirejs/require.js';
  var requireJsDestPath = '<%= config.bowerDir %>/requirejs/require.min.js';


  // Override by Command line arguments
  var argv = require('minimist')(process.argv.slice(2));

  if (argv.source) {
    source = argv.source;
  }

  if (argv.dest) {
    dest = argv.dest;
  }

  if (argv.cwd) {
    cwd = argv.cwd;
  }

  grunt.config.set('uglify', {
    build: {
      options: {
        beautify: true,
        compress: false,
        preserveComments: true,
        mangle: false
      },
      files: [{
        expand: true,
        src: source,
        dest: dest,
        cwd: cwd
      }]
    },
    dist: {
      options: {
        beautify: false,
        comments: false,
        compress: {
          // jscs:disable
          // jshint ignore:start
          global_defs: {
            "DEBUG": false
          },
          drop_console: true,
          drop_debugger: true,
          dead_code: true,
          if_return: true,
          join_vars: true,
          hoist_funs: true,
          // jshint ignore:end
          // jscs:enable
          sequences: true,
          properties: true,
          conditionals: true,
          comparisons: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          cascade: true
        },
        mangle: true
      },
      files: [{
        expand: true,
        src: source,
        dest: dest,
        cwd: cwd
      }]
    },
    requirejs: {
      options: {
        beautify: false,
        comments: false,
        compress: {
          // jscs:disable
          // jshint ignore:start
          global_defs: {
            "DEBUG": false
          },
          drop_console: true,
          drop_debugger: true,
          dead_code: true,
          if_return: true,
          join_vars: true,
          hoist_funs: true,
          // jshint ignore:end
          // jscs:enable
          sequences: true,
          properties: true,
          conditionals: true,
          comparisons: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          cascade: true
        },
        mangle: true
      },
      files: [{
        expand: false,
        src: [requireJsSrcPath],
        dest: requireJsDestPath
      }]
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
};
