<template>
  <div class="TCMP_table" :style="{backgroundImage:'url('+bg+')'}">
    <div class="echarts_title"><slot name="title"></slot></div>
    <div class="TCMP_table_top">
      <div v-for="(item,index) in thisData['count_arr']" :key="index">{{item}}</div>
    </div>
    <div class="TCMP_table_bottom">
      <div class="TCMP_table_bottom_block">
        <div style="font-size:40px;color:#07d47d">{{thisData['references_count'] || 0}}</div>
        <div style="margin-top:10px;">推荐人</div>
      </div>
      <div class="TCMP_table_bottom_block">
        <div style="font-size:40px;color:#28b1ff">{{thisData['doctor_count']  || 0}}</div>
        <div style="margin-top:10px;">医生</div>
      </div>
      <div class="TCMP_table_bottom_block">
        <div style="font-size:40px;color:#f88c00">{{thisData['order_count'] || 0}}</div>
        <div style="margin-top:10px;">订单</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
export default { 
  props:{
    bg:{
      default:""
    },
    type:{
      default:"today"
    }
  },
  data(){
      return {
        tableData:store.state
      }
  }, 
  computed:{
    thisData(){
      if(this.type === "today"){
        return this.tableData['allTableData']['newOperationStatisticsToday']
      }else{
        return this.tableData['allTableData']['newOperationStatisticsOfThisMonth']
      }
    }
  }, 
};
</script>

<style>
.TCMP_table {
  color: #fff; 
  width: 530px;
  box-sizing: border-box;
  height: 400px; 
  background-size:100% 100%;
  background-position: center;
}
.TCMP_table_top,
.TCMP_table_bottom {
  height: 150px; 
  width: 90%;
  left: 5%;
  display: flex;
}
.TCMP_table_top {
  position: absolute;
  top: 80px;
  justify-content: center;
}
.TCMP_table_top > div { 
  height: 80px;
  width: 13%; 
  margin:0 5px;
  margin-top: 20px;
  font-size: 61px;
  text-align: center;
}
.TCMP_table_bottom {
  position: absolute;
  bottom: 30px;
}
.TCMP_table_bottom_block {
  width: 33.33%; 
  text-align: center;
  padding-top:40px;
}
</style>