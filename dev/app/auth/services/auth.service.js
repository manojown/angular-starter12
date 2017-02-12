define([
	'app-bootstrap'
	],function(){
	
		angular.module('act.Base').factory('AuthService', AuthService);
		
	    AuthService.$inject = ['logger','Rest','$q','$state'];
	    function AuthService(logger,Rest,$q,$state) {
	    	
	    	var log = logger.log().child('AuthService');
	    	return {
	    		login:login,
	    		logout:logout
	    	};
	   	/////////////////////////////////////////////////////////


	   		/**
	   		 * { function_description }
	   		 *
	   		 * @public
	   		 *
	   		 * @memberof   (parent_name_path)
	   		 *
	   		 * @author     manoj
	   		 *
	   		 * @param      {<type>}  data    The data
	   		 */

	    	function login(data){
	    		
              
    			 var httpResource = Rest.resource('').post('auth');
    			 httpResource(data)
			        .then(function(res) {			        
			          log.info('API Response', res.data);			          		         			     
			          $state.go("app.main.dash");    
			        })
			        .catch(function(err) {
			          log.error('API Error', err);
			        });
	    	}

	    	/**
	    	 * { function_description }
	    	 *
	    	 * @public
	    	 *
	    	 * @memberof   (parent_name_path)
	    	 *
	    	 * @author     manoj
	    	 *
	    	 * @param      {<type>}  data    The data
	    	 */
	    	function logout(){

	    		var httpResource = Rest.resource('').post('logout');
    			 httpResource('')
			        .then(function(res) {			        
			          log.info('Auth service response', res.data);			          		         			     
			          $state.go("app1.login");    
			        })
			        .catch(function(err) {
			          log.error('API Error', err);
			          $state.go("app1.login");   
			        });
	    	}

    	}
    }
);