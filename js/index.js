/*头部导航部分开始*/
(function(){
    $(function(){
        let $Btn = $(".h-header .role .btn");
        let $role1 = $(".h-header .role .role1 p");
        let $role2 = $(".h-header .role .role2 p");
        let Bool =false;
        function change($role1 , $role2) {
            $role1.stop();
            $role2.stop();
            $role1.addClass("hide").delay(800).queue(function () {
                $role2.removeClass("hide");
            })
        }
        $Btn.click(function () {
            Bool?change($role2,$role1):change($role1,$role2);
            Bool = !Bool;
        })
    })
})();
/*头部导航部分结束*/
/*主题信息左侧轮播开始*/
(function(){
    $(function(){
        let $ul = $(".t-b-spr-img ul");
        let $sprImg = $(".t-b-spr-img ul li");
        let $Btn = $(".t-b-btn ul");
        let $tBtn = $(".t-b-btn ul li");
        let imgWidth = $sprImg.width();
        let length = $sprImg.length;
        let index =0;
        let Timer = null ;
        function fn(){
            let btIndex = index;
            Timer = setInterval(function () {
                index++;
                btIndex++;
                $ul.animate( {
                    marginLeft : -imgWidth*index +"px"
                },300,function () {
                    if( index >=length-1 ){
                        $ul.css("margin-left",0);
                        index = 0;
                    }
                });
                btIndex %=length-1;
                $tBtn.eq(btIndex).addClass("t-b-li-on").siblings().removeClass("t-b-li-on");
            },2000);
        }
        fn();
        $Btn.on("click","li",function () {
            let i = $(this).index();
            clearInterval(Timer);
            index =$(this).index();
            $(this).addClass("t-b-li-on").siblings().removeClass("t-b-li-on");
           $ul.animate( {
               marginLeft : -imgWidth*i +"px"
           },300);
           fn();
       });

    });
})();
/*主题信息左侧轮播结束*/
/*中间实时信息开始*/
(function(){
    $(function(){
        let $SubUl = $(".t-zj-subnav ul .t-zj");
        let $ConUl = $(".t-zj-contents ul");
        let index = 0;
        $SubUl.mouseover(function () {
            index = $(this).index();
            index = index/2;
            $(this).addClass("t-zj-on").siblings().removeClass("t-zj-on");
            $ConUl.eq(index).show().siblings().hide();
        })
    });

})();
/*中间实时信息结束*/
/*主题部分结束*/
/*平安之旅部分开始*/
(function(){
    /*式神主角转换*/
    $(function(){
        let $Stip = $(".well-nav  .s-tip");
        let $Stip1 = $(".well-nav  .s-tip1");
        let $SubNav = $(".well-subnav");
        let $WuShen = $(".well-wushens");
        let $ZhuJiao = $(".well-zhujiao");
        $Stip.eq(1).on("mouseenter mouseleave",function () {
            $Stip1.eq(1).toggleClass("on");
        });
        $Stip.eq(1).click(function () {
            $Stip1.eq(1).removeClass("on");
            $Stip.eq(1).off("mouseenter mouseleave");
            $Stip.eq(0).on("mouseenter mouseleave",function () {
                $Stip1.eq(0).toggleClass("on");
            });
            $Stip1.eq(0).addClass("on");
            $SubNav.addClass("on");
            $WuShen.addClass("on");
            $ZhuJiao.removeClass("on");
        });
        $Stip.eq(0).click(function () {
            $Stip1.eq(0).removeClass("on");
            $Stip.eq(0).off("mouseenter mouseleave");
            $Stip.eq(1).on("mouseenter mouseleave",function () {
                $Stip1.eq(1).toggleClass("on");
            });
            $Stip1.eq(1).addClass("on");
            $ZhuJiao.addClass("on");
            $SubNav.removeClass("on");
            $WuShen.removeClass("on");
        })
    });
    /*式神导航与轮播*/
    $(function(){
        let $Ul = $(".well-subnav ul");
        let $Left = $(".well-wushens .w-ws-left");
        let $Rigth = $(".well-wushens .w-ws-rigth");
        let $ListUl = $(".well-wushens .w-ws-list ul");
        let $List = $(".well-wushens .w-ws-list");
        let length = $ListUl.length;
        let $Width = $ListUl.width();
        let index = 0;
        let arr = [];
        $Ul.on("click","li",function () {
            $(this).addClass("on").siblings().removeClass("on");
        });
        function fn(index) {
            if( index === 0 ){
                arr=["show","hide"];
            }else if( index <length-1 ){
                arr=["show","show"];
            }else{
                arr=["hide","show"];
            }
            $Left[arr[0]]();
            $Rigth[arr[1]]();
        }
        fn(index);
        $Rigth.click(function () {
            index--;
            index = index<0?0:index;
            fn(index);
            $List.animate({
                marginLeft: -$Width*index + "px"
            },300)
        });
        $Left.click(function () {
            index++;
            if( index > length -1 ){
                index = length-1;
            }
            fn(index);
            console.log(index);
            $List.animate({
                marginLeft: -$Width*index + "px"
            },300)
        });
    });
    /*主角点击*/
    $(function(){
        let $Lnav = $(".well-zhujiao .w-z-lnav");
        let $Zpic = $(".well-zhujiao .w-z-pic .w-z-pic1");
        $Lnav.on("click","div",function () {
            $(this).addClass("on").siblings().removeClass("on");
            $Zpic.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
        })
    })
})();
/*平安之旅结束*/
/*攻略部分开始*/
(function(){
    $(function(){
        let $banner = $(".strategy .s-l-banner ul li");
        let $Btn = $(".strategy .s-l-banner .s-l-btn span");
        let Timer = null;
        let index = 0;
        function fn() {
            Timer = setInterval(function () {
                index++;
                index %= $Btn.length;
                $banner.eq(index).stop().fadeIn().siblings().stop().fadeOut();
                $Btn.eq(index).addClass("on").siblings().removeClass("on");
            },5000)
        }
        fn();
        $Btn.mouseenter(function () {
            clearInterval(Timer);
            $banner.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
            $(this).addClass("on").siblings().removeClass("on");
            fn();
        });
    });
    $(function(){
        let $Topnav = $(".strategy-r .s-r-topnav .s-r-relative");
        let $Con = $(".strategy-r .s-r-content");
        let $Con1 = $(".strategy-r .s-r-content1");
        let $Gonglue = $(".strategy .s-r-topnav .s-r-gonglue");
        let ConWidth = $Con.width();
        let index = 0;
        let length = $Topnav.length;
        $Topnav.mouseenter(function () {
            index = $(this).index()/2;
            $(this).find(".s-tip1").addClass("on");
            $(this).siblings().find(".s-tip1").removeClass("on");
            $Con1.stop().animate({
                "margin-left":-ConWidth*index +"px"
            },500)
        });
        $Gonglue.mouseenter(function () {
            for (let i = 0; i < length; i++) {
                $Topnav.eq(i).find(".s-tip1") .removeClass("on");
            }
            $Con1.stop().animate({
                "margin-left":0
            },500)
        })
    })
})();
/*攻略部分结束*/
/*同人专区部分开始*/
(function(){
    $(function(){
        let $oLi = $(".area-topnav ul li");
        let $oUl = $(".area-c-con .area-c-con1 ul");
        let $oDIv = $(".area-c-con .area-c-con1");
        let $UlWidht = $oUl.width();
        let length = $oLi.length;
        let index = 0;
        $oLi.mouseenter(function () {
            index = $(this).index();
            index %= length;
            if( index===6 )return;
            $(this).find("span").removeClass("on");
            $(this).siblings().find("span").addClass("on");
            $(this).find("i").addClass("on");
            $(this).siblings().find("i").removeClass("on");
            $oDIv.stop().animate({
                marginLeft: -$UlWidht*index +"px"
            },500)
        });
    });
})();
/*同人专区部分结束*/
/*客服部分左侧返回顶部开始*/
(function(){
    $(function(){
        let $Fanhui = $(".cus-ser .s-fanhui");
        let scrollTop = 0;
        let Time = 0;
        $Fanhui.click(function () {
            //兼容老版本谷歌
            scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            Time = setInterval(function () {
                scrollTop -= 100;
                if( scrollTop<=0 ){
                    scrollTop = 0;
                    clearInterval(Time);
                }
                if( document.documentElement.scrollTop ){
                    document.documentElement.scrollTop = scrollTop;
                }else {
                    document.body.scrollTop = scrollTop;
                }
            },1000/60)
        })
    })
})();
/*客服部分左侧返回顶部结束*/
/*监听滚轮吸顶盒及尾部部分开始*/
(function(){
    $(function(){
        let $Topnav = $(".topnav");
        let Logo = document.querySelector(".h-header .h-logo");
        let $FootTxt = $(".footer .foot-txt");
        let $Icon = $(".foot-tiyan .ty-icon");
        let $Tiyan = $(".footer .foot-tiyan");
        let $Bar = $(".foot-tiyan .bar");
        let scrollTop = 0;
        //监听滚轮获取高度
        window.onscroll =function () {
            //兼容老版本谷歌
            scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            //吸顶盒
            if( scrollTop >= 100 ){
                $Topnav.css({
                    opacity:1,
                    zIndex:20
                });
                Logo.style.transform = "scale(0)";
            }else if( scrollTop === 0){
                $Topnav.css({
                    opacity:0,
                    zIndex:0
                });
                Logo.style.transform = "scale(1)";
            }
            //尾部
            if( scrollTop >= 3500){
                $FootTxt.css({
                    top:100 +"px",
                    opacity:1
                });
                $Icon.css({
                    top:30 +"px",
                    opacity:1
                });
                $Bar.css({
                    top:104 +"px",
                    opacity:1
                });
            }
        };
        //移入事件
        $Tiyan.hover(function () {
            $Icon.css("opacity",0);
            $Bar.css("top",5);
        },function () {
            $Icon.css("opacity",1);
            $Bar.css("top",104);
        })
    });
})();
/*监听滚轮吸顶盒及尾部部分结束*/