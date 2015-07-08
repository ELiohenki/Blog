var Selfsite;
(function (Selfsite) {
    var Blog;
    (function (Blog) {
        var BlogController = (function () {
            function BlogController(tumblrService) {
                this.tumblrService = tumblrService;
                this.init();
            }
            BlogController.prototype.init = function () {
                var _this = this;
                this.posts = new Array();
                this.tumblrService.getPosts().then(function (retPosts) {
                    _this.posts = retPosts;
                });
            };
            BlogController.prototype.getPosts = function () {
                return this.posts;
            };
            BlogController.$inject = ["tumblrService"];
            return BlogController;
        })();
        Blog.BlogController = BlogController;
        angular.module("selfsite").controller("blogController", BlogController);
    })(Blog = Selfsite.Blog || (Selfsite.Blog = {}));
})(Selfsite || (Selfsite = {}));
//# sourceMappingURL=BlogController.js.map