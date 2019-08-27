<template>
  <div >
    <!-- 通知栏 -->
    <van-panel >
      <van-notice-bar
         :text="text"
         left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"/>
    </van-panel>
    <!-- 商品轮播 -->
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in images" :key="index">
            <swiper-item>
                <image :src="item.url" class="slide-image" mode="aspectFill"/>
            </swiper-item>
        </block>
    </swiper>
    <!-- 商品名称 -->
    <div class="name">
       <van-tag  class="demo-margin-right" round type="danger">天猫</van-tag>
       <div>{{goodsName}}</div>
    </div>
    <!-- 商品价格 -->
    <div class="goodsInfo" v-if="isShow==true">
        <div class="goodsPrice red"><span class="yen">¥</span>{{goodsPrice}}</div>
    </div>
     <!-- 商品标签 -->
    <div class="tag">
    <van-tag  class="tag" plain type="danger">满300减30开学季券</van-tag>
        <van-tag  class="tag" plain type="danger">购买得积分</van-tag>
    </div>
    <!-- 选择数量 -->
    <div class="goodsInfo"  v-if="isShow==true">
        <span class="goodsInfo">选择数量：</span>
        <span class="name1"><van-stepper :id="1" bind:change="onChange" /></span>
    </div>

    <!-- <van-cell title="发货" icon="location-o" :value=value size="large"/> -->
    <van-cell title="发货" icon="location-o" :value=value  size="large"  label="假一赔四 极速退款"/>

    <van-panel title="商品分类"  :status="category" :desc="describe">
    <!-- <view>内容</view> -->
    </van-panel>

     <van-panel title="商品参数"   :desc="desc">
           <!-- <view>内容</view> -->
    </van-panel>
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
        desc:'减震/防滑/耐磨/轻便',
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
    background: #fff;
  }
  .goodsInfo .goodsName,.goodsInfo .goodsPrice{
    font-size:.6rem;
    padding:.1rem 1rem;
    text-align:right;
  }
  .goodsPrice .yen{
    font-size:.5rem;
  }
  .red{
    color:#ff3849;
  }
 .goods-action {
    position: relative !important;
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
  .name1{
     float: right;
     background: #fff;
  }
  .tag{
    margin-left:8px;
    margin-bottom:5px;
  }
.swiper {
  height: 376rpx !important;
 }
 .image {
  height: 100%;
  width: 100%;
 }
</style>
