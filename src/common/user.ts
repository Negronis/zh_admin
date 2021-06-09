import axios from 'axios';
import Store from '../store';
import qs from 'qs'; 
import url from './global_url';
// test
let loginSrc = url;

export const login = (account  : string, password: string): any => {
    return new Promise((resolve, reject) => { 
        // axios.post(loginSrc + '/login', {
        axios.post(loginSrc + '/screen/user/login', {
            // @ts-ignore
            account : account,
            password : password,
        },{
            transformRequest: ((data: object) => { 
                return qs.stringify(data,{arrayFormat: 'indices', allowDots: true});
            }),
        }).then((res) => {
            if (res.status === 200) {
                if (res.data.code === 1) {
                    Store.commit('setToken', res.data.data.userinfo['token']);
                    Store.commit('setAccess', res.data.data.userinfo['group_name']);
                    let obj = {
                        avatar:"",
                        nickname:""
                    };
                    obj['avatar'] = res.data.data.userinfo['avatar'];
                    obj['nickname'] = res.data.data.userinfo['nickname'];
                    (localStorage as any).setItem('hospital_code',res.data.data.userinfo['hospital_code'] || "") ;
                    (localStorage as any).setItem('sent', res.data.data.userinfo['token']); 
                    (localStorage as any).setItem('group_name', res.data.data.userinfo['group_name'] || "");
                    (localStorage as any).setItem('userInfo', JSON.stringify(obj));
                    resolve(res);
                    // if(res.data.data.userinfo.group_name != '心衰中心'){
                    //     reject('您的账号暂无权限登录，请换号重试或联系管理员');
                    // }else{
                    //     resolve(res);
                    // }
                }else{
                    reject(res.data.msg)
                }
            } else {
                reject('登录出错,请重试');
            }
        }).catch((err)=>{
            console.log(err);
            reject(err);
        });
    })

}