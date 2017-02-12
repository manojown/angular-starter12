module.exports = function (grunt) {
  grunt.registerTask('cssBuild', [
    'lessImportBuild',
    'lessImportCopy',
    'lessImportMain',
    'less:build'
  ]);
};
