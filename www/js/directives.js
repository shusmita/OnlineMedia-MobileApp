angular.module('starter.directives', [])

.directive('imageThumb', function($rootScope, $sce, $compile) {
  
  return {
    restrict: 'AE',
    replace: true,
    scope: true,
    template: '<span class="image-thumb"><img src="{{imgsrc}}" height="40"/></span>',
    link: function($scope, $element, $attr) {
      var img = angular.element($scope.post.content);
      $scope.img = img.find("img");
      $scope.imgsrc =$scope.img[0].src;
      //console.log($scope.imgsrc);
    }
    
  }
});

