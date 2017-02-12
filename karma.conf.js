// Karma configuration
// Generated on Mon Jan 18 2016 13:11:41 GMT+0530 (India Standard Time)

var path = require('path');

var coveragePath = 'coverage/';

if (process.env.CI) {
  coveragePath = path.join(process.env['CIRCLE_ARTIFACTS'], 'istanbul-coverage');
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      // All packages
      {
        pattern: 'packages/**/*.js',
        included: false
      },

      //  Config Modules
      {
        pattern: 'config/**/*.json',
        included: false
      },

      // Node Modules
      // All Common Packages
      {
        pattern: 'common/**/*.js',
        included: false
      },

      // JSON
      {
        pattern: 'json/**/*.json',
        included: false
      },

      // All browser files
      {
        pattern: 'app/**/*.js',
        included: false
      },

      // All tests
      {
        pattern: 'test/cases/**/*.js',
        included: false
      },
      {
        pattern: 'test/containers/**/*.js',
        included: false
      },
      {
        pattern: 'test/lib/**/*.js',
        included: false
      },
      'test/test-app.js'
    ],

    // list of files to exclude
    exclude: [],

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher',
      // 'karma-chrome-launcher',
      'karma-requirejs',
      'karma-jasmine-async',
      'karma-spec-reporter'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
    // config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    coverageReporter: {
      type: 'html',
      dir: coveragePath
    },

    customLaunchers: {
    }
  });
};
