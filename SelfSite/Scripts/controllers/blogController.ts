module Selfsite {
    export class BlogController {
        
        posts: Array<Post>;

        constructor() {
            this.init();
        }

        init() {
            this.posts = new Array<Post>();
            for (var i = 0; i < 20; ++i)
                this.posts[i] = this.createPost(i);
        }

        createPost(id: number) : Post {
            var post = new Post();
            post.header = "This is " + id + " post";
            post.body = "<p>SuperPost</p> I like it";
            post.url = "www.google." + id;
            post.id = id;

            return post;
        }

        getPost(id: number): Post {
            return this.posts[id];
        }
    }

    angular
        .module("selfsite")
        .controller("BlogCtrl", BlogController);
}
