describe('Display directive test', function(){
    var $compile, $scope, element, users;

    beforeEach(function(){
        angular.mock.module('app');
        angular.mock.module('compiled-templates');
        angular.mock.inject(function(_$rootScope_, _$compile_){
            $scope = _$rootScope_.$new();
            $compile = _$compile_;
        });

        users = [{"id":1,"first_name":"george","last_name":"bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},
                {"id":2,"first_name":"lucille","last_name":"bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},
                {"id":3,"first_name":"oscar","last_name":"bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"}];
        $scope.users = users;
        
        element = $compile('<user-display-directive users="users"></user-display-directive>')($scope);
        $scope.$digest();                
    });

    it('should compile an element', function(){
        expect(element).toBeDefined();
    });

    it('should have users on the scope', function(){
        expect(element.isolateScope().users).toBeDefined();
    });

    it('should have three users on the scope', function(){
        expect(element.isolateScope().users.length).toEqual(users.length);
    });

    it('the element should have the users in it\'s html', function(){
        expect(element.html()).toContain(users[0].first_name);
        expect(element.html()).toContain(users[1].first_name);
        expect(element.html()).toContain(users[2].first_name);
        expect(element.html()).toContain(users[0].last_name);
        expect(element.html()).toContain(users[1].last_name);
        expect(element.html()).toContain(users[2].last_name);
        expect(element.html()).toContain(users[0].avatar);
        expect(element.html()).toContain(users[1].avatar);
        expect(element.html()).toContain(users[2].avatar);
    });
});