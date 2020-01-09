<template>
	<div class="home">
		<!-- 导航部分 -->
		<Header/>

		<!-- 搜索 -->
		<div class="home_box">
			<input type="text" class="search_inp" name="search" placeholder="请输入关键词">
		</div>
		
		<!-- 轮播 -->
		<banner/>

		<!-- 通知栏 -->
		<van-notice-bar
		text="120Hz高帧率流速屏 / 小米6400万前后六摄 / 6.67''小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC"
		left-icon="volume-o"
		/>


		<!-- 调用方跳转 -->
		<lazy-component>
		<router-link
			v-for='(item,index) of list' v-lazy="item"
			:key="item._id"
			:to="`/detail/${item._id}?dataName=home`">
			
			<uc-cell :isJump="false" :data="item"/>
		</router-link>
		</lazy-component>
		<Footer/>

	</div>
</template>

<script>
	// 引入通知栏
import Vue from 'vue';
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);

// // 懒加载
import { Lazyload } from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload, {
  lazyComponent: true
});

	import Header from '../layouts/header'
	import Footer from '@/layouts/footer.vue'
	import Banner from '@/components/banner.vue'
	import UcCell from '@/components/uc-cell.vue'

	export default{
		name:'home',
		data(){
			return {
				list:[]
			}
		},	//数据
		// 注册组件
		components:{
			Header,
			Banner,
			'uc-cell':UcCell,
			Footer,
		},	//注册组件
		mounted(){
			this.$axios({
				url:'/api/follow',
				params:{_page:1,_limit:10}
				// url:'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10',	//第三方
				// params:{start:0,count:1}	//第三方、
			}).then(
				res=>this.list=res.data.data
			)
		},	//挂载后
		
		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>
.home_box{border-top:0.05rem solid #fff;padding:0.1rem 0;height:0.6rem;display: flex;justify-content: center;align-items: center;background-color: #000;}
.home_box .search_inp{background:#fff;display: block;width:80%;height:0.5rem;border-radius:0.5rem;text-indent: 0.5rem;}

	

</style>
