module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    'ngtemplates': 'grunt-angular-templates',
    'gittag': 'grunt-git',
    'gitpush': 'grunt-git'
  });

  var path = require('path');
  var randomstring = require('randomstring');

  grunt.initConfig({
    buildId: randomstring.generate(10),
    pkg: grunt.file.readJSON('package.json'),
    config: {
      devFolder: 'dev',
      appFolder: 'app',
      lessFolder: 'less',
      libFolder: 'lib',
      bowerFolder: 'packages',
      imgFolder: 'img',
      assetsFolder: 'assets',
      fontsFolder: 'fonts',
      distFolder: 'dist',
      commonFolder: 'common',
      localesFolder: 'locales',
      appDir: '<%= config.devFolder %>/<%= config.appFolder %>',
      lessDir: '<%= config.devFolder %>/<%= config.lessFolder %>',
      bowerDir: '<%= config.bowerFolder %>',
      assetsDir: '<%= config.assetsFolder %>',
      imgDir: '<%= config.assetsFolder %>/<%= config.imgFolder %>',
      commonDir: '<%= config.commonFolder %>',
      fontsDir: '<%= config.assetsFolder %>/<%= config.fontsFolder %>',
      distDir: '<%= config.distFolder %>',
      localesDir: '<%= config.localesFolder %>'
    }
  });

  var includeAll;
  try {
    includeAll = require('include-all');
  } catch (e) {
    console.error('Could not find `include-all` module.');
    console.error('Skipping grunt tasks...');
    console.error('To fix this, please run:');
    console.error('npm install include-all --save`');
    console.error();
  }

  function loadTasks(relPath) {
    return includeAll({
      dirname: path.resolve(__dirname, relPath),
      filter: /(.+)\.js$/
    }) || {};
  }

  function invokeConfigFn(tasks) {
    for (var taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }

  var taskConfigurations = loadTasks('./tasks/config'),
    registerSubTasksDefinitions = loadTasks('./tasks/sub-tasks'),
    registerBuildDefinitions = loadTasks('./tasks/build');

  if (!registerSubTasksDefinitions.default) {
    registerSubTasksDefinitions.default = function(grunt) {
      grunt.registerTask('default', []);
    };
  }

  invokeConfigFn(taskConfigurations);
  invokeConfigFn(registerSubTasksDefinitions);
  invokeConfigFn(registerBuildDefinitions);
};
