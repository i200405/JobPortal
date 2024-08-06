angular.module('jobBoardApp')
  .controller('UploadJobController', function($scope, $http, $location) {
    $scope.job = {};

    $scope.uploadJob = function() {
      // Retrieve the user data from localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      
      // Check if user data is null
      if (!user || !user.id) {
          console.error('User not found or not logged in');
          $scope.errorMessage = 'You must be logged in to upload a job.';
          console.log('User ID:', user.id);
          return;
      }

      // Print the user ID to the console
      

      // Set the postedBy field
      $scope.job.postedBy = user.id;

      // Proceed with uploading the job
      $http.post('http://localhost:5000/api/jobs', $scope.job)
        .then(function(response) {
          alert('Job posted successfully!');
          $location.path('/dashboard'); // Redirect to dashboard after successful upload
        })
        .catch(function(error) {
          console.error('Error uploading job:', error);
          $scope.errorMessage = 'An error occurred while uploading the job.';
        });
    };
  });
