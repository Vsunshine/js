/**
 * Created by wwj on 2017/9/6.
 */
$(function(){
    $(".daohang .d1").mouseenter(function(){

        var idx=$(this).index()
        $(".xxk").eq(idx-1).stop().slideDown().siblings(".xxk").hide()
        });

    $(".daohang .d1").mouseleave(function(){

        var idx=$(this).index()
        $(".xxk").eq(idx-1).delay(1000).slideUp()});



    //ÂÖ²¥Í¼¿ªÊ¼
    $("#screen ol li").click(function () {
        var idx = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $("#screen ul li").eq(idx).fadeIn(500).siblings().fadeOut(500);
        //num=idx;

    })
    var timer=null;
    var num=0;
    function autoPlay (){
        num++;
        if(num>1){
            num=0;
        }
        $("#screen ol li").eq(num).addClass("current").siblings().removeClass("current");
        $("#screen ul li").eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
        console.log(1)
    }

    timer=setInterval(autoPlay,4000);

    $("#screen").mouseleave(function (){
        timer=setInterval(autoPlay,4000);
    })
    $("#screen").mouseenter(function (){
        clearInterval(timer);
    })





    })


