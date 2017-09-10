/**
 * Created by houyawei on 2017/9/4.
 */

//手机出现与隐藏
$(function () {
    //兼容写法：
    function scrollTop() {
        //正常浏览器支持；        //ie678支持他；
        return window.pageYOffset || document.documentElement.scrollTop;

    }

//搜索菜单出现与隐藏
    $(window).scroll(function () {
        if (scrollTop() > 100) {
            $('.nav-container').slideDown(250);
        } else {
            $('.nav-container').slideUp(250);
        }
    })


    //var ti = null;
    var timer = null;
    //用与下面控制a标签字体颜色
    var bool = true;
    $('header .chuxian').mouseenter(function () {

        var num = 0;
        clearTimeout(timer);
        var ind = $(this).parents('li').index() - 1;
        var mz = $('.opend-1 div').eq(ind);

        mz.show().siblings().hide().find('li').css({
            'opacity': 0,
            'marginRight': 0
        });


        //opend滑下
        $('.opend').slideDown(500, function () {
            bool = false;
            //clearInterval(mz.timer)
            //定时器，让每个li透明度变成1，marginright设置为50；
            mz.timer = setInterval(function () {
                if (num <= mz.find('li').length - 1) {
                    mz.find('li').eq(num).animate({
                        'marginRight': 50,
                        'opacity': 1
                    }, 500)
                } else {
                    clearInterval(mz.timer)
                    num = 0 - 1;
                }
                num++;
            }, 150)


        });
        //把div刚开始设置成 none，每个li设置成opacity：0
        //点击对应的标题，出现对应的产品
        //把div设置成block，每个li定时器变成opacity：1；
        //移动到另一个标题上的时候，把其他的都先隐藏；


        //鼠标放到手机上面。改变透明度；
        mz.find('li').mouseenter(function () {
            $(this).css('opacity', 1).siblings().css('opacity', 0.5)
        })

    })
    $('.opend').mouseenter(function () {
        clearTimeout(timer)
    })
    $('header .chuxian,.opend').mouseleave(function () {
        //延迟消失
        timer = setTimeout(function () {
            $('.opend').slideUp(500);
            bool = true;
        }, 200)
    })

    //侧栏显示隐藏
    //卷去的高度大于300 显示
    $(window).scroll(function () {
        if (scrollTop() > 500) {
            //console.log(scrollTop())
            $('.sidebar').fadeIn()
        } else if (scrollTop() <= 500) {
            //console.log(11)
            $('.sidebar').fadeOut()
        }
    })
    //侧栏购物车
    //鼠标移动上去，改变li的宽度，背景色，加字体
    $('.sidebar .first').mouseenter(function () {
        $(this).animate({width: 100}, 200).css({
            'background-color': 'rgba(0,0,0,0.5)',
            "font-size": "14px",
            'border-radius': '10px',
            'background-position': '5px 10px'
        })
        $('.sidebar .first span').css({
            top: 18,
            left: 83
        })

        $('.sidebar .first i').css({
            paddingLeft: 10,
            'font-style': 'normal'
        })
    })
    $('.sidebar .first').mouseleave(function () {
        $(this).animate({width: 50}, 200).css({
            'background-color': 'rgb(216,216,216)',
            "font-size": "0",
            'border-radius': '0',
        })
        $('.sidebar .first span').css({
            top: 8,
            left: 35
        })
    })

    //鼠标移动到APP上，二维码出现，改变top值；
    $('.sidebar .zhong').mouseenter(function () {
        $(this).css({
            'background-zhongcolor': 'rgba(0,0,0,0.5)',
        })
        $('.sidebar .zhong .iii').show().animate({
            top: '-141px'
        }, 400)
    })
    $('.sidebar .zhong').mouseleave(function () {
        $(this).css({
            'background-zhongcolor': 'rgb(216,216,216)',
        })
        $('.sidebar .zhong .iii').hide().animate({
            top: '29px'
        }, 400)
    })

    //返回顶部
    $('.sidebar .last').click(function () {
        var y2 = 0;
        var timer = setInterval(function () {
            var y1 = scrollTop();
            var step = (y2 - y1) / 10;
            step = step > 0 ? Math().ceil(step) : Math.floor(step);
            y1 = y1 + step;
            window.scrollTo(0, y1);
            if (y1 == y2) {
                clearInterval(timer);
            }
        }, 30)
    })

    //四个手机滑动
    //点击右按钮，想左滑动四个手机的宽度，圆点变化到对应的值；
    var ind = 0;
    var wid = $('.Phsliding .zh-ph-nn').eq(0).width();
    $('.Phsliding .right').click(function () {

        if (ind <= 0) {
            $('.Phsliding .right').off('click');
            ind = 0;
        } else {
            ind--;
            console.log('right:' + ind + ',left:' + ind * wid)
            $('.Phsliding .zh-ph-nei').animate({
                'left': -ind * wid
            }, 300)
            $('.dot span').eq(ind).siblings().removeClass('first');
            $('.dot span').eq(ind).addClass('first');

        }
    })
    //点击做按钮，想右滑动四个手机的宽度，圆点变化到对应的值；
    $('.Phsliding .left').click(function () {
        //console.log(ind)

        //console.log(ind)
        //console.log($('.Phsliding .zh-ph-nei .zh-ph-nn').length)
        if (ind >= $('.Phsliding .zh-ph-nei .zh-ph-nn').length - 1) {
            $('.Phsliding .left').off('click');
            ind = $('.Phsliding .zh-ph-nei .zh-ph-nn').length - 1;
        } else {
            ind++;
            //console.log('left:'+ind+',left:'+ind * wid)
            $('.Phsliding .zh-ph-nei').animate({
                'left': (-ind * wid)
            }, 300)
            $('.dot span').eq(ind).siblings().removeClass('first');
            $('.dot span').eq(ind).addClass('first');
        }
    })

    //主轮播图
    //获取一个图片的宽度
    //定时器，每次移动一个图片的宽度
    //索引累加
    var tim1 = null;
    var widt = $('.scroll1').width();
    var key = 0;
    tim1 = setInterval(function () {
        //clearInterval(tim1)
        if (key == $('.scroll div').length) {
            $('.scroll').css('left', '-300px')
            key = 1;
        } else {
            //圆点变换
            switch (key) {
                case 0:
                    $('.scroll0 ul li').eq(key).removeClass().addClass('hui1');
                    $('.scroll0 ul li').eq(key).siblings().removeClass().addClass('hui2');
                    break;
                case 1:
                case 2:
                case 3:
                    if (bool) {
                        $('.header li a').css('color', '#fff');
                        $('.header .head-logo img').attr('src', 'images/logo-new_774b3e9 (1).png')

                    }
                    $('.scroll0 ul li').eq(key).removeClass().addClass('bai1');
                    $('.scroll0 ul li').eq(key).siblings().removeClass().addClass('bai2');

                    break;
                case 4:
                    $('.scroll0 ul li').eq(key).removeClass().addClass('hui1');
                    $('.scroll0 ul li').eq(key).siblings().removeClass().addClass('hui2');
                    $('.header .head-logo img').attr('src', 'images/logo-new_38f50da.png')
                    $('.header li a').css('color', '#333');
                    break;
                case 5:
                    $('.scroll0 ul li').eq(0).removeClass().addClass('hui1');
                    $('.scroll0 ul li').eq(0).siblings().removeClass().addClass('hui2');
                    $('.header .head-logo img').attr('src', 'images/logo-new_38f50da.png');
                    $('.header li a').css('color', '#333');
                    break;
            }
            //开始滑动
            key++;
            $('.scroll').animate({
                'left': (-key + 1) * widt - 300
            }, 500)
            console.log('left:' + (-key) * widt + ',key:' + key);
        }
    }, 1500)
    //点击圆点出现对应的图片

})