<template>
  <div>
    这是用户页面
    <van-button type="primary" @click="toLogin()">主要按钮</van-button>
  </div>
</template>

<script>
  export default {
    methods: {
      toLogin() {
        const url = "../login/main"
        wx.navigateTo({url})
      }
    }
  }
</script>

<style>
</style>
