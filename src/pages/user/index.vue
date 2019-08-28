import Vue from 'vue';
import { RadioGroup, Radio } from 'vant';
<template id="tmp1">

 <div>
   <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" @click="test" />
   <van-cell-group>
     <van-cell title="用户名" v-model= "username" />
     <van-cell title="手机号" v-model="phone"/>
   </van-cell-group>
<van-collapse v-model="activeNames">
  <van-collapse-item title="收货地址" name="1">{{address}}</van-collapse-item>
</van-collapse>

   <van-cell title="账号与安全" is-link  />
   <van-button type="primary" size="large" color="#7232dd" plain @click="loginTap">{{button}}</van-button>
 </div>

</template>
<script>
import card from '@/components/card'
export default {

  methods: {
    loginTap() {
        this.username=''
        this.password=''
        //wx.removeStorageSync('username')
         //wx.removeStorage('username')
        // wx.clearStorageSync()
        // wx.clearStorage()
        wx.removeStorageSync('username')
        wx.removeStorageSync('password')
        const url = '../login/main'
        wx.navigateTo({url})
        //wx.switchTab({url});
      },
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    created () {
    // let app = getApp()
  },

  data() {
    return {
      activeNames: ['1'],
      radio: '1',
      username :'',
      phone:'',
      button:'点击去登录',
      address:'',
      flag:true
    };
  },
//使用后每次不输密码和用户名，会自动将上次的用户名和密码记住，wx.clearStorageSync()无法清除缓存。
  onShow(){
    {
      this.username=''
      this.password=''
      if(wx.getStorageSync('username')===''){
        this.flag=false
        console.log(this.flag)
        this.username='未登录'
        this.phone=''
        this.address=''
        this.button="点击去登录"
      }
      else{
        this.flag=true
        console.log(this.flag)
        this.username=wx.getStorageSync('username')
        this.password=wx.getStorageSync('password')
        this.phone='18829076532'
        this.address='西安市雁塔区锦业路6号'
        this.button="退出登录"
      }
    }
  },
  onReady() {

  }
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
