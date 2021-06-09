<template>
<div :style="{}">
<div class='echarts_title'>门诊疾病排行</div> 
  <div class='right_table'  :style="{backgroundImage:img_src,height:240 + 'px',width:'384px'}">
   <vxe-table
          :header-cell-class-name="headerCellClassName"
          :row-class-name="rowClassName"
          :align="allAlign"
          :data="tableData" 
          width="90%"
          height="auto"
          size="mini"
          border="none"
          class='right_table_main'
         auto-resize
          >
          <vxe-table-column field='top' title='排名' width="60"></vxe-table-column>
          <vxe-table-column field="illClass" title="疾病类型"></vxe-table-column>
          <vxe-table-column field="menzhen" title="日门诊量"></vxe-table-column>
          <vxe-table-column field="mix" title="占比"></vxe-table-column>
        </vxe-table>
  </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from '@/store';
@Component
export default class rightTable extends Vue {
   get Height() {
    return store.getters.getHeight;
  }
   private img_src:string = "url(" + require('@/assets/big_screen/boderRadius_square.png') + ")";
   private tableData:object[] = [
      {
         top:1,
         illClass:"高血压",
         menzhen:9999,
         mix:"50%"
      },
        {
         top:1,
         illClass:"高血压",
         menzhen:9999,
         mix:"50%"
      },
        {
         top:1,
         illClass:"高血压",
         menzhen:9999,
         mix:"50%"
      },
        {
         top:1,
         illClass:"高血压",
         menzhen:9999,
         mix:"50%"
      },
        {
         top:1,
         illClass:"高血压",
         menzhen:9999,
         mix:"50%"
      },
   ];
   private allAlign: string = 'center';
   private headerCellClassName = ()=>{
      return 'col-blue'
   }
   private  rowClassName ({ row, rowIndex }:any) {
      if ([1,3,5].includes(rowIndex)) {
         return 'col-trans';
      }
   }
   created(){

   }
}
</script>
<style lang="scss">
.echarts_title{
   color:rgba(255,255,255,.7);
   font-size:23px !important;
   margin-bottom:10px;
}
   .right_table{  
       background-size:100% 100%;
       background-repeat: no-repeat; 
      padding:10px 0; 
      padding-top:20px;
       .right_table_main{
          width:90%;
          margin:0 auto;
         font-family: 黑体;
      }
      .vxe-table:before{
         border:none;
      } 
      .col-blue{
         background:#0b5b80;
         color:rgba(255,255,255,.8) !important;
         font-weight: normal;
         font-size:15px;
      }
      .col-trans{
         background:#0f4078 !important; 
         color:#fff;
      }
      .vxe-table .vxe-body--row{
         background: transparent ;
         color:rgba(255,255,255,.7) !important;
         font-size:15px;
      }
      .vxe-table{
         background-image:none;
         background:transparent ;
      }
      .vxe-table:after{
         border-bottom:1px solid rgba(0,0,0,0);
      }
      .vxe-table--main-wrapper{
         background: transparent ;
      }
      .vxe-table--body{
         background: transparent ;
      }
      .vxe-body--row:after{
         // background:#0D5B89;
         // color:#fff;
         border:0;
      }
      .vxe-body--row:before{
         // background:#0D5B89;
         // color:#fff;
         border:0;
      }
      .vxe-table.t--border.b--style-none .vxe-body--column, .vxe-table.t--border.b--style-none .vxe-footer--column, .vxe-table.t--border.b--style-none .vxe-header--column{
         background-image:none;
      }
      .vxe-table--header-wrapper .vxe-table--repair{
         border-bottom:1px solid rgba(0,0,0,0) !important;
      }
   }
</style>