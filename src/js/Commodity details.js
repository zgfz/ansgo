
class Magnifier{
    constructor(){
        this.sBox = document.querySelector(".sBox");
        this.sSpan = document.querySelector(".sBox span");
        this.bBox = document.querySelector(".bBox");
        this.bImg = document.querySelector(".bBox img");
        
        this.init()
    }
    init(){
        var that = this;
        this.sBox.onmouseover = function(){
            that.over()
        }
        this.sBox.onmousemove = function(eve){
            var e = eve || window.event;
            that.move(e)
        }
        this.sBox.onmouseout = function(){
            that.out()
        }
    }
    over(){
        this.sSpan.style.display = "block";
        this.bBox.style.display = "block";
        this.sSpanW = (this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth);
        this.sSpanH = (this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight);
        this.sSpan.style.width = this.sSpanW + "px";
        this.sSpan.style.height = this.sSpanH + "px";
        this.sW = this.sBox.offsetWidth;
        this.sH = this.sBox.offsetHeight;

        this.bW = this.bBox.offsetWidth;
        this.bH = this.bBox.offsetHeight;

        this.bImgW = this.bImg.offsetWidth;
        this.bImgH = this.bImg.offsetHeight;
    }
    move(e){
        var l = e.clientX - this.sBox.offsetLeft - this.sSpan.offsetWidth/2;
        var t = e.clientY - this.sBox.offsetTop - this.sSpan.offsetHeight/2;
        if(l<0) l=0;
        if(t<0) t=0;
        if(l>this.sW - this.sSpanW){
            l = this.sW - this.sSpanW;
        }
        if(t>this.sH - this.sSpanH){
            t = this.sH - this.sSpanH;
        }
        this.sSpan.style.left = l + "px";
        this.sSpan.style.top = t + "px";
        this.bImg.style.left = l / (this.sW - this.sSpanW) * (this.bW - this.bImgW) + "px";
        this.bImg.style.top = t / (this.sH - this.sSpanH) * (this.bH - this.bImgH) + "px";
    }
    out(){
        this.sSpan.style.display = "none";
        this.bBox.style.display = "none";
    }
}

new Magnifier();

// 选卡2
$(function(){
		$(".cont h3").removeClass("active").eq(0).addClass("active").css("background","#666");		//默认第一个
		$(".cont2 p").hide().eq(0).show()		//默认第一个
		
		$(".cont h3").on("click",function(){	//事件委托
			// console.log(1)
			var _index = $(this).index();
			$(".cont h3").removeClass("active").css("background","none").eq(_index).addClass("active").css("background","#666");
			$(".cont2 p").hide().eq(_index).show();
		})
	})





