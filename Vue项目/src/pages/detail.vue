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

		<!-- foot -->
		<UcToolbar></UcToolbar>
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav'
	import UcToolbar from '../components/uc-toolbar/index'
	import Banner2 from '@/components/banner2.vue'
	export default{
		data(){
			return {}
		},	//数据
		components:{
			Banner2,
			UcNav,
			UcToolbar,
		},	//注册组件
		mounted(){},	//挂载后
		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>

.content{}
.content .detail_connect{}
.content .detail_connect span{display: block;font-size: .4rem!important;line-height: 2em;margin-left:0.3rem;}
.content .detail_connect p{line-height: 1.5em;word-break: break-all;color: rgba(0,0,0,.54);padding:0 0.3rem;}
.content .detail_connect p i{color: rgb(255, 74, 0);}

.content .about{margin-top:0.2rem;}
.content .about p{color: #ff6700;font-size: .48rem;position: relative;padding-left: .5em;line-height: 1em;}
.content .about p s{margin-left: .16rem;color: rgba(0,0,0,.54);font-size: .24rem;text-decoration: line-through;}

</style>
