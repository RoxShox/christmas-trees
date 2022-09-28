(function ($) {
    $(document).ready(function () {

        // Catalog filter
        $('.filter__row-title').click(function(e){
            $(this).toggleClass('_active');
            $(this).next().slideToggle(200);
        })

        // Product gallery
        if ($('.product__gallery .swiper-container').length > 0) {
            var main_slider = new Swiper('.product__gallery .swiper-container', {
                slidesPerView: 1,
                pagination: {
                    el: ".product__gallery-pagination",
                },
            });
        }

        // Select
        $(document).on('click', '.select__result', function( e ){
           e.preventDefault();

           $(this).toggleClass('_active');
           $(this).next().slideToggle(200);

        });

        $(document).on("click", function(e) {
            if (!$(e.target).is(".select *")) {
                $('.select__list').slideUp(200);
                $('.select__result').removeClass('_active');
            };
        });

        $(document).on('click', '.select__item', function( e ){
            e.preventDefault();

            let select = $(this).parents('.select'),
                value = $(this).data('value'),
                text = $(this).text();

            select.find('.select__result').toggleClass('_active');
            select.find('.select__result span').text(text);
            select.find('.select__list').slideToggle(200);
            select.find('input[type="hidden"]').val(value);

        });

        // popup
        $('.open-popup').click(function(e){
            e.preventDefault();

            let popup = $(this).data('popup');
            $('body').css({'overflow':'hidden'});
            $('.popup').fadeOut(200);

            $('#'+popup+'').fadeIn(200);

        });

        $('.popup__close, .popup__bg, .close--popup, .popup-succes__close').click(function(e){
            e.preventDefault();

            $('.popup').fadeOut(200);
            $('body').css({'overflow':'auto'});
        });

        // Filter price
        $('.filter__price-slider').slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
        });

        /*
        // Price slider
        $('.filter__slider').slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
        });

        if ($('.product-gallery').length > 0) {
            var main_slider = new Swiper('.product-gallery', {
                slidesPerView: 1,
                pagination: {
                    el: ".product-gallery__buttons",
                },
            });
        }

        $('.faq__item-head').click(function (e){
            e.preventDefault();

            $(this).toggleClass('_active');
            $(this).next().slideToggle();

        });

        $(document).on('click', '._minus', function (){
            let block = $(this).parents('.quanity, .catalog-item__quanity'),
                val = parseInt(block.find('input').val());

            val = (val <= 1 ? 1 : val + 1);
            block.find('input').val(1);
        });

        $(document).on('click', '._plus', function (){
            let block = $(this).parents('.quanity, .catalog-item__quanity'),
                val = parseInt(block.find('input').val());

            block.find('input').val(val + 1);
        });

        $('.order__row').on('focus', 'input:not([type="checkbox"])', function (){
            $(this).next().addClass('_focus');
        });

        $('.order__row').on('focusout', 'input', function (){
            let block = $(this).parents('.order__row');
            if ($(this).val() == ''){
                $(this).next().removeClass('_focus');
            }
        });

        $('.filter__header').click(function (e){
            e.preventDefault();

            $(this).parent().toggleClass('_active');
            $(this).next().slideToggle();

        });

        $('.filter-header__button').click(function (e){
            e.preventDefault();

            let filter = $(this).parents('.catalog__filter');
            if (filter.hasClass('_active')){
                filter.removeClass('_active');
                filter.find('.filter__gray').fadeOut(200);
            } else {
                filter.addClass('_active');
                filter.find('.filter__gray').fadeIn(200);
            }

        });*/

        /*if ($('.hhelp__slider').length > 0) {
            var main_slider = new Swiper('.hhelp__slider .swiper-container', {
                navigation: {
                    prevEl: '.hhelp__buttons .swiper-button-prev',
                    nextEl: '.hhelp__buttons .swiper-button-next',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }
            });
        }

        if ($('.hlogos__slider').length > 0){
            var logos_slider = new Swiper('.hlogos__slider .swiper-container', {
                navigation: {
                    prevEl: '.hlogos__buttons .swiper-button-prev',
                    nextEl: '.hlogos__buttons .swiper-button-next',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }
            });
        }*/

    });
})(jQuery);