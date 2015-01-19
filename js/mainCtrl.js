var app = angular.module("friendsList");

app.controller("mainCtrl", function($scope) {
	$scope.friends = ["mark ass", "wee man", "old John", "Jonny 5"];


	$scope.addFriends = function() {
	  $scope.friends.push($scope.adder);
	  $scope.adder = '';
	};


});
