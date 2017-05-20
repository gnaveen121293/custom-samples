var app=angular.module("myApp",[]);
app.controller("myController",["$scope",function($scope)
{
	$scope.message="this is message controller";
	$scope.companyName="Techminds pvt Ltd";
	$scope.userDetails1=[
	
	{
		name : "Scott Desatnick",
		address : "boston,united states"
	},
	
	{
		name : "naveen",
		address : "bangalore"
	},
	
	{
		name : "siva",
		address : "hyderabad"
	}]

$scope.changeCompanyName=function()
{
	$scope.companyName="Techmind solution";
}
}])
app.directive("myCustomerDetailsDirectives", function()
{
return {
	restrict: 'EACM',
	templateUrl: 'customerDetails.html',
    replace: true,
scope: {
	userName :'@',
	userDetails : '=',
	change : '&'
}
}

})