module.exports = function(grunt) {

  var argv = require('minimist')(process.argv.slice(2));
  var notify = argv.notify;

  if(notify === 'false'){
    notify = false;
  }
  else {
    notify = true;   //default notifications are enabled
  }
  
  var title = 'titan-server-frontend';

  grunt.config.set('notify', {
    notify_hooks: {
      enabled: notify //switch via commandline --notify
    },
    watch: {
      options: {
        title: title,
        message: '(Watch) Build Complete'
      }
    },
    local: {
      options: {
        title: title,
        message: '(Local) Build Complete'
      }
    },
    prod: {
      options: {
        title: title,
        message: '(Prod) Build Complete', 
      }
    }
  });

  // grunt.loadNpmTasks('grunt-notify');
};