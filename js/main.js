
var app = angular.module("iep", []);

app.controller('controller', function($scope){

    console.log("controller ok");

    $scope.mode = 'green';

    $scope.toggleMode = function(mode){
        $scope.mode = mode;
    }

});

app.directive('cardheights', function ($timeout, $window){
    return{
        templateUrl:"cardheights.js.html",

        link:function(scope, elem, attrs){
            /*
            var w = angular.element($window);

            w.bind('resize', function(){
                scope.$apply();
            })*/

            $timeout(initCardHeights,50);
        }
    }
});

app.directive('slideshow',function (){
    return{
        templateUrl:"slideshow.js.html"
    }
});

app.directive('subSectionHeights', function ($timeout){
    return{
        templateUrl:"subSectionHeights.js.html",
        link:function(scope, elem, attrs){
            $timeout(initSubSectionHeights,1000);
        }
    }
});

// var body = document.getElementsByTagName('body')[0];
// angular.bootstrap(body, 'iep');