<template>
  <div class="banner2">
    <ul class="clearfix">
      <li>
        <img src="../assets/images/bannera.jpg" alt />
        <div class="text-box">
          <p></p>
        </div>
      </li>
      <li>
        <img src="../assets/images/bannerb.jpg" alt />
        <div class="text-box">
          <p></p>
        </div>
      </li>
      <li>
        <img src="../assets/images/bannerc.jpg" alt />
        <div class="text-box">
          <p></p>
        </div>
      </li>
      <li>
        <img src="../assets/images/bannerd.jpg" alt />
        <div class="text-box">
          <p></p>
        </div>
      </li>
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
    new Swipe($(".banner2")[0], {
      auto: false,
      continuous: true,
      stopPropation: true,
      callback: function(index, element) {
        $(".banner2 ol li").removeClass("active");
        $(".banner2 ol li")
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
.banner2 {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.banner2 ul li {
  float: left;
  position: relative;
}
.banner2 ul li img {
  display: block;
  width: 100%;
  height: 7rem;
}
.banner2 ul li .text-box {
  width: 100%;
  text-align: center;
  height: 1rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0,);
}

.text-box p {
  line-height: 100%;


}

.banner2 ol {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}
.banner2 ol li {
  width: 0.15rem;
  height: 0.15rem;
  background: #5477b2;
  float: left;
  border-radius: 50%;
  margin-right: 0.08rem;
}
.banner2 ol li.active {
  background: #fff;
}
</style>
