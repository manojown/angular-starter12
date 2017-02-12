/*
    RequireJS Configuration, one file to rule them all.
*/
requirejs.config({
  urlArgs: 'ver=\'0.0.1\'',
  // @if NODE_ENV=='PRODUCTION'
  baseUrl: '/* @echo buildPath */',
  // @endif
  waitSeconds: 0,
  paths: {
    'angular': 'packages/' + 'angular/angular.min',
    'angular-animate': 'packages/' + 'angular-animate/angular-animate.min',
    'angular-aria': 'packages/' + 'angular-aria/angular-aria.min',
    'angular-material': 'packages/' + 'angular-material/angular-material.min',
    'angular-ui-router': 'packages/' + 'angular-ui-router/release/angular-ui-router.min',
    'debug': 'packages/' + 'visionmedia-debug/dist/debug',
    'oclazyload': 'packages/' + 'oclazyload/dist/ocLazyLoad.require.min',
	 'angular-material-sidemenu':'packages/'+'angular-material-sidemenu/dest/angular-material-sidemenu',
      'angular-material-icons':'packages/'+'angular-material-icons/angular-material-icons',
    // Common Modules
    'act-lazy': 'common/act-lazy/main',
    'act-log': 'common/act-log/main',
    'act-rest': 'common/act-rest/main',


    // Application Modules
    'app-bootstrap': 'app/app-bootstrap',

    'templates': 'app/templates',
    'main': 'app/main'
  },
  shim: {
    'angular': {
      deps: [],
      exports: 'angular'
    },
    'angular-animate': ['angular'],
    'angular-aria': ['angular'],
    'angular-material': ['angular', 'angular-aria'],
    'oclazyload': ['angular'],
	 'angular-material-sidemenu':['angular','angular-material'],
    'angular-material-icons':['angular'],
    // ACT Modules
    'act-lazy': ['oclazyload'],
    'act-log': ['angular', 'debug'],
    'act-rest': ['angular'],


    // Application Modules
    'app-bootstrap': ['angular-ui-router'],
    'templates': ['angular'],


    // Main Module
    'main': [
      // 3rd party
      'angular',
      'angular-material',
      'angular-animate',
      'angular-aria',
	  'angular-material-sidemenu',
      'angular-material-icons'
    ]
  }
});

require([
    'main'
  ],
  function() {

    angular.bootstrap(document, ['act'], {
      strictDi: true
    });
  }
);
