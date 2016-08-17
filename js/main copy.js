//angularJS routing
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"about.html",
        controller:"aboutCtrl"
    })
    .when("/aboutus", {
        templateUrl:"entertainment.html"
    })
});

app.controller('aboutCtrl', function($scope){
//here

});