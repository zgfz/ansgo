<template>
	<div class="follow">
		<UcNav/>
		<div class="w1">
			<img src="../assets/images/p1.jpg">
		</div>
		<div class="w2">
		 <router-link tag="li" :to="{path:'/detail/1'}">
			<img src="../assets/images/p2.jpg">
			<img src="../assets/images/p3.jpg">
			<img src="../assets/images/p6.jpg">
			<img src="../assets/images/p5.jpg">
			<img src="../assets/images/p6.jpg">
			<img src="../assets/images/p7.jpg">
		</router-link>
		</div>
		<div class="box1">
			 <router-link tag="li" :to="{path:'/detail/1'}"><img src="../assets/images/a1.jpg" alt=""></router-link>
		</div>
		<div class="box2">
			 <router-link tag="li" :to="{path:'/detail/1'}"><img src="../assets/images/a2.png" alt=""></router-link>
			 <router-link tag="li" :to="{path:'/detail/1'}"><img src="../assets/images/a3.jpg" alt=""></router-link>	
		</div>
		<div class="box3">
			 <router-link tag="li" :to="{path:'/detail/1'}"><img src="../assets/images/a4.jpg" alt=""></router-link>	
		</div>
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav.vue'
	import UcCell from '../components/uc-cell.vue'
	
	export default{
		data(){
			return {}
		},	//数据
		components:{
			UcNav,
			UcCell,

		},	//注册组件
		mounted(){
			
		},	//挂载后
		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>

	.follow{width:100%;}
	.follow .w1{width:100%;}
	.follow .w1 img{width:100%;height:10rem;display: block;}
	.follow .w2 img{width:100%;height:2rem;display: block;}
	.follow .box1{height:4rem;width:50%;float:left;}
	.follow .box1 img{height:4rem;width:100%;display: block;}

	.follow .box2{width:50%;float:left;}
	.follow .box2 img{height:2rem;width:100%;display: block;}

	.follow .box3 img{height:2rem;width:100%;display: block;}
</style>
