<template id="tmp1">

 <div>

   <div class="userinfo" @click="bindViewTap">
     <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
     <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

     <div class="userinfo-nickname">
       <card :text="userInfo.nickName"></card>
     </div>
   </div>

   <van-cell-group>
     <van-field
       v-model="username"
       required
       clearable
       label="账号"
       right-icon="question-o"
       placeholder="请输入账号"
       @click-right-icon="$toast('question')"
     />

     <van-field
       v-model="password"
       type="password"
       label="密码"
       placeholder="请输入密码"
       required
     />
   </van-cell-group>

   <van-checkbox-group v-model="result" checked-color="#07c160">
     <van-checkbox
       v-for="(item, index) in list"
       :key="item"
       :name="item"
     >
      {{ item }}
     </van-checkbox>
   </van-checkbox-group>

   <van-button type="primary" size="large" color="#7232dd" @click="bindViewTap">登录</van-button>
   <p></p><p><br /></p>
   <van-button type="primary" size="large" color="#7232dd" plain @click="registerTap">注册</van-button>
 </div>

</template>

<script>
import card from '@/components/card'

export default {
  data() {
    return {
      list: ['记住密码', '自动登录'],
      result: ['记住密码', '自动登录'],
      //motto: 'Hello miniprograme',
      userInfo: {
      nickName: '',
      //avatarUrl: 'http://mpvue.com/assets/logo.png',
      }
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    registerTap () {
        const url = '../register/main'
        wx.navigateTo({url});
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
  created () {
    // let app = getApp()
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
