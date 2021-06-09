<template>
<div class='crumb_style' :style="{background:FrameStyle['background']}">
  <Row>
    <!-- 收起tab -->
    <Col span='1'>
      <Button  :style="{background:FrameStyle['background'],color:FrameStyle['color'],border:0,outline:0,padding:0}"
       @click='changeIsCollapsed' type='default' class='toggle_btn'>
       <Icon size='20' :style="{transition:'0.2s all linear',transform: Collapsible === true ? 'rotate(90deg)' : ''}" type="md-menu" style='width:100%;'/>
       </Button> 
    </Col>
    <!-- tab标签所在位置 -->
    <Col span='15' class='tab_class'>  
       <div ref='tag_parent' style='height:46px;'  v-if="CrumbArr.length !== 0">
          <Tag   :style="{background:FrameStyle['blockBg']+'!important'}" ref='tags'   size='large' class='Tag_freestyle'   type="dot"   v-for="(item,index) in CrumbArr"  :key="index"  @click.native="nav_route(item)"
            @on-close="delRouter(index,index)"  closable   :color="currentName == item['name'] ? 'success' :'primary'"
          ><span  :style="{color:FrameStyle['color']+'!important'}">{{item['title']}}</span></Tag> 
        </div>
    </Col>
    <!-- 额外tab页的显示 -->
    <Col span='1' > 
       <Dropdown  placement="bottom-start" v-if='CrumbArr.length != 0' trigger="click" class='dropdown_btn'>
        <a href="javascript:void(0)" >
          <Icon :color="FrameStyle['color']"  size='20' type="md-menu" />
          <Icon :color="FrameStyle['color']"  size='10' type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu style='width:200px;' slot="list" >
              <DropdownItem style='text-align:left' v-if='CrumbArr.length != 0' >
                <div style='display:inline-block;vertical-align:middle' @click.prevent='delAllrouter'>
                    <Icon type="md-arrow-dropright" />关闭所有标签
                </div>
            </DropdownItem>
            <DropdownItem style='text-align:left'  v-for='(item,index) in CrumbArr.slice(tab_num,)' :key='index'>
              <div style='display:inline-block;vertical-align:middle' @click.prevent='nav_route(item,index)'>
                  <Icon type="md-arrow-dropright" />{{item.title}}
              </div>
              <Icon style='display:inline-block;vertical-align:middle ' type="ios-close" size='18' @click.prevent="delRouter(tab_num+index , index)" />
              <Icon type="ios-radio-button-on" size='18' v-if="currentName == item['name']" color='#19be6b'/>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
    </Col>
    <!-- 其他功能位置 -->
    <Col span='6' style='position:absolute;right:0px;top:0px;'>
      <Row>
        <!-- 快捷功能 -->
          <Col span='8' style='opacity:0'>占位</Col>
          <!-- <Col span='3'><a href="javascript:;" title='关闭所有已打开标签'><div @click="delAllrouter" class='tag_block' :style="{color:FrameStyle['color']+'!important'}"><Icon type="md-close" size='20'/></div></a></Col> -->
          <Col span='3'><a href="javascript:;" title='回到主页并关闭所有标签'><div @click="delAllrouter" class='tag_block' :style="{color:FrameStyle['color']+'!important'}"><Icon type="md-home" size='20'  /></Icon></div></a></Col>
          <Col span='3'>  
              <Poptip   content="content" trigger="click" placement="bottom" class='tag_block' :style="{color:FrameStyle['color']+'!important'}"> 
                  <Icon type="ios-settings" size='20'/> 
                  <div slot="content" class='changeStyle_content' >
                      <Row style="margin-bottom:10px;color:#000">主题修改</Row>
                      <Row> <Col style='color:#000' span='12' class='change_style_front_input'>整体背景色</Col><Col span='12'><input style='color:#000' type="text" v-model="changeStyleObj['background']"></Col> </Row>
                      <Row> <Col style='color:#000' span='12' class='change_style_front_input'>字体颜色</Col><Col span='12'><input style='color:#000' type="text" v-model="changeStyleObj['color']"></Col> </Row>
                      <Row> <Col style='color:#000' span='12' class='change_style_front_input'>标签背景色</Col><Col span='12'><input style='color:#000' type="text" v-model="changeStyleObj['blockBg']"></Col> </Row>
                      <Row> 
                        <Col  span='12' class='change_style_front_input' style='line-height:35px;color:#000'>左侧选项卡主题</Col>
                        <Col span='12' style='text-align:left'>
                            <RadioGroup v-model="changeStyleObj['theme']" style='color:#000'>
                                  <Radio label="light">
                                      <!-- <Icon type="logo-apple"></Icon> -->
                                      <span>亮</span>
                                  </Radio>
                                  <Radio label="dark">
                                      <!-- <Icon type="logo-android"></Icon> -->
                                      <span>暗</span>
                                  </Radio>
                              </RadioGroup>
                        </Col> 
                      </Row>
                      <Row >
                        <Col span='12' style='text-align:left'><Button type='default' @click='changeStyle'>保存配置</Button></Col>
                        <Col span='12' style='text-align:right'><Button type='default' @click='defaultStyle'>恢复默认</Button></Col>
                      </Row>
                  </div>
              </Poptip> 
            </Col>
          <Col span='3'><a href="javascript:;" title='切换全屏'><div @click='fullScreen' class='tag_block' :style="{color:FrameStyle['color']+'!important'}"><Icon :type="fullscreen === true ? 'ios-contract' : 'ios-expand'" size='20'  /></div></a></Col>
          <!-- <Icon type="ios-contract" /> -->
          <!-- 用户详情 -->
        <Col span='7' >
            <Poptip  content="content" trigger="click" placement="bottom" class='tag_block' :style="{color:FrameStyle['color']+'!important'}">
                <div>
                  <img style='border-radius:50%;vertical-align:middle;margin-bottom:3px;' width='20px' height="20px" :src="userInfo['avatar']" alt="">
                  用户
                </div> 
                <div slot="content" class='slot_content' >
                  <div class='slot_content_img' :style="{background:FrameStyle['background']}"><img  :src="userInfo['avatar']" alt=""></div>
                  <Row>
                    <Col span='12'><div class='slot_content_row'>用户名：<span style='color:#2d8cf0'>{{userInfo['nickname'] || '暂无'}}</span> </div></Col>
                    <Col span='12'><div style='text-align:right' class='slot_content_row'>用户权限：<span style='color:#2d8cf0'>{{access}}</span></div></Col>
                  </Row>
                  <Row>
                      <Col span='12'>
                        <div class='slot_content_row'>
                          <Button type='default' style='background:#2c3e50;color:#fff' size='default' >个人资料</Button>
                        </div>
                      </Col>
                      <Col span='12'> 
                        <div class='slot_content_row' style='text-align:right'>
                          <Button type='error' size='default'  @click='logout'>退出登录</Button>
                        </div>
                    </Col>
                  </Row>
              </div>
            </Poptip>
          </Col>
      </Row>
    </Col>
  </Row>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import Common from "@/common/commom";
