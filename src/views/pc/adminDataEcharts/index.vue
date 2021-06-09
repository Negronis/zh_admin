<template>
<div class='big_screen'>
    <div class="wrapper_img"  :style="{backgroundImage:`url(${bg_src})`}">
      <div class="outer_content" :style="{margin:`${sMargin}` }">
        <div class='content'  :style="{width:Width +'px',height:Height +'px'}">  
              <div class='content_inter' :style="{transform:'scale('+scaleX+','+scaleY+')',transformOrigin:'0px 0px'}"> 
                  <div style='position:relative;top:0;left:0'>
                  <headers style='position:absolute;left:0px;top:-0px;width:100%;'></headers>
                  <Top  style='position:absolute;top:120px;left:1%;' />
                  <!-- 第二行 -->
                  <Table  :type="'today'"  style='position:absolute;left:30px;top:240px;' :bg="require('@/assets/big_screen/leftTableBlue.png')">
                      <template #title>今日新增运营统计</template>
                  </Table>
                  <Table  :type="'month'"   style='position:absolute;left:590px;top:240px;' :bg="require('@/assets/big_screen/leftTable.png')">
                    <template #title>本月新增运营统计</template>
                  </Table>
                  <RightBar ref="rightBar"  style='position:absolute;right:30px;top:240px;'></RightBar> 
                  <!-- 第三行 --> 
                  <BottomLine ref="bottomLine"   style='position:absolute;left:30px;top:670px;' />
                  <BottomTable  style='position:absolute;right:30px;top:670px;'/>
                  </div>
              </div>
          </div>  
    </div>   
    </div>
    </div>
