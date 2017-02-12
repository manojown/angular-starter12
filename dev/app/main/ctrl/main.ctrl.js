/**
 * @namespace act.Base
 */
define([], function() {

  angular
    .module('act.Main')
    .controller('AppMainController', controller);

  controller.$inject = ['logger', 'Rest','$scope','$timeout', '$mdSidenav','$mdMedia','AuthService','SessionService'];

  return controller;

  // //////////////////////////////////////////////////////

  /**
   * { function_description }
   *
   * @public
   *
   * @memberof   (parent_name_path)
   *
   * @author     Raghu Mudaliar
   *
   * @param      {OBJECT}    logger      The logger
   * @param      {OBJECT}    Rest        The rest
   * @param      {OBJECT}    $scope      The scope
   * @param      {OBJECT}    $timeout    The timeout
   * @param      {Function}  $mdSidenav  The md sidenav
   * @param      {Function}  $mdMedia    The md media
   * @return     {RETURN}    { description_of_the_return_value }
   */
  function controller(logger, Rest, $scope, $timeout, $mdSidenav, $mdMedia,AuthService,SessionService) {
    var ViewModel = this;
    var log = logger.log().child('AppMainController');
  //  $scope.message = 
     
    $scope.triggerApi = triggerApi;

    log.info('Hello World');
    $scope.isActive = false;

    $scope.toggleLeft = function() {
      $scope.isActive = !$scope.isActive;
    };

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleLeft1 = buildToggler('left');
    /**
     * Builds a toggler.
     *
     * @public
     *
     * @memberof   (parent_name_path)
     *
     * @author     shoaibmerchant
     *
     * @param      {object}  componentId  The component identifier
     * @return     {return}  The toggler.
     */
    function buildToggler(componentId) {
      return function() {
        $scope.isActive = !$scope.isActive;
        $mdSidenav(componentId).toggle();
      };
    }

    $scope.shouldLeftBeOpen = $mdMedia('gt-sm');
    /**
     * { function_description }
     *
     * @public
     *
     * @memberof   (parent_name_path)
     *
     * @author     Raghu Mudaliar
     */
    this.toggleNavigation = function() {
    $mdSidenav(componentId).toggle();
  };

    // ///////////////////////////////////////////////////////

    /**
     * Send a test API call
     *
     * @public
     *
     * @memberof   act.Base.AppBaseController
     *
     * @author     raghu
     */
    function triggerApi() {
      console.log("logout");
       AuthService.logout();
    }

    // all service call
    
     SessionService.getdata().then(function(res){
        
          $scope.user = res.username;
      });





  }

});

