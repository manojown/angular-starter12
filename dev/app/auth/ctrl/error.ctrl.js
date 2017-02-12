/**
 * @namespace act.Base
 */
define([], function() {

  angular
    .module('act.Base')
    .controller('ErrorController', controller);

  controller.$inject = [];

  return controller;

  // //////////////////////////////////////////////////////

  /**
   * Application Base Error Controller
   *
   * @public
   *
   * @memberof   act.Base
   *
   * @author     shoaibmerchant
   */
  function controller() {
    // var ViewModel = this;
  }

});

