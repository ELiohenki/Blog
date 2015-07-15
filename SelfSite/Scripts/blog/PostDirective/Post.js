angular.module("selfsite").directive("post", ["$sce", function ($sce) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/Scripts/Blog/PostDirective/Post.html",
        scope: {
            post: "="
        },
        link: function (scope, element, attrs) {
            scope.post.body = $sce.trustAsHtml(scope.post.body.toString().replace(/img/g, 'img class="img-responsive" '));
            scope.post.header = scope.post.header;
        }
    };
}]);
//# sourceMappingURL=Post.js.map