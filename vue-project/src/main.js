import Vue from 'vue'
import App from '@/layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css';		//引入基础样式,等同于src,main里面可以优化

// import '@/assets/js/font.js'  //引入字体比例校验，等同于src，可以优化
require('@/assets/js/font.js')

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


// 引入路由对象
import router from './plugins/router.js'

// 引入axios插件的配置
import './plugins/axios'

// 引入模板变量配置
import './config/template'

new Vue({
  render: h => h(App),
  router  //展示区
}).$mount('#app')
