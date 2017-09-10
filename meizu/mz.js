/**
 * Created by 10587 on 2017/9/3.
 */
//window.onload = function() {

    //var div1 = document.getElementsByClassName("div1")[0];
    //var divx = document.getElementsByClassName("x")[0];
    //
    //divx.onclick = function () {
    //    div1.style.display = "none";
    //}
    //---------------点击显示1------------------------
    //var li1 = document.getElementById("li-1");
    //var dli1 = document.getElementById("dli1");
    //var a1 = li1.getElementsByTagName("a")[0]
    //
    //li1.onmouseover = function () {
    //    dli1.style.display = "block";
    //    a1.style.color = "deepskyblue"
    //}
    //li1.onmouseout = function () {
    //    dli1.style.display = "none";
    //    a1.style.color = ""
    //}
    ////--------------------------------------
    //var li2 = document.getElementById("li-2");
    //var dli2 = document.getElementById("dli2");
    //var a2 = li2.getElementsByTagName("a")[0]
    //
    //li2.onmouseover = function () {
    //    dli2.style.display = "block";
    //    a2.style.color = "deepskyblue"
    //}
    //li2.onmouseout = function () {
    //    dli2.style.display = "none";
    //    a2.style.color = ""
    //}
    ////--------------------------------------
    //var li3 = document.getElementById("li-3");
    //var dli3 = document.getElementById("dli3");
    //var a3 = li3.getElementsByTagName("a")[0]
    //
    //li3.onmouseover = function () {
    //    dli3.style.display = "block";
    //    a3.style.color = "deepskyblue"
    //}
    //li3.onmouseout = function () {
    //    dli3.style.display = "none";
    //    a3.style.color = ""
    //}
    ////--------------------------------------
    //var li4 = document.getElementById("li-4");
    //var dli4 = document.getElementById("dli4");
    //var a4 = li4.getElementsByTagName("a")[0]
    //
    //li4.onmouseover = function () {
    //    dli4.style.display = "block";
    //    a4.style.color = "deepskyblue"
    //}
    //li4.onmouseout = function () {
    //    dli4.style.display = "none";
    //    a4.style.color = ""
    //}
    //-------------轮播图旁边的部分------------------
//}

//标题隐藏栏
$(function(){
    $(".x").click(function(){
        $(".div1").slideUp(1000)
    })
})
//登录和购物栏
$(function(){
    //BUG1 没有把定时器设为空 导致切换的时候 定时器无法取消
    //定时器三要素 1.清空定时器
    var timers = null
    $("#DL").mouseover(function(){
        //2.删除定时器
        clearInterval(timers)
        $("#DL1").css("display","block")
    })
    $("#DL").mouseout(function(){
        //3.设置定时器
        timers=setInterval(function(){
            $("#DL1").css("display","none")
        },100)
    })
})
$(function(){
    //BUG1 没有把定时器设为空 导致切换的时候 定时器无法取消
    var timers = null
    $("#GW").mouseover(function(){
        clearInterval(timers)
        $("#GW1").css("display","block")
    })
    $("#GW").mouseout(function(){
        timers=setInterval(function(){
        $("#GW1").css("display","none")
        },100)
    })
})
//手机下滑动栏
//鼠标进入DIV中的li 让其他Li背景变淡
//BUG2 下面的mouseover冒泡 影响操作
$(function(){
    $("#dli1>ul>li").mouseenter(function(){
        $(this).siblings().stop().fadeTo(400,0.4)
    })
    $("#dli1>ul>li").mouseleave(function(){
        $(this).parent().find("li").stop().fadeTo(400,1)
    })
    //---------2----------
    $("#dli2>ul>li").mouseenter(function(){
        $(this).siblings().stop().fadeTo(400,0.4)
    })
    $("#dli2>ul>li").mouseleave(function(){
        $(this).parent().find("li").stop().fadeTo(400,1)
    })
    //----------3-----------
    $("#dli3>ul>li").mouseenter(function(){
        $(this).siblings().stop().fadeTo(400,0.4)
    })
    $("#dli3>ul>li").mouseleave(function(){
        $(this).parent().find("li").stop().fadeTo(400,1)
    })
    //----------4-------------
    $("#dli4>ul>li").mouseenter(function(){
        $(this).siblings().stop().fadeTo(400,0.4)
    })
    $("#dli4>ul>li").mouseleave(function(){
        $(this).parent().find("li").stop().fadeTo(400,1)
    })
})
//进入当前li显示li中的div
//魅族手机
$(function(){
    $("#li-1").mouseenter(function(){
        //鼠标进入li显示div的同时 div中的li也要缓动出来
        $("#dli1").stop().slideDown(400,function(){
            //获取div中的li 添加animate方法
            $("#dli1>ul>li").stop().animate({
                //进入后right从-25变为0 达到运动效果
                right:0,
                //颜色从0变为1 达到从无到有的效果
                opacity:1
            },400)
        });
    })
    //鼠标移开后 返回原状
    $("#li-1").mouseleave(function(){
        $("#dli1").stop().slideUp(400,function(){
            //移开鼠标后把位置和颜色返回以前的位置
            // 这次不用效果 直接返回就好用css设置
            $("#dli1>ul>li").css({
                right:-25,
                opacity:0
            })
        })
    })
//魅蓝手机
    $("#li-2").mouseenter(function(){
        $("#dli2").stop().slideDown(400,function(){
            $("#dli2>ul>li").animate({
                right:0,
                opacity:1
            },400)
        })
    })
    $("#li-2").mouseleave(function(){
        $("#dli2").stop().slideUp(400,function(){
            $("#dli2>ul>li").css({
                right:-25,
                opacity:0
            })
        })
    })
    //魅族声学
    $("#li-3").mouseenter(function(){
        $("#dli3").stop().slideDown(400,function(){
            $("#dli3>ul>li").animate({
                right:0,
                opacity:1
            },400)
        })
    })
    $("#li-3").mouseleave(function(){
        $("#dli3").stop().slideUp(400,function(){
            $("#dli3>ul>li").css({
                right:-25,
                opacity:0
            })
        })
    })
    //智能配件
    $("#li-4").mouseenter(function(){
        $("#dli4").stop().slideDown(400,function(){
            $("#dli4>ul>li").animate({
                right:0,
                opacity:1
            },400)
        })
    })
    $("#li-4").mouseleave(function(){
        $("#dli4").stop().slideUp(400,function(){
            $("#dli4>ul>li").css({
                right:-25,
                opacity:0
            })
        })
    })
})

