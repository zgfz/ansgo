<template>
	<!-- 头 -->
		<div class="nav" :style="{'background':'bgColor'}">
			<ul>
				<li class="l-btn" @click="goback"><img src="./assets/t1.jpg"></li>
				<li class="r-btn"><a href="/home">回到首页</a></li>
			</ul>
		</div>
</template>

<script>
	export default{	
		data(){
            return {}
		},	//数据
		props:{
			bgColor:{
				type:String,
				default:'#fff',
			},
		},
		components:{
			
		},	//注册组件
		mounted(){},	//挂载后
		updated(){},	//更新时
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}	//方法
	}
</script>

<style scoped>
	.nav{height:0.7rem;background: #fff;position:fixed;left:0;top:0;right:0;z-index: 999;}
	.nav ul{width:100%;}
	.nav ul li.l-btn img{float:left; height: 0.7rem;}
	.nav ul li.r-btn a{float:right; height: 0.7rem;font-size:0.4rem;line-height: 0.7rem;padding:0 0.2rem;}

</style>
