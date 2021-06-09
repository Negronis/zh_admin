<template>
  <div class="line_bg">
    <div class="echarts_title">近七日新增订单折线图</div>
    <!-- 右下的条形 -->
    <div ref="bar" :style="{ width: '530px', height: 379 + 'px' }"></div>
  </div>
</template>
<script>
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
    setOptionEcharts(data) {
      var options = option;
      options["xAxis"][0]["data"] = data["date"];
      options["series"][0]["data"] = data["data"]; 
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
<style >
.line_bg {
  box-sizing: border-box;
  background-image: url("~@/assets/big_screen/leftLine.png");
  background-size: 100% 100%;
}
</style>