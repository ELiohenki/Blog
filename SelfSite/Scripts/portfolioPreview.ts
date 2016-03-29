$(document).ready(function () {
    $(".portfolio-item").click(function () {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var containers = $(this).find(".popup-container");
        var items = containers.toArray().map(x => <PhotoSwipe.Item> { html: $(x).html() });

        var options = {
            index: 0
        };

        var gallery = new PhotoSwipe<{ index: number }>(<HTMLElement>pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
});