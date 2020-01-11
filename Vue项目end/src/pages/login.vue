<template>
	<div class="login">
		<UcNav/>
		<div class="content">
			<p>
				<router-link tag="span" to="/login">登录&nbsp;|&nbsp;</router-link>
				<router-link tag="span" to="/reg">注册</router-link>
				<!-- <span>登录|</span>
				<span>注册</span> -->
			</p>
		</div>
		<!-- 输入框 -->
			<UcInput label="账号" v-model="username"/>
			<UcInput label="密码" v-model="password"/>
		<!-- 登录按钮 -->
			<UcBotton text="登录" @click.native='login'/>
		<br>
    	{{mess}}
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav'	//引入导航
	import UcBotton from '../components/uc-botton'	//引入按钮
	import UcInput from '../components/uc-input'	//引入输入框

	// 消息弹出
	import Vue from 'vue';
	import { Notify } from 'vant';
	Vue.use(Notify);

	export default{
		data(){
			return {
				sername:'',
				password:'',
				mess:'',
				username:'',
			}
		},	//数据
		components:{	//注册组件
			UcNav,
			UcBotton,
			UcInput
		},	//注册组件
		mounted(){
			Notify({ type: 'primary', message: '您正在登录界面' });
		},	//挂载后
		updated(){},	//更新时
		methods:{
			login() {
        let params = new URLSearchParams();
        params.append('username', this.username)
        params.append('password', this.password)
        axios({
          url: '/api/login',
          method: 'post',
          data: params
        }).then(
          res => {
            if(res.data.err==0){
              //种token,跳转user
              window.localStorage.setItem('token',res.data.token);
              this.$router.push('/user')
            }else{
              this.mess=res.data.msg
			}
			// console.log(res.data)
          }
        )
        
      }
    }
  }
</script>

<style scoped>
	.login{height:11rem;width:100%;overflow: hidden;font-size: 0.35rem;background:url(../assets/images/login_bg.jpg) no-repeat center;}
	/* .login .login_top{height:0.7rem;position: fixed;top:0;left:0;right: 0;} */
	/* .login .login_bg{} */
	/* .login p{} */
	.login .content{width:100%;display: flex;justify-content: center;}
	.login .content p{font-size: 0.35rem;margin-top:3rem;}
	.login .content span{font-size: 0.5rem;}

	/* .login .footbox .log{background: #00f;width:3rem;color:#fff;font-size:0.35rem;margin-left:1.8rem;margin-top:0.6rem;}
	.login .footbox .tishi{color:#000;margin-left:0.5rem;font-size:0.3rem;} */
</style>