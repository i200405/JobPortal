// Define the main AngularJS module and configure routing
angular.module('jobBoardApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'login/login.component.html',
        controller: 'LoginController'
      })
      .when('/signup', {
        templateUrl: 'signup/signup.component.html',
        controller: 'SignupController'
      })
      .when('/dashboard', {
        templateUrl: 'dashboard/dashboard.component.html',
        controller: 'DashboardController'
      })
      .when('/upload-job', {
        templateUrl: 'upload/upload-job.html',
        controller: 'UploadJobController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
