module Selfsite.Blog {
    export class BlogController {
        
        posts: Array<Post>;

        static $inject = ["tumblrService"];

        constructor(protected tumblrService: ITumblrService) {
            this.init();
        }

        init() {
            this.posts = new Array<Post>();
            this.tumblrService.getPosts().then((retPosts) => {
                this.posts = retPosts;
            });
        }

        getPosts() {
            return this.posts;
        }
    }

    angular
        .module("selfsite")
        .controller("blogController", BlogController);
}
