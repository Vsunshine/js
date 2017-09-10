/**
 * Created by Administrator on 2017/9/7 0007.
 */
window.onload = function(){

    $(window).scroll(function () {
        if (scrollTop() > 100) {
            $('.nav-container').slideDown(250);
        } else {
            $('.nav-container').slideUp(250);
        }
    })


    var timer = null;
    var ti = null;
    var num = 0;
    $('header .chuxian').mouseenter(function () {
        clearTimeout(timer);
        var ind = $(this).parents('li').index() - 1;

        //opend滑下
        $('.opend').slideDown(500);
        //把div刚开始设置成 none，每个li设置成opacity：0
        //点击对应的标题，出现对应的产品
        //把div设置成block，每个li定时器变成opacity：1；
        //移动到另一个标题上的时候，把其他的都先隐藏；
        var mz = $('.opend-1 div').eq(ind);
        mz.siblings().hide();
        mz.show(0, function () {
            //其他的li透明度也设置成0
            // 以及maiginRight
            mz.siblings().find('li').animate({
                'opacity': 0,
                'marginRight': 0
            }, 0);
            //定时器，让每个li透明度变成1，marginright设置为50；
            timer = setInterval(function () {
                if (num <= mz.find('li').length - 1) {
                    mz.find('li').eq(num).animate({
                        'marginRight': 50,
                        'opacity': 1
                    }, 500)
                } else {
                    clearInterval(timer)
                    num = 0 - 1;
                }
                num++;
            }, 150)
            //鼠标放到手机上面。改变透明度；
            mz.find('li').mouseenter(function () {
                $(this).css('opacity', 1).siblings().css('opacity', 0.5)
            })
        })

    })
    $('.opend').mouseenter(function () {
        clearTimeout(timer)
    })
    $('header .chuxian,.opend').mouseleave(function () {

        timer = setTimeout(function () {
            $('.opend').slideUp(500);
        }, 200)
    })


    ////价格高低切换
    var gaodi = document.getElementById("jia");
    var abc = gaodi.getElementsByTagName("a")[0];
    var down = abc.getElementsByTagName("i");
    //var down = cd.getElementsByTagName("img")[0];
    var Gao = document.getElementById("gao");
    var Di = document.getElementById("di");
    var tj = document.getElementById("tj");
    var num = 0;
    gaodi.onclick = function(event){
        if(num == 0){
            num = 1;
            //down.style.src = "images/3333.png"
            //console.log(down)

            show(down[1])
            hide(down[0])
            show(Gao);
            hide(Di)
            //hide(tj)
        }else if(num ==1) {
            num = 0;
            show(down[0])
            hide(down[1])
            //down.style.src = "images/下载（26）.png"
            //console.log(down)
            show(Di);
            hide(Gao);
           // down.addEventListener("click",function(){
           //     this.src="pic2.png";
           // },false);
            //hide(tj);
        }
    }
    //gaodi.addEventListener("click", funcNum , false);//监听点击事件
    //        返回顶部

    var imag = document.getElementById("imag");
    window.onscroll = function () {
        if(scrollTop() > 500){
            show(imag);
        }else{
            hide(imag);
        }
    }
    var img = document.getElementById("img");
    window.onscroll = function () {
        if(scrollTop() > 500){
            show(img);
        }else{
            hide(img);
        }
    }
    var target = 0,leader = 0,timer = null;
    img.onclick = function () {
        timer = setInterval(function () {
            leader = scrollTop();
            var step = (target-leader)/10;

            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);//移动整个页面；
            console.log(1);
            if(target === leader){
                clearInterval(timer);
            }
        },30);
    }
    function scrollTop(){
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    function hide(ele){
        ele.style.display = "none";
    }
    function show(ele){
        ele.style.display = "block";
    }


}