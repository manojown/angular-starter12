module.exports = function(grunt) {
  grunt.registerTask('prod', [
    // Switch to prod env
    'env:prod',

    // Clean the env
    'clean:pre_dist',

    // Pre-process (JS files)
    'preprocess:prod',

    'lessImportBuild',

    // Build Dist JS
    'jsDistBuild',

    // Build CSS from Less
    'cssBuild',

    // Build single css file (with versionning)
    'concat:css',

    // Minify CSS
    'cssmin:dist',

    // Clean CSS
    'clean:css',

    // Build HTML
    'htmlBuild:prod',

    // Pre-process (index.html)
    'preprocess:dist',

    // Process CSS classeses (renaming)
    'revizor',

    // Create Angular templates
    // 'angularBuild:prod',

    // Set versionning
    'packageVersionedDistBuild',

    // Optimize Images
    'imagemin:prod',

    // Copy to Dist
    'copy:dist',

    // Optimize RequireJs Build
    'optimizeRequireJs',

    // Build locale files
    'merge-json:i18n',

    // Clean dist
    'clean:post_dist',

    // Notify
    'notify:prod'
  ]);
};
