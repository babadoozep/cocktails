var cocktails = angular.module('cocktails', [
    'ngRoute',
    'recipeControllers'
]);
cocktails.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/recipeListView',{
            templateUrl: 'app/partials/recipeList/recipeListView.html',
            controller: 'ListController'
        }).
        when('/recipeDetailsView/:itemId',{
            templateUrl: 'app/partials/recipeDetails/recipeDetailsView.html',
            controller: 'DetailsController'
        }).
        otherwise({
            redirectTo: '/recipeListView'
        });
}]);