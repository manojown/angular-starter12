module.exports = function(grunt) {

  grunt.config.set('less', {
    build: {
      options: {
        plugins: [
          new(require('less-plugin-clean-css'))()
        ]
      },
      files: {
        "assets/css/style.min.css": "<%= config.lessDir %>/style.less"
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-less');
};
