$(document).ready(() => {
    var $container = (<isotope.isotope>$(".expretise-grid")).isotope({
        itemSelector: ".expertise-item",
        layoutMode: 'fitRows',
        getSortData: {
            name: ".name",
            date: ".date",
            category: "[data-category]"
        }
    });
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});