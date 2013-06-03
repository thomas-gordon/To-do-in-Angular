'use strict';

describe('Controller: Tasks', function () {

    // load the controller's module
    beforeEach(module('angularApp'));

    var Tasks,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        Tasks = $controller('Tasks', {
            $scope: scope
        });
    }));

    it('should attach a list of onload tasks to the scope', function () {
        expect(scope.tasks.length).toBe(3);
    });

});