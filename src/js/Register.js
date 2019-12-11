
;(function(){

$(function(){
    $("form").validate();
})


class Register{
    constructor(){		//获取元素
        this.user = document.getElementById("user");
        this.pass = document.getElementById("pass");
        this.reg = document.getElementById("reg");
        this.log = document.getElementById("log");
        this.em = document.querySelector("em");
        
        this.addEvent();
    }
    addEvent(){		//添加事件
        var that = this;
        this.reg.onclick = function(){
            that.u = that.user.value;
            that.p = that.pass.value;
            
            that.setMsg();
        }
        this.log.onclick = function(){
            location.href = "http://localhost:82/index.html";
        }
    }
    setMsg(){		//设置Cookie
//				数据格式:[{user:"admin",pass:"123",onoff:0},{...},{...},...]
        
        this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
//				第一个用户
        if(this.msg.length<1){
            this.msg.push({
                user:this.u,
                pass:this.p,
                onoff:0
            })
            this.success();
        }else{
//				非第一个用户
//					重名了
            var type = this.msg.some((val,idx)=>{
                return val.user === this.u;
            });
            if(type){
                this.em.innerHTML = "用户名重复";
            }else{
//					没重名,直接注册
                this.msg.push({
                    user:this.u,
                    pass:this.p,
                    onoff:0
                })
                this.success();
            }
        }
        setCookie("userMsg",JSON.stringify(this.msg));
    }
    success(){
        this.em.innerHTML = "注册成功，5秒后<a href='http://localhost:82/Login.html'>跳转到登录</a>";
        setTimeout(()=>{
            location.href = "http://localhost:82/Login.html";
        },5000)
    }
}
new Register;



})();