<template>
  <div class="TCMP_big_top">
    <div
      :style="{ backgroundImage: 'url(' + item['bg'] + ')' }"
      v-for="item in topList"
      :key="item['id']"
      class="TCMP_big_top_content"
    >
      <div class="TCMP_big_top_left">
        <div class="TCMP_big_top_left_one">{{ item["title"] }}</div>
        <div class="TCMP_big_top_left_two">{{ item["scan"] }}</div>
      </div>
      <div
        class="TCMP_big_top_right"
        :style="{ backgroundImage: item['linear'] }"
      >
        <!-- ,backgroundImage:item['linear'] -->
        <span :style="{ fontSize: '55px', fontWeight: 'bold' }">{{
          item["data"]
        }}</span>
        <!-- <span style="font-weight:bold;font-size:25px;"> / {{ item["unit"] }}</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      storeState: store.state,
    };
  },
  computed: {
    topList() {
      return [
        {
          id: 1,
          title: "推荐人",
          scan: "全部推荐人统计",
          data: this.storeState["allTableData"]["topData"]["references_count"],
          unit: "人",
          bg: require("@/assets/big_screen/greenBox.png"),
          linear: "-webkit-linear-gradient(bottom, #19c37c, #a2fad4)",
        },
        {
          id: 2,
          title: "医生",
          scan: "全部医生统计",
          data: this.storeState["allTableData"]["topData"]["doctor_count"],
          unit: "人",
          bg: require("@/assets/big_screen/greenBox.png"),
          linear: "-webkit-linear-gradient(bottom, #19c37c, #a2fad4)",
        },
        {
          id: 3,
          title: "订单",
          scan: "全部订单总数",
          data: this.storeState["allTableData"]["topData"]["order_count"],
          unit: "条",
          bg: require("@/assets/big_screen/blueBox.png"),
          linear: "-webkit-linear-gradient(bottom, #10afff, #88dcfe)",
        },
        {
          id: 4,
          title: "待审批认证",
          scan: "未审核的认证医生",
          data: this.storeState["allTableData"]["topData"][
            "toBeReviewed_count"
          ],
          unit: "条",
          bg: require("@/assets/big_screen/blueBox.png"),
          linear: "-webkit-linear-gradient(bottom, #10afff, #88dcfe)",
        },
        {
          id: 5,
          title: "待审批提现",
          scan: "未审核的提现申请",
          data: this.storeState["allTableData"]["topData"][
            "references_count"
          ],
          unit: "人",
          bg: require("@/assets/big_screen/greenBox.png"),
          linear: "-webkit-linear-gradient(bottom, #19c37c, #a2fad4)",
        },
      ];
    },
  },
  methods: {},
};
</script>

<style>
.TCMP_big_top {
  color: #fff;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  width: 98%;
  margin: 0 auto;
}
.TCMP_big_top_content {
  display: flex;
  padding: 10px 25px;
  width: 19%;
  justify-content: space-around;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.TCMP_big_top_left {
  vertical-align: middle;
  flex: 2;
}
.TCMP_big_top_right {
  vertical-align: middle;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* flex:2; */
}
.TCMP_big_top_left_one {
  font-size: 30px;
}
.TCMP_big_top_left_two {
  color: rgba(255, 255, 255, 0.4);
  font-size: 15px;
  margin-top: 5px;
}
</style>