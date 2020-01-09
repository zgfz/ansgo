<template>
	<div class="Shopcar">
		<!-- 图 -->
		
		<UcNav/>

		<!-- 滑动区域 -->
		<!-- left -->
		<van-swipe-cell style="margin-top:0.7rem;">
			<template slot="left">
				<van-button square type="primary" text="选择" style="height:100%;"/>
			</template>

		<!-- content -->
		<van-card
			price="199.00"
			desc="很好看"
			title="夏天白色衬衫"
			thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
			>
			<div slot="tags">
				<van-tag plain type="danger">白色</van-tag>
				<van-tag plain type="danger">修身</van-tag>
			</div>
			<div slot="footer">
				<!-- <van-button size="mini">按钮</van-button>
				<van-button size="mini">按钮</van-button> -->
				<van-stepper v-model="num" integer input-width="40px" button-size="32px" />
			</div>
		</van-card>

			<!-- right -->
			<template slot="right">
				<van-button square type="danger" text="删除" style="height:100%;"/>
				<van-button square type="primary" text="收藏" style="height:100%;"/>
				

			</template>
		</van-swipe-cell>

		<van-submit-bar style="margin-bottom:1rem;"
			:price="3050"
			button-text="提交订单"
			@submit="onSubmit"
			>
			<van-checkbox v-model="checked">全选</van-checkbox>
			<span slot="tip">
				你的收货地址不支持同城送, <span>修改地址</span>
			</span>
		</van-submit-bar>

		<!-- footer -->
		<Footer/>
	</div>
</template>

<script>
//图
import Vue from 'vue';
import { Card } from 'vant';
Vue.use(Card);

//左右滑 
import { SwipeCell } from 'vant';
Vue.use(SwipeCell);

// 按钮
import { Stepper } from 'vant';
Vue.use(Stepper);

// 提交订单栏
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

import UcNav from '../components/uc-nav/uc-nav.vue'
import Footer from '@/layouts/footer.vue'
	export default{
		data(){
			return {
				value:1
			}
		},	//数据
		components:{
			Footer,
			UcNav,
		},	//注册组件
		mounted(){},	//挂载后
		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>

</style>
