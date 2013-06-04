'use strict';

angular.module('angularApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/task/:index', {
                templateUrl: 'views/edit.html',
                controller: 'Edit'
            })
            .when('/add', {
                templateUrl: 'views/edit.html',
                controller: 'Add'
            })
            .when('/delete/:index', {
                templateUrl: 'views/edit.html',
                controller: 'Delete'
            })
            .when('/', {
                templateUrl: 'views/list.html'
            })
            .when('/filter', {
                templateUrl: 'views/filters.html',
                controller: 'Filter'
            });
    });
