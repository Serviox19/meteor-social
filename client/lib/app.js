var app = angular.module('socially', ['angular-meteor', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('events', {
      url: "/events",
      templateUrl: "client/views/events-list.ng.html",
      controller: "eventsCtrl"
    })
    .state('eventDetails', {
      url: "/events/:eventId",
      templateUrl: "client/views/event-details.ng.html",
      controller: "eventsDetailsCtrl"
    })

    $locationProvider.html5Mode(true);
}]);
