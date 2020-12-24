$(document).ready(function(){
  $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/section-four-slider-prev.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/icons/section-four-slider-next.png"></button>'
    });

    $('ul.tabs').on('click', 'li:not(.tab_active)', function() {
        $(this)
          .addClass('tab_active').siblings().removeClass('tab_active')
          .closest('div.container').find('div.cards').removeClass('cards_active').eq($(this).index()).addClass('cards_active');
    });


    function toggleSlide(item) {
        $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.card__inner').eq(i).toggleClass('card__inner_active')
        })
        })
    };

    toggleSlide('.card__more');
    toggleSlide('.card__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order , #successfully').fadeOut();
    });

    $('.button_card').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__subtitle').text($('.card__header').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });
});
