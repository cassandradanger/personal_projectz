/**
 * Created by casie on 5/28/15.
 */

myApp.controller('NewItemController',['$scope', function($scope){
    console.log("new item is loaded");
    $scope.onSubmit = function(){
        $scope = "";
        console.log("CLICKED");
    }
}]);
