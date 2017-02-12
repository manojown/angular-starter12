module.exports = function(grunt) {
  grunt.registerTask('packageVersionedDistBuild', [
    'version:project:prerelease',
    'version:app:prerelease',
    // 'filerev',
    // 'filerev_replace',
    // 'clean:prod_app_built'
  ]);
};