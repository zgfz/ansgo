;(function(){

    class Car{
        constructor(){      //获取元素
            this.url="http://localhost:82/data/goods.json";
            this.tbody = document.querySelector("tbody");

            this.load();
            this.addEvent();
        }
		
        load(){     
            ajaxGet(this.url,(res)=>{       //ajax获取数据,解析数据
                this.res = JSON.parse(res);
                this.getCookie();
            })
        }
		
        getCookie(){           //读取Cookie获取数据，ID和num
            this.goods = getCookie("goodsDECookie") ? JSON.parse(getCookie("goodsDECookie")) : [];
            this.display();
            // $.cookie("")
        }

        display(){      //渲染数据（）比较ID，重复就渲染，双遍历，都是数组
            var str = "";
            for(var i = 0;i<this.res.length;i++){
                for(var j = 0;j<this.goods.length;j++){
                    var _p = +this.res[i].price * this.goods[j].num
                    if(this.res[i].goodsId == this.goods[j].id){   //id相同的话
                        str +=`<tr index="${this.res[i].goodsId}">
                            <td><input type ="checkbox" name="selects" id="selects" class="check" value="${this.res[i].goodsId}"></td>
                            <td><img src="${this.res[i].img}"/></td>
                            <td>${this.res[i].name}</td>
                            <td>${this.res[i].price}</td>
                            <td><input type="number" class="shu" name="ner" min=1 value="${this.goods[j].num}"/></td>
                            <td class="xiaoji">${_p}</td>
                            <td class="delete">删除</td>
                            </tr>`
                    } 
                }
            }
            this.tbody.innerHTML = str+`<tr>	
											<td colspan="4" class="allPrice">总价:￥</td>
											<td class="allNum">总数量:</td>
											<td class="te1">结算</td>
											<td class="deleteAll">全部删除</td>
										</tr>`;
                                        this.xuan();    //渲染后执行
        }
		
		// 处理事件
        addEvent(){
			var that = this;
			//删除	
            this.tbody.addEventListener("click",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "delete"){
                    that.id = target.parentNode.getAttribute("index");  //获取ID，准备删除Cookie  
                    target.parentNode.remove();     //删除DOM
                    that.changeCookie(function(i){
                        that.goods.splice(i,1);     //修改Cookie
                    });
                    
                }
                //删除所有
                if(target.className == "deleteAll"){
                    that.id = target.parentNode.getAttribute("index"); 
                    // console.log()
                    $(target).parent().siblings().remove();     //删除DOM
                        that.goods.splice(0);
                        setCookie("goodsDECookie",JSON.stringify(that.goods));  //设置结束，存回去
                }
                
            })

			//修改数量
            this.tbody.addEventListener("input",function(eve){     //事件监听
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.tagName == "INPUT"){  
                    that.id = target.parentNode.parentNode.getAttribute("index"); 
                    that.changeCookie(function(i){
                        that.goods[i].num = target.value;   //输入的数量等于当前
                    if(e.target.className == "shu"){
                    //jQuery做法
                    $(target).parent().next().html(
                        parseInt($(target).parent().prev().html())*that.goods[i].num)
                        
                    //原生做法
                    // e.target.parentNode.nextElementSibling.innerHTML = 
                    // parseInt(e.target.parentNode.previousElementSibling.innerText)*parseInt(that.goods[i].num)
                        
                    //     if(e.target.value < 1 && e.target.value == ""){
                    //     e.target.value = 1

                    //     e.target.parentNode.nextElementSibling.innerHTML = e.target.parentNode.previousElementSibling.innerText
                    // }
                    } 

                    });
                }
            })
            
        }
        
        xuan(){
            //全选
         $("#checkAll").on("click",function(){
                if(this.checked){
                    $(".check").prop("checked",true);
                }else{
                    $(".check").prop("checked",false);
                }
            })
            //单选
            var checkS = $(".check");
            var that = this;
                    // console.log(checkS);
            for(var i = 0;i<checkS.length;i++){
                checkS[i].onclick = function(){
                    var ischeckAll = true;//假设全选是选中状态的自定义变量
                    for(var i = 0;i<checkS.length;i++){
                        if(checkS[i].checked == false){
                            ischeckAll = false;
                            break;
                        }
                    }
                    if(ischeckAll){
                        $(".selectAll").prop("checked",true);
                    }
                    if(this.checked == false){
                        $(".selectAll").prop("checked",false);
                    }
                }
            }
            that.numTotal();
            that.calTotal();

        }
    // 总数量
       numTotal(){
            var total = 0;
            var tds = $("tbody tr :nth-child(5) input[name='ner']");
            // console.log(tds);
            tds.each(function(){
                var v = $(this).val();
                // console.log(v);
                total =total + parseInt(v);
            });
            $(".allNum").html("总数量共："+total+"件");
            // console.log(total);
        }
    // 总价  
        calTotal(){
            var total = 0;
            var tds = $("tbody tr :nth-child(6)");
            tds.each(function(){
                var v = $(this).text();
                total =total + parseFloat(v);
            });
            $(".allPrice").html("商品总价为:¥ "+total+"元");
            // console.log(total);
        }

        // 操作数组
        changeCookie(cb){
            for(var i = 0;i<this.goods.length;i++){     //遍历goods
                if(this.id == this.goods[i].id){         //如果点击的ID等于goods的ID
                    cb(i);
                    break;  //停止循环
                }
            }
            setCookie("goodsDECookie",JSON.stringify(this.goods),{expires:999});    //数组转字符，
        }
    }
    new Car;

})();