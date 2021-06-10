<template>
  <div>
    <!-- pc -->
    <div  class="layout"  v-if="isPc" >
      <Layout> 
        <Layout class='ivu-layout-has-sider'>
          <pctabs ></pctabs>
          <Layout >
            <crumb></crumb>
            <div style="padding: 20px;">
              <Content class='layout-content' :style="{height:height - 46 - 40 + 'px',padding: '24px', minHeight: '280px', background: '#fff',border:'1px solid #fefefe'}">
                <router-view />
              </Content>
            </div>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Store from "@/store";
import pctabs from "./pc/tab/tab.vue"; 
 

import crumb from './pc/crumb/index.vue';
@Component({
  name: "Main",
  components: {
    pctabs, 
    crumb
  }
})
export default class main extends Vue {
  private isPc: boolean = Store.getters.getPc;
  get isMain(): boolean {
    return false;
  }
  get height():number{
    return Store.getters.getHeight;
  }
  craeted() {
    console.log(this.$route);
  }
}
</script>
<style >
.layout { 
  width:100%;
  box-sizing: border-box;
  position: relative; 
  top:0px;
  overflow: hidden;
  overflow-x:hidden !important;
}
.layout-content{
  overflow: hidden;
  overflow-y: visible;
  /* border:1px solid; */
}
.ivu-layout{
  background: #f5f7f9 !important; 

}
</style>
