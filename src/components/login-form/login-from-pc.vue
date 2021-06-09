<template>
  <div>
    <div class='all_block'>
      <div class="output-block">
        <div class="login-block">
          <!-- <van-row class="head">欢迎登录心衰管理系统</van-row> -->
          <van-row>
            <van-col :span="14" style="padding:20px;">
              <img src="../../assets/logo/zhkj.png" width='100%'  alt="">
            </van-col>
          </van-row>
          <van-row>
            <div class='login_input'>
              <van-col :span="24">
                <div class='input_label'>用户名：</div>
                <van-field type="text"
                  v-model="username"
                  placeholder="请输入用户名"
                />
              </van-col>
              <van-col :span="24">
                <div class='input_label'>密码：</div>
                <van-field  type="password"  v-model="password"  placeholder="请输入密码"   />
              </van-col>
            </div>
            <van-col   :span="24" class="login_btn" >
              <Button
                ref='login_btn'
                @keyup.enter="logins"
                type="primary"
                class="login"
                size='large'
                @click="logins"
                :disabled='disabled'
              >登录</Button>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";
import Toast from "vant";
import Common from "@/common/commom";
import { login } from "@/common/user";
@Component
export default class loginformPc extends Vue {
  public username: string = "";
  public password: string = "";
  public disabled: boolean = false;
  public logins(): void {
    // Common.error('错误提示',13);
    // // check form
    let checkobj = new this.$formchecked();
    checkobj.add(
      [this.username, this.password],
      ["isEmpty", "isEmpty"],
      ["用户名不能为空", "密码不能为空"]
    );
    // message alert
    let msg: string = checkobj.start();
    if (msg) {
      Common.error(msg);
      return;
    }
    if (!this.disabled) {
      // login's function
      Common.loading("正在登陆中,请稍后", 9999)
        login(this.username, this.password)
          .then((res: any) => {
            Common.destory();
            console.log(res);
            // router link to
              Common.suc(res.data.msg + "正在跳转", 2, function() {
                Common.routelink("/");
              });
          })
          .catch((err: string) => {
            Common.destory();
            Common.error(err, 2 ,()=>{
              this.disabled = false;
            });
          });
    }
    this.disabled = true;
  }
  get height(): number {
    return store.getters.getHeight;
  }
  private timer:any = 0;
  private throttle(fn:Function,interval:number):Function{ 
    return () =>{
      if(this.timer){
        return;
      }
      this.timer = setTimeout(()=>{
        clearTimeout(this.timer);
        this.timer = null;
        fn();
      },interval)
    }
  }
  created() {
    let that = this;
    window.onkeydown = function(event: any) {
      if (event["key"] === "Enter") {
        that.throttle(that.logins,500)();
      }
    };
  }
}
</script>

<style lang="scss">
$primary: #2d8cf0;
$error: #ed4014;
$warning: #ff9900;
$white: #fff;
$dark-primary: #2b85e4;
.all_block {
  .output-block{
    border:1px solid;
    width: 800px;
  }
  .login-block {
    .login_input{
      position: absolute;
      top:25%;
      .input_label{
        padding:0px 16px;
      }
    }
    width: 290px;
    min-height: 350px;
    position: absolute;
    bottom: 30%;
    right:15%;
    z-index: 1;
    border-radius: 5px;
    background: $white;
    .head {
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      background: $primary;
      color: $white;
      padding: 10px;
      text-align: center;
      box-sizing: border-box;
      letter-spacing: 3px;
      font-size: 18px;
    }
    .van-col {
      background: $white;
      .van-cell__title {
        vertical-align: middle;
        padding: 5px;
        border: 1px solid #fff;
      }
      .van-cell__value {
        vertical-align: middle;
      }
    }
    input {
      border: 1px solid #c5c8ce;
      padding: 5px;
    }
    .login_btn {
      text-align: center;
      position: absolute;
      bottom:50px;
      .login {
        width: 90%;
        margin: 0 auto;
        border-radius:0;
        // border:1px solid;
      }
    }
  }
}
</style>