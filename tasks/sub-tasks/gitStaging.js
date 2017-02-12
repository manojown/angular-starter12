module.exports = function(grunt) {
  grunt.registerTask('gitStaging', [
    'gittag:staging',
    'gitpush:staging'
  ]);
};
