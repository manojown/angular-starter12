module.exports = function(grunt) {
  grunt.registerTask('jsDistBuild', [
    'uglify:dist',
    'uglify:requirejs'
  ]);
};
