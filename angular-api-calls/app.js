var app=angular.module("myApp",['ngResource']);
app.controller("myController",["$scope","$resource","$http", function($scope,$resource,$http)
{
	$scope.message="this is my angular api application";
	$scope.getWeatherDetails=function()
	{



$resource("https://jsonplaceholder.typicode.com/posts/1")
.get(function(data)
{
console.log(data)
})
$http.get("https://jsonplaceholder.typicode.com/posts/1")
.then(function(response)
{
console.log(response.data)
})

}

}])