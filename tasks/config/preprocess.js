module.exports = function(grunt) {

  grunt.config.set('preprocess', {
    dev: {
      files: {
        'index.html': 'index.build.tpl.html',
        '<%= config.devFolder %>/<%= config.appFolder %>/main.js': '<%= config.devFolder %>/<%= config.appFolder %>/main.build.js',
        '<%= config.devFolder %>/<%= config.appFolder %>/app-bootstrap.js': '<%= config.devFolder %>/<%= config.appFolder %>/app-bootstrap.build.js',
        '<%= config.devFolder %>/<%= config.appFolder %>/templates.js': '<%= config.devFolder %>/<%= config.appFolder %>/templates.js',
        '<%= config.commonDir %>/act-lazy/main.js': '<%= config.commonDir %>/act-lazy/main.build.js',
        'app.js': 'app.build.js'
      }
    },
    prod: {
      files: {
        '<%= config.commonDir %>/act-lazy/main.js': '<%= config.commonDir %>/act-lazy/main.build.js',
        '<%= config.devFolder %>/<%= config.appFolder %>/main.js': '<%= config.devFolder %>/<%= config.appFolder %>/main.build.js',
        '<%= config.devFolder %>/<%= config.appFolder %>/app-bootstrap.js': '<%= config.devFolder %>/<%= config.appFolder %>/app-bootstrap.build.js',
        'app.js': 'app.build.js'
      },
      options: {
        context: {
          buildPath: '<%= config.distDir %>/<%= buildId %>'
        }
      }
    },
    dist: {
      files: {
        'index.html': 'index.build.tpl.html'
      },
      options: {
        context: {
          buildPath: '<%= config.distDir %>/<%= buildId %>'
        }
      }
    },
    templates: {
      files: {
        '<%= config.appFolder %>/templates.js': '<%= config.appFolder %>/templates.js'
      }
    },
    local: {
      files: {
        'index.html': 'index.build.tpl.html',
        '<%= config.commonDir %>/act-lazy/main.js': '<%= config.commonDir %>/act-lazy/main.build.js',
        '<%= config.devFolder %>/<%= config.appFolder %>/main.js': '<%= config.devFolder %>/<%= config.appFolder %>/main.build.js',
        '<%= config.devFolder %>/<%= config.appFolder %>/app-bootstrap.js': '<%= config.devFolder %>/<%= config.appFolder %>/app-bootstrap.build.js',
        'app.js': 'app.build.js'
      }
    },
    less: {
      files: {
        '<%= config.lessDir %>/build/fonts.less': '<%= config.lessDir %>/templates/fonts.build.less'
      }
    }
  });

  // grunt.loadNpmTasks('grunt-preprocess');
};
