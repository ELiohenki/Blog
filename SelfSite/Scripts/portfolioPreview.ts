$(document).ready(function () {
    $(".portfolio-item").click(function () {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var html = $(this).find(".popup-container").html();
        var items = <PhotoSwipe.Item[]>[
            {
                html: html
            }
        ];

        var options = {
            index: 0
        };

        var gallery = new PhotoSwipe<{ index: number }>(<HTMLElement>pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
});