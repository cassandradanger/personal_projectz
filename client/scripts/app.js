var myApp = angular.module('myApp',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/pos', {
            templateUrl: "/views/routes/pos.html",
             controller: 'PosController'
        }).
        when('/new_vendor', {
            templateUrl: "/views/routes/new_vendor.html",
            controller: 'NewVendorController'
        }).
        when('/new_item', {
            templateUrl: "/views/routes/new_item.html",
            controller: 'NewItemController'
        }).
        when('/current_vendor_list', {
            templateUrl: "/views/routes/current_vendor_list.html",
            controller: 'NewVendorController'
        }).
        when('/current_item_list', {
            templateUrl: "/views/routes/current_item_list.html",
            controller: 'NewItemController'
        }).
        when('/monthly_sales', {
            templateUrl: "/views/routes/monthly_sales.html",
            controller: 'MonthlySalesController'
        }).
        when('/vendor_sales', {
            templateUrl: "/views/routes/vendor_sales.html",
            controller: 'VendorSalesController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);















//
//
//
//
//        function(){
//        $scope.message = "Hello, " + $scope.name + "!";
//    };
//
//    $scope.goodByeMessage = function(){
//        $scope.message = "Goodbye, " + $scope.name;
//    };
//
//    $scope.grabinfo = function (){
//        return $http.get('/info').then(function(response){
//           if(response.status !== 200){
//               throw new Error("I haz sad.");
//           }
//
//            $scope.persons.push(response.data);
//            console.log($scope.persons);
//            return response.data;
//        });
//    };
//}]);