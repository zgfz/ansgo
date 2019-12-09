;(
    function(){
        // nav
        $("#nav .nav-all").children("li").mouseenter(function(){
            $(this)
            .children("ul")
            .stop().toggle(300)
            .parent()
            .siblings()
            .children("ul")
            .stop().hide(300)
        })
        $("#nav .nav-all").children("li").mouseleave(function(){
            $(this)
            .children("ul")
            .stop().hide(300)
        })

        //top
        $(function(){
            $(window).scroll(function(){
                if ($(window).scrollTop() >= 100){
                    $('#jump ul').fadeIn();
                }
                else {
                    $('#jump ul').fadeOut();
                }
            })
        })

        $('#jump #top').click(function () {
            $('html,body').stop().animate({ scrollTop: 0 }, 500);
        });



        // 轮播图
        $(".banner1").banner({
            items:$(".banner1").find("img"),
            left:$(".banner1").find("#left"),
            right:$(".banner1").find("#right"),
            list:true,     //小圆点
            index:0,
            // autoPlay:true,
            delayTime:4000,
            moveTime:800,
        })
    }
)();