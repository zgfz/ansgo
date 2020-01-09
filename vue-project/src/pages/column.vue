<template>
	<div class="column">
		<UcNav/>
		<div class="w3"></div>
				<!-- 调用方跳转 -->
		<router-link
			v-for='(item,index) of list'
			:key="item._id"
			:to="`/detail/${item._id}?dataName=column`">
			<uc-cell :isJump="false" :data="item"/>
		<!-- <div class="box1">
			<div><a href="#"><img :src="data.images" alt=""></a></div>
			<div class="name">{{data.name}}</div>
			<div class="detail">{{data.detail}}</div>
			<div class="price"><span>{{data.price}}</span><span class="price old"><s>1399</s></span></div>
			<div class="buybtn mauto">立即购买</div>
		</div> -->
		</router-link>
		
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav'	
	import UcCell from '../components/uc-cell'	
	// import Footer from '@/layouts/footer.vue'
	export default{
		name:'column',
		data(){
			return {
				list:[]
			}
		},

		//数据
		components:{
			UcNav,
			'uc-cell':UcCell,
		},	//注册组件

		mounted(){
			this.$axios({
				url:'/api/follow',
				params:{_page:1,_limit:6}
			}).then(
				res=>this.list=res.data.data
			)
		},

		updated(){},	//更新时
		methods:{
			
		}	//方法
	}
</script>

<style scoped>
	/* .column .box1{float:left;margin-bottom:0.1rem;text-align:center;width:50%;margin-top:0.1rem;}
	.column .box1 img{height:3rem;width:80%;height:100%;}
	.column .w3{margin-top:0.7rem;}
	.column .box1{text-align: center;}
	.column .name{font-size:0.18rem;}
	.column .brief{margin-top: .06rem;font-size: .22rem;line-height: .3rem;color: rgba(0,0,0,.54);}
	.column .price{font-size: .28rem;color: #000;height: 1.5em;line-height: 1.5em;position: relative;display: inline-block;}
	.column .price s{font-size:.22rem;color: rgba(0,0,0,.54);}
	.column .buybtn{width: 2rem;background: #000;border-radius: .05rem;color: #fff;font-size: .24rem;padding: .16rem 0;font-weight: 700;margin-left:0.6rem;}
	.column .w4{height:1rem;}	 */
</style>
