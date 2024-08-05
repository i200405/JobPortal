// Define the AngularJS module and controller
angular.module('jobBoardApp')
  .controller('HomeController', function($scope, $http) {
    $scope.jobs = [];

    // Function to get jobs from the backend
    $scope.getJobs = function() {
      $http.get('/api/jobs')
        .then(function(response) {
          $scope.jobs = response.data;
        }, function(error) {
          console.error('Error fetching jobs:', error);
        });
    };

    // Initialize by getting the jobs
    $scope.getJobs();
  });
