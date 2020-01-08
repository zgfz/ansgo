<template>
	<!-- 头 -->
		<div class="nav" :style="{'background':'bgColor'}">
			<ul>
				<li class="l-btn" @click="goback"><img src="./assets/t1.jpg"></li>
				<!-- <li class="r-btn"><img src="./assets/share.jpg"></li> -->
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
	.nav ul li.r-btn img{float:right; height: 0.7rem;}

</style>
