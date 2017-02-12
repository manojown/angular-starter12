module.exports = function(grunt) {

  grunt.config.set('imagemin', {
    prod: {
      files: [{
        expand: true,
        src: ['<%= config.imgDir %>/**/*.{png,jpg,gif,svg}']
      }]
    }
  });

  // grunt.loadNpmTasks('grunt-aws-s3');
};