//手机右滑动栏
$(function(){
    //获取ul里每个li的索引值
    //鼠标进入这个li时 显示这个li中的div
    $("#d3ul>li").mouseenter(function(){
        var num = $(this).index()
        $("#d3ul div").eq(num).css("display","block")
    })
    //鼠标移出li时 隐藏Li中的div
    $("#d3ul>li").mouseleave(function(){
        var num = $(this).index()
        $("#d3ul div").eq(num).css("display","none")
    })
})
//--------轮播图------------
$(function(){
    //获取ol中li的索引值
    //并且让ul里的li随着ol里li的移动而移动
    $("#d3ol>li").mouseover(function(){
        var idx = $(this).index()
        $("#d3ol>li").eq(idx).css("backgroundColor","orange").siblings().css("backgroundColor","")
        $("#d3ul1>li").eq(idx).fadeIn(500).siblings().fadeOut(500)
        num = idx;
    })
    //清空定时器
    var timer = null;
    //索引值默认为0
    var num = 0;
    //设置定时器 图片每两秒向右移动一个
    function autoPlay(){
        num++;
        if(num > $("#d3ul1>li").length-1){
            num = 0;
        }
        $("#d3ol>li").eq(num).css("backgroundColor","orange").siblings().css("backgroundColor","")
        $("#d3ul1>li").eq(num).fadeIn(500).siblings().fadeOut(500)
    }
    timer = setInterval(autoPlay,2000);
    //鼠标进入图片删除定时器
    $(".div3-1").mouseenter(function(){
        clearInterval(timer);
    })
    //鼠标移出图片使用定时器
    $(".div3-1").mouseleave(function(){
        timer = setInterval(autoPlay,2000);
    })
    //鼠标进入<> 显示背景色
    $(".spleft").mouseenter(function(){
        $(this).css("backgroundColor","rgba(0,0,0,0.5)")
    })
    $(".spleft").mouseleave(function(){
        $(this).css("backgroundColor","")
    })
    $(".spright").mouseenter(function(){
        $(this).css("backgroundColor","rgba(0,0,0,0.5)")
    })
    $(".spright").mouseleave(function(){
        $(this).css("backgroundColor","")
    })
    //鼠标点击左侧的< 图片向左移动
    $(".spleft").click(function(){
        num--;
        if(num < 0) {
            num = $("#d3ul1>li").length-1;
        }
        $("#d3ol>li").eq(num).css("backgroundColor","orange").siblings().css("backgroundColor","")
        $("#d3ul1>li").eq(num).fadeIn(500).siblings().fadeOut(500)
    })
    //鼠标点击右侧的> 图片向右移动
    $(".spright").click(function(){
        //调用上面的方法
        autoPlay()
    })
})
//热品推荐左右切换
    $(function(){
        $(".d5-right").click(function(){
            $(".D6left").animate({marginLeft:"-1240px"},1000)
            $(".d5-right").css("opacity","0.4").siblings().css("opacity","1")
        })
        $(".d5-left").click(function(){
            $(".D6left").animate({marginLeft:"0px"},1000)
            $(".d5-left").css("opacity","0.4").siblings().css("opacity","1")
        })
    })
