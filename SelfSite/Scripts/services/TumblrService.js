var Selfsite;
(function (Selfsite) {
    var Tumblr;
    (function (Tumblr) {
        "use strict";
        var TumblrService = (function () {
            function TumblrService($http, $q) {
                this.$http = $http;
                this.$q = $q;
            }
            TumblrService.prototype.getPosts = function () {
                var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text';
                var myDataPromise = this.$http.get(url);
                var deferred = this.$q.defer();
                myDataPromise.success(function (result) {
                    var retObject = JSON.parse(result.toString());
                    var posts = new Array();
                    retObject["response"]["posts"].forEach(function (postObj) {
                        var post = new Selfsite.Post();
                        post.body = postObj.trail.content;
                        posts.push(post);
                    });
                    deferred.resolve(posts);
                });
                return deferred.promise;
            };
            TumblrService.prototype.getFilteredPosts = function (offset, fetch) {
                var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text';
                var myDataPromise = this.$http.get(url);
                var deferred = this.$q.defer();
                myDataPromise.success(function (result) {
                    var retObject = JSON.parse(result.toString());
                    var posts = new Array();
                    retObject["response"]["posts"].forEach(function (postObj) {
                        var post = new Selfsite.Post();
                        post.body = postObj.body;
                        post.header = postObj.title;
                        post.id = postObj.id;
                        post.time = postObj.date;
                        post.url = postObj.post_url;
                        posts.push(post);
                    });
                    posts = posts.slice(offset, offset + fetch - 1);
                    deferred.resolve(posts);
                });
                return deferred.promise;
            };
            TumblrService.$inject = ["$http", "$q"];
            return TumblrService;
        })();
        Tumblr.TumblrService = TumblrService;
        ;
        angular.module("selfsite").service("tumblrService", TumblrService);
    })(Tumblr = Selfsite.Tumblr || (Selfsite.Tumblr = {}));
})(Selfsite || (Selfsite = {}));
//# sourceMappingURL=tumblrService.js.map