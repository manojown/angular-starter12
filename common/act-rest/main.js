/**
 * @namespace act-rest
 */
define([], function() {

  angular
    .module('act.rest', [])
    .provider('Rest', RestProvider);

  RestProvider.$inject = [];

  return RestProvider;

  ////////////////////////////////////////////////////////

  /**
   * act.rest.Rest allows users to easily build rest styled urls without defining resources and
   * paths before hand
   *
   * @public
   *
   * @memberof   act.rest
   *
   * @author     shoaibmerchant
   *
   * @class
   * @return     {Object}  Provider Instance of the class
   */
  function RestProvider() {

    var baseUrl = '';
    var options = {};

    Rest.$inject = ['$http'];

    return {
      $get: Rest,
      init: init
    };

    ////////////////////////////////////////////////////////

    /**
     * { function_description }
     *
     * @public
     *
     * @memberof   act.rest
     *
     * @author     shoaibmerchant
     *
     * @class
     * @param      {Object}  $http    Angular's primitive $http service
     * @return     {Object}  act.rest.Rest Service instance
     */
    function Rest($http) {

      return {
        resource: resource
      };

      /**
       * { function_description }
       *
       * @public
       *
       * @memberof   act.rest.Rest
       *
       * @author     shoaibmerchant
       *
       * @param      {String}  name           Name of the resource or controller
       * @param      {Object}  customBaseUrl  Custom base url
       * @return     {Object}  Resource HTTP client
       */
      function resource(name, customBaseUrl) {
        var resourceName = name;
        var resourceUrl = resourceName ? '/' + resourceName : ''; // set only if name given
        var resourceBaseUrl = customBaseUrl ? customBaseUrl : baseUrl;

        return {
          url: url,
          get: get,
          post: post,
          put: put,
          remove: remove,
          child: child
        };

        /**
         * Build url with the actions and params
         *
         * @public
         *
         * @memberof   act.rest.Rest
         *
         * @author     shoaibmerchant
         *
         * @param      {String}  action  The action part of the url
         * @param      {Object}  params  additional url config
         * @param      {Object}  query   Url Query parameters
         * @return     {String}  Url String
         */
        function url(action, params, query) {
          return _buildResourceUrl.apply(this, arguments);
        }

        /**
         * Get GET HTTP Resource
         *
         * @public
         *
         * @memberof   act.rest.Rest
         *
         * @author     shoaibmerchant
         *
         * @param      {String}    action  The action part of the url
         * @param      {Object}    params  additional url config
         * @param      {Object}    query   Url Query parameters
         * @return     {Function}  HTTP GET Client
         */
        function get(action, params, query) {
          var resourceActionUrl = _buildResourceUrl.apply(this, arguments);

          return resourceGetClient;

          /**
           * Get a GET client with the action specified, config including params and
           * headers can be added to the options parameter
           *
           * @public
           *
           * @memberof   act.rest.Rest
           *
           * @author     shoaibmerchant
           *
           * @param      {options}   options  HTTP Request options
           * @return     {Function}  HTTP Get Client (just pass optional config)
           */
          function resourceGetClient(options) {
            return $http.get(resourceActionUrl, options);
          }
        }

        /**
         * Get a POST Client with the action specified
         * You can also include url parameters as subsequent parameters in the function call
         *
         * @public
         *
         * @memberof   act.rest.Rest
         *
         * @author     shoaibmerchant
         *
         * @param      {String}  action  Name of the action
         * @return     {Function}  HTTP POST Client (just pass data and options)
         */
        function post(action) {

          var resourceActionUrl = _buildResourceUrl.apply(this, arguments);

          return resourcePostClient;

          /**
           * { function_description }
           *
           * @public
           *
           * @memberof   act.rest.Rest
           *
           * @author     shoaibmerchant
           *
           * @param      {data}     data     POST Data
           * @param      {options}  options  HTTP Request options
           */
          function resourcePostClient(data, options) {
            return $http.post(resourceActionUrl, data, options);
          }

        }

        /**
         * Get a POST Client with the action specified
         * You can also include url parameters as subsequent parameters in the function call
         *
         * @public
         *
         * @memberof   act.rest.Rest
         *
         * @author     shoaibmerchant
         *
         * @param      {String}  action  Name of the action
         * @return     {Function}  HTTP POST Client (just pass data and options)
         */
        function put(action) {

          var resourceActionUrl = _buildResourceUrl.apply(this, arguments);

          return resourcePutClient;

          /**
           * { function_description }
           *
           * @public
           *
           * @memberof   act.rest.Rest
           *
           * @author     shoaibmerchant
           *
           * @param      {data}     data     POST Data
           * @param      {options}  options  HTTP Request options
           */
          function resourcePutClient(data, options) {
            return $http.put(resourceActionUrl, data, options);
          }

        }

        /**
         * Get a Delete Client with the action specified
         * You can also include url parameters as subsequent parameters in the function call
         *
         * @public
         *
         * @memberof   act.rest.Rest
         *
         * @author     shoaibmerchant
         *
         * @param      {String}  action  Name of the action
         * @return     {Function}  HTTP POST Client (just pass data and options)
         */
        function remove(action) {

          var resourceActionUrl = _buildResourceUrl.apply(this, arguments);

          return resourcePostClient;

          /**
           * { function_description }
           *
           * @public
           *
           * @memberof   act.rest.Rest
           *
           * @author     shoaibmerchant
           *
           * @param      {data}     data     POST Data
           * @param      {options}  options  HTTP Request options
           */
          function resourcePostClient(data, options) {
            return $http.delete(resourceActionUrl, data, options);
          }

        }

        /**
         * { function_description }
         *
         * @public
         *
         * @memberof   (parent_name_path)
         *
         * @author     shoaibmerchant
         *
         * @param      {String}  childName  { description }
         * @return     {Object}  Child of the resource provided
         */
        function child(childName) {
          var childResourceName = resourceName + '/' + childName;
          return resource(childResourceName, resourceBaseUrl);
        }

        /**
         * Build the resource url based on the resource, action and params specified
         * as arguments
         *
         * @private
         *
         * @memberof   act.rest.Rest
         *
         * @author     shoaibmerchant
         *
         * @param      {String}  action  Action fragment/part of the url
         * @return     {String}  Generated resource url
         */
        function _buildResourceUrl(action) {
          var resourceActionUrl = resourceBaseUrl + resourceUrl + '/' + action;

          // check arguments for any url parameters
          if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments);
            var params = args.slice(1);

            resourceActionUrl += '/' + params.join('/');
          }

          return resourceActionUrl;
        }
      }
    }

    // //////////////////////////////////////////////////////

    /**
     * Initialize the App Base Url and other settings
     *
     * @public
     *
     * @memberof   act.rest.Rest
     *
     * @author     shoaibmerchant
     *
     * @param      {String}   appBaseUrl  API Base Url
     * @param      {Object}   options     Additional configuration parameters
     * @return     {Boolean}  acknowledge
     */
    function init(appBaseUrl, options) {
      baseUrl = appBaseUrl;
      options = options;

      return true;
    }

  }

});
