$(document).ready(function () {
    $(".expertise-mongodb").click(() => {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = [
            {
                src: 'Content/Images/Expertise/mongodb.png',
                w: 600,
                h: 400
            }
        ];

        var options = {
            index: 0
        };

        var gallery = new PhotoSwipe<{ index: number }>(<HTMLElement>pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
});