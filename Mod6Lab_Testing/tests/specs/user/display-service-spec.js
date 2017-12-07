describe('User Service Tests', function(){

    var $rootScope, $httpBackend, $q, userService;

    beforeEach(function(){
        angular.mock.module('app');

        angular.mock.inject(function(_$rootScope_, _$httpBackend_, _$q_, _userService_){
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            $q = _$q_;
            userService = _userService_;
        });
    });

    /*---------------------------------------------------------------------------------------------------------------
        Test existence of objects
    ---------------------------------------------------------------------------------------------------------------*/
    it('userService should be defined', function(){
        expect(userService).toBeDefined();
    });

    it('userService.getUsers should be defined', function(){
        expect(userService.getUsers).toBeDefined();
    });

    /*---------------------------------------------------------------------------------------------------------------
        Test functionality
    ---------------------------------------------------------------------------------------------------------------*/
    it('getUsers should return data', function(){
        // dummy data
        var mockData = {"page":1,"per_page":3,"total":12,"total_pages":4,"data":[
            {"id":1,"first_name":"george","last_name":"bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},
            {"id":2,"first_name":"lucille","last_name":"bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},
            {"id":3,"first_name":"oscar","last_name":"bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"}]};

        // mock response from server
        $httpBackend.when('GET', 'https://reqres.in/api/users').respond(200, {data: mockData});

        // call method
        var resolvedValue;
        var promise = userService.getUsers();
        promise.then(function(value){
            resolvedValue = value;
        });

        // end call (sync)
        $httpBackend.flush();

        // assert
        expect(resolvedValue).toEqual(mockData);
    });
});