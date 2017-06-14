$(function() {
  var itemLang = $("#mold li").length;

  $("#header h1 a").click(function() {
    alert(itemLang);
  });
  $("#mold").css({"width":$(window).width()*itemLang+"px"});
  $("#mold li").css({"width":$(window).width()+"px"});

  $(window).resize(function() {
    $("#mold").css({"width":$(window).width()*itemLang+"px"});
    $("#mold li").css({"width":$(window).width()+"px"});
  });

  $("#nextBtn").on("click", function() {
    $("#mold").css({"transform":"translatex(-"+$(window).width()+"px)"});
  });
  $("#prevBtn").on("click resize", function() {
    //$("#mold").css({"transform":"translateX("")"});
  });

});
