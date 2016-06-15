/**
 * 
 */

// Define the `TakeTask` module
var takeTaskApp = angular.module('TakeTask', []);

// Define the `ListTaskInProgress` controller on the `TakeTask` module
takeTaskApp.controller('ListTaskInProgress', function ListTaskInProgress(
		$scope, AppConstant) {
	
	$scope.search = {};
	$scope.search.status = "planned";
	$scope.taskList = AppConstant.taskList;

});
