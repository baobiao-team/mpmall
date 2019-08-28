<template>
  <div>
      <van-panel >
        <van-notice-bar
           :text="text"
           left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"/>
      </van-panel>
      <!-- 商品轮播 -->
      <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
          <block v-for="(item, index) in images" :key="index">
              <swiper-item>
                  <image :src="item.url" class="slide-image" mode="scaleToFill"/>
              </swiper-item>
          </block>
      </swiper>

      <!-- 商品价格 -->
      <!-- <div class="goodsPrice red"><span class="yen">¥</span>{{goodsPrice}}</div> -->
          <div class="goodsPrice">¥{{goodsPrice}}</div>
       <!-- 商品标签 -->
      <div class="tag">
      <van-tag  class="tag" plain type="danger">满300减30开学季券</van-tag>
          <van-tag  class="tag" plain type="danger">购买得积分</van-tag>
      </div>
      <!-- 商品名称 -->
      <van-tag  class="demo-margin-right" round type="danger">天猫</van-tag>
      <div class="name">{{goodsName}}</div>

      <!-- 选择数量 -->
      <div class="goodsInfo">
        <!-- 选择数量： -->
        <div class="goodsInfo1">选择数量：</div>
        <div class="name1"><van-stepper id="1" bind:change="onChange" /></div>

      </div>

      <!-- <van-cell title="发货" icon="location-o" :value=value size="large"/> -->
      <van-cell title="发货" icon="location-o" :value=value  size="large"  label="假一赔四 极速退款"/>

      <van-panel title="商品分类"  :status="category" :desc="describe">
      <!-- <view>内容</view> -->
      </van-panel>

       <van-panel title="商品参数"   :desc="desc">
             <!-- <view>内容</view> -->
      </van-panel>

       <div class="goodsbottom">已经到底啦</div>
      <div style = "visibility: hidden;">已经到底啦</div>
      <div style = "visibility: hidden;">已经到底啦</div>
      <div style = "visibility: hidden;">已经到底啦</div>

   <!-- 商品导航 -->
   <view>
     <van-panel>
       <van-goods-action custom-class="goods-action" safe-area-inset-bottom="false">
         <van-goods-action-icon icon="chat-o" text="客服"/>
         <van-goods-action-icon icon="cart-o" text="购物车" :info="count"  @click="toCart()"/>
         <van-goods-action-icon icon="shop-o" text="店铺"/>
         <van-goods-action-button text="加入购物车" type="warning"  @click="increment()"/>
       </van-goods-action>
     </van-panel>
   </view>
</div>
</template>

<script>

  import card from '@/components/card'
  //import Toast from '/static/vant/toast/toast'
  import Toast from '../../../static/vant/toast/toast'

  export default {
    components: {
      card
    },
    data () {
      return {
        indicatorDots:true,
        autoplay:true,
        interval:3000,
        duration:500,
        isShow:true,//是否显示
        goodsName:'特步男鞋运动鞋2019夏季新款轻便跑鞋休闲鞋', //商品名称
        goodsPrice:'108.8',//商品价格
        chosenGoodsSpec:'型号颜色数量',
        text: '[开学季]此商品8月29日开卖，请提前加入购物车...',
        value:'福建 | 快递0.00',
        number:'1',
        count:'3',
        category:'运动生活系列',
        describe:'让我陪你记录光辉里程',
        desc:'美白/抗皱/抗衰老/滋润',
        images: [
                {
                  url:
                    "/static/images/pic1.jpg"
                },
                {
                  url:
                    "/static/images/pic2.jpg"
                }
              ]
      }
    },
   methods: {
      onClickIcon() {
        //Toast('点击图标');
      },

      onClickButton() {
        //Toast('点击按钮');
      },
      toCart() {
        console.log("aaa")
       const url = "../cart/main"
       wx.switchTab({url})
      },
       increment () {
       this.count++
     }
    },
    onLoad(option) {
        var that=this
          let arr = JSON.parse(option.text)
           console.log(option.text)
           this.goodsName=arr.name
           this.images[0].url=arr.imageurl
           this.images[1].url=arr.imageurl
           this.goodsPrice=arr.newprice
           this.category=arr.typeName
           this.describe=arr.dec1
      }
  }

</script>

<style>
  .counter-warp {
    text-align: left;
    padding-top: 0;
    background:#f5f5f5;
  }
  .goodsInfo{
    float: left;
    width: 100%;
    height: 50px;
    text-align: center;
    margin-top: 5px;
    margin-left: 0;
    background: #FFFAFA;
   }
.goodsInfo1{
   float: left;
   line-height: 50px;
    /* background: #fff; */
  }
  .name1{
     float: right;
     line-height: 50px;
     /* background: #fff; */
  }
  .goodsName{
    font-size:.6rem;
    padding:.1rem 1rem;
    text-align:right;
  }
  .goodsPrice{
    margin-left: 5px;
    font-size:.5rem;
    color:#ff3849;
  }
  .tag{

    margin-left:5px;
    margin-bottom:5px;
  }

.goods-action {
    position: absolute;
    bottom: 0;
    }
  .demo-margin-right {
     float: left;
     margin-right: 10px;
     background: #fff;
  }
  .name{
     float: left;
     background: #fff;
  }


.swiper {
/*  height: 376rpx !important; */
  width: 100%;
 }
/* .image {
 height: 100%;
  width: 100%;
 } */
/*设置图片属性*/
swiper-item image {
  height: 100%;

}
.goodsbottom{
  font-size:.3rem;
  text-align:center;
}
</style>
