<template>
  <span class="tab">
    <!-- admin -->
    <Sider  collapsible :hide-trigger='true'   @on-collapse="changeToggleCollapse"    :collapsed-width="78"  v-model="isCollapsed">
      <Menu accordion   :active-name="menuActive"  ref="side1"  width="auto"  :class="menuitemClasses"
        :theme="FrameStyle['theme']" :style="{height:height +'px'}"  :open-names="[openName]" >
        <div name="logo" :style="{height:'46px',background:FrameStyle['background'],textAlign:'center'}">
          <div style='padding:5px;background:rgba(0,0,0,.1)'>
            <img v-if='!isCollapsed' src="../../../../assets/logo/logo.png" height='36px' alt="">
            <img v-if='isCollapsed' src="../../../../assets/logo/logosm.png" width='36px' height='36px' alt="">
          </div>
        </div> 
        <div :style="{overflowY: width < 1200 ? 'scroll' : 'hidden',height:height - 46 + 'px'}"> 
        <MenuItem name="pchome" to="/">
          <!-- <Icon type="ios-navigate" size='20'></Icon> -->
          <Icon custom="iconfont icon-chazhaobiaodanliebiao" size="20" />
          <span>控制台</span>
        </MenuItem>
      <!-- 数据统计功能列表 -->
        <Submenu hide-trigger name="dataStatistics">
          <template slot="title">
            <Icon custom="iconfont icon-shujufenxi" size="20" /> 
            <span>数据统计</span>
          </template> 
          <div v-for="(item,index) in func_sjtj" :key="index">
            <Poptip  :disabled="!isToolShow"   trigger="hover"   :title="item.title"    :content="item.content"  placement="right"  >
              <MenuItem :to="item.router" :class="itemchildcontract" :name="item.name">
                <Icon v-if="!isToolShow" :size="item.icon_size" :type="item.icon_type"></Icon>
                <b v-if="isToolShow">{{item.span_content.slice(0,2)}}</b>
                <span>{{item.span_content}}</span>
              </MenuItem>
            </Poptip>
          </div>
        </Submenu> 
      <MenuItem  name="echarts" to="/echarts">
          <Icon custom="iconfont icon-daping" size="20" />
          <span>数据大屏</span>
      </MenuItem>
      <MenuItem name="setting" to="/setting">
            <Icon custom="iconfont icon-xitong" size="17" />
            <span> 系统设置</span>
        </MenuItem>
        </div>
      </Menu>
    </Sider>
  </span>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import Store from "../../../../store";
import Common from "@/common/commom";
import {   func_sjtj_arr } from "./index";
@Component({ 
})
export default class tab extends Vue {
  get width(){  
    return Store.getters.getWidth;
  }
  // style
  get FrameStyle(){
    return Store.getters.getFrameStyle;
  }
  get height(): number {
    return Store.getters.getHeight;
  }
  // private isCollapsed: boolean = false;
  get isCollapsed():boolean{
    return Store.getters.getIsCollapsible;
  }
  // Control access
  get Access(): string {
    return localStorage.getItem("access") as string;
  }
  // Control the Tab
  get rotateIcon(): string[] {
    return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
  }
  private collapsedSider() {
    (this.$refs as any).side1.toggleCollapse();
  }
  get menuitemClasses(): string[] {
    return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
  }
  get itemchildcontract(): string {
    return this.isCollapsed ? "ivu-menu-item-child-contract" : "";
  }


  // 所有二级菜单数组 
  private func_sjtj : any[] = func_sjtj_arr; 
  private func_tdgl : any[] = func_sjtj_arr; 


  //tab setting_close
  private submenu_close: [] = [];

  private isToolShow: boolean = false;
  // changeToggle
  public changeToggleCollapse(status: boolean) {
    setTimeout(() => {
      this.isToolShow = status;
    }, 200);
  }
  // 默认展开的二级菜单
  private openName:string = "";
  // 默认显示的菜单
  private menuActive: string = "pchome";
  // 通过router判断自动打开的菜单项
  created() { 
    this.menuActive = this.$route["name"] || "pchome";
    this.openName = this.$route['meta']['parent'];
    this.$nextTick(() => { 
      (this.$refs.side1 as any).updateActiveName();
      (this.$refs.side1 as any).updateOpened();
    });
  }
  // Monitor router change this select item
  @Watch("$route")
  changeRouter(to: any, from: any) {
    this.menuActive = to["name"];
    this.openName = to['meta']['parent']; 
    this.$nextTick(() => {
      (this.$refs.side1 as any).updateActiveName();
      (this.$refs.side1 as any).updateOpened();
    });
  }
}
</script>

<style lang='scss'>
.tab {
  z-index: 100;
  ul {
    li {
      cursor: pointer;
      transition: 0.5s all linear;
    }
  }
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    // overflow-y:scroll;
    width: 110px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  .menu-item i {
    // transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .ivu-menu-submenu-title i {
    top: 50%;
  }
  .collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
  }
  .collapsed-menu i {
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .ivu-menu-item-child-contract {
    padding-left: 30px !important;
  }
  .ivu-menu-item {
    font-size: 11px;
    padding:14px 24px !important;

  }
  .ivu-menu-vertical .ivu-menu-submenu-title-icon {
    right: 0px;
    font-size: 20px;
  }
  .ivu-poptip-rel {
    width: 100%;
  }
  .ivu-poptip {
    width: 100%;
  }
  // change active style for separate item
  .ivu-menu-dark .ivu-menu-item-selected { 
    color:#fff !important;
  }
.ivu-menu-dark{
  background:#222D32
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened{
  background:#2C3B41 ;
}
 




}
</style>