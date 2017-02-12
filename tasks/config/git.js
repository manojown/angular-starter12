module.exports = function(grunt) {

  grunt.config.set('gittag', {
    release: {
      options: {
        tag: 'release-<%= pkg.version %>',
        message: 'Production release <%= pkg.version %>'
      }
    },
    staging: {
      options: {
        tag: 'staging-<%= pkg.version %>',
        message: 'Staging release <%= pkg.version %>'
      }
    }
  });

  grunt.config.set('gitpush', {
    release: {
      options: {
        remote: 'origin',
        branch: 'master',
        tags: true
      }
    },
    staging: {
      options: {
        remote: 'origin',
        branch: 'frontend-v2',
        tags: true
      }
    }
  });

  // grunt.loadNpmTasks('grunt-git');

};

