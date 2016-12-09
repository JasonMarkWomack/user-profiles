angular.module('userProfiles')
.service('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http.post('/api/login', user).then(response => response);
      // return $http({
      //   url:'/api/profiles',
      //   method:'POST',
      //   data:user
      // });
    },

    getFriends() {
    	return $http.get('/api/profiles').then(function( response ) {
    		return response.data;
    	});
    }
  }
});
