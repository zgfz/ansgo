<template>
	<div class="column">
		<UcNav/>
		<div class="w3"></div>
				<!-- 调用方跳转 -->
		<router-link
			v-for='n of 6'
			:key="n"
			:to=" '/detail/'+n ">
		<div class="box1">
			<div class="main_ball">
				<div><a href="#"><img src="../assets/images/ball1.png" alt=""></a></div>
				<div class="name">  斯伯丁Spalding&nbsp;比赛篮球74-604Y&nbsp;室内外PU耐磨7号NBA蓝球  </div>
				<div class="detail">6400万全场景四摄</div>
				<div class="price"><span>169.00</span><span class="price old"><s>1399</s></span></div>
				<div class="buybtn mauto">立即购买</div>
			</div>
		</div>
		</router-link>
		
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav'	
	// import Footer from '@/layouts/footer.vue'
	export default{
		name:'column',
		data(){
			return {
				list:[]
			}
		},	//数据
		components:{
			UcNav,
		},	//注册组件

		mounted(){
			this.$axios({
				url:'/api/column',
				params:{_page:1,_limit:6}
			}).then(
				res=>this.list=res.data.data
			)
		},

		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>
	.column .box1{float:left;margin-bottom:0.1rem;text-align:center;width:50%;margin-top:0.1rem;}
	.column .box1 img{height:3rem;width:80%;height:100%;}
	.column .w3{margin-top:0.7rem;}
	.column .main_ball .box1{text-align: center;}
	.column .main_ball .name{font-size:0.18rem;}
	.column .main_ball .brief{margin-top: .06rem;font-size: .22rem;line-height: .3rem;color: rgba(0,0,0,.54);}
	.column .main_ball .price{font-size: .28rem;color: #000;height: 1.5em;line-height: 1.5em;position: relative;display: inline-block;}
	.column .main_ball .price s{font-size:.22rem;color: rgba(0,0,0,.54);}
	.column .main_ball .buybtn{width: 2rem;background: #000;border-radius: .05rem;color: #fff;font-size: .24rem;padding: .16rem 0;font-weight: 700;margin-left:0.6rem;}
	.column .w4{height:1rem;}
</style>
