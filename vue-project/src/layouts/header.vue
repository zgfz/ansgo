<template>
	<!-- 导航 -->
	<div class="nav">
		<ul>
			<router-link tag="li" to="/home">
				<a href="javascript:;"><img src="../assets/images/shoes.jpg"/></a><span>手机</span>
			</router-link>

			<router-link tag="li" to="/follow">
				<a href="javascript:;"><img src="../assets/images/clothes.jpg"/></a><span>电脑</span>
			</router-link>

			<router-link tag="li" to="/column">
				<a href="javascript:;"><img src="../assets/images/ball.jpg"/></a><span>体育</span>
			</router-link>

			<router-link tag="li" to="/more">
				<a href="javascript:;"><img src="../assets/images/computer.jpg"/></a><span>更多</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	ul{width:100%;height:1.3rem;display: flex;font-size:0.2rem;text-align: center;background:#000;color:#fff;overflow: hidden;align-items: center;}
	ul li{flex:1;}
	ul li a{display: block;display: flex;justify-content:space-around;}
	ul li a img{display: block;width:0.8rem;height:0.8rem;border-radius: 50%;margin-top:0.05rem solid #fff;margin:0.05rem 0;}
</style>
