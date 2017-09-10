/**
 * Created by Administrator on 2017/9/7 0007.
 */
$(function(){

    //推荐 新品 价格  相互切换
    //$(".tuijian ul li ").mouseover(function(){
    //    $(this).find("a").css("color","#00c3f5");
    //}).mouseout(function(){
    //    $(this).find("a").css("color","#000");
    //})


    $(".tuijian ul li ").click(function(){
        $(this).siblings().find("a").css("color","#000");
        $(this).find("a").css("color","#00c3f5");
       // $(this).children().children("i").css("display","none")
        var Idx =  $(this).index();
        if(Idx <= 1){
            $(this).children("a").children("i").css("display","none")
        }
        $(".benner ul").css("display","none");
        $(".benner ul").eq(Idx).css("display","block")

        //$(this).mouseout(function(){
        //    $(this).find("a").css("color","#00c3f5");
       // })
    })


    //商品内部图片 切换
    $(".tab li div img ").click(function(){

        $(this).parent().parent().find(".images").attr("src",$(this).attr("src"));
        return false;
    })

})