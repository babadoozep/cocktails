recipeControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('app/data.json').success(function(data) {
        $scope.recipe = data;
        $scope.recipeOrder = 'name';
        $scope.sortBySpirit = 'spirit';
        $scope.imgUrl = "assets/img/cosmo.jpg";


        $scope.spirits = [];
        angular.forEach($scope.recipe, function(value, index){
            if (this.indexOf(value.spirit)===-1) {
                this.push(value.spirit);
            }
        }, $scope.spirits);
    });
}]);


