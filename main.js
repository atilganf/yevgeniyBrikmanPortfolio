$(document).ready(function(){
  var x = 159;
  $(".toggleButton").click(function(){
    $(".collapsible").slideToggle("fast","linear");
    var px = "+=" + x.toString() + "px";
    $("#header").animate({top: px}, "fast");
    $("#body").animate({top: px}, "fast");
    $("#footer").animate({top: px}, "fast");
    x = -x;
    var px = "+=" + x.toString() + "px";
    $(".res").animate({top: px}, "fast");
  });
});
