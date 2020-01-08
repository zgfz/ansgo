<template>
  <div id="app">
	
	<!-- <Loading/> -->
	<!-- <Header/> -->
	<!-- <Home/> -->
	<router-view></router-view>
	<!-- <Detail/> -->
	<!-- <Login/> -->
	<!-- <Reg/> -->
	<!-- <User/> -->
	<!-- <ShopCar/> -->
	<Footer/>

  </div>
</template>

<script>
	// import User from '../pages/user.vue'
	// import Reg from '../pages/reg.vue'		//注册
	// import Login from '../pages/login.vue'	//登录
	// import ShopCar from '../pages/shopcar.vue'	
	// import Detail from '../pages/detail.vue'	//详情
	// import Header from './header.vue'	//top
	import Home from '../pages/home.vue'	//主页
	import Footer from './footer.vue'	//footer
	// import Loading from '../components/loading.vue'	//footer

	import $ from 'jquery';
	// import Swipe from '../assets/js/swipe.js'
	let Swipe = require('../assets/js/swipe.js')

	export default{
		name:"App",
		components:{
			// Detail,	
			// Header,
			Home,
			Footer,
			// ShopCar,
			// Loading,
			// Login,
			// Reg,
			// User
		},
	}
</script>

<style>


</style>
