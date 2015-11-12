$(document).ready(function () {
        $('a#search').click(function (e) {
            $(this).toggleClass('active');
            $('#search_form').toggle();
                
            e.stopPropagation();
        });

        $('#search_form').click(function (e) {
            e.stopPropagation();
        });

        $('body').click(function () {
            var link = $('a#search');
            if (link.hasClass('active')) {
                link.click();
            }
        });
    });
