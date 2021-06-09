import Vue from 'vue';
import router from '../router';
import store from '@/store';
class Common {
    public timer: any = null;
    public throttle = (fn: any, interval: number) => {
        return () => {
            if (this.timer) {
                return;
            }
            this.timer = setTimeout(() => {
                clearTimeout(this.timer);
                this.timer = null;
                fn();
            }, interval)
        };
    }
    public suc = (content: string, duration?: number, func?: object) => {
        (Vue.prototype.$Message as any).success({
            content: content,
            duration: duration,
            onClose: func
        });
    };
    public error = (content: string, duration?: number, func?: object) => {
        (Vue.prototype.$Message as any).error({
            content: content,
            duration: duration,
            onClose: func
        });
    };
    public loading = (content: string, duration?: number, func?: object) => {
        (Vue.prototype.$Message as any).loading({
            content: content,
            duration: duration,
            onClose: func
        });
    }
    public destory =()=>{
        Vue.prototype.$Message.destroy();
    }
    public routelink = (path: string, name?: string, param?: any) => {
        if (param) {
            router.push({
                path: path,
                name: name,
                params: param,
            });
        } else {
            router.push({
                path: path,
                name: name
            });
        }
    }
    public rLink(path:string){
        router.replace(path);
    }
    public addCrumb(to :any, next:any){
        let Crumb = store.getters.getCrumb;
        type eType = { name: string, route: string };
        let booleans = true;
        Crumb.forEach((e: eType, i: number, arr: object[]) => {
          let { name, route }: { name: string, route: string } = e;
          if (name === to['name']) {
            booleans = false;
          }
        })
        if (booleans) {
          if (to['path'] !== '/' && to['path'] !== '/echarts') {
            Crumb.push({
              name: to['name'],
              route: to['path'],
              title:to['meta']['title']
            });
          }
          store.commit('setCrumb', Crumb);
        }
        next();
    }
    public clearCrumb = (next:any)=>{
        store.commit('setCrumb',[]);
        if(store.getters.getCrumb.length === 0){
            store.commit('setAllClose',false);
        }
    }
}
export default new Common();