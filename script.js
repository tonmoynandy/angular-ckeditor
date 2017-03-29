


var app = angular.module("demo-app", ["ngRoute",'ckeditor']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "ckeditor-test.html"
    })
	
});

app.controller('CkeditorCtrl', ['$scope', function ($scope) {

  // Editor options.
  $scope.options = {
    language: 'en',
    allowedContent: true,
    entities: false
  };

  // Called when the editor is completely ready.
  $scope.onReady = function () {
    // ...
  };
}]);


app.controller('headingController',function($scope){
	$scope.heading = "CK Editor  Application";
});
