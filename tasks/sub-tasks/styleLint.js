module.exports = function(grunt) {
  grunt.registerTask('styleLint', [
    'jscs:src'
  ]);
};
