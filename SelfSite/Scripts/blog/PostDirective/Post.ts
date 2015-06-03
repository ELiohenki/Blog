angular
    .module("selfsite")
    .directive("post", [
        function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "/Scripts/Blog/PostDirective/Post.html",
                scope: {
                    post: "="
                },
                link: function (scope, element, attrs) {
                    scope.header = scope.post.header;
                    scope.body = scope.post.body;
                }
            };
        }
    ]);
