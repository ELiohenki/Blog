module Selfsite.Blog {
    "use strict";

    export interface ITumblrService {
        getPosts(): ng.IPromise<Post[]>;
        getFilteredPosts(offset: number, fetch: number): ng.IPromise<Post[]>;
    }

    export class TumblrService implements ITumblrService
    {
        static $inject = ["$http", "$q", "$sce"];

        constructor(
            protected $http: ng.IHttpService,
            protected $q: ng.IQService,
            protected $sce: ng.ISCEService) {
        }

        getPosts(): ng.IPromise<Post[]> {
            var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text?callback=angular.callbacks._0';
            var myDataPromise = this.$http.jsonp(url);
            var deferred = this.$q.defer();
            myDataPromise.success((result) => {
                var posts: Post[] = new Array<Post>();
                result["response"]["posts"].forEach((postObj) => {
                    var post = new Post();
                    post.body = this.$sce.trustAsHtml(postObj.body);
                    post.header = this.$sce.trustAsHtml(postObj.title);
                    post.id = postObj.id;
                    post.time = postObj.date;
                    posts.push(post);
                });
                deferred.resolve(posts);
            });
            return deferred.promise;
        }

        myCallback(data: any)
        {
        }

        getFilteredPosts(offset: number, fetch: number): ng.IPromise<Post[]> {
            var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text?callback=myCallback';
            var myDataPromise = this.$http.get(url);
            var deferred = this.$q.defer();
            myDataPromise.success((result) => {
                var retObject = JSON.parse(result.toString());
                var posts: Post[] = new Array<Post>();
                retObject["response"]["posts"].forEach((postObj) => {
                    var post = new Post();
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
        }
    };

    angular
        .module("selfsite")
        .service("tumblrService", TumblrService);
}
