<template>
	<div class="reg">
		<!-- <div class="reg_top"> -->
			<UcNav></UcNav>
		<!-- </div> -->
		<!-- <div class="reg_bg"></div> -->
		<div class="content">
			<p>
				<router-link tag="span" to="./login">
					登录|
				</router-link>
				<router-link tag="span" to="./reg">
					注册
				</router-link>
				<!-- <span>登录|</span>
				<span>注册</span> -->
			</p>
		</div>
		<!-- 输入框 -->
			<UcInput></UcInput>
		<!-- 登录按钮 -->
			<UcBotton text="注册"></UcBotton>
		
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav'	//引入导航
	import UcBotton from '../components/uc-botton'	//引入按钮
	import UcInput from '../components/uc-input'	//引入输入框

	export default{
		data(){
			return {}
		},	//数据
		components:{	//注册组件
			UcNav,
			UcBotton,
			UcInput
		},	//注册组件
		mounted(){},	//挂载后
		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>
	.reg{height:11.34rem;width:100%;overflow: hidden;font-size: 0.35rem;background:url(../assets/images/login_bg2.jpg) no-repeat center;}
	.reg .content{width:100%;display: flex;justify-content: center;}
	.reg .content p{font-size: 0.35rem;margin-top:3rem;}
	.reg .content span{font-size: 0.5rem;}
</style>