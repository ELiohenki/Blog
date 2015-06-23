var Selfsite;
(function (Selfsite) {
    var tumblrService = (function () {
        function tumblrService($http) {
            this.getPosts = function (offset, count) {
                var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text';
                return $http.get(url).then(function (response) { return JSON.parse(response).response.posts.slice(offset, offset + count); });
            };
        }
        return tumblrService;
    })();
    angular.module("selfsite").service("tumblrService", ['$http', tumblrService]);
})(Selfsite || (Selfsite = {}));
//# sourceMappingURL=TumblrService.js.map