$(document).ready(() => {
    var $container = (<isotope.isotope>$(".expretise-grid")).isotope({
        itemSelector: ".expertise-item",
        layoutMode: 'fitRows',
        getSortData: {
            name: ".name",
            date: ".date",
            category: "[data-category]",
            weight(itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});