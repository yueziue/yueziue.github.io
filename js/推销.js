$("#smallScreenButton").click(function () {
  $(this).toggleClass("a");
  $("#smallScreenDrop-downList").slideToggle();
});

$(window).scroll(function () {
    if($(window).scrollTop()>0){
        $("#navigationBox").css({
            "background":"#fff",
            color:"black"
        });
        $("#navigationScreenList").find("li").addClass("sticky");
        $("#navigationButton").addClass("sticky");
        $("#logo").attr("src","./img/logo-2.svg");
        $(".placedAtTop").fadeIn();
        $("#smallScreenButton span").css("background","#5f6fff");
    }else{
        $("#navigationBox").css({
            "background":"#5f6fff",
            color:"white"
        });
        $("#navigationScreenList").find("li").removeClass("sticky");
        $("#navigationButton").removeClass("sticky");
        $("#logo").attr("src","./img/logo.svg");
        $(".placedAtTop").fadeOut();
        $("#smallScreenButton span").css("background","white");
    }
});

$(".placedAtTop").click(function(){
    $(window).scrollTop(0);
})