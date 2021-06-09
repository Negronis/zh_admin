<template>
  <div>
    <div class='bs_header' :style='{backgroundImage:"url("+ bg_src + ")"}' >
       <div class='bs_top_row'>
          <div span="2" class='bs_title_left'>
            <!-- <img src="@/assets/big_screen/home_logo.png"  alt=""> -->
            <!-- <div style='cursor:pointer' @click='reback'>控制台</div> -->
          </div> 
          <div span="12" class='bs_title_center'>中昊智慧大药房管理中心</div>
          <div span="6" class='bs_right_second_time'>{{Date_str}} <span style="font-size:20px">周{{date_week}}</span></div> 
       </div>
    </div>
  </div>
</template>
<script >  
export default {
  components:{},
  data(){
    return { 
      bg_src:require("@/assets/big_screen/headers.png"),
      date_nyr:"",
      date_sfm:"",
      date_week:""
    }
  },
  computed:{
    Date_str(){
      return this.date_sfm
    }
  },
  methods:{
    reback(){
      this.$router.replace('/');
    },
    transWeek(day){
      if(day === 0){
        return "日"
      }else{
        return ["一","二","三","四","五","六"].filter((e,i)=>{
            return (i+1) === day;
        })[0];
      }
    }
  },
  created(){
    setInterval(()=>{  
      let date = new Date();
      this.date_sfm =date.getFullYear() +"年" + (+(date.getMonth()+1) < 9 ? "0" +(date.getMonth()+1) :  (date.getMonth()+1))+ "月" +  (date.getDate() > 9 ? date.getDate() : "0" +date.getDate()) + "日" + " " + (((+date.getHours()) > 9 )? date.getHours() : "0" + date.getHours()) + ':' +  ((+date.getMinutes()) > 9 ? date.getMinutes() : "0" + date.getMinutes()) + ':' + ((+date.getSeconds()) > 9 ? date.getSeconds() : "0" + date.getSeconds());
    },1000)
    this.date_week = this.transWeek(new Date().getDay());
  }
}
</script>
<style>
.bs_header{ 
  width:100%;
  min-height:160px; 
  height:160px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  position:relative; 
  color:#fff;
  /* top:-10px; */
}
.bs_header  .bs_title_center{
  font-size:45px;
  line-height:80px;
  text-align: center;
  color:#fff; 
  background-image: -webkit-linear-gradient(bottom, #119cd8, #38d6f9, #57eff5); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  font-weight: bold;
  font-family: "黑体";
  flex-basis:33.33%; 
  /* margin-top:-20px; */
}
.bs_top_row{
  width:100%;
  color:#47D4E8;
  text-align:left;
  line-height:70px;
  display:flex;
  flex-wrap: wrap;
} 
.bs_title_left{ 
  font-size:20px;  
  flex-basis:33.33%;
}
.bs_title_left div,img{
  display:inline-block;vertical-align:middle;
}
.bs_title_left div{
  margin-left:5px;
}
.bs_title_left img{
  margin-left:20px;
  margin-bottom:5px; 
} 
.bs_right_second_time{
  font-size:25px;
  text-align: right; 
  flex-basis:30%; 
  color:#d8f8ff;
  margin-top:10px;
}
.bs_right_time{
  padding-right:25px;
  font-size:20px;
  text-align: right;
}
</style>