/**
 * Created by Administrator on 2017/9/7 0007.
 */
$(function(){

    //�Ƽ� ��Ʒ �۸�  �໥�л�
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


    //��Ʒ�ڲ�ͼƬ �л�
    $(".tab li div img ").click(function(){

        $(this).parent().parent().find(".images").attr("src",$(this).attr("src"));
        return false;
    })

})