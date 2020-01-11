import axios from 'axios';
import Vue from 'vue';
import vm from '../main.js';


// // 添加一个请求的拦截
axios.interceptors.request.use((config) => {
  // Do 请求发出去之前,做点事
  // console.log('请求拦截');
  vm.bLoading = true;
  return config;
}, function (error) {
  // 请求错误时做点事
  return Promise.reject(error);
});

//添加一个响应拦截
axios.interceptors.response.use(function (response) {
    // console.log('响应拦截');
    vm.bLoading = false;
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });

Vue.prototype.$axios=axios;
window.axios=axios;



