//fadeIn
$(function () {
    $('body').hide().fadeIn(2000);
})

$(function () {
    $(window).scroll(function () {
        $('.heading').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
});

//smooth scroll
$(function () {
    $('.back-to-top').each(function () {
        var el = scrollableElement('html', 'body');


        $(this).on('click', function (event) {
            event.preventDefault();
            $(el).animate({ scrollTop: 0 }, 250);
        });
    });
    function scrollableElement() {
        var i, len, el, $el, scrollable;
        for (i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i],
                $el = $(el);
            if ($el.scrollTop() > 0) {
                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return [];

    }
});
