(function(){
	angular.module('demoApp').controller('homeCtrl', ['$scope',  function($scope){
		$scope.page = {
			name: 'Home'
		}

		$scope.controls = [];
		$scope.pages = [];

		$scope.addControl = function(type, title){
			if (type == "header" && !title){
				alert('Please fill the Heading text');
			} else {
				$scope.controls.push({
					type: type,
					title: title

				});
				$scope.title= "";
			}
		}

		$scope.savePage = function(type){
			if ($scope.controls.length > 0){
				$scope.pages.push({
					name: 'Pagina',
					controls: $scope.controls
				});
				$scope.controls = [];
			} else {
				alert('You need to add controls to your page');
			}
		}

		$scope.showPage = function(index){
			if ($scope.pages.length >= (index+1)){
				$scope.controls = $scope.pages[index].controls;
			}
		}

		$scope.clearPage = function(){
			$scope.controls = [];
		}

	}]);	
})()
