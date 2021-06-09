<template>
  <div class="TCMP_bottomTable">
    <div class="echarts_title">订单业务历史统计表</div>
    <div class="TCMP_bottomTable_content">
      <div class="TCMP_bottomTable_title">
        <div style="flex: 1">编号</div>
        <div style="flex: 2">推荐人</div>
        <div style="flex: 2">医生</div>
        <div style="flex: 3">单位/机构</div>
        <div style="flex: 2">金额</div>
        <div style="flex: 3">日期</div>
      </div>
      <div  style="overflow:hidden;height:230px;overflow-y:scroll">
        <div
          ref="TCMP_bottomTable_content_content"
          class="TCMP_bottomTable_content_content"
          :style="{transition:`${noAmition ? '1s linear null' : '1s linear transform'}`,transform:`translate3d(0,${scrollTop}px,0)`}"
        >
          <div
            :style="{
              background: item['id'] % 2 === 0 ? '#06253b' : 'transparent',
            }"
            ref="TCMP_bottomTable_content_content_cell"
            class="TCMP_bottomTable_content_content_cell"
            v-for="item in tableData"
            :key="item['id']"
          >
            <div style="flex: 1">{{ item["id"] }}</div>
            <div style="flex: 2">{{ item["referrer_name"] }}</div>
            <div style="flex: 2">{{ item["doctor_name"] }}</div>
            <div style="flex: 3">{{ item["hospital_name"] }}</div>
            <div style="flex: 2">{{ item["total_price"] }}</div>
            <div style="flex: 3">{{ item["complete_time"] || '暂无' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderBusinessHistoryStatistics } from "@/common/data";
export default {
  data() {
    return {
      tableData: [],
      timer: null, 
      noAmition:false,
      scrollTop:0,
      onceBlockHeight:46
    };
  },
  methods: { 
    scrollYc(){ 
      if(this.timer){
        clearInterval(this.timer);
      };
      this.timer = setInterval(()=>{
        if(!this.isPause){ 
          if(Math.abs(this.scrollTop) <= this.onceBlockHeight){
            this.noAmition = false;
            this.scrollTop -=  46; 
          } 
          if(Math.abs(this.scrollTop) > this.onceBlockHeight){
            this.tableData.push(this.tableData.shift());
            this.scrollTop = 0;
            this.noAmition = true;
          }
        } 
      },1000) 
    },
    async setTableData() {
      let orderBusinessHistoryStatistics = await getOrderBusinessHistoryStatistics();
      return {
        orderBusinessHistoryStatistics:
          orderBusinessHistoryStatistics["data"]["data"],
      };
    },
  },
  created() {
    this.setTableData().then((res) => {
      console.log(res);
      res["orderBusinessHistoryStatistics"].forEach((e,i) => {
          e['id'] = i+1;
      });
      this.tableData = res["orderBusinessHistoryStatistics"];
      if (this.timer) {
        return;
      } 
      this.scrollYc(); 
    });
  },
};
</script>

<style>
.TCMP_bottomTable {
  height: 379px;
  width: 1300px;
  box-sizing: border-box;
  background-image: url("~@/assets/big_screen/bottom_table.png");
  background-size: 100% 100%;
}
.TCMP_bottomTable_content {
  color: #fff;
  width: 95%;
  margin: 0 auto;
  height: 280px;
  margin-top: 70px;
}
.TCMP_bottomTable_title {
  border: 1px solid;
  padding: 15px 0;
  display: flex;
  justify-content: space-around;
  color: #fff;
  width: 100%;
  line-height: 20px;
  font-size: 19px;
  color: #1ec7f8;
  text-align: center;
}
.TCMP_bottomTable_content_content {
  /* height: 230px; */
  /* overflow: hidden; */
  /* overflow-y: scroll; */
  transition: .7s linear all;
}
.TCMP_bottomTable_content_content_cell {
  display: flex;
  justify-content: space-around;
  text-align: center;
  height: 46px;
  line-height: 20px;
  font-size: 19px;
  padding: 15px 0;
}
</style>