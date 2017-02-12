module.exports = function(grunt) {

  grunt.config.set('less_imports', {
    options: {
      banner: '// Compiled Titan LESS Modules'
    },
    base: {
      src: ['<%= config.lessDir %>/src/base/**/*.less'],
      dest: '<%= config.lessDir %>/build/base.less'
    },
    layouts: {
      src: ['<%= config.lessDir %>/src/layouts/**/*.less'],
      dest: '<%= config.lessDir %>/build/layouts.less'
    },
    modules: {
      src: ['<%= config.lessDir %>/src/modules/**/*.less'],
      dest: '<%= config.lessDir %>/build/modules.less'
    },
    states: {
      src: ['<%= config.lessDir %>/src/states/**/*.less'],
      dest: '<%= config.lessDir %>/build/states.less'
    },
    main: {
      src: ['<%= config.lessDir %>/build/**/*.less'],
      dest: '<%= config.lessDir %>/main.less'
    }
  });

  // grunt.loadNpmTasks('grunt-less-imports');
};
