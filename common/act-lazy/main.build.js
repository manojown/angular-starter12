define([], function() {

  var app = angular.module('act.lazy',['oc.lazyLoad']);

  // Set base url in production builds

  // @if NODE_ENV=='PRODUCTION'
  app.constant('LAZY_BASE_PATH', '/' + '/* @echo buildPath */' + '/');
  // @endif

  // @if NODE_ENV=='DEVELOPMENT' || NODE_ENV == 'LOCAL'
  app.constant('LAZY_BASE_PATH', '');
  // @endif

  app.provider('lazy', ['$ocLazyLoadProvider', 'LAZY_BASE_PATH',
    function($ocLazyLoadProvider, LAZY_BASE_PATH) {

      var baseUrl = LAZY_BASE_PATH;

      var _configure = function(_moduleName) {
        $ocLazyLoadProvider.config({
          loadedModules: [_moduleName],
          asyncLoader: require,
          debug: false
        });
      };

      return {
      $get: ['$ocLazyLoad', function($ocLazyLoad) {
        return {
          load: function(_path) {

            var pattern = new RegExp('(^app.+)||(^packages.+)');

            // append base url if local
            if (typeof _path === 'string' && matchPath(_path)) {
              _path = baseUrl + _path;

              _path = fixExtension(_path);

            } else if (typeof _path === 'object' && _path.length) {
              // array of modules

              for (var i = 0; i < _path.length; i++) {
                // check for app/
                if (matchPath(_path[i])) {
                  _path[i] = baseUrl + _path[i];

                  _path[i] = fixExtension(_path[i]);

                }
              }
            }

            function matchPath(path) {
              return (/(^app.+)|(^packages.+)/g).test(path);
            }

            function fixExtension(_filePath) {
              // check if ends with js, if it doesnt then add .js
              var ext = _filePath.split('.').pop();

              if (ext !== 'js') {
                _filePath = _filePath + '.js';
              }

              return _filePath;
            }

            return $ocLazyLoad.load(_path);
          }
        };
      }],

      configure: _configure
    };
    }]);
});
