<template>
	<div class="go">
    <span>{{label}}</span>
    <input type="text" :value="value" @input="$emit('input',$event.target.value)"/>
	</div>
</template>

<script>
	export default {
    data(){return {}},
    props:{
      value:{
        type:String,
        default:''
      },
      label:{
        type:String,
        default:'标题'
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.go{width:100%;padding:0 0.5rem;}
	.go input{height:0.6rem;width:70%;margin:10px 0;border-radius: 0.5rem;text-align: center;}
	.go .user{background: #fff;margin-top:0.5rem;}
	.go .pwd{background: #fff;}
</style>
