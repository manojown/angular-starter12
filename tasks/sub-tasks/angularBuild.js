module.exports = function(grunt) {
  grunt.registerTask('angularBuild:prod', [
    'ngtemplates:prod' // build ng template cache
  ]);
  
  grunt.registerTask('angularBuild:dev', [
    'ngtemplates:dev' // build ng template cache
  ]);
};
