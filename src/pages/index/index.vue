<template>
  <div>
    <van-search
        :value="value"
        placeholder="请输入搜索关键词"
        use-action-slot
        @change="onChange1"
        @search="onSearch1"
      >
        <view slot="action" @tap="onSearch1" class = "search-action">搜索</view>
      </van-search>

    <van-tabs active="1" @change="onChange2">
        <van-tab
            v-for="(item, index) in tabs"
            :key="index"
            :title="item">
            <view class="content">

            </view>
        </van-tab>
   </van-tabs>

    <view>
       <Swiper/>
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
      tabs: ['今日推荐', '数码', '美妆', '手机', '美食', '户外'],
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

    onChange2(event) {
          wx.showToast({
            title: `切换到标签 ${event.mp.detail.index + 1}`,
            icon: 'none'
          });
        },
  computed: {}
}

</script>

<style scoped>



.search-action {
  box-sizing: border-box;
  border-radius: 20px;
  width: 70px;
  text-align: center;
  background-color: #f7f8fa;
}


</style>
