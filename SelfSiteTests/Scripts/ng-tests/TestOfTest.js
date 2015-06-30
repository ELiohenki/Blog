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
    var tumblrServiceObj, $httpObj, deferred, $rootScope;

    beforeEach(function () {
        module(function ($provide) {
            $provide.service('$http', function () {
                var spy = jasmine.createSpy('get');
                this.get = spy;
            });
        });
        module('selfsite');
    });

    beforeEach(inject(function ($http, tumblrService, $q) {
        $httpObj = $http;
        tumblrServiceObj = tumblrService;
        deferred = $q.defer();
        deferred.resolve({ superValue111: "456456", superValue222: "123123" });
    }));

    it('sorts in descending order by default', function() {
        var dataPromise = tumblrServiceObj.getPosts();
        var toReturn;
        dataPromise.then(function(result) {
            toReturn = JSON.parse(result).response.posts.slice(offset, offset + count);
        });
        var millisecondsToWait = 5000;
        //this.$rootScope.$apply();
        setTimeout(function (toReturn) {
            //this.$rootScope.$apply();
                throw new Error(toReturn.toString());
                expect(toReturn).toNotEqual(null);
        }(toReturn), millisecondsToWait);
        //this.$rootScope.$apply();
        
    });
});

