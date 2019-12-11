;(function(){


class Login{
    constructor(){
        this.user = document.getElementById("user")
        this.pass = document.getElementById("pass")
        this.reg = document.getElementById("reg")
        this.log = document.getElementById("log")
        this.em = document.querySelector("em")
        
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.log.onclick = function(){
            that.u = that.user.value;
            that.p = that.pass.value;
            
            that.getMsg();
        }
        this.reg.onclick = function(){
            location.href = "http://localhost:82/Register.html";
        }
    }
    getMsg(){
        this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
        
        var type = 0;
        for(var i=0;i<this.msg.length;i++){
            if(this.msg[i].user == this.u && this.msg[i].pass == this.p){
                location.href = "http://localhost:82/index.html";
                this.msg[i].onoff = 1;
                setCookie("userMsg",JSON.stringify(this.msg))
                type = 1;
            }else if(this.msg[i].user == this.u && this.msg[i].pass != this.p){
                this.em.innerHTML = "密码错误";
                type = 2;
            }
        }
        if(type == 0){
            this.em.innerHTML = "用户名不存在,请<a href='http://localhost:82/Register.html'>注册</a>";
        }
    }
}

new Login;


})();