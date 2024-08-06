// Define the controller for the login functionality
angular.module('jobBoardApp')
  .controller('LoginController', function($scope, $http, $location) {
    $scope.user = {};
    $scope.errorMessage = '';

    $scope.login = function() {
      $http.post('http://localhost:5000/api/auth/login', $scope.user)
        .then(function(response) {
          // Handle successful login, e.g., store token, redirect to dashboard
          localStorage.setItem('token', response.data.token);
          $scope.$parent.isAuthenticated = true;
          localStorage.setItem('user', JSON.stringify(response.data.user));
          $location.path('/dashboard');
        })
        .catch(function(error) {
          // Handle login error
          $scope.errorMessage = 'Invalid email or password';
        });
    };
  });
