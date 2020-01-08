<template>
	<div class="foot-btn">
        <ul>
            <li class="a1"><a><img src="./assets/images/q2.jpg"></a></li>
            <li class="a1"><a><img src="./assets/images/q1.jpg"></a></li>
            <li class="a1"><a><img src="./assets/images/q3.jpg"></a></li>
            <li class="a2 a3"><a><p>加入购物车</p></a></li>
            <li class="a2 a4"><a><p>收藏</p></a></li>
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
    .foot-btn{width:100%;}
    .foot-btn ul{display: flex;position: fixed;left:0;bottom:0;right:0;}
    .foot-btn ul li{display: flex;align-items: center;justify-content: center;}
    .foot-btn ul li img{display:block;flex:1;height:0.8rem;}
    .foot-btn ul li.a2{flex:2;}
    .foot-btn ul li a{color:#fff;text-align: center;font-size:0.30rem;}
    .foot-btn ul li.a3{background: #00C3F4;height:0.8rem;}
    .foot-btn ul li.a4{background: #f0415f;height:0.8rem;}
</style>
