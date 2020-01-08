<template>
	<div class="footbox">
		<input type="submit" :value='text' class="log"><br/>
		<a href="javascript:;" class="tishi">忘记密码?</a>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		},	//数据
		props:{
			text:{
				type:String,
				default:'默认按钮'
			}
		},
		components:{
			
		},	//注册组件
		mounted(){},	//挂载后
		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>
	.footbox .log{background: #00f;width:3rem;color:#fff;font-size:0.35rem;margin:0.6rem 0 0.2rem 1.8rem;border-radius: 0.5rem;text-align: center;height:0.6rem;}
	.footbox .tishi{color:#000;margin-left:0.5rem;font-size:0.3rem;}
</style>
