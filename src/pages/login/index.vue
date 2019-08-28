
<template id="tmp1">

 <div>

   <div class="userinfo" >
     <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
     <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover"  />

     <div class="userinfo-nickname">
       <card :text="userInfo.nickName"></card>
     </div>
   </div>

   <van-cell-group>
     <van-field
       @change="bindValue"
       required
       label="账号"
       right-icon="question-o"
       placeholder="请输入账号"
       @click-right-icon="$toast('question')"
     />
     <van-field
       @change="bindValue1"
       type="password"
       label="密码"
       placeholder="请输入密码"
       required
     />
   </van-cell-group>

   <van-button type="primary" size="large" color="#7232dd" @click="bindViewTap">登录</van-button>
   <van-button type="primary" size="large" color="#7232dd" plain @click="registerTap">注册</van-button>
   <van-toast id="van-toast"/>
   </div>
</template>

<script>
import card from '@/components/card'
import Toast from '../../../static/vant/toast/toast'

export default {
  data() {
    return {

      userInfo: {
      nickName: '',
      },
      username:'',
      password:''
    }
  },

  components: {
    card
  },

  methods: {
    bindValue(event){
      this.username=event.mp.detail;
    },
    bindValue1(event){
      this.password=event.mp.detail;
    },
    bindViewTap () {
      if(this.username===''){
        Toast('用户名或密码不正确');
        return
      }
      wx.setStorageSync("username",this.username)
      wx.setStorageSync("password",this.password)
      this.username=''
      this.password=''
      console.log(this.username)
      const url = '../index/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },


    registerTap () {
        Toast('注册成功');
      },
      test(){
        var Num = this.data.username;

        wx.setStorage({//存储到本地

          key:"username",

          data:Num

        })

      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
  created () {
    // let app = getApp()
  },

}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
