module.exports = function(grunt) {

  var argv = require('minimist')(process.argv.slice(2));

  var livereload = {};

  var live = argv.live || argv.l;

  //Switch flags
  livereload['less'] = argv.live === 'less' ? true: false;
  livereload['html'] = argv.live === 'html' ? true: false;
  livereload['js'] = argv.live === 'js' ? true: false;
  livereload['locale'] = argv.live === 'locale' ? true: false;

  grunt.config.set('watch', {
    less: {
      files: ['<%= config.lessDir %>/src/**/*.less'],
      tasks: ['cssBuild', 'notify:watch'],
      options: {
        livereload: livereload['less']
      }
    },
    html: {
      files: ['<%= config.appDir %>/**/**/*.html', '<%= config.appDir %>/**/**/*.jade'],
      tasks: ['newer:jade:templates_dev', 'newer:copy:html', 'notify:watch'],
      options: {
        livereload: livereload['html']
      }
    },
    js: {
      files: ['<%= config.appDir %>/**/**/*.js'],
      tasks: ['newer:uglify:build', 'notify:watch'],
      options: {
        livereload: livereload['js']
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-watch');
};
