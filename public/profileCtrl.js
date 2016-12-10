angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService) {
	friendService.getFriends().then(function(userInfo){

		$scope.currentUser = userInfo.currentUser;
		$scope.friends = userInfo.friends;
	})
});
