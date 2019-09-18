





$(document).ready(function () {


// // variables
// var $header_top = $('.header-top');
// var $nav = $('nav');

// // toggle menu
// $header_top.find('a').on('click', function() {
//   $(this).parent().toggleClass('open-menu');
// });

  $(function() {
    $('.acc-btn').click(function() {
      $('.acc-content').slideUp('normal');
      $('.acc-btn').removeClass('acc-active');
      if ($(this).next().is(':visible') == true) {
        $('.acc-btn').removeClass('active');
      }
      if ($(this).next().is(':hidden') == true) {
        $(this).next().slideDown('normal');
        $(this).addClass('acc-active');
      }
      $('.acc-content').one().removeClass('show');
    });

    $('.acc-content').hide();
    $('.show').show();
  });

// let priceBlock = $('.price_block');
// let topBlock =  priceBlock.offset().top;
// $(window).bind('scroll', function() {
// let windowTop = $(this).scrollTop();
// if(windowTop > topBlock ) {
//   $('#map_wrap').html('<div id="map" style="width: 100%; height: 470px"></div>');
// $(window).unbind('scroll');
// }
// });

 $(".owl-carousel").owlCarousel({
loop                : true,
margin              : 50,
stagePadding        : 50,
autoplay            : true,
smartSpeed          : 1000,
//  autoplayTimeout : 1000,
autoplayHoverPause  : true,
items: 4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
600:{
            items:2
        },
        800:{
            items:3
        },
        1080:{
            items:4
        }
    }
 });



  //Ajax push mesege http://api.jquery.com/jquery.ajax/
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $(".form_footer .success").addClass("active");
      setTimeout(function () {
        // Done Functions
        $(".form_footer .success").removeClass("active");
        th.trigger("reset");
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
  //castom code


AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 1000, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/Map_symbol_location_02.png',
            // Размеры метки.
            iconImageSize: [64, 64],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/Map_symbol_location_02.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});












});