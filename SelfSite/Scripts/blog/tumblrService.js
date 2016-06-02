var Selfsite;
(function (Selfsite) {
    var Blog;
    (function (Blog) {
        "use strict";
        var TumblrService = (function () {
            function TumblrService($http, $q, $sce) {
                this.$http = $http;
                this.$q = $q;
                this.$sce = $sce;
            }
            TumblrService.prototype.getPosts = function () {
                var _this = this;
                var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text?callback=angular.callbacks._0';
                var myDataPromise = this.$http.jsonp(url);
                var deferred = this.$q.defer();
                myDataPromise.success(function (result) {
                    var posts = new Array();
                    result["response"]["posts"].forEach(function (postObj) {
                        var post = new Selfsite.Post();
                        post.body = _this.$sce.trustAsHtml(postObj.body);
                        post.header = _this.$sce.trustAsHtml(postObj.title);
                        post.id = postObj.id;
                        post.date = new Date(postObj.date);
                        post.url = postObj.post_url;
                        posts.push(post);
                    });
                    deferred.resolve(posts);
                });
                return deferred.promise;
            };
            TumblrService.prototype.myCallback = function (data) {
            };
            TumblrService.prototype.getFilteredPosts = function (offset, fetch) {
                var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text?callback=myCallback';
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
                        post.date = postObj.date;
                        post.url = postObj.post_url;
                        posts.push(post);
                    });
                    posts = posts.slice(offset, offset + fetch - 1);
                    deferred.resolve(posts);
                });
                return deferred.promise;
            };
            TumblrService.$inject = ["$http", "$q", "$sce"];
            return TumblrService;
        })();
        Blog.TumblrService = TumblrService;
        ;
        angular
            .module("selfsite")
            .service("tumblrService", TumblrService);
    })(Blog = Selfsite.Blog || (Selfsite.Blog = {}));
})(Selfsite || (Selfsite = {}));
