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
    var tumblrServiceObj, $httpObj, deferred;

    beforeEach(function () {
        module(function ($provide, $q) {
            $provide.service('$http', function () {
                var spy = jasmine.createSpy('get');
                spy = spy.andCallFake(function (num) {
                    return new function () {
                        var then = function(asd) {};
                    };
                });;
                this.get = spy;
            });
            deferred = $q.defer();
        });
        module('selfsite');
    });

    beforeEach(inject(function ($http, tumblrService) {
        tumblrServiceObj = $http;
        tumblrServiceObj = tumblrService;
    }));

    it('sorts in descending order by default', function () {
        var data = tumblrServiceObj.getPosts(0, 10);
        throw new EventException(data.toString());
        expect(data).toNotEqual(null);
    });
});

