define([
	'app-bootstrap'
	],function() {

	angular
        .module('act.Base')
        .factory('SessionService', SessionService);

    SessionService.$inject = ['logger','Rest','$q'];
    function SessionService(logger,Rest,$q) {

        var log = logger.log().child('SessionService');
        var loggedIn = false;
        var loadPromise = false;
        var session = false;
        var data = {};

    	return {
    		load : load,
            isLoggedInPromise: isLoggedInPromise,
            isNotLoggedInPromise: isNotLoggedInPromise,
            setLoggedIn: setLoggedIn,
            setLoggedOut: setLoggedOut,
            getdata:getdata
    	};

        /**
         * { auth service function_description }
         *
         * @public
         *
         * @memberof   act.Base.AuthService
         *
         * @author     manoj
         *
         * @return     {promises}  { promises return when after session check}
         */
    	function load(){
    		
    		var log = logger.log().child('SessionService').child("load function");
               var defr = $q.defer();
    		var httpResource = Rest.resource('').post('session');
                 
            
            loadPromise = httpResource('');

    		loadPromise
		        .then(function(res) {
                    log.info("session found");
                    loggedIn = true;
                    data.user = res;
                    defr.resolve({code: "AUTHORIZED"});
		        })
		        .catch(function(err) {
                    log.info("no session");
                    loggedIn = false;
		            defr.resolve({code: "UNAUTHORIZED"});
		        })
                .finally(function() {
                    loadPromise = false;
                });
             return defr.promise;
    	}

        /**
         * Returns a resolved promise if logged in
         *
         * @public
         *
         * @memberof   act.Base.AuthService
         *
         * @author     manoj
         */
        function isLoggedInPromise() {
            if (loadPromise) {
                var deferred = $q.defer();
                loadPromise
                    .then(function(res) {
                        deferred.resolve({code: 'AUTHORIZED'});
                    })
                    .catch(function(err) {
                        deferred.reject({code: 'UNAUTHORIZED'});
                    });
                return deferred.promise;
            } else {
                if (loggedIn) {
                    return $q.resolve({code: "AUTHORIZED"});
                } else {
                    return $q.reject({code: "UNAUTHORIZED"});
                }
            }
        }


        /**
         * Returns a resolved promise if NOT logged in
         *
         * @public
         *
         * @memberof   act.Base.SessionService
         *
         * @author     manoj
         */
        function isNotLoggedInPromise() {
            if (loadPromise) {
                var deferred = $q.defer();
                loadPromise
                    .then(function(res) {
                        deferred.reject({code: 'AUTHORIZED'});
                    })
                    .catch(function(err) {
                        deferred.resolve({code: 'UNAUTHORIZED'});
                    });
                return deferred.promise;
            } else {
                if (!loggedIn) {
                    return $q.resolve({code: "UNAUTHORIZED"});
                } else {
                    return $q.reject({code: "AUTHORIZED"});
                }
            }
        }

        function setLoggedIn() {
            loggedIn = true;
        }

        function setLoggedOut() {
            loggedIn = false;
        }


        function getdata(){
                var log = logger.log().child('SessionService').child("getdata function");
                var deferred = $q.defer();
                log.info("in getData");
                var httpResource = Rest.resource('').post('user');
                httpResource('').
                    then(function(res){
                        log.info(res.data);
                        deferred.resolve(res.data);
                    }).catch(function(error){
                        log.error(error);
                        deferred.reject("Unknown User");
                    });
              return  deferred.promise;
        }

    }
});

