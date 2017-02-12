/**
 * @namespace act
 */
define([
  // Base Config & Req
  'app-bootstrap',

  // Modules Configs
  'app/auth/auth.config',
  'app/main/main.config'
], function() {

  angular.module('act', [
    'act.Base',
    'act.Globals',

    // All V2 Modules
    'act.Main',

    // All 3rd party modules
    'ngMaterial',
    'ngAnimate',
    'ngAria',
	'ngMaterialSidemenu'
  ]);

  // /////////////////////////////////////

  /*=====================================
  =            Config Blocks            =
  =====================================*/

  /*=====  End of Config Blocks  ======*/

});
