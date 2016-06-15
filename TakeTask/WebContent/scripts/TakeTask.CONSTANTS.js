/**
 * 
 */

takeTaskApp.factory("AppConstant", function() {

	var retObj = {};

	retObj.taskList = [ {
		title : 'Task A',
		status : 'completed',
		category : 'Personal',
		startDate : '25-06-2016',
		endDate : '26-06-2016'
	}, {
		title : 'Task B',
		status : 'planned',
		category : 'Office',
		startDate : '25-06-2016',
		endDate : '26-06-2016'
	}, {
		title : 'Task C',
		status : 'in progress',
		category : 'Personal',
		startDate : '25-06-2016',
		endDate : '26-06-2016'
	}, {
		title : 'planned',
		status : 'completed',
		category : 'Personal',
		startDate : '25-06-2016',
		endDate : '26-06-2016'
	}, {
		title : 'Task BB',
		status : 'planned',
		category : 'Home',
		startDate : '25-06-2016',
		endDate : '26-06-2016'
	}, {
		title : 'Task CC',
		status : 'in progress',
		category : 'Personal',
		startDate : '25-06-2016',
		endDate : '26-06-2016'
	} ];

	return retObj;

});