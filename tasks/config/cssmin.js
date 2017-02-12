module.exports = function(grunt) {

  grunt.config.set('cssmin', {
    options: {
      keepSpecialComments: 0
    },
    dist: {
      files: {
        '<%= config.assetsDir %>/css/style.dist.min.css': '<%= config.assetsDir %>/css/style.dist.css'
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-cssmin');

};