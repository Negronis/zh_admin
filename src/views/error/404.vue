<template>
  <div class='error_404'>
     <van-row :style='{height : height + "px",lineHeight:height+"px"}' class='all'>
        <div :span="24" class='content'>
            404 NOT FOUND OMG!
         </div> 
     </van-row>
  </div>
</template>

<script lang='ts'>
import {Component , Vue} from 'vue-property-decorator';
import Store from '@/store';
@Component({ 
})
export default class notfound  extends Vue{
   get height():number{
      return Store.getters.getHeight;
   }
   private width:number = window.innerWidth;
   created(){
      console.log(Store.getters.getHeight);
   }
}
</script>
scope
<style lang="scss">
.error_404{
   .content {
      white-space:nowrap;
      overflow: hidden;
      color:#fff;
      font-size:100px;
      font-weight:700;
      text-shadow: 0 0 10px #fdec84,
            10px -10px 20px #ffae35,
            20px -20px 30px #ec760c,
            -20px -60px 40px #cd4607,
            0px -80px 50px #973717,
            10px -40px 60px #451b0e;
      letter-spacing: 5px;
   }
   .all{
      text-align:center;
      background: #6D6027;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #D3CBB8, #6D6027);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #D3CBB8, #6D6027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   }
}

</style>