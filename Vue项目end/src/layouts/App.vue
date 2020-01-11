<template>
  <div id="app">	
	<loading v-show="this.$root.bLoading"/>
	<Header v-show="this.$root.bNav"/>
	<!-- <Header/> -->
	<!-- <Home/> -->
	<router-view></router-view>
	<Footer v-show="this.$root.bFoot"/>
	<!-- <Detail/> -->
	<!-- <Login/> -->
	<!-- <Reg/> -->
	<!-- <User/> -->
	<!-- <ShopCar/> -->
	<!-- <Footer/> -->

  </div>
</template>

<script>
	// import User from '../pages/user.vue'
	// import Reg from '../pages/reg.vue'		//注册
	// import Login from '../pages/login.vue'	//登录
	// import ShopCar from '../pages/shopcar.vue'	
	// import Detail from '../pages/detail.vue'	//详情
	import Header from './header.vue'	//top
	import Home from '../pages/home.vue'	//主页
	import Footer from './footer.vue'	//footer
	import Loading from '../components/loading.vue'	//footer

	// import $ from 'j/query';
	// import Swipe from '../assets/js/swipe.js'
	// let Swipe = require('../assets/js/swipe.js')

	export default{
		name:"App",
		components:{
			// Detail,	
			// Header,
			Home,
			// Footer,
			// ShopCar,
			Loading,
			// Login,
			// Reg,
			// User
		},
		mounted(){
      
    },
    
    // 路由监听|属性检测|数据观测
    watch:{
      $route:{
        handler(nextValue,PrevValue){
        //   console.log('path变化',nextValue.path);
          
          let path = nextValue.path;//路由路径  /follow
          //修改集中式的数据
          
          if(/login|reg|detail/.test(path)){
            this.$root.bNav=this.$root.bFoot=false;
          }
          if(/home|follow|column/.test(path)){
            this.$root.bNav=this.$root.bFoot=false;
          }
          if(path.includes('user')){
            this.$root.bNav=false;
            this.$root.bFoot=true;
          }
        },
        immediate:true
      }
    },
	}

</script>

<style scoped>

</style>>


</style>
