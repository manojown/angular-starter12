module.exports = function(grunt) {

  grunt.config.set('revizor', {
    options: {
      compressFilePrefix: '',
      namePrefix: 'stk-',
      flatten: false,
      nonCssFileSelectors: []
    },
    src: ['assets/css/style.dist.min.css', 'app/**/*.tpl.html', 'index.html']
  });

};
