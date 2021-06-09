const PublicPageArray = [
   // login
   {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
   },
   // Echarts data 数据大屏
   {
      path: '/echarts',
      name: 'echarts',
      component: () => import('@/views/pc/adminDataEcharts/index.vue')
   },
   //Some Errors
   {
      path: '*',
      name: 'error_404',
      component: () => import('@/views/error/404.vue')
   }
];
export default PublicPageArray;