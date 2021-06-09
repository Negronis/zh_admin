const SettingArray = [
   {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/pc/systemSetting/index.vue'),
      meta: { title: "系统设置", parent: "xitongshezhi" }
   }
]
export default SettingArray;