/**
 * @namespace act.Base
 */
define([], function() {

  angular
    .module('act.Main')
    .controller('ErrorController', controller);

  controller.$inject = ['logger'];

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
   * @param      {object} <logger> { logger name }
   */
  function controller(logger) {

    var log = logger.log().child('AppMainController');
    log.info('I am here in error controller');
    // $scope.message = 'Hello World!';
    // var ViewModel = this;
  }

});

