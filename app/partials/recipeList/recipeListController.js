recipeControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('app/data.json').success(function(data) {
        $scope.recipe = data;
        $scope.recipeOrder = 'name';
        $scope.imgUrl = "assets/img/list.jpg";
    });
}]);


