<template>
	<div id="main">
	<UcNav/>
		<img src="../assets/images/main-bg.jpg">
		<a href="./home">去首页</a>
		
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav'
	export default{
		data(){
			return {}
		},	//数据
		components:{
			UcNav,
		},	//注册组件
		mounted(){},	//挂载后
		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>
	html,body{width:100%;height:100%;}
	#main{width:100%;height:100%;}
	#main img{width:100%;height:100%;}
	#main a{position: fixed;top:63%;z-index: 9999;display: block;left:50%;margin-left:-2rem;color:#fff;font-size: 0.4rem;width:4rem;;height:1rem;background:#000;line-height: 1rem;text-align: center;border-radius:0.5rem;}
</style>
