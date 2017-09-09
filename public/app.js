angular.module('App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: '/templates/list-view.html',
      controller: 'ListController'
    })
    .state({
      name: 'form',
      url: '/add',
      templateUrl: '/templates/form-view.html',
      controller: 'FormController'
    })
    .state({
      name: '404',
      url: '/404',
      template: "<p>Not Found</p>"
    })

  $urlRouterProvider.otherwise('404')
})
.directive('listItem', function() {
  return {
    scope: {
      info: '<'
    },
    template: `
      <div>
        <img
          ng-show="!!$parent.url.image"
          ng-src="/assets/{{$parent.url.image}}.png"/>
        {{$parent.url.url}}
        <br><hr>
      </div>
    `
  }
})
