// Create a new app with firebase as the dependancy.
var app = angular.module("app", ["firebase"]);

app.controller("ThoughtController", function($scope, $firebaseArray){
    var THOUGHTS_URL = 'https://scorching-fire-4884.firebaseio.com';
    var ref = new Firebase(THOUGHTS_URL)
    $scope.thoughts = $firebaseArray(ref);

    $scope.currentThinker = "";
    $scope.currentThought = "";

    $scope.thinkThought = function(){
      $scope.thoughts.$add({ thought: $scope.currentThought,
                        name: $scope.currentThinker })
    }
  }
);
