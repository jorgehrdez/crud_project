'use strict'

angular
    .module('app', [])
    .controller('ContactInfo', ContactInfo);

function ContactInfo($scope, $timeout) {

    var url = 'https://reqres.in/api/users?page=2';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            $timeout(function () {
                $scope.contacts = json.data;;
            }, 0);
        })
}