<template>
	<div class="user">
		<!-- 头 -->
		<div class="user_top">
			<p class="p1">
				<a href="javascript:;"><img :src="$baseUrl + data.icon" alt="" /></a>
			</p>
			<p class="p2">
				<a href="javascript:;" style="margin-left:0.3rem;">Pig</a>
				<a href="javascript:;" @click="logout" class="m1">注销</a>
			</p>
		</div>

		<!-- 订单 -->
		<div class="user_list">
			<div class="my_list">
				<span>我的订单</span>
				<p><a href="#">全部订单></a></p>
			</div>
			<div class="my_car">
				<ul>
					<li><a href="#"><img src="../assets/images/z1.png" alt=""></a><span>消息</span></li>
					<li><a href="#"><img src="../assets/images/z2.png" alt=""></a><span>订单</span></li>
					<li><a href="#"><img src="../assets/images/z3.png" alt=""></a><span>问问</span></li>
				</ul>
			</div>
		</div>

		<!-- 会员中心 -->
		<div class="user_vip">
			<ul>
				<li><a href="#"><img src="../assets/images/w1.png" alt=""><p><span>会员中心</span><i>></i></p></a></li>
				<li><a href="#"><img src="../assets/images/w2.png" alt=""><p><span>我的优惠</span><i>></i></p></a></li>
				<li><a href="#"><img src="../assets/images/w3.png" alt=""><p><span>服务中心</span><i>></i></p></a></li>
				<li><a href="#"><img src="../assets/images/w4.png" alt=""><p><span>动力之家</span><i>></i></p></a></li>
				<li><a href="#"><img src="../assets/images/w5.png" alt=""><p><span>我的F码</span><i>></i></p></a></li>
				<li><a href="#"><img src="../assets/images/w6.png" alt=""><p><span>礼物兑换</span><i>></i></p></a></li>
				<li><a href="#"><img src="../assets/images/w7.png" alt=""><p><span>设置</span><i>></i></p></a></li>
			</ul>
		</div>
		<Footer/>
	</div>
</template>

<script>
import Footer from '@/layouts/footer.vue'
	export default{
		data(){
			return {
				data:{}
			}
		},	//数据
		components:{
			Footer,
		},	//注册组件
		mounted(){},	//挂载后
		updated(){},	//更新时
		beforeRouteEnter(to,from,next){
			// 条件异步
			// 1.抓token
			let token = window.localStorage.getItem('token');
				if (token) {
					axios({
					url: '/api/user',
					headers: {
						'token': token
					}
					}).then(
						res => {
						res.data.err == 0 ? next(_this=>_this.data=res.data.data) : next('/login')
					}
					)
				}else{
					next('/login')
				}
				},
		methods:{
			logout(){
				// 注销
				window.localStorage.removeItem('token')
        		this.$router.push('/home')
			}
		}	//方法
	}
</script>

<style scoped>
	.user{}
	.user .user_top{height:1.5rem;background:#000;}
	.user .user_top p{float:left;}
	.user .user_top .p1{width:1rem;height:1rem;border-radius: 50%;margin:0.25rem;border:0.05rem solid #fff;background:#eee;}
	.user .user_top .p1 img{display:block;width:1rem;height:1rem;border-radius: 50%;}
	.user .user_top .p2{margin:0 auto;line-height: 1.5rem;}
	.user .user_top .p2 a{float:left;color:#fff;font-size:0.25rem;font-weight: 700;}
	.user .user_top .p2 .m1{margin-left: 3rem;}

	.user_list .my_list{height:0.8rem;line-height: 0.8rem;border-bottom:0.01rem solid #eee;}
	.user_list .my_list span{font-size: 0.28rem;float:left;margin-left:-1.2rem;color:#666;}
	.user_list .my_list p{float: right;margin-right:0.2rem;font-size: 0.28rem;}
	.user_list .my_list p a{}

	.user_list .my_car{height:1.5rem;border-bottom:0.01rem solid #eee;}
	.user_list .my_car ul{height:1.5rem;display: flex;justify-content:space-around;align-items: center;}
	.user_list .my_car li{}
	.user_list .my_car li span{display: block;text-align: center;font-size:0.18rem;font-weight:700;color:#666;}
	.user_list .my_car li a{display: flex;}
	.user_list .my_car li img{height:1rem;}

	.user_vip{}
	.user_vip ul{width:100%;}
	.user_vip ul li{height:1rem;width:80%;margin:0.3rem auto;border-top:0.01rem solid #eee;border-bottom:0.01rem solid #eee;}
	.user_vip ul li a{}
	.user_vip ul li a img{float: left;height:0.7rem;margin-top:0.15rem;}
	.user_vip ul li p{line-height: 1rem;}
	.user_vip ul li p span{margin-left:0.3rem;float: left;font-size:0.28rem;font-weight: 700;color:#666;}
	.user_vip ul li p i{float:right;font-size: 0.38rem;}

</style>
