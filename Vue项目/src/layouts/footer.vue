<template>
	<div class="foot-btn" >
		<ul>
			<router-link class="home" tag="li" to="/home" active-class="home_active"><a href="javascript:;"></a></router-link>
			<router-link class="write" tag="li" to="/shopcar" active-class="write_active"><a href="javascript:;"></a></router-link>
			<router-link class="my" tag="li" to="/user" active-class="my_active"><a href="javascript:;"></a></router-link>
			<!-- <li class="home"><a href="index_m.html"></a></li>
			<li class="write"><a href="javascript:;"></a></li>
			<li class="my"><a href="mydoc_m.html"></a></li> -->
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		},	//数据
		components:{},	//注册组件
		mounted(){},	//挂载后
		updated(){},	//更新时
		methods:{}	//方法
	}
</script>

<style scoped>
  .foot-btn{height:1rem;width:100%;background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  
  .foot-btn ul{height:1rem;display: flex;justify-content:space-around;align-items:center;}
  .foot-btn ul li{}
  .foot-btn ul li a{display:block;width:100%;height:100%;}

  .foot-btn ul .home{width:0.8rem;height:0.8rem;background:url(../assets/images/home.png) no-repeat 0 0; background-size:100%;}
  .foot-btn ul .home_active{width:0.8rem;height:0.8rem;background:url(../assets/images/home_active.png) no-repeat 0 0;background-size:100%;}

  .foot-btn ul .write{width:0.8rem;height:0.8rem;background:url(../assets/images/write.png) no-repeat 0 0; background-size:100%;}
  .foot-btn ul .write_active{width:0.8rem;height:0.8rem;background:url(../assets/images/write_active.png) no-repeat 0 0;background-size:100%;}

  .foot-btn ul .my{width:0.8rem;height:0.8rem;background:url(../assets/images/my.png) no-repeat 0 0;background-size:100%;}
  .foot-btn ul .my_active{width:0.8rem;height:0.8rem;background:url(../assets/images/my_active.png) no-repeat 0 0;background-size:100%;}
</style>
