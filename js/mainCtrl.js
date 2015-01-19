var app = angular.module("friendsList");

app.controller("mainCtrl", function($scope) {
	$scope.friends = ["mark ass", "wee man", "old John", "Jonny 5"];
});

$scope.addFriend = function() {
	$scope.friends.push($scope.inputName);
});
