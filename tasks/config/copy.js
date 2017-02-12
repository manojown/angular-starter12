module.exports = function(grunt) {

  grunt.config.set('copy', {
    html: {
      files: [{
        expand: true,
        src: '<%= config.appFolder %>/**/**/*.html',
        dest: './',
        cwd: '<%= config.devFolder %>'
      }]
    },
    less: {
      files: [{
        expand: true,
        src: '*.less',
        dest: '<%= config.lessDir %>/build/',
        cwd: '<%= config.lessDir %>/src/'
      }]
    },
    dist: {
      files: [{
        expand: true,
        src: [
          'app/**',
          'assets/**',
          'common/**',
          'json/**',
          'config/**',
          // 'locales/**',
          'packages/**',
          'node_modules/@storedock/**',
          'app.js',
          // index.html is not there because it will be served from root
        ],
        dest: '<%= config.distDir %>/<%= buildId %>/',
      }]
    },
    renameLocale: {
      files: [{
        expand: true,
        cwd: './locales',
        src: ['**/en.json'],
        dest: '<%= config.distFolder %>/locales/',
        rename: function(dest, src) {
          // use the source directory to create the file
          // example with your directory structure
          //   dest = 'dev/js/'
          //   src = 'module1/js/main.js'
          return dest + src.substring(0, src.indexOf('/')) + '.json';
        }
      }]
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-copy');
};
