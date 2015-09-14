app.directive('thought', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'thought.html'
  };
});
