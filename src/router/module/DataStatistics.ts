const TongjiArray = [
   /** 
    * @param数据统计
   */
   {
      path: '/sjtj_home',
      name: 'sjtj_home',
      meta: { title: "数据统计中心", parent: "dataStatistics" },
      component: () => import('@/views/pc/dataStatistics/index.vue'),
   }, 
]
export default TongjiArray;