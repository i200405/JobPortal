angular.module('jobBoardApp')
  .controller('DashboardController', function($scope, $location) {
    // Mock user data; replace with actual data from your login response
    $scope.user = JSON.parse(localStorage.getItem('user')) || {
      name: 'John Doe',
      role: 'employer',
      email: 'john@example.com'
    };

    // Navigate to the job upload page (for employers)
    $scope.goToJobUpload = function() {
      $location.path('/upload-job');
    };

    // View available jobs (for job seekers)
    $scope.viewJobs = function() {
      $location.path('/view-jobs');
    };

    // Update profile (for job seekers)
    $scope.updateProfile = function() {
      $location.path('/update-profile');
    };
  });
