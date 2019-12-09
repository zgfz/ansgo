;(function($){
    "user strict";

    $.fn.banner = function(options){
        this._obj = {   //1.去除必要的参数
            list:options.list === false ? false:true,
            index:options.index || 0,   //进来的索引，需要2个索引，一进一出
            autoPlay:options.autoPlay === false ? false:true,
            delayTime:options.delayTime || 2000,
            moveTime:options.moveTime || 1000,
            //出去的索引    // 假设上一张是最后的索引
            iPrev:options.items.length-1         
        }; 
        // console.log(this._obj);

         // 2.初始化布局
         var that = this;
         this._obj.init = function(){
             that.css({
                 overflow:"hidden",
             })
             options.items.css({  
                 position:"absolute",
                 top:0,
                 left:options.items.eq(0).width()
             }).eq(this.index).css({
                 left:0
             })
         }
         this._obj.init();

         function btnLeft(){      //左
            if(that._obj.index == 0){ //当前等于最后一个
                that._obj.index = options.items.length-1
                that._obj.iPrev = 0
            }else{
                that._obj.index--;
                that._obj.iPrev = that._obj.index+1
            }
            that._obj.btnMove(1);
        }

        function btnRight(){     //右
            if(that._obj.index == options.items.length-1){ //当前等于最后一个
                that._obj.index = 0
                that._obj.iPrev = options.items.length-1
            }else{
                that._obj.index++;
                that._obj.iPrev = that._obj.index-1
            } 
            that._obj.btnMove(-1);
        }

        //进出封装  移动动画功能的定义
        this._obj.btnMove = function(type){
            options.items.eq(this.iPrev).css({
                left:0
            }).stop().animate({
                left:options.items.eq(0).width()*type
            },that._obj.moveTime)
            options.items.eq(this.index).css({
                left:-options.items.eq(0).width()*type
            }).stop().animate({
                left:0
            },that._obj.moveTime)

            if(!that._obj.list) return;
            $(".list").children("li").css({     
                background:"rgba(200,200,200,.6)",
            }).eq(that._obj.index).css({
                background:"#666",
            })
        }

    // 3.判断左右按钮，有执行，没有跳过
    if(options.left != undefined && options.left.length>0 && options.right != undefined && options.right.length>0){
        options.left.click(btnLeft);

        options.right.click(btnRight);
        
        // 控制进出
        // this._obj.btnMoveLeft = function(){     //先控制出去的
        //     options.items.eq(this.iPrev).css({
        //         left:0
        //     }).stop().animate({
        //         left:options.items.eq(0).width()
        //     })
        //     options.items.eq(this.index).css({  //后控制进来的
        //         left:-options.items.eq(0).width()
        //     }).stop().animate({
        //         left:0
        //     })
        // }
        // this._obj.btnMoveRight = function(){     
        //     options.items.eq(this.iPrev).css({
        //         left:0
        //     }).stop().animate({
        //         left:-options.items.eq(0).width()
        //     })
        //     options.items.eq(this.index).css({
        //         left:options.items.eq(0).width()
        //     }).stop().animate({
        //         left:0
        //     })
        // }

        // 4.list,按钮功能
        if(this._obj.list){
            var str = "";
            for(var i = 0;i<options.items.length;i++){
                str += `<li>${i+1}</li>`;
            }
            $("<ul class='list'>").html(str).appendTo(this).css({
                width:"100%",
                height:40,
                display:"flex",
                margin:0,
                padding:0,
                listStyle:"none",
                position:"absolute",
                justifyContent:"center",
                lineHeight:"30px",
                bottom:0,
            }).children().css({
                background:"rgba(200,200,200,.6)",
                borderRadius:"50%",
                width:30,
                height:30,
                marginLeft:40,
                color:"#fff",
                textAlign:"center",
                cursor:"pointer",
            }).eq(this._obj.index).css({
                background:"#666",
            });
            
            $(".list").children("li").click(function(){
                if($(this).index() > that._obj.index){      //当前索引比较，点击大于
                    //  console.log("左");
                     that._obj.listMove($(this).index(),1);
                    }
                    if($(this).index() < that._obj.index){      //点击小于
                        // console.log("右");
                        that._obj.listMove($(this).index(),-1);
                }
                $(this).css({
                    background:"#666",
                }).siblings().css({
                    background:"rgba(200,200,200,.6)"
                })
                that._obj.index = $(this).index();
            })

            this._obj.listMove = function(i,type){      //按钮移动
                options.items.eq(that._obj.index).css({
                    left:0              //从右向左走
                }).stop().animate({
                    left:-options.items.eq(0).width()*type
                },that._obj.moveTime).end().eq(i).css({
                    left:options.items.eq(0).width()*type
                }).stop().animate({
                    left:0
                },that._obj.moveTime)
            }
            // 自动轮播
            if(this._obj.autoPlay){
                this._obj.t = setInterval(()=>{
                    // btnLeft();
                    btnRight();
                },this._obj.delayTime)
            }
            this.hover(function(){      //划过暂停
                clearInterval(that._obj.t);
            },function(){
                that._obj.t = setInterval(()=>{      //离开再执行显示
                    // btnLeft();
                    btnRight();
                },that._obj.delayTime)
            })

        }
    }
    }
})(jQuery);