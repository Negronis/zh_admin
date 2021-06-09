import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "@/components/Main/Main.vue";
import Store from '@/store';
import Common from '@/common/commom';
import RouterArray from './module';
import PublicPage from './module/PublicPage'; 
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      ...RouterArray
    ]
  },
  ...PublicPage
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from: any, next: any) => {
  if (to['path'] === '/login' || to['path'] === '/register') {
    next();
  } else
    // if (!(localStorage.getItem('sent'))) {
      // Common.error('登录失效,请重新登录', 3, (): void => {
        // next('/login');
      // });
    // } else {
      // 通过路由守卫配置快捷导航标签页
      if (!Store.getters.getAllClose) {
        Common.addCrumb(to, next);
      } else {
        Common.clearCrumb(next);
        next();
      }
    // }
});
// 报错bug处理
const originalPush: any = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: any) {
  return originalPush.call(this, location).catch((err: any) => err);
};
export default router;
