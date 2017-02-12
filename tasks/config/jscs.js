/* global process */
module.exports = function(grunt) {

  var jscsSettings = {
    plugins: [
      'jscs-jsdoc'
    ],
    preset: 'google',
    reporter: require('jscs-stylish')
      .path,
    maxErrors: -1,
    jsDoc: {
      checkAnnotations: {
        preset: 'jsdoc3'
      },
      checkParamExistence: true,
      checkParamNames: true,
      requireParamTypes: true,
      checkRedundantParams: true,
      checkReturnTypes: true,
      checkRedundantReturns: true,
      requireReturnTypes: true,
      enforceExistence: true,
      requireParamDescription: true,
      requireNewlineAfterDescription: true,
      leadingUnderscoreAccess: 'private',
      checkRedundantAccess: 'enforceLeadingUnderscore',
      checkTypes: true,
      requireReturnDescription: true
    },
    requireSpaceAfterLineComment: true,
    requireDotNotation: {
      allExcept: ['snake_case']
    },
    requirePaddingNewLinesAfterBlocks: true,
    maximumLineLength: 100
  };

  var argv = require('minimist')(process.argv.slice(2));

  var source = ['<%= config.appDir %>/**/**/*.js'];

  if (argv.source) {
    source = argv.source;
  }

  grunt.config.set('jscs', {
    src: source,
    options: jscsSettings
  });

  // grunt.loadNpmTasks('grunt-jscs');

};
