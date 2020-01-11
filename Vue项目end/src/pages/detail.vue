<template>
	<div class="detail">
		<!-- header -->
		<UcNav></UcNav>

		<Banner2></Banner2>

		<!-- content -->
		<div class="content">
			<div class="detail_connect">
				<span>Redmi Note 8 Pro</span>
				<p><i>「6GB+64GB闪降100元，到手价仅需1199元，加30元得黑鲨游戏手柄套装，延保享8折优惠」</i>6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速</p>
			</div>
			<div class="about">
				<p>￥1199<s>￥1399</s></p>
			</div>
		</div>
		
		<div class="detail_list">
			<p>商品详情</p>
			<img src="../assets/images/detail1.jpg" />
			<img src="../assets/images/detail2.jpg" />
			<img src="../assets/images/detail3.jpg" />
		</div>

		<!-- foot -->
		<!-- <UcToolbar></UcToolbar> -->

		<!--  -->
		<van-goods-action>
		<van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
		<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
		<van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
		<van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
		</van-goods-action>

	</div>
</template>

<script>
	import Vue from 'vue';
	import {
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton
	} from 'vant';

	Vue
	.use(GoodsAction)
	.use(GoodsActionIcon)
	.use(GoodsActionButton);

	import UcNav from '../components/uc-nav/uc-nav'
	// import UcToolbar from '../components/uc-toolbar/index'
	import Banner2 from '@/components/banner2.vue'
	export default{
		name:"detail",
		data(){
			return {
				// detail:{}
			}
		},	//数据
		components:{
			Banner2,
			UcNav,
			// UcToolbar,
		},	//注册组件
		mounted(){
			// this.$axios({
			// 	url:'/api/' + this.$route.query.dataName+ '/' +this.$route.params._id,
			// }).then(
			// 	res=>this.detail=res.data.data
			// )
		},	//挂载后
		updated(){},	//更新时
		methods:{
			onClickIcon() {
			Toast('点击图标');
			},
			onClickButton() {
			Toast('点击按钮');
			}
		}	//方法
	}




</script>

<style scoped>

.content{}
.content .detail_connect{}
.content .detail_connect span{display: block;font-size: .4rem!important;line-height: 2em;margin-left:0.3rem;}
.content .detail_connect p{line-height: 1.5em;word-break: break-all;color: rgba(0,0,0,.54);padding:0 0.3rem;}
.content .detail_connect p i{color: rgb(255, 74, 0);}

.content .about{margin-top:0.2rem;}
.content .about p{height:0.8rem;color: #ff6700;font-size: .48rem;position: relative;padding-left: .5em;}
.content .about p s{margin-left: .16rem;color: rgba(0,0,0,.54);font-size: .24rem;text-decoration: line-through;}

.detail_list{height:5rem;width:100%;}
.detail_list p{height:0.5rem;text-align: center;font-size: 0.5rem;margin:0.2rem 0;border-top: 0.1rem solid #eee;}
.detail_list img{height:10rem;width:100%;}
</style>
