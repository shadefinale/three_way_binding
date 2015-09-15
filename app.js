// Create a new app with firebase as the dependancy.
var app = angular.module("app", ["firebase"]);

app.controller("ThoughtController", function($scope, $firebaseArray){
    var THOUGHTS_URL = 'https://scorching-fire-4884.firebaseio.com';
    var ref = new Firebase(THOUGHTS_URL)
    $scope.thoughts = $firebaseArray(ref);

    $scope.currentThinker = "";
    $scope.currentThought = "";

    $scope.agreeThought = function(thought){
      thought.agree++;
      $scope.thoughts.$save(thought);
    }

    $scope.disagreeThought = function(thought){
      thought.disagree++;
      $scope.thoughts.$save(thought);
    }

    $scope.thinkThought = function(){
      if (!$scope.currentThought || $scope.currentThought == ""){
        $scope.currentThought = "of nothing, as always..."
      }

      if (!$scope.currentThinker || $scope.currentThinker == ""){
        $scope.currentThinker = "Nobody's"
      }

      $scope.thoughts.$add({ thought: $scope.currentThought,
                             name: $scope.currentThinker,
                             agree: 0,
                             disagree: 0,})

      $scope.currentThinker = "";
      $scope.currentThought = "";
    }
  }
);
