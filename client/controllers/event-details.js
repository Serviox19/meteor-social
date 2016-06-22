var app = angular.module('socially');

app.controller('eventsDetailsCtrl', ['$scope', '$stateParams', '$meteor', function($scope, $stateParams, $meteor) {

    $scope.event = $meteor.object(Events, $stateParams.eventId, false);

    $scope.save = function() {
      $scope.event.save().then(function(numberOfDocs) {
        console.log('Success', numberOfDocs);
      }, function(error) {
        console.log('error', error);
      });
    };

    $scope.reset = function() {
      $scope.event.reset();
    };

  }]);
