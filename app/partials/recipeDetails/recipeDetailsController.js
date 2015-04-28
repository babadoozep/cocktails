recipeControllers.controller('DetailsController', ['$scope', '$http','$routeParams',
    function($scope, $http, $routeParams) {
    $http.get('app/data.json').success(function(recipe) {

        var whichItem = $routeParams.itemId;

        $scope.drinkName = recipe[whichItem].name;
        $scope.recipeIngredients = recipe[whichItem].ingredients;
        $scope.recipeDirections = recipe[whichItem].directions;
        $scope.imgUrl = "assets/img/detail.jpg";



        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        } else {
            $scope.prevItem = recipe.length-1;
        }

        if ($routeParams.itemId < recipe.length-1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }

    });
}]);