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

        //opend����
        $('.opend').slideDown(500);
        //��div�տ�ʼ���ó� none��ÿ��li���ó�opacity��0
        //�����Ӧ�ı��⣬���ֶ�Ӧ�Ĳ�Ʒ
        //��div���ó�block��ÿ��li��ʱ�����opacity��1��
        //�ƶ�����һ�������ϵ�ʱ�򣬰������Ķ������أ�
        var mz = $('.opend-1 div').eq(ind);
        mz.siblings().hide();
        mz.show(0, function () {
            //������li͸����Ҳ���ó�0
            // �Լ�maiginRight
            mz.siblings().find('li').animate({
                'opacity': 0,
                'marginRight': 0
            }, 0);
            //��ʱ������ÿ��li͸���ȱ��1��marginright����Ϊ50��
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
            //���ŵ��ֻ����档�ı�͸���ȣ�
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


    ////�۸�ߵ��л�
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
            //down.style.src = "images/���أ�26��.png"
            //console.log(down)
            show(Di);
            hide(Gao);
           // down.addEventListener("click",function(){
           //     this.src="pic2.png";
           // },false);
            //hide(tj);
        }
    }
    //gaodi.addEventListener("click", funcNum , false);//��������¼�
    //        ���ض���

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
            window.scrollTo(0,leader);//�ƶ�����ҳ�棻
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