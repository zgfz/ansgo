<template>
  <div class="banner">
    <ul class="clearfix">
      <router-link tag="li" :to="{path:'/detail/1'}">
        <img src="../assets/images/banner1.jpg" alt />
        <div class="text-box">
          <h2>我的外卖你挡不住的</h2>
          <p>速速订餐</p>
        </div>
      </router-link>

      <router-link tag="li" :to="{path:'/detail/1'}">
        <img src="../assets/images/banner2.jpg" alt />
        <div class="text-box">
          <h2>免费活动</h2>
          <p>喜迎元旦</p>
        </div>
      </router-link>

      <router-link tag="li" :to="{path:'/detail/1'}">
        <img src="../assets/images/banner3.jpg" alt />
        <div class="text-box">
          <h2>新年新气象</h2>
          <p>万岁</p>
        </div>
      </router-link>

      <router-link tag="li" :to="{path:'/detail/1'}">
        <img src="../assets/images/banner4.jpg" alt />
        <div class="text-box">
          <h2>早上一碗</h2>
          <p>美滋滋</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
import Swipe from "../assets/js/swipe.js";

export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    new Swipe($(".banner")[0], {
      auto: 2000,
      continuous: true,
      stopPropation: true,
      callback: function(index, element) {
        $(".banner ol li").removeClass("active");
        $(".banner ol li")
          .eq(index)
          .addClass("active");
      }
    });
  },
  updated() {},
  methods: {}
};
</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.banner ul li {
  float: left;
  position: relative;
}
.banner ul li img {
  display: block;
  width: 100%;
  height: 3.5rem;
}
.banner ul li .text-box {
  width: 100%;
  text-align: center;
  height: 1rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.text-box h2 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.22rem;
  line-height: 100%;
  margin-bottom: 0.22rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text-box p {
  line-height: 100%;
}

.banner ol {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}
.banner ol li {
  width: 0.15rem;
  height: 0.15rem;
  background: #5477b2;
  float: left;
  border-radius: 50%;
  margin-right: 0.08rem;
}
.banner ol li.active {
  background: #fff;
}
</style>
