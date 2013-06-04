'use strict';

angular.module('angularApp')

    .controller('Tasks', [
        '$scope', function($scope) {
            $scope.tasks = [
                {
                    name: 'Go to the toilet',
                    details: 'Here is some data how nice!'
                }, {
                    name: 'Go to the toilet outside the house',
                    details: 'Here is some data how nice!'
                }, {
                    name: 'Build a building out of sand',
                    details: 'Moar data!'
                }
            ];
        }
    ])

    .filter('clean', function () {
        return function (input, seperator) {
            var filter = new RegExp('[^a-z0-9'+(seperator || '-')+']', 'ig');

            return input.toLowerCase()
                .replace(/\s+/g, (seperator || '-'))
                .replace(filter, '');
        }
    })

    .controller('Edit', function ($scope, $routeParams) {
        $scope.task = $scope.tasks[$routeParams.index];
        $scope.index = $routeParams.index;
    })

    .controller('Add', function ($scope) {
        var length = $scope.tasks.push({
            name: 'New Person',
            details: new Date()
        });
        $scope.task = $scope.tasks[length - 1];
        $scope.index = length -1;
    })

    .controller('Delete', function ($scope, $routeParams, $location) {
        if (confirm("Really delete?")) {
            $scope.tasks.splice($routeParams.index,1);
            $location.path('/').replace();
        }
    })

    .controller('Filter', function ($scope) {
        $scope.text = 'Hello world this is te$%@!!%^&*$#%^$xt!';
    })

    .directive('click', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', function  () {
                    scope.$eval(attrs.click);
                });
            }
        }
    })

    .directive('clicker', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<button ng-transclude></button>',
            link: function (scope, element, attrs) {
                element.bind('click', function  () {
                    scope.$eval(attrs.onClick);
                });
            }
        }
    })

    .controller('Directive', function ($scope) {
        $scope.message = "Hello";
        $scope.handler = function () {
            alert($scope.message);
        }
    });