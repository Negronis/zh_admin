export default {
   state: {
      height: window.innerHeight,
      width: window.innerWidth,
      allTableData: {
         // 头部数据
         topData: {},
         // 今日新增运营统计
         newOperationStatisticsToday: {},
         // 本月新增运营统计
         newOperationStatisticsOfThisMonth: {},
         // 近七日盈利成本对比
         comparisonOfProfitAndCostInRecentSevenDays: {},
         // 近七日新增订单
         newOrdersInRecentSevenDays: {},
         // 订单业务历史统计
         orderBusinessHistoryStatistics: {}
      }
   },
   setAllTableData(value) {  
      this.state.allTableData = value;
   },
   setHeight(value) {
      this.state.height = value;
   },
   setWidth(value) {
      this.state.width = value;
   },
   getWidth() {
      return this.state.height
   }
}