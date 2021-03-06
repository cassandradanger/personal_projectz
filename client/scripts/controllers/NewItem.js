/**
 * Created by casie on 5/28/15.
 */
console.log("New Item.js controller is Loaded");

myApp.controller('NewItemController',["$scope", "$http", function($scope, $http) {
    $scope.item = {};
    $scope.items = [];
    $scope.query = {};
    $scope.queryBy = '$';
    $scope.orderProp = 'vendor';
    $scope.item.consignPrice = $scope.item.price * $scope.item.consignRate;

    $scope.onSubmit = function(){
        console.log($scope.item.itemName);
        console.log("button is pressed!");
        $scope.item.consignPrice = ($scope.item.price * $scope.item.consignRate);
    };

    var fetchItem = function () {
        return $http.get('/items').then(function (response) {
            if (response.status !== 200) {
                throw new Error("failed to fetch items");
            }
            $scope.item = {};
            $scope.items = response.data;
            return response.data;

        })
    };

    fetchItem();

    $scope.add = function(item){
        return $http.post('/items', item).then(fetchItem());
    };
    $scope.remove = function(item){
        $http.delete('/items/' + item._id).then(fetchItem());
    };

    $scope.edit = function(item){
        console.log("edit on the client", item);
        return $http.post('/items/' + item._id).then(fetchItem());
        console.log('done');
    };

}]);
