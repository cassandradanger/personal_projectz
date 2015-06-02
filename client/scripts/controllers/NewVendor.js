/**
 * Created by casie on 5/28/15.
 */
console.log("New Vendor.js controller is Loaded");

myApp.controller('NewVendorController',["$scope", "$http", function($scope, $http) {
    $scope.vendor = {};
    $scope.vendors = [];

    $scope.onSubmit = function(){
        console.log($scope.vendor.firstName);
        console.log($scope.vendor.lastName);
        console.log($scope.vendor.company);
        console.log($scope.vendor.phone);
        console.log($scope.vendor.email);
        console.log($scope.vendor.address);
        console.log($scope.vendor.description);
    };

    var fetchVendor = function () {
        return $http.get('/vendors').then(function (response) {
            if (response.status !== 200) {
                throw new Error("failed to fetch vendors");
            }
            $scope.vendor = {};
            $scope.vendors = response.data;
            console.log(response.data);
            return response.data

        })
    };

    fetchVendor();

    $scope.add = function(vendor){
        return $http.post('/vendors', vendor).then(fetchVendor());
    };
    $scope.remove = function(vendor){
        return $http.delete('/vendors/' + vendor._id);
    };
}]);
