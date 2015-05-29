/**
 * Created by casie on 5/28/15.
 */
console.log("New Vendor.js controller is Loaded");

//myApp.controller('NewVendorController',['$scope', function($scope){
//    firstName = $scope.firstName;
//    console.log("new vendor is loaded");
//    $scope.onSubmit = function(){
//        console.log("CLICKED");
//        console.log(firstName);
//    }
//}]);


myApp.controller('NewVendorController',["$scope", "$http", function($scope, $http) {
    $scope.vendor = {};
    $scope.vendors = [];

    $scope.onSubmit = function(){
        console.log($scope.vendor.firstName);
    }

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
}]);
