/* AWS s3 Task */
module.exports = function(grunt) {

  var files = [{
    action: 'upload',
    expand: true,
    src: ['dist/**'],
    dest: '/',
    params: {
      CacheControl: 'max-age=31536000'
    }
  }, {
    action: 'upload',
    expand: true,
    src: ['favicon.ico'],
    dest: '/',
    params: {
      CacheControl: 'max-age=86400'
    }
  }, {
    action: 'upload',
    expand: true,
    src: ['robots.txt'],
    dest: '/',
    params: {
      CacheControl: 'max-age=0'
    }
  }, {
    action: 'upload',
    expand: true,
    src: ['index.html'],
    dest: '/',
    params: {
      CacheControl: 'max-age=0'
    }
  }];

  grunt.config.set('aws_s3', {
    options: {
      progress: 'progressBar',
      region: 'ap-southeast-1',
      uploadConcurrency: 50, // 50 simultaneous uploads
      downloadConcurrency: 5 // 5 simultaneous downloads
    },
    prod: {
      options: {
        bucket: 'prod-bucket-name-here'
      },
      files: files
    },
    'staging_v2': {
      options: {
        bucket: 'staging-bucket-name-here'
      },
      files: files
    }
  });

  // grunt.loadNpmTasks('grunt-aws-s3');
};
