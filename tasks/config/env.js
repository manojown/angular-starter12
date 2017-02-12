module.exports = function(grunt) {

  grunt.config.set('env', {
    options: {
      APP_BANNER: 'APP_BANNER_HERE'
    },
    dev: {
      NODE_ENV: 'DEVELOPMENT'
    },
    local: {
      NODE_ENV: 'LOCAL'
    },
    prod: {
      NODE_ENV: 'PRODUCTION'
    }
  });

  // grunt.loadNpmTasks('grunt-env');
};