//下拉显示
    $(function(){
        //下拉显示菜单
        $(window).scroll(function(){
            if($(this).scrollTop() >= $(".div3").outerHeight()){
                $(".div10").css("display","block").addClass("gddw");
            }else{
                $(".div10").css("display","none").addClass("");
            }
        })
        //进入购物车 让盒子变大 添加移动效果
        $("#guc").mouseenter(function(){
            $("#guc").css("backgroundColor","#b6b0b1").animate({
                width:110,
                marginLeft:-60,
            },400)
            $("#guc").click(function(){
                alert("Silly boy, poor people don't have shopping carts ");
            })
        })
        $("#guc").mouseleave(function(){
            $("#guc").css("backgroundColor","#ccc").animate({
                width:50,
                marginLeft:0
            })
        })
        //进入顶部 再点击 返回顶部
        $("#db").mouseenter(function(){
            $("#db").css("backgroundColor","#b6b0b1").animate({
                width:110,
                marginLeft:-60,
            },400)

        })

        $("#db").mouseleave(function(){
            $("#db").css("backgroundColor","#ccc").animate({
                width:50,
                marginLeft:0
            })
        })
        //进入app显示二维码
        $(".app").mouseenter(function(){
            $(".ewm").css("display","block");
            $(".app").css("backgroundColor","#b6b0b1")
        })
        $(".app").mouseleave(function(){
            $(".ewm").css("display","none");
            $(".app").css("backgroundColor","#ccc")
        })
    })
    //下边栏切换
    $(function(){
        $("#erji").mouseenter(function(){
            $("#derji").css("display","block")
            $("#yuanban").css("display","none")
            $("#dshebei").css("display","none")
            $("#djianshu").css("display","none")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
        $("#chaozhi").mouseenter(function(){
            $("#derji").css("display","none")
            $("#dshebei").css("display","none")
            $("#djianshu").css("display","none")
            $("#yuanban").css("display","block")
            $(".div8-1-p").css("color","deepskyblue").css("borderBottom","2px solid deepskyblue")
        })
        $("#shebei").mouseenter(function(){
            $("#derji").css("display","none")
            $("#dshebei").css("display","block")
            $("#yuanban").css("display","none")
            $("#djianshu").css("display","none")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
        $("#jianshu").mouseenter(function(){
            $("#derji").css("display","none")
            $("#dshebei").css("display","none")
            $("#yuanban").css("display","none")
            $("#djianshu").css("display","block")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
        $("#shuju").mouseenter(function(){
            $("#dshuju").css("display","block")
            $("#banyuan").css("display","none")
            $("#dbaohu").css("display","none")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
        $("#tuijian").mouseenter(function(){
            $("#dshuju").css("display","none")
            $("#dbaohu").css("display","none")
            $("#banyuan").css("display","block")
            $(".div8-1-p").css("color","deepskyblue").css("borderBottom","2px solid deepskyblue")
        })
        $("#baohu").mouseenter(function(){
            $("#banyuan").css("display","none")
            $("#dbaohu").css("display","block")
            $("#dshuju").css("display","none")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
    })
        $(function(){
            $(".div9-2-sp1").mouseenter(function(){
                $(this).css("backgroundPosition","-222px 55px")
            })
            $(".div9-2-sp1").mouseleave(function(){
                $(this).css("backgroundPosition","-222px 101px")
            })
            $(".div9-2-sp2").mouseenter(function(){
                $(this).css("backgroundPosition","-305px 55px")
            })
            $(".div9-2-sp2").mouseleave(function(){
                $(this).css("backgroundPosition","-305px 101px")
            })
            $(".div9-2-sp3").mouseenter(function(){
                $(this).css("backgroundPosition","-347px 55px")
            })
            $(".div9-2-sp3").mouseleave(function(){
                $(this).css("backgroundPosition","-347px 101px")
            })
        })
        $(function(){
            var timers = null
            $(".div9-2-sp2").mouseenter(function(){
                clearInterval(timers)
                $(".div9-2-dg").css("display","block")
            })
            $(".div9-2-sp2").mouseleave(function(){
                timers=setInterval(function(){
                    $(".div9-2-dg").css("display","none")
                },100)
            })
        })
        //点击顶部 返回最顶端
        $(function(){
            //问题 优化返回顶部
            $("#db").click(function(){
                $("html,body").animate({

                    scrollTop:0,

                },200,"linear")
            })
        })




