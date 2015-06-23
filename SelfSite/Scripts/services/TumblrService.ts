module Selfsite {
    class tumblrService {
        getPosts;

        constructor($http) {
            this.getPosts = function (offset: number, count: number) : any {
                var url = 'http://api.tumblr.com/v2/blog/eliohenki.tumblr.com/posts/text';
                return $http.get(url).then(response => JSON.parse(response).response.posts.slice(offset, offset + count));
            };
        }
    }

    angular
        .module("selfsite")
        .service("tumblrService", ['$http', tumblrService]);
}