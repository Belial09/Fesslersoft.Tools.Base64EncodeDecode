var app = angular.module('base64encoderapp',['ab-base64']);
app.controller('base64encoderappController', [

        '$scope','base64',
        function($scope,base64) {
            
            $scope.encodedString = '';
            $scope.decodedString = '';
            $scope.textChangedEncode = function() {$scope.encodedString = base64.encode($scope.resultEncode);};
            $scope.textChangedDecode = function() {$scope.decodedString = base64.decode($scope.resultDecode);};
            
    }
]);