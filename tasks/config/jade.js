module.exports = function(grunt) {

  var COMPILED_EXT = '.tpl.html';

  var cwd = '<%= config.devFolder %>/<%= config.appFolder %>';
  var src = ['**/tpl/*.jade'];
  var dest = '<%= config.appFolder %>';
  var ext = '.tpl.html';

  grunt.config.set('jade', {
    templates_dev: {
      options: {
        pretty: false,
        data: {
          buildPath: ''
        }
      },
      files: [{
        expand: true,
        cwd: cwd,
        src: src,
        dest: dest,
        ext: ext
      }]
    },
    templates_prod: {
      options: {
        pretty: false,
        data: {
          buildPath: '<%= config.distDir %>/<%= buildId %>'
        }
      },
      files: [{
        expand: true,
        cwd: cwd,
        src: src,
        dest: dest,
        ext: ext
      }]
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-jade');

};