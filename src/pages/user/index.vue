<template>
  <div>
    <van-button type="primary" @click="clickMe()">主要按钮</van-button>
  </div>
</template>

<script>
  export default {
    methods: {
      clickMe() {
        console.log("you click me")
      }
    }
  }
</script>

<style>
</style>
