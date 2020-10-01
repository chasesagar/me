(function ($)
  { "use strict"

/* 2. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

/* 7.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 50) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    $(window).on('scroll', function () {
      var wid = $(window).width();
      if (wid > 767) {
        $("#mob-para").removeClass("mobile-para");
        console.log("added para");
      } else {
        $("#mob-para").addClass("mobile-para");
        console.log("removed para");
      }
    });


})(jQuery);
