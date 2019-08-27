<template>
  <div>
<!--    <swiper>
        <swiper-item> <image src='/static/images/p1.jpg'></image> </swiper-item>
        <swiper-item> <image src='/static/images/p2.jpg'></image></swiper-item>
        <swiper-item> <image src='/static/images/p3.jpg'></image> </swiper-item>

    </swiper> -->

    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in imagesUrl" :key = "index">
          <swiper-item>
            <image :src="item" class="slide-image" mode="aspectFill"/>
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
            'https://a4.vimage1.com/upload/flow/2017/10/20/117/15084947982974.jpg',
            'https://a2.vimage1.com/upload/flow/2017/11/07/73/15100619325212.jpg',
            'https://b.vimage1.com/upload/mst/2017/11/04/139/23b96f0e89abed2d9415e848fc3715ff_604x290_80.jpg'
          ]
    };
  }
};
</script>

<style scoped>
swiper {
  width: 100%;
}
/*设置图片属性*/
swiper-item image {
  width: 100%;
}

</style>
