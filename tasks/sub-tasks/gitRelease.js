module.exports = function(grunt) {
  grunt.registerTask('gitRelease', [
    'gittag:release',
    'gitpush:release'
  ]);
};
