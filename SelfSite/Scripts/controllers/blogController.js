var Selfsite;
(function (Selfsite) {
    var BlogController = (function () {
        function BlogController() {
            this.init();
        }
        BlogController.prototype.init = function () {
            this.posts = new Array();
            for (var i = 0; i < 20; ++i)
                this.posts[i] = this.createPost(i);
        };
        BlogController.prototype.createPost = function (id) {
            var post = new Selfsite.Post();
            post.header = "This is " + id + " post";
            post.body = "<p>SuperPost</p> I like it";
            post.url = "www.google." + id;
            post.id = id;
            return post;
        };
        BlogController.prototype.getPost = function (id) {
            return this.posts[id];
        };
        return BlogController;
    })();
    Selfsite.BlogController = BlogController;
    angular.module("selfsite").controller("BlogCtrl", BlogController);
})(Selfsite || (Selfsite = {}));
//# sourceMappingURL=BlogController.js.map