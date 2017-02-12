module.exports = function(grunt) {

  grunt.config.set('concurrent', {
    options: {
      logConcurrentOutput: true
    },
    dev: {
      tasks: ['watch:less', 'watch:js', 'watch:html']
    }
  });

  // grunt.loadNpmTasks('grunt-concurrent');
};
