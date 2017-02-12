module.exports = function(grunt) {

  grunt.config.set('merge-json', {
    'i18n': {
      files: {
        '<%= config.distDir %>/<%= buildId %>/<%= config.localesFolder %>/en.json': ['<%= config.localesDir %>/**/en.json'],
        '<%= config.distDir %>/<%= buildId %>/<%= config.localesFolder %>/hi.json': ['<%= config.localesDir %>/**/hi.json']
      }
    }
  });
};