/// <reference path="../_references.js" />
/// <reference path="../../../selfsite/Scripts/services/tumblrService.js" />

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
        deferred.resolve('SuperPromiseResolved');
    }));

    it('sorts in descending order by default', function() {
        var dataPromise = tumblrServiceObj.getPosts();
        var toReturn = "";
        var millisecondsToWait = 5000;
        var scope = $rootScopeObj.$new();
        var httpPromise = $httpObj.get("http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text");
        httpPromise.then(function (result) {
            toReturn += result;//.response.posts.slice(offset, offset + count);
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

