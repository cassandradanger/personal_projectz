/**
 * Created by casie on 5/28/15.
 */

myApp.controller('PosController',['$scope', '$http', function($scope,$http){
    var vm = this;
    vm.Total = 0;
    $scope.item = {};
    $scope.items = [];
    console.log("pos is loaded");
    console.log("THIS IS A POS CONSOLE LOG");

    //initiate another search by ID, AKA "GET"
    //associated with a view, pos.html
    //entered information into textfield
    //button is clicked, which will have a ng-submit
    //create the getByID() function
    //perform a get with the info in teh text field

    $scope.getByID = function() {
        //grab the info in the textfield
        //perform a get with that info
        //server side do a get By ID
        //return a response to the client
        //use that to populate the page!
        //Woot!
        //Celebrate
        //Much
        console.log("Hi!");
        console.log($scope.inputId);


        var fetchPosItem = function () {
            console.log("the POS fetch function is working");

            $http.get('/pos/search/'+ $scope.inputId).then(function (response) {
                console.log($scope.inputId);
                console.log("the POS function is STILL working");

                if (response.status !== 200) {
                    throw new Error("failed to fetch item");
                }

                $scope.item = response.data;
                $scope.items.push(response.data);

                $scope.total = 0;

                for(var i = 0; i < $scope.items.length; i++ ){
                    //console.log("********** HERE : ", $scope.items.)
                    $scope.total += $scope.items[i].price;
                }

                console.log("HERE IS THE TOTAL: ", $scope.total);

                //databind the response to where you want to show things
                console.log('fetchPosItem: ', response.data);
                console.log("the POS function is STILL STILL working");
                return response.data;

            })
        };
        fetchPosItem();
    };


}]);
