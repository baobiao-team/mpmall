<template>
  <div>
    <van-search
        :value="value"
        placeholder="请输入搜索关键词"
        use-action-slot
        @change="onChange"
        @search="onSearch"
      >
        <view slot="action" @tap="onSearch">搜索</view>
      </van-search>

    <van-tabs>
        <van-tab title="今日推荐"></van-tab>
        <van-tab title="时尚"></van-tab>
        <van-tab title="美妆"></van-tab>
        <van-tab title="国际"></van-tab>
        <van-tab title="母婴"></van-tab>
        <van-tab title="居家"></van-tab>
    </van-tabs>

    <view>
       <Swiper images = "images"/>
       <Scroll />
    </view>

  </div>
</template>

<script>
import Swiper from "@/components/swiper";
import Scroll from "@/components/scroll";

export default {
  components: { Swiper, Scroll },

  data(){
    return{
      value: '',

     }
  },
  methods:{
    onChange1(e) {
      this.value=e.mp.detail
    },

    onSearch1(event) {
      if (this.value) {
        wx.showToast({title: '搜索：' + this.value,icon: 'none'});
      }
    },
  },
  computed: {}
}

</script>

<style scoped>
van-search {
  border-radius: 2px !important;
}


</style>
