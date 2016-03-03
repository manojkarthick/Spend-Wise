function ExpenseCtrl($scope,$firebaseArray) {
   
  var messagesRef = new Firebase("https://glaring-heat-5001.firebaseio.com/messages/");

  $scope.expenses = $firebaseArray(messagesRef);

  $scope.getTotalExpenses = function () {
    return $scope.expenses.length;
  };
  
  
  $scope.addExpense = function () {
    $scope.expenses.$add(
      {
        name:$scope.expName, 
        amount:$scope.expAmount,
        location:$scope.expLocation, 
        category:$scope.expCategory, 
        date:$scope.expDate
      });
    $scope.expName = '';
    $scope.expAmount = '';
    $scope.expLocation = '';
    $scope.expCategory = '';
    $scope.expDate = '';
  };  
};

angular.module('app',['firebase']).controller("ExpenseCtrl", ["$scope", "$firebaseArray", ExpenseCtrl]);