// import { Script } from "vm";

;(
    function(){

        // login status
        class Index{
			constructor(){
				this.login2 = document.querySelector(".login2");
				this.welcome2 = document.querySelector(".welcome2");
				this.user = this.welcome2.querySelector("span");
				this.exit = this.welcome2.querySelector("em");
				
				this.getMsg();
				this.addEvent()
			}
			addEvent(){
				var that = this;
				this.exit.onclick = function(){
					that.msg[that.i].onoff = "0";
					setCookie("userMsg",JSON.stringify(that.msg));
					location.reload();
				}
			}
			getMsg(){
				this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
				
				this.i = null; 
				var type = this.msg.some((val,idx)=>{
					this.i = idx;
					return val.onoff === 1;
				})
				
				if(type){
					this.login2.style.display = "none";
					this.welcome2.style.display = "block";
					this.user.innerHTML = this.msg[this.i].user;
				}
			}
		}
		new Index;


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


        // 楼层
        $("._nav li").click(function(){
            var i = $(this).index();
            var s = $("div.remai").offset().top;
            var t = $("div.new1").offset().top;
            if(i==0){
                $(this).addClass("active").siblings().removeClass("active");
                $("html").stop().animate({
                    scrollTop:s,
                })
            }
            if(i==1){
                $(this).addClass("active").siblings().removeClass("active");
                // $(".active").show()
                $("html").stop().animate({
                    scrollTop:t,
                })
            }
        })


//list
class List{
    constructor(){      //获取
        this.url = "http://localhost:82/data/goods.json"
        this.cont = document.getElementById("cont");
        this.cont1 = document.getElementById("cont1");
        this.load();
        this.addEvent();    //初始绑定事件
    }
    load(){     //解析数据(ajax请求数据)
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);     //转换
            // console.log(that.res);
            that.display();
            that.display2();
        })
    }

    display(){      //渲染数据
        var str ="";
        for(var i = 0;i<this.res.length;i++){
            str +=`<div class="box" index="${this.res[i].goodsId}">
                        <img src="${this.res[i].img}" alt="">
                        <p>${this.res[i].name}</p>
                        <span>${this.res[i].price}</span>
                        <em class="addCar">加入购物车</em>
                    </div>`;
        }
        this.cont.innerHTML = str;
    }
    display2(){      //渲染数据
        var str ="";
        for(var i = 5;i<10;i++){
            str +=`<div class="box" index="${this.res[i].goodsId}">
                        <img src="${this.res[i].img}" alt="">
                        <p>${this.res[i].name}</p>
                        <span>${this.res[i].price}</span>
                        <em class="addCar">加入购物车</em>
                    </div>`;
        }
        this.cont1.innerHTML = str;
    }

    addEvent(){     //事件监听式绑定事件
        var that =this
        this.cont.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "addCar"){       //找ID，绑定，
                that.id = target.parentNode.getAttribute("index");  //获取index（就是goodsId)
                // console.log(that.id) 
                that.setCookie();
            }
        })
        this.cont1.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "addCar"){       //找ID，绑定，
                that.id = target.parentNode.getAttribute("index");  //获取index（就是goodsId)
                // console.log(that.id) 
                that.setCookie();
            }
        })
    }
    setCookie(){        
    //获取Cookie，转成对象操作
    this.goods = getCookie("goodsDECookie") ? JSON.parse(getCookie("goodsDECookie")) : [];  
    // console.log(this.goods);
        // 第一次加入购物车
        if(this.goods.length<1){
            // 直接加入
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            // 老商品
            var onoff = true;   //增加开关为新
            for(var i = 0;i<this.goods.length;i++){
                if(this.goods[i].id === this.id){     //每个商品都有一个ID，如果等于点击的ID,那么就++
                    this.goods[i].num++;
                    onoff = false;
                }
            }
            if(onoff){  //如果状态没改变，就是一个新的商品
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        // 上面操作的是数组，需要转字符，以Cookie塞进去
        setCookie("goodsDECookie",JSON.stringify(this.goods));
    }
}
new List;



    }
)();





