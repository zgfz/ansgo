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

		<!-- 调用方跳转 -->
		<router-link
			v-for='(item,index) of list'
			:key="item._id"
			:to="`/detail/${item._id}?dataName=home`">
			<uc-cell :isJump="false" :data="item"/>
		</router-link>

		<!-- <Footer/> -->
	</div>
</template>

<script>
	// 引入
	import Header from '../layouts/header'
	// import Footer from '@/layouts/footer.vue'
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
			// Footer,
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
