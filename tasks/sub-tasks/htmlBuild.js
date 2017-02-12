module.exports = function(grunt) {
  grunt.registerTask('htmlBuild:prod', [
    'jade:templates_prod',
    'copy:html'
  ]);

  grunt.registerTask('htmlBuild:dev', [
    'jade:templates_dev',
    'copy:html'
  ]);

};
