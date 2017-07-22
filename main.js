
// Initialization of Angualr app
var ngTodo = angular.module('ngTodo', []);

// Head of department
ngTodo.controller('mainController', function($scope) {
	$scope.engineers = [
{
          name:'sanjay',
          position:'android developer'
},

        { name:'Rahul',
          position:'manager'
},

        { name:'jeet',
          position:'business'
},

        { name:'sanjay',
          position:'honey singh'
},

        { name:'rajat',
          position:'baend'
}

];

$scope.addEngineer = function(name,position) {
		var obj={};
		obj.name=name;
		obj.position=position;
		$scope.engineers.push(obj);
}

	$scope.deleteEngineer = function(name) {
           $scope.deletelist = function(index) {
		$scope.engineers.splice(index, 1);
	}
    
		
	}

});
