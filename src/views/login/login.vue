<template>
  <div>
    <loginpc v-if='isPc'></loginpc>
  </div>
</template>

<script lang='ts'>
import Store from "@/store";
import { Component, Vue } from "vue-property-decorator";
// 组件引入
import loginpc from "@/components/login-view/login-view-pc.vue";
@Component({
  components: {
    loginpc,
  },
})
export default class login extends Vue {
  private isPc: boolean = Store.getters.getPc;
  private height: number = Store.getters.getHeight;
  created() {
    console.log(this.isPc);
  }
}
</script>

<style>
</style>