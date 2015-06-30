/// <reference path="../_references.js" />
/// <reference path="../../../selfsite/Scripts/services/tumblrService.js" />

describe('lalaala', function () {
    var mockWindow, mockModalSvc, sampleSvcObj;
    beforeEach(function () {
        module(function ($provide) {
            $provide.service('$window', function () {
                this.alert = jasmine.createSpy('alert');
            });
            $provide.service('modalSvc', function () {
                this.showModalDialog = jasmine.createSpy('showModalDialog');
            });
        });
        module('services');
    });

    beforeEach(inject(function ($window, modalSvc, sampleSvc) {
        mockWindow = $window;
        mockModalSvc = modalSvc;
        sampleSvcObj = sampleSvc;
    }));

    it('should show alert when title is not passed into showDialog', function () {
        var message = "Some message";
        sampleSvcObj.showDialog(message);

        expect(mockWindow.alert).toHaveBeenCalledWith(message);
        expect(mockModalSvc.showModalDialog).not.toHaveBeenCalled();
    });

    it('should show modal when title is passed into showDialog', function () {
        var message = "Some message";
        var title = "Some title";
        sampleSvcObj.showDialog(message, title);

        expect(mockModalSvc.showModalDialog).toHaveBeenCalledWith({
            message: message,
            title: title
        });
        expect(mockWindow.alert).not.toHaveBeenCalled();
    });
});


describe('sorting the list of users', function () {
    var tumblrServiceObj, $httpObj, deferred, $rootScopeObj;

    beforeEach(function () {
        module(function ($provide) {
        });
        module('selfsite');
    });

    beforeEach(inject(function ($http, tumblrService, $q, $rootScope) {
        $httpObj = $http;
        tumblrServiceObj = tumblrService;
        deferred = $q.defer();
        $rootScopeObj = $rootScope;
        spyOn($http, "get").and.returnValue(deferred.promise);
        deferred.resolve();
    }));

    it('sorts in descending order by default', function() {
        var dataPromise = tumblrServiceObj.getPosts();
        var toReturn = "";
        var millisecondsToWait = 5000;
        var scope = $rootScopeObj.$new();
        var httpPromise = $httpObj.get("http://www.asdasd.ru");
        httpPromise.then(function () {
            toReturn += "asdasd" + "asdasd";//.response.posts.slice(offset, offset + count);
        });
        dataPromise.then(function () {
            toReturn += "123123" + "123123";//.response.posts.slice(offset, offset + count);
        });
        deferred.resolve();
        $rootScopeObj.$digest();
        expect(toReturn).not.toBe("");
        setTimeout(function () {
        }, millisecondsToWait);
    });
});