</template>
<script >  
import Top from './top/index.vue'; 
import headers from "./header/index.vue"; 
import Table from './table/index.vue'; 
import RightBar from './echarts/bar/right_bar/index.vue'; 
import BottomLine from './echarts/line/bottom_line/index.vue';
import BottomTable from './bottonTable/index.vue';
import store from './store';
import { getTopData, getComparisonOfProfitAndCostInRecentSevenDays, getNewOrdersInRecentSevenDays , getNewOperationStatisticsToday   } from '@/common/data';
export default {
  name:"bigScreen",
  components:{ 
    headers, 
    Top,
    Table,
    RightBar,  
    BottomLine,
    BottomTable
  },
  data(){
    return {
      bg_src:require('@/assets/big_screen/bg.png'),
      scaleX:1,
      scaleY:1, 
      Height:0,
      Width:0,
      sMargin:0,
      //固定的理想屏幕比率
      defaultScaleFactor:1920/1080, 
      //固定的理想屏幕宽高
      defaultWidth:1920,
      defaultHeight:1080,
      // 竖向 / 横向异形屏
      isVerticalDifferentScreen:false,
      isTransverseDifferentScreen:false, 
      timer:null
    }
  }, 
  methods:{ 
    setHeight(){    
      if(this.isTransverseDifferentScreen){ 
         this.Height = window.innerHeight; 
         return ;
      }
      if(this.isVerticalDifferentScreen){
        this.Height = this.defaultHeight * this.scaleY; 
        return ;
      }
      this.Height = window.innerHeight;
    },
    setWidth(){   
      if(this.isTransverseDifferentScreen){
        this.Width = this.defaultWidth * this.scaleX;
        return ;
      }
      if(this.isVerticalDifferentScreen){
        this.Width = window.innerWidth;
        return ;
      } 
      this.Width = window.innerWidth; 
    },
    setSMargin(){ 
      if(this.isTransverseDifferentScreen){
        if(((window.innerWidth - (this.Width)) / 2) < 0){
          this.sMargin = `0`;
          return;
        }
        this.sMargin = `0 ${((window.innerWidth - (this.Width)) / 2)}px`; 
        return ; 
      }
      if(this.isVerticalDifferentScreen){
        this.sMargin = `${(window.innerHeight - (this.Height)) / 2}px 0`;
        return;
      }
      this.sMargin = `0`; 
    },
    // 是否是异形屏
    changeScreenType(){
      let thisScaleFactor = window.innerWidth / window.innerHeight;
      // x < 1.777
      if(thisScaleFactor < this.defaultScaleFactor){
        this.isVerticalDifferentScreen =  true;
        this.isTransverseDifferentScreen = false;
      }
      // x > 1.777
      if(thisScaleFactor > this.defaultScaleFactor){
        this.isTransverseDifferentScreen = true;
        this.isVerticalDifferentScreen = false;
      }
      if(thisScaleFactor === this.defaultScaleFactor){
        this.isVerticalDifferentScreen = false ;
        this.isTransverseDifferentScreen = false;
      }  
    }, 
    changeScale(){    
      this.changeScreenType();   
      if(this.isTransverseDifferentScreen){
        this.scaleX = window.innerHeight / this.defaultHeight; 
        this.scaleY = window.innerHeight / this.defaultHeight; 
      }
      if(this.isVerticalDifferentScreen){
        this.scaleX = window.innerWidth / this.defaultWidth; 
        this.scaleY = window.innerWidth / this.defaultWidth;  
      }
      this.setWidth();
      this.setHeight();  
      this.setSMargin();  
    }, 
    async setAllData(){
      let returnObject ={
        topData:{data:{data:{}}},
        newOperationStatisticsToday:{data:{data:{
          month_count:{
            count_arr:[0,0,0,0,0,0]
          },
          today_data:{
            count_arr:[0,0,0,0,0,0]
          }
        }}}, 
        comparisonOfProfitAndCostInRecentSevenDays:{data:{data:{}}},
        newOrdersInRecentSevenDays:{data:{data:{}}},
      };
      try {
        returnObject['topData'] = await getTopData();   
      } catch (error) { }
      try {
        returnObject['newOperationStatisticsToday'] = await getNewOperationStatisticsToday();  
      } catch (error) {  }
      try {
        returnObject['comparisonOfProfitAndCostInRecentSevenDays']  = await getComparisonOfProfitAndCostInRecentSevenDays(); 
      } catch (error) { }
      try {
        returnObject['newOrdersInRecentSevenDays'] = await getNewOrdersInRecentSevenDays();  
      } catch (error) { } 
      return {
        topData:returnObject['topData']['data']['data'], 
        newOperationStatisticsToday:returnObject['newOperationStatisticsToday']['data']['data']['today_data'],
        newOperationStatisticsOfThisMonth:returnObject['newOperationStatisticsToday']['data']['data']['month_count'],
        comparisonOfProfitAndCostInRecentSevenDays:returnObject['comparisonOfProfitAndCostInRecentSevenDays']['data']['data'],
        newOrdersInRecentSevenDays:returnObject['newOrdersInRecentSevenDays']['data']['data'], 
      }
    },  
    setUpdateInterval(){
      if(this.timer){
        return ;
      }
      // this.timer = setInterval(()=>{
        this.setAllData().then(res=>{  
          store.setAllTableData(res)
          // 更新echarts数据
          this.$nextTick(()=>{
            if(this.$refs.rightBar){
              this.$refs.rightBar.setOptionEcharts(res['comparisonOfProfitAndCostInRecentSevenDays']);
            }
            if(this.$refs.bottomLine){
              this.$refs.bottomLine.setOptionEcharts(res['newOrdersInRecentSevenDays'])
            }
          })
        }).catch(err=>{
          console.log(err);
        })
      // },1400)
    },
    init(){
      this.changeScreenType(); 
      this.changeScale();
      this.setUpdateInterval();
    },
  },
  created(){ 
    this.init();
    let throttle = (fn, interval) => {
      let timer = null;
        return () => {
            if (timer) {
                return;
            }
            timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                typeof fn === 'function' ? fn() : "";
            }, interval)
        };
    }
    var _onresize = window.onresize || function(){};
    window.onresize = ()=>{      
      throttle(this.changeScale,500)();
      throttle( _onresize(),500)();  
    }  
  }
} 
</script>
<style>
div{
   box-sizing: border-box;
}
.outer_content{
  position: absolute; 
  left:0;
  top:0;
  bottom:0;
  right:0;
  overflow: hidden;
  box-sizing: border-box;
}
.wrapper_img{
  width:100%;
  height:100%; 
  background-position: center;
  background-size:100% 100%; 
  position: absolute;
  left: 0;
  top: 0; 
  bottom: 0;
  right:0; 
  box-sizing: border-box;
}
.content{
  margin:0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
.content_inter{
  transition:0.5s linear all;
  width:1920px;
  height:1080px; 
  overflow: hidden;
}  
.echarts_title{
  font-size:22px;
  color:#00fcf9;
  letter-spacing: 5px;
  font-family: "SourceHanSansCn-Regular";
  position: absolute;
  left:50px;
  top:15px;
}
::-webkit-scrollbar
{
    width:3px;
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