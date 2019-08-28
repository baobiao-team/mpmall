<template>
  <div>
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in imagesUrl" :key = "index">
          <swiper-item>
            <image :src="item" class="slide-image" mode="widthFix"/>
          </swiper-item>
        </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      imagesUrl: [
            'https://img.alicdn.com/simba/img/TB1RWfSaLWG3KVjSZPcSuvkbXXa.jpg',
            'https://img.alicdn.com/simba/img/TB1TG4jcW5s3KVjSZFNSuwD3FXa.jpg',
            'https://b.vimage1.com/upload/mst/2017/11/04/139/23b96f0e89abed2d9415e848fc3715ff_604x290_80.jpg'
          ],
      Hei: ""
    };
  },
  // methods: {
  //   imgH:function(e){
  //       var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
  //       var imgh=e.detail.height;　　　　　　　　　　　　　　　　//图片高度
  //       var imgw=e.detail.width;
  //       var swiperH=winWid*imgh/imgw + "px"　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
  //       this.setData({
  //           Hei:swiperH　　　　　　　　//设置高度
  //       })
  //   },
  // }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  display: block;
}
/*设置图片属性*/
.swiper .slide-image {
  width: 100%;
}

</style>
