describe('User display controller', function(){
    var $rootScope, $q, $controller, userService, mockDeffered, displayController, $scope;

    beforeEach(function(){
        angular.mock.module('app');
        angular.mock.inject(function(_$rootScope_, _$controller_, _$q_, _userService_){
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            $q = _$q_;
            userService = _userService_;
            $scope = $rootScope.$new();

            // Spy on userService.getUsers() method and return mockDeferred.promise instead of the actual promise
            mockDeferred = $q.defer();            
            spyOn(userService, 'getUsers').and.returnValue(mockDeferred.promise);

            // Create an instance of our controller
            displayController = $controller('userDisplayController', {$scope: $scope, userService: userService});
        });
    });

    /*---------------------------------------------------------------------------------------------------------------
        Test existence of objects
    ---------------------------------------------------------------------------------------------------------------*/
    it('should have displayController defined', function(){
        expect(displayController).toBeDefined();
    });

    it('should have displayController.executeSearch defined', function(){
        expect($scope.executeSearch).toBeDefined();
    });

    /*---------------------------------------------------------------------------------------------------------------
        Test controller functionality
    ---------------------------------------------------------------------------------------------------------------*/
    describe('$scope.execute search should call userService.getUsers and return a result', function(){
        it('should call userService.getUsers and set $scope.users', function(){
            // Dummy data for resolving mockDeferred.promise
            var mockUsers = ['user 1', 'user 2'];

            // Run the search method
            $scope.executeSearch();

            // The spy will kick in and return our mockDeferred.promise instead of the actual userService promise. 
            // We will resolve that promise with the mockUsers data above
            mockDeferred.resolve(mockUsers);
            $rootScope.$apply();

            // expect the controller to have called userService.getUsers()
            expect(userService.getUsers).toHaveBeenCalled();

            // expect the controller to have set the $scope.users property to that of the mockUsers data we resolved in our mock promise
            expect($scope.users).toEqual(mockUsers);
        });
    });
});


