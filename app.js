Events = new Mongo.Collection('events');

if(Meteor.isClient) {
  var app = angular.module('socially', ['angular-meteor', 'ui.router']);

  app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/parties');

    $stateProvider
      .state('events', {
        url: "/events",
        templateUrl: "events-list.ng.html",
        controller: "eventsCtrl"
      })
      .state('eventDetails', {
        url: "/events/:eventId",
        templateUrl: "events-details.ng.html",
        controller: "eventsDetailsCtrl"
      })

      $locationProvider.html5Mode(true);
  }]);

  app.controller('eventsCtrl', ['$scope', '$meteor', function($scope, $meteor) {
    $scope.events = $meteor.collection(Events);

    $scope.selectMe = function(event) {
      $(event.target).addClass('done');
    }
  }]);

  app.controller('eventsDetailsCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

    $scope.eventId = $stateParams.eventId;

  }]);

}// end is Client if



if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Events.find().count() === 0) {

      var events = [
        {'name': 'EDC New York',
          'description': 'Wild ass Rave party in Times Square!'},
        {'name': 'Cochella',
          'description': 'Music festival with many different artists, across different venues.'},
        {'name': 'Summer Sixteen MSG',
          'description': 'Drake concert at MSG for his Summer Sixteen Tour'}
      ];

      for (var i = 0; i < events.length; i++) {
        Events.insert({name: events[i].name, description: events[i].description});
      }
    }
  });
}
