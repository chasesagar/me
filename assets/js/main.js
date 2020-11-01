
function EduQuoteTranslate() {
  var x = document.getElementById("eduquote");
  if (x.innerHTML === "आचार्यात् पादमादत्ते पादं शिष्यः स्वमेधया ।<br>सब्रह्मचारिभ्यः पादं पादं कालक्रमेण च ॥") {
    x.innerHTML = "One fourth from the teacher, one fourth from own intelligence,<br>One fourth from classmates, and one fourth only with time";
  } else {
    x.innerHTML = "आचार्यात् पादमादत्ते पादं शिष्यः स्वमेधया ।<br>सब्रह्मचारिभ्यः पादं पादं कालक्रमेण च ॥";
  }
}
(function ($)
  { "use strict"
  
    // x. try adding and removing div .
    // $(document).ready(function() {
    //   $(window).resize(function() {
    //     if ($(this).width()< 767) {
    //       console.log("added");
    //       var text = "";
    //     } else {
    //       console.log("removed");
    //       $("#para").remove();
    //     }
    //   });
    // });


/* 3. MainSlider-1 */
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();


 // recent-active
  

/* 5.  carousel */
    var client_list = $('.app-active');
    if(client_list.length){
      client_list.owlCarousel({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        autoplay:true,
        speed: 3000,
        smartSpeed:2000,
        dots: false,
        margin: 15,
        nav  : false,
        navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        autoplayHoverPause: true,
        responsive : {
          0 : {
            items: 1
          },
          768 : {
            items: 2
          },
          992 : {
            items: 2
          },
          1200:{
            items: 4
          }
        }
      });
    }
})(jQuery);

