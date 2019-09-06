<template>
  <div class="hyc">
     <van-panel >
        <van-notice-bar
           :text="text"
           left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"/>
      </van-panel>
      <!-- 商品轮播 -->
      <!-- <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
          <block v-for="(item, index) in images" :key="index">
              <swiper-item>
                  <image :src="item.url" class="slide-image" mode="widthFix"/>
              </swiper-item>
          </block>
      </swiper> -->
      <Swiper/>
      <!-- 商品价格 -->
      <!-- <div class="goodsPrice red"><span class="yen">¥</span>{{goodsPrice}}</div> -->
          <div class="goodsPrice">¥{{goodsPrice}}</div>
       <!-- 商品标签 -->
      <div class="tag">
      <van-tag  class="tag" plain type="danger">满300减30开学季券</van-tag>
          <van-tag  class="tag" plain type="danger">购买得积分</van-tag>
      </div>
      <!-- 商品名称 -->
      <div class="icon">
        <van-tag  class="demo-margin-right" round type="danger">天猫</van-tag>
        <div class="name">{{goodsName}}</div>
      </div>

      <!-- 选择数量 -->
      <div class="goodsInfo">
        <!-- 选择数量： -->
        <div class="goodsInfo1">选择数量：</div>
        <div class="name1"><van-stepper id="1" bind:change="onChange" /></div>
      </div>
      <!-- <van-cell title="发货" icon="location-o" :value=value size="large"/> -->
      <van-cell title="发货" icon="location-o" :value=value  size="large"  label="假一赔四 极速退款"/>
      <van-panel title="商品分类"  :status="category" :desc="describe">
      </van-panel>
      <van-panel title="商品活动"   :desc="desc">
      </van-panel>

      <view class = "viewbottom">
        <text class="goodsbottom">已经到底啦...</text>
        <text class="goodsbottom" style = "visibility: hidden;">已经到底啦</text>
        <text class="goodsbottom" style = "visibility: hidden;">已经到底啦</text>
        <text class="goodsbottom" style = "visibility: hidden;">已经到底啦</text>
      </view>

   <!-- 商品导航 -->
   <view>
     <van-panel>
       <van-goods-action custom-class="goods-action" safe-area-inset-bottom="false">
         <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon()" />
         <van-goods-action-icon icon="cart-o" text="购物车" :info="count"  @click="toCart()"/>
         <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickButton()" />
         <van-goods-action-button text="加入购物车" type="warning"  @click="increment()"/>
         <van-toast id="van-toast"/>
       </van-goods-action>
     </van-panel>

   </view>
</div>
</template>

<script>
  import card from '@/components/card'
  import Toast from '../../../static/vant/toast/toast'
  import Swiper from "@/components/swiper";
  const PATH = 'http://47.92.111.175:8081/';
  export default {
    components: {
      card, Swiper
    },
    data () {
      return {
        indicatorDots:true,
        autoplay:true,
        interval:3000,
        duration:500,
        isShow:true,//是否显示
        goodsName:'', //商品名称
        goodsPrice:'',//商品价格
        text: '[开学季]此商品8月29日开卖，请提前加入购物车...',
        value:'',
        number:'1',
        count:'3',
        category:'',
        describe:'',
        desc:'双十一/99划算节/领券/促销',
        images: [
                {
                  url:
                    "https://img.alicdn.com/simba/img/TB1RWfSaLWG3KVjSZPcSuvkbXXa.jpg"
                },
                {
                  url:
                    "https://img.alicdn.com/simba/img/TB1TG4jcW5s3KVjSZFNSuwD3FXa.jpg"
                }
              ]
      }
    },
   methods: {
      onClickIcon() {
        Toast('客服');
      },
      onClickButton() {
        Toast('商铺');
      },
      toCart() {
/*      let goods={"goodsName":this.goodsName,"imageUrl":this.images[0].url,"goodsPrice":this.goodsPrice}
        try {
          wx.setStorageSync("goods",goods)
        } catch (e) { }
       console.log(JSON.stringify(goods)) */
       const url = '../cart/main'
       console.log(url)

       wx.switchTab({
         url: url
       })

      },
       increment () {
       this.count++
     },
  async getGoodsinfodata(that,id){
       wx.request({
            url: PATH+'user/proinfouser/?proId='+id,
            method:"GET",
            success (res) {
             console.log(res.data.proId)
             if(res.data.proType=='010'){
               that.category='电器'
             }else if(res.data.proType=='020'){
               that.category='饰品'
             }else if(res.data.proType=='030'){
               that.category='食物'
             }else{
               that.category='衣物'
             }
                that.goodsName=res.data.proName
                that.goodsPrice=res.data.proPrice
                that.describe=res.data.proDisc
                that.value=res.data.proAddress+' | 快递0.00'
              },
            fail (res){
            console.log(res.data);
            wx.hideLoading();
            wx.showToast({
              title: '网络调用失败',
              duration: 1000
            })
          }

               });

           }
    },
    onLoad(option) {
        let arr = JSON.parse(option.text)
        console.log(option.text)
        const that = this
        this.getGoodsinfodata(that,arr.proId)
      }
  }
</script>

<style>
  .hyc {
    display:flex;
    flex-direction: column;
  }
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
  }
  .name1{
     float: right;
     line-height: 50px;
  }
  .goodsName{
    font-size:.6rem;
    padding:.1rem 1rem;
    text-align:right;
  }
  .goodsPrice{
    margin-top: 10px;
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
    .icon {
      display: flex;
      flex-direction: row;
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
/*  .swiper {
   width: 100%;
   display: block;
 }
 .swiper-item .slide-image {
   height: 500rpx;
   width: 100%;
   margin-left: 80rpx;

 } */
.goodsbottom{
  font-size:.3rem;
 }
 .viewbottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10px;
 }
</style>
