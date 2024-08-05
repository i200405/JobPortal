angular.module('jobBoardApp')
  .controller('SignupController', function($scope, $http, $location) {
    $scope.user = {};
    $scope.errorMessage = '';

    $scope.signup = function() {
      // Check if password and confirm password match
      if ($scope.user.password !== $scope.user.confirmPassword) {
        $scope.errorMessage = 'Passwords do not match';
        return;
      }

      // Send POST request to the server
      $http.post('http://localhost:5000/api/auth/register', $scope.user)
        .then(function(response) {
          // Handle successful signup
          alert('Signup successful! Please login to continue.');
          $location.path('/login'); // Redirect to login page after successful signup
        })
        .catch(function(error) {
          // Handle signup error
          console.error('Signup error:', error);
          $scope.errorMessage = 'An error occurred during signup. Please try again.';
        });
    };
  });
