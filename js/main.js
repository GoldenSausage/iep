//angularJS routing
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"about.html",
        controller:"mainCtrl"
    })
    .when("/entertainment", {
        templateUrl:"entertainment.html",
        controller:"mainCtrl"
    })
    .when("/printing",{
        templateUrl:"printing.html"
    })
    .when("/clients",{
        templateUrl:"clients.html",
        controller:"mainCtrl"
    })
    .when("/contact",{
        templateUrl:"contact.html"
    })
});

app.controller('mainCtrl', function($scope, $timeout, $window){
    /*
    var appWindow = angular.element($window);
    
    appWindow.bind('resize', function(){
        console.log('resized your browser')
    });*/
    console.log("controller okk");
    addFooter();
});

app.directive("test", ['$timeout', function (timer){
    return{
        templateUrl:"scripts.html",

        link:function(scope,elem,attrs){
            var temp = function(){
                console.log("temp test (test dir)");
            }
        }
    }
}])

app.directive('cardheights', function ($timeout, $window){
    return{
        templateUrl:"cardheights.js.html",

        link:function(scope, elem, attrs){
            /*
            var w = angular.element($window);
            
            w.bind('resize', function(){
                scope.$apply();
            })*/
            
            $timeout(initCardHeights,100);
        }
    }
})

app.directive('slideshow',function (){
    return{
        templateUrl:"slideshow.js.html"
    }
})

app.directive('subSectionHeights', function ($timeout){
    return{
        templateUrl:"subSectionHeights.js.html",
        link:function(scope, elem, attrs){
            $timeout(initSubSectionHeights,10000);
        }
    }
})