import Store from "@/store";
@Component
export default class crumb extends Vue {
  /** 
   * @param菜单栏快捷功能
   * 
  */
 //  全屏
 private fullscreen:boolean = false;
 private fullScreen(){
    let element:any = document.documentElement;
          if (this.fullscreen) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if ( (document as any).webkitCancelFullScreen) {
              (document as any).webkitCancelFullScreen();
            } else if ((document as any).mozCancelFullScreen) {
              (document as any).mozCancelFullScreen();
            } else if ((document as any).msExitFullscreen) {
              (document as any).msExitFullscreen();
            }
          }else{
              if (element.requestFullscreen) {
                element.requestFullscreen();
              } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
              } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
              } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen();
            }
          }
          this.fullscreen = !this.fullscreen;
    }
    // 修改主题
    get FrameStyle(){
      return Store.getters.getFrameStyle
    }
    private changeStyleObj:any = localStorage.getItem('style') != undefined ? 
    JSON.parse(localStorage.getItem('style') as string) :
      {
         background:'#15A185',
         color:"#fff",
         theme:"dark",
         blockBg:"rgba(0,0,0,.1)"
    }
    private changeStyle(){
      localStorage.setItem('style',JSON.stringify(this.changeStyleObj));
      Store.commit('setFrameStyle',this.changeStyleObj);
      Common.suc('保存配置成功',1.5);
    }
    private defaultStyle(){
      let obj = {
        background:'#15A185',
         color:"#fff",
         theme:"dark",
         blockBg:"rgba(0,0,0,.1)"
      }
      localStorage.removeItem('style');
      Store.commit('setFrameStyle', obj);
      this.changeStyleObj = obj;
      Common.suc('恢复默认配置成功',1.5);
    }
  /** 
   * @UserInfo - 用于用户详情 
  */
  private access: string = localStorage.getItem("group_name") == "BOSS" ? "杨总" : "运营人员";
  private userInfo: object = JSON.parse(localStorage.getItem("userInfo")||"{ }") || {};
  private logout = (): void => {
    Common.suc("退出登录成功,正在跳转", 2, (): void => {
      localStorage.clear();
      Common.routelink("/login");
    });
  };
  /** 
   * @param路由操作
   * @param路由的导出删除跳转等操作
   * 
  */
  private currentName: string = "";
  get CrumbArr(): any[] {
    return Store.getters.getCrumb;
  }
  public nav_route(e: { route: string; name: string },index:number): void { 
    // 数组互换
    this.CrumbArr[0] = this.CrumbArr.splice(index,1,this.CrumbArr[0])[0];
    Store.commit('setCrumb',this.CrumbArr); 
    Common.routelink(e["route"]);
  }
  public delRouter(index: number,real_index:number) {
    let Crumb = Store.getters.getCrumb;
      Crumb.splice(index, 1);
    if (Crumb.length != 0) {
      Common.routelink(Crumb[Crumb.length - 1]["route"]);
    } else if (Crumb.length == 0) {
      Common.routelink("/");
    }
    this.tabs.splice(real_index,1);
    Store.commit("setCrumb", Crumb);
  }
  private isShow :boolean = true;
  public delAllrouter(){ 
      Store.commit('setAllClose',true); 
      if(this.$route.path === "/") return ;
      Common.rLink('/');
  }
  /** 
   * @param更改导航条状态
   *  
  */
  get Collapsible():boolean{
    return Store.getters.getIsCollapsible;
  }
  public changeIsCollapsed():void{
    let bool = Store.getters.getIsCollapsible;
    if(bool){
      Store.commit('setIsCollapsible',false);
      return;
    }
    Store.commit('setIsCollapsible',true);
  }
  created() {
    this.currentName = this.$route["name"] || "";
    Store.commit('setFrameStyle',this.changeStyleObj);
  }
  /** 
   * 
   * @param计算标签页功能所需
   * 
  */
  private tabPar:any = null;
  private tabs: any[] = [];
  // 要显示几个
  private tab_num = 0;
  private patientWidth :number = 0;
  private bool = true; 
  // 创建对比数组 当显示标签减少时将所减少的tab添加进这个数组
  private arr:any[] = [];
  get ptWidth() : number{
    return  this.patientWidth;
  }
  // 是否该显示
  private extra_show_tab:boolean = false;
  public computeTag(){
    this.$nextTick(()=>{
      this.tab_num = 0;
      this.extra_show_tab = true; 
    })
  }
  // 监听导航
  mounted(){
    // this.$nextTick(()=>{
    //   this.tabs = this.$refs.tags
    // })
    this.computeTag();
    // 监听高度变化
    window.onresize = () =>{  
      Common.throttle(this.computeTag,100)();
    }
  }
  // change tag's color to watch route
  @Watch("$route")
  changeColor(to: any, from: any) {
    this.currentName = to["name"];
  }
  @Watch("CrumbArr")
  changeTag(){ 
    this.computeTag();
  }
}
</script>
<style lang="scss">
.crumb_style{
  position:relative;
  z-index:100; 
  border:none !important;
/*解决ios上滑动不流畅*/
  // line-height:56px;
  height:46px;
  .ivu-tag .ivu-icon-ios-close{
    font-size:15px !important;
    color:#fff;
  }
  .Tag_freestyle{
    // width:150px;
    margin:0 !important;
    background:rgba(0,0,0,.1) !important;
    // background:#fff !important;
    cursor:pointer;
    height:46px;
    line-height:46px;
    font-size:15px;
    border:0 !important;
    border-right:1px solid rgba(0,0,0,.1) !important;
    // border-left:1px solid rgba(0,0,0,.3) !important;
    border-radius:0px;
  }
  .Tag_freestyle:hover{
    // background: rgba(0,0,0,.5) !important;
  }
  .ivu-tag-text{
    color:#fff !important;
  }
  .toggle_btn{
    width:100%;
    height:46px;
    border-radius:0%;
  }
  .tab_class{ 
    overflow-y: hidden;
    height:46px; 
  }
 
  .dropdown_btn{
    overflow: hidden;
    display:block;height:46px;line-height:46px;
    cursor: pointer;
    text-align: center;
  }
  .tag_block{
    height: 46px;
    line-height: 46px;
    color:#fff;
    width:100%;
    cursor: pointer;
    text-align: center;
  }
  .tag_block:hover{
      // border-right:1px solid rgba(0,0,0,.3);
      background:rgba(0,0,0,.1);
  }
  // 用户详情这一块
  // 去掉三角块
  .ivu-poptip-arrow{
    display:none;
  }
  // 修改padding间距
  .ivu-poptip-body{
    padding:0;
  }
  // 换颜色
  .ivu-poptip-title{
    background:#2d8cf0;
  }
  .ivu-poptip-title-inner{
    color:#fff !important;
  }
  .slot_content{
    min-width:300px;
    text-align: left;
    color:#000;
    .slot_content_row{
      // width:100%;
      padding:3px;
      margin:10px;
    }
    .slot_content_img{
      padding:20px;
      text-align: center;
      width: 100%;
      img{
        margin:0 auto;
        width:40%;
      }
    }
    img{
      border-radius: 50%;
    }
  }
  // 修改主题
  .changeStyle_content{
    padding:10px;
    min-width:250px;
    input{
      width:100%;
      vertical-align: middle;
    }
    div{
      margin:5px 0;
    }
    .change_style_front_input{
      vertical-align:middle;line-height:25px;
      text-align: left;
    }
  }
}
</style>
