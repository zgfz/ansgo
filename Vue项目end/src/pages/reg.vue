<template>
	<div class="reg">
		<!-- <div class="reg_top"> -->
			<UcNav></UcNav>

		<!-- </div> -->
		 <!-- <h1 @click="upload">点我上传头像</h1>
		<input type="file" id="file" style="display:none;"> -->
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
			<UcBotton text="注册" @click.native="reg"/>
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
			username: '',
			password: '',
			mess: ''
			}
		},	//数据
		components:{	//注册组件
			UcNav,
			UcBotton,
			UcInput
		},	//注册组件
		mounted(){
			
			Notify({ type: 'primary', message: '您正在注册界面' });
		},	//挂载后
		updated(){},	//更新时
		methods:{
			// upload(){
			// 	let file=document.getElementById('file');
			// 	file.click()
			//   },
			  
		reg(){
			let formData = new FormData();
			formData.append('username',this.username)
			formData.append('password',this.password)
			
			// let file=document.getElementById('file');
			// formData.append('icon',file.files[0]);
			
			axios({
			url: '/api/reg',
			method: 'post',
			data: formData
			}).then(
			res => {
				if(res.data.err==0){
				//   console.log(res.data);
				this.$router.push('/login')
				}else{
				this.mess=res.data.msg
				}
			}
			)
		}
    }
  }
</script>

<style scoped>
	.reg h1{height:1rem;width:2.6rem;position: fixed;top:15%;left:50%;margin-left:-1.3rem;font-size: 0.3rem;text-align: center;line-height: 1rem;border-radius:2rem;border:0.05rem solid #000;}
	.reg{height:11.34rem;width:100%;overflow: hidden;font-size: 0.35rem;background:url(../assets/images/login_bg2.jpg) no-repeat center;}
	.reg .content{width:100%;display: flex;justify-content: center;}
	.reg .content p{font-size: 0.35rem;margin-top:3rem;}
	.reg .content span{font-size: 0.5rem;}
</style>