<template>
  <div>
    <div class="all" :style="{height:height+'px'}">
      <loginfrompc></loginfrompc>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import loginfrompc from "@/components/login-form/login-from-pc.vue";
import store from "@/store";
@Component({
  components: {
    loginfrompc
  }
})
export default class loginViewPc extends Vue {
  get height(): number {
    return store.getters.getHeight;
  }
}
</script>

<style lang="scss">
.all {
  position: relative;
  top: 0px;
  right: 0px;
  background-image: url(../../assets/login/login_pc/index_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  .title{
     font-size:45px;
     color:#fff;
     text-shadow: .1px .1px 5px #fff;
     display: inline-block;
     padding-top:20px;
     text-indent: 50px;
     letter-spacing: 10px;
  }
}
</style>