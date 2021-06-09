<template>
  <div class="bar_bg">
    <div class="echarts_title">近七日盈利成本对比</div>
    <!-- 左侧条形统计图 -->
    <div ref="bar" :style="{ width: '740px', height: '400px' }"></div>
  </div>
</template>
<script >
import Echartsinit from "@/common/echarts_init";
import option from "./index";
import store from "@/views/pc/adminDataEcharts/store";
export default {
  computed: {
    Height() {
      return store.state.height;
    },
  },
  data() {
    return {
      charts: null,
    };
  },
  methods: {
    setHeight() {
      store.setHeight(window.innerHeight);
    },
    setOptionEcharts(data) { 
      var options = option;
      options["xAxis"][0]["data"] = data["date"];
      options["series"][0]["data"] = data["data1"];
      options["series"][1]["data"] = data["data2"]; 
      this.charts.setOption(options); 
    },
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      that.charts = Echartsinit.init(that.$refs.bar, option);
    });
  },
};
</script> 
<style>
.bar_bg {
  background-image: url("~@/assets/big_screen/rightBar.png");
  background-size: 100% 100%;
}
</style>