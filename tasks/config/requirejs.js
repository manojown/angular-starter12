module.exports = function(grunt) {

  var argv = require('minimist')(process.argv.slice(2));

  var optimizer = 'uglify2';

  if (argv.optimizer) {
    optimizer = argv.optimizer;
  }

  grunt.config.set('requirejs', {
    compile: {
      options: {
        optimize: optimizer, // uglify, closure or none
        uglify2: {
          output: {
            beautify: false
          },
          beautify: false,
          compress: {
            'global_defs': {
              'DEBUG': false
            },
            sequences: true,
            'dead_code': true,
            'drop_debugger': true,
            properties: true,
            conditionals: true,
            comparisons: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            'drop_console': true,
            'hoist_funs': true,
            'if_return': true,
            'join_vars': true,
            cascade: true,
            unsafe: true
          },
          warnings: true,
          mangle: true,
          screwIE8: true
        },
        preserveLicenseComments: false, // Remove licensing
        baseUrl: '<%= config.distDir %>/<%= buildId %>',
        name: 'app', // Point to the app (first require block)
        mainConfigFile: 'app.js', // File with the requirejs.config
        out: '<%= config.distDir %>/<%= buildId %>/app-dist.js' // Output file
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-requirejs');

};
