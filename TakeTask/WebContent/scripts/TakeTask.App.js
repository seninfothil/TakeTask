/**
 * 
 */

// Define the `TakeTask` module
var takeTaskApp = angular.module('TakeTask', []);

// Define the `ListTaskInProgress` controller on the `TakeTask` module
takeTaskApp.controller('ListTaskInProgress',
		function ListTaskInProgress($scope) {
	$scope.filerOption={status:"planned"|"completed"};
			$scope.taskList = [ {
				title : 'Task A',
				status : 'completed',
				category : 'Personal'
			}, {
				title : 'Task B',
				status : 'planned',
				category : 'Office'
			}, {
				title : 'Task C',
				status : 'in progress',
				category : 'Personal'
			}, {
				title : 'planned',
				status : 'completed',
				category : 'Personal'
			}, {
				title : 'Task BB',
				status : 'planned',
				category : 'Home'
			}, {
				title : 'Task CC',
				status : 'in progress',
				category : 'Personal'
			} ];
			
			$scope.filterFunction=function(task) {
				
				if(task.status=="planned" || task.status=="completed")
				 return true;
				
				return false;
			};
		});
