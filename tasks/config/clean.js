module.exports = function(grunt) {

  grunt.config.set('clean', {
    // prod: ['app-dist.*.js'],
    // prod_app_built: ['app-dist.js']
    css: [
      '<%= config.assetsDir %>/css/style.dist.css',
      '<%= config.assetsDir %>/css/style.min.css'
    ],
    pre_dist: [
      '<%= config.distDir %>/*'
    ],
    post_dist: [
      '<%= config.distDir %>/<%= buildId %>/app.js',
      '<%= config.distDir %>/<%= buildId %>/<%= config.commonFolder %>/act-lazy/main.build.js',
      '<%= config.distDir %>/<%= buildId %>/node_modules',
      '<%= config.distDir %>/<%= buildId %>/config'
    ]
  });

  // grunt.loadNpmTasks('grunt-contrib-clean');

};
