<template>
  <div id="app"> 
    <router-view/> 
  </div>
</template>

<script lang='ts'>
import Store from '@/store';
import {Component,Vue,Watch} from "vue-property-decorator";
import '@/assets/icons/iconfont.css';
@Component
export default class App extends Vue{
  private isPc():boolean{
    var userArgentInfo:string = navigator.userAgent;
    var Agents:string[] = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag:boolean = true;
    var height:number = window.innerHeight;
    Agents.forEach(e=>{
      if(userArgentInfo.indexOf(e)>0){
        flag = false;
        height = window.outerHeight;
        Store.commit('setHeight',height);
        return flag;
      }
    })
    Store.commit('setHeight',height);
    return flag;
  }
  // active height
  private setHeight():void{    
     Store.commit('setHeight',window.innerHeight);
  }
  // active width
  private setWidth():void{ 
      Store.commit('setWidth',window.innerWidth);
  }
  // function throttle
  timer:any = null;
  timer1:any = null;
  private throttle(fn:Function,interval:number,timer:any):Function{ 
    return () =>{
      if(timer){
        return;
      }
      timer = setTimeout(()=>{
        fn();
        clearTimeout(this.timer);
        timer = null;
      },interval)
    }
  }
  created(){
    // is Computer?
    let confirm_pc = this.isPc();
    if(window.innerWidth >= 800){
        Store.commit('setPc',true);
    }else{
        Store.commit('setPc',confirm_pc);
    }
  }
  mounted(){ 
    //active Screen's height
    let SetHeight =  this.throttle(this.setHeight,300,this.timer)
    let SetWidth = this.throttle(this.setWidth,300,this.timer1); 
    window.addEventListener('resize', () => {
      SetHeight()
      SetWidth()
    } , false)
  }
};
</script>

<style>
  .ivu-message-notice{
        font-size: 14px;
        position: fixed;
        z-index: 1010;
        width: 100%;
        top: 24px;
        left: 0;
  }
  .ivu-message-notice:first-child{
    margin-top:0 !important;
  }  
  /*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width:0px;
    height:0px;
    background-color:#F5F5F5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:10px;
    background-color:#F5F5F5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
    background-color:#555;
}
</style>
