(function(){
	angular.module('demoApp').directive('friendsTable', ['$compile', function($compile){
		var getTemplate = function(type, title) {
			var headerTemplate = '<div><h1>' + title  + '</h1></div>';
    		var inputTemplate = '<div class="form-group"><input class="form-control" type="text"/></div>';
    		var textTemplate = '<div class="form-group"><textarea class="form-control"></textarea></div>';
	        var template = '';
	        switch(type) {
	            case 'header':
	                template = headerTemplate;
	                break;
	            case 'input':
	                template = inputTemplate;
	                break;
	            case 'text':
	                template = textTemplate;
	                break;
	        }

	        return template;
	    }


		return {
			restrict: 'E',
			scope: {
				type: '='
			},
			replace: true,
			link: function(scope, element, attrs){

				element.html(getTemplate(scope.type.type, scope.type.title));//.show;
				if (scope.type.type == 'header'){
					element.bind('click', function(){
						element.children().children().html('Mario');
					})	
				}

				//$compile(element.contents())(scope);
			},
			controller: function($scope) {
				
			}
		}
	}]);
})()