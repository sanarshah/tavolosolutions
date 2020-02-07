$(window).ready(function(){
  $(".navbar img").click(function(){
    var open=$(this).attr("src").indexOf("close")>-1;
    var pre=$(this).attr("src").indexOf("..")?"":"../";
    $(this).attr("src",open?`${pre}res/menu.svg`:`${pre}res/close.svg`);
    var target=open?0:$(".nav-menu").outerHeight();
    $(".nav-menu-wrapper").animate({height:target},200,null);
  });

  setTimeout(() => $("div.landing > div").css("opacity","1"),250);

  //$(".contact").visible(() => alert("Hi lol"));
  // Test using onscroll and calculate Y offset, screenHeight and scroll offset

});
