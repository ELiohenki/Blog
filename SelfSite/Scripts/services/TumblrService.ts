var tumblrService = function ($http) {

    var getPosts = function (): any {
        var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text';
        var myDataPromise = $http.get(url);
        return myDataPromise;
    };

    return { getPosts: getPosts};
};

angular
    .module("selfsite")
    .service("tumblrService", ['$http', '$timeout', tumblrService]);

var sampleSvc = function($window, modalSvc) {
    this.showDialog = function(message, title) {
        if (title) {
            modalSvc.showModalDialog({
                title: title,
                message: message
            });
        } else {
            $window.alert(message);
        }
    };
};

angular.module('services')
    .service('sampleSvc', ['$window', 'modalSvc', sampleSvc]);