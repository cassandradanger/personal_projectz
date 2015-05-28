/**
 * Created by casie on 5/28/15.
 */

myApp.controller('PosController',['$scope', function($scope){
    console.log("pos is loaded");
    $scope.onSubmit = function(){
        $scope = "";
        console.log("CLICKED");
    }
    console.log("working?");
}]);
