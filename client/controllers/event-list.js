var app = angular.module('socially');

app.controller('eventsCtrl', ['$scope', '$meteor', function($scope, $meteor) {
  $scope.events = $meteor.collection(Events);

  $scope.selectMe = function(event) {
    $(event.target).addClass('done');
  }
}]);
