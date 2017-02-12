module.exports = function(grunt) {

  grunt.config.set('concat', {
    options: {
      stripBanners: true,
      separator: '',
    },
    css: {
      src: [
        '<%= config.bowerDir %>/angular-material/angular-material.min.css',
        '<%= config.bowerDir %>/animate.css/animate.min.css',
        '<%= config.assetsDir %>/css/style.min.css'
      ],
      dest: '<%= config.assetsDir %>/css/style.dist.css'
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-concat');
};
