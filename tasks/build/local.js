module.exports = function(grunt) {
  grunt.registerTask('local', [
    // Switch to local env
    'env:local',

    // Pre-process
    'preprocess:local',

    // Build CSS from Less
    'cssBuild',

    // Build JS
    'jsBuild',

    // Build HTML
    'htmlBuild:dev',

    // Create Angular templates
    'angularBuild:dev',

    // Notify
    'notify:local'
  ]);
};