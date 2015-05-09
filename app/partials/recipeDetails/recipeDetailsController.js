recipeControllers.controller('DetailsController', ['$scope', '$http','$routeParams', '$location', '$route',
    function($scope, $http, $routeParams, $location, $route) {
      $scope.imgUrl = "assets/img/cosmo.jpg";
      $scope.drinkName = "\u00A0"
      $scope.json = null;
      $scope.currentPage = $routeParams.itemId
      var lastRoute = $route.current
      $scope.$on('$locationChangeSuccess', function(event){
        if($location.$$path != "/recipeListView") {
          $route.current = lastRoute;
        }
      })
      if(!$scope.json) {
        $http.get('app/data.json').success(function (recipe) {

          $scope.json = recipe;
          $scope.refreshRecipe()

        });
      } else {$scope.refreshRecipe()}
      $scope.refreshRecipe = function(){
        var whichItem = $scope.currentPage;
        $scope.drinkName = $scope.json[whichItem].name;
        $scope.recipeIngredients = $scope.json[whichItem].ingredients;
        $scope.recipeDirections = $scope.json[whichItem].directions;


        if ($scope.currentPage > 0) {
          $scope.prevItem = Number($scope.currentPage) - 1;
        } else {
          $scope.prevItem = $scope.json.length - 1;
        }

        if ($scope.currentPage < $scope.json.length - 1) {
          $scope.nextItem = Number($scope.currentPage) + 1;
        } else {
          $scope.nextItem = 0;
        }
      }
      $scope.recipeBack = function(){
        $location.path("recipeDetailsView/" + $scope.prevItem, false)
        $scope.currentPage = $scope.prevItem
        $scope.refreshRecipe();
      }
      $scope.recipeForward = function(){
        $location.path("recipeDetailsView/" + $scope.nextItem, false)
        $scope.currentPage = $scope.nextItem
        $scope.refreshRecipe();
      }
}]);