/**
 * Created by casie on 5/28/15.
 */

myApp.controller('PosController',['$scope', '$http', function($scope,$http){
    console.log("pos is loaded");
    $scope.onSubmit = function(){
        $scope = "";
        console.log("CLICKED");
    }
    console.log("working?");


    //initiate another search by ID, AKA "GET"
    //associated with a view, pos.html
    //entered information into textfield
    //button is clicked, which will have a ng-submit
    //create the getByID() function
    //perform a get with the info in teh text field

    $scope.getByID = function(){
        //grab the info in the textfield
        //perform a get with that info
        //server side do a get By ID
        //return a response to the client
        //use that to populate the page!
        //Woot!
        //Celebrate
        //Much
        console.log("Hi!");
        return $http.get('/:id').then(function (response) {
            if (response.status !== 200) {
                throw new Error("failed to fetch item");
            }
            //clear out text field
            //databind the response to where you want to show things
            console.log(response.data);
            return response.data
        })
    }
}]);
