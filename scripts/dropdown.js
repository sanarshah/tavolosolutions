$(window).ready(function(){
  $(".navbar img").click(function(){
    var open=$(this).attr("src").indexOf("close")>-1;
    var pre=$(this).attr("src").indexOf("..")?"":"../";
    $(this).attr("src",open?`${pre}res/menu.svg`:`${pre}res/close.svg`);
    var target=open?0:$(".nav-menu").outerHeight();
    $(".nav-menu-wrapper").animate({height:target},200,null);
  });

  setTimeout(() => $("div.landing > div").css("opacity","1"),250);

  $(window).scroll(function(){
    let bottom_of_window = $(window).scrollTop() + $(window).outerHeight();
    let offset=$(".content").offset().top;
    $('.service').each(function(){
      var bottom_of_object = $(this).offset().top + 100;
      if(bottom_of_window>bottom_of_object){
        $(this).animate({'opacity':'1'},500);
      }
    });
  });

});
