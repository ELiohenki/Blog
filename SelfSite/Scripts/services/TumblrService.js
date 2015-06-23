var tumblrService = function ($http) {
    this.getPosts = function (offset, count) {
        var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text';
        return $http.get(url).then(function (response) { return JSON.parse(response).response.posts.slice(offset, offset + count); });
    };
};
angular.module("selfsite").service("tumblrService", ['$http', tumblrService]);
var sampleSvc = function ($window, modalSvc) {
    this.showDialog = function (message, title) {
        if (title) {
            modalSvc.showModalDialog({
                title: title,
                message: message
            });
        }
        else {
            $window.alert(message);
        }
    };
};
angular.module('services').service('sampleSvc', ['$window', 'modalSvc', sampleSvc]);
//# sourceMappingURL=tumblrService.js.map