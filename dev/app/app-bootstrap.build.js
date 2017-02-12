define(['act-lazy', 'act-rest', 'act-log'], function() {

  // act Globals Constants -----------------------------------------------------------------------

  var actGlobals = angular.module('act.Globals', []);

  actGlobals.constant('APP_NAME', 'angular-starter');

  /**
   * App Base Path
   */
  // @if NODE_ENV=='PRODUCTION'
  actGlobals.constant('APP_BASE_PATH', '/' + '/* @echo buildPath */' + '/');
  actGlobals.constant('APP_LOGGING_ENABLED', false);
  actGlobals.constant('APP_LOGGING_LEVEL', 'error');
  actGlobals.constant('APP_REST_URL', 'http://localhost:1337');
  // @endif

  // @if NODE_ENV=='DEVELOPMENT' || NODE_ENV == 'LOCAL'
  actGlobals.constant('APP_BASE_PATH', '');
  actGlobals.constant('APP_LOGGING_ENABLED', true);
  actGlobals.constant('APP_LOGGING_LEVEL', 'trace');
  actGlobals.constant('APP_REST_URL', 'http://localhost:1337');

  // @endif

  /**
   *  System Constants
   */
  // Constants Configurations go here

  // End of Constants -----------------------------------------------------------------------------

  // // Angular Modules Registration

  // App Module Definitions Starts here -----------------------------------------------------------

  // Base for All Modules

  angular.module('act.Base', [
    // 3rd party
    'ui.router',
    // act modules
    'act.Globals',
    'act.lazy',
    'act.rest',
    'act.log'
  ]);
  angular.module('act.Main', [
    // 3rd party
    'ui.router',
    // act modules
    'act.Globals',
    'act.lazy',
    'act.rest',
    'act.log'
  ]);

  // Define all Modules
  // angular.module('act.Main', ['act.Base']);
  angular.module('act.Main.profile', ['act.Base']);

});
