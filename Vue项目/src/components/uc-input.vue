<template>
	<div class="go">
		账号: <input type="text" placeholder="请输入账号..." class="user"><br/>
		密码: <input type="text" placeholder="请输入密码..." class="pwd">
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		},	//数据
		components:{},	//注册组件
		mounted(){},	//挂载后
		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>
	.go{width:100%;padding:0 0.5rem;}
	.go input{height:0.6rem;width:70%;margin:10px 0;border-radius: 0.5rem;text-align: center;}
	.go .user{background: #fff;margin-top:0.5rem;}
	.go .pwd{background: #fff;}
</style>
