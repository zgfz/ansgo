<template>
	<div class="uc-cell" @click="getDetail">
		<div class="box4">
			<div class="main_phone1">
				<div><a href="#"><img :src="$baseUrl+data.images"></a></div>
				<div class="name">{{data.name}}</div>
				<div class="brief"><p>{{data.detail}}</p></div>
				<div class="price"><span>{{data.price}}</span><span class="price old"><s>1399</s></span></div>
				<div class="buybtn mauto"> 立即购买</div>
			</div>
		</div>
	</div>
</template>

<script>
		export default{
		name:'uncell',
		data(){
			return {}
		},	//数据
		props:{
			data:{
				type:Object,
				default:function(){
					return {}
				}
			},
			dataName:{
				type:String,
				default:null
			},
			index:{
				type:Number,
				default:null
			},
			isJump:{
				type:Boolean,
				default:true
			}

		},
		components:{},	//注册组件
		mounted(){
			// console.log(this.data);
			
		},	//挂载后
		updated(){},	//更新时
		methods:{
			getDetail(){
				this.isJump && this.$router.push('./detail/'+data._id+'?dataName='+this.dataName)
			}
		}	//方法
	}
</script>

<style scoped>
	.uc-cell .box4{float:left;margin-bottom:0.1rem;text-align: center;width:50%;}
	.uc-cell .box4 img{height:3rem;width:100%;display: block;background:#eee;}

	.uc-cell .main_phone1 .box4{text-align: center;}
	.uc-cell .main_phone1 .name{font-size:0.28rem;}
	.uc-cell .main_phone1 .brief{margin-top: .06rem;font-size: .22rem;line-height:0.3rem;color: rgba(0,0,0,.54);text-align: center;
	}
	.uc-cell .main_phone1 .brief p{height:0.6rem;text-overflow: ellipsis;overflow : hidden;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin:0 0.4rem;}
		
	.uc-cell .main_phone1 .price{font-size: .28rem;color: #ea625b;height: 1.5em;line-height: 1.5em;position: relative;display: inline-block;}
	.uc-cell .main_phone1 .price s{font-size:.22rem;color: rgba(0,0,0,.54);}
	.uc-cell .main_phone1 .buybtn{width: 2rem;background: #ea625b;border-radius: .05rem;color: #fff;font-size: .24rem;padding: .16rem 0;font-weight: 700;margin-left:0.6rem;}
</style>
