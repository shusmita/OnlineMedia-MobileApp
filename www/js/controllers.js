angular.module('starter.controllers', ['ngSanitize'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, LoginService) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    LoginService.loginUser($scope.loginData.username, $scope.loginData.password).success(function(data) {
            console.log('Doing login', $scope.loginData);
            //$state.go('tab.dash');
    }),
    

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PostIndexCtrl', function($scope, $stateParams, PostService) {

    PostService.getCatItem($stateParams.catid).then(function(resp) {
      $scope.posts = resp.posts;
      $scope.portfoliocat = resp.category.title;
      
     console.log(resp.posts);
    
     
    })
  
})



.controller('PostDetailCtrl', function($scope, $stateParams, PostService) {

    PostService.getItem($stateParams.postid).then(function(resp) {
      $scope.title = resp.post.title;
      $scope.postcontent = resp.post.content;
      
      console.log(resp.post);
      
      //$scope._catid = resp.item.category.alias;

    
    })
  
});
