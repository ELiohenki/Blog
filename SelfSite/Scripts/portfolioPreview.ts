$(document).ready(function () {
    $("[class^='portfolio-'],div[class*=' portfolio-']").click(() => {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = <PhotoSwipe.Item[]>[
            {
                html: '<div><h1>Any HTML <a href="http://example.com">content</a></h1></div>'
            }
        ];

        var options = {
            index: 0
        };

        var gallery = new PhotoSwipe<{ index: number }>(<HTMLElement>pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
});