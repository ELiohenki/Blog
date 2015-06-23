var tumblrService = function($http) {
    this.getPosts = (offset: number, count: number): any => {
        var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text';
        return $http.get(url).then(response => JSON.parse(response).response.posts.slice(offset, offset + count));
    };
};

angular
    .module("selfsite")
    .service("tumblrService", ['$http', tumblrService]);

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