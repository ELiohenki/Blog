$(document).ready(function () {
    $("[class^='portfolio-'],div[class*=' portfolio-']").click(function () {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = [
            {
                html: '<div><h1>Any HTML <a href="http://example.com">content</a></h1></div>',
                src: 'Content/Images/Expertise/mongodb.png',
                w: 600,
                h: 400
            }
        ];
        var options = {
            index: 0
        };
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
});
//# sourceMappingURL=portfolioPreview.js.map