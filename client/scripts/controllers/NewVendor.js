/**
 * Created by casie on 5/28/15.
 */

myApp.controller('NewVendorController',['$scope', function($scope){
    console.log("new vendor is loaded");
    $scope.onSubmit = function(){
        console.log("CLICKED");
    }
}]);
