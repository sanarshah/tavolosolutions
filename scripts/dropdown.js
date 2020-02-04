$(window).ready(function(){
  $(".navbar img").click(function(){
    var open=$(this).attr("src").indexOf("close")>-1;
    $(this).attr("src",open?"res/menu.svg":"res/close.svg");
    var target=open?0:$(".nav-menu").outerHeight();
    $(".nav-menu-wrapper").animate({height:target},200,null);
  });
});
