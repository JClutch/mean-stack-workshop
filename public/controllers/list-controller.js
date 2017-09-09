angular.module('App')
.controller('ListController', function($scope, Links) {
  Links.getUrls()
    .then(function(urls){
      console.log(urls);
      $scope.urls = urls
    })
})
