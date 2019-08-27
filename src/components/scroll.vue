<template>
  <div>
      <scroll-view scroll-y="true">
          <view class="welfares">
             <block v-for="(item, name) in goodsWelfareItems" :key="name">
              <view class="welfares-good" catchtap="catchTapCategory" :data-type="item.name" :data-typeid="item.typeId">
                <view>
                  <image :src="item.imageurl" class="welfares-image" mode="widthFix" @click = "todetails()"/>
                </view>
                <view class="product-name">
                  {{item.name}}
                </view>
                <view class="product-price-wrap">
                  <p class="product-price-new">￥{{item.newprice}}</p>
                  <p class="product-price-old">￥{{item.oldprice}}</p>
                  <p class="discount">{{item.discount}}折</p>
                </view>

              </view>
            </block>
          </view>
      </scroll-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goodsWelfareItems: [
              {
                goodId: 0,
                name: '泊尔崖蜜蜜光面膜（5片盒装）',
                url: 'bill',
                imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/142/fb2960bf8e074d029c24315279289c19-5_218x274_70.jpg',
                newprice: "86",
                oldprice: "88",
                discount: "8.8"
              },
              {
                goodId: 1,
                name: '透无瑕矿物养护两用粉饼#03',
                url: 'bill',
                imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/21/27/4b24e2a629644877866d3da755f6a36e-5_218x274_70.jpg',
                newprice: "147.00",
                oldprice: "150.00",
                discount: "8.8"
              },
              {
                goodId: 2,
                name: '川水水光面膜（5片盒装）',
                url: 'bill',
                imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/86/7891361fdab348a1bc91aeca31fc77b1-5_218x274_70.jpg',
                newprice: "86.00",
                oldprice: "88.00",
                discount: "8.8"
              },
              {
                goodId: 3,
                name: '蜜三色渐变咬唇膏3.2g 03蜜橙动心恋',
                url: 'bill',
                imageurl: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                newprice: "97.00",
                oldprice: "99.00",
                discount: "8.8"
              },
              {
                goodId: 4,
                name: '时焕颜亮采套装',
                url: 'bill',
                imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/93/69a6bc1c11eb4be184b7dffb43b8565b-5_218x274_70.jpg',
                newprice: "398.00",
                oldprice: "459.00",
                discount: "8.8"
              },
              {
                goodId: 5,
                name: '雪域眼霜套装',
                url: 'bill',
                imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/23/127/53409c86f74647af915bc379427b97c2-5_218x274_70.jpg',
                newprice: "238.00",
                oldprice: "358.00",
                discount: "8.8"
              },
              {
                goodId: 6,
                name: '凝时鲜颜冰肌水套装',
                url: 'bill',
                imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/13/95/fb6c3d0c1f304b449dadb1f0100c1205-5_218x274_70.jpg',
                newprice: "248.00",
                oldprice: "348.00",
                discount: "8.8"
              },
              {
                goodId: 7,
                name: '雪润皙白精选三件套',
                url: 'bill',
                imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/30/184/a5000156098940b5a05a0e696535ac20-5_218x274_70.jpg',
                newprice: "348.00",
                oldprice: "396.00",
                discount: "8.8"
              }]
      }
    },
    methods: {
      todetails(id) {
          const url = "../detail/main?id=" + id
          wx.navigateTo({url})
      }
    }
  }

</script>

<style>
  .welfares{
    display: flex;
    justify-content: left;
    flex-direction: row;
    flex-wrap: wrap;
    margin:10px 5px;
  }
  .welfares-good{
    height: 560rpx;
    width: 47%;
    margin:0px auto;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
    font-size: 24rpx;
  }
  .welfares-image{
    width: 100%;
    display: inline-block;
    border: 1px #eee solid;
  }
  .welfares-good .product-name{
    color: #000;
    height: 28px;
    text-align:left;
     margin: 0px 5px;
     margin-bottom: 3px;
  }
  .product-price-wrap .product-price-new{
    color: #e80080;
    margin-left:5px;
    font-weight:900;
  }
  .product-price-wrap .product-price-old{
    color: #888;
    text-decoration: line-through;
    padding-left: 2px;
  }
  .product-price-wrap .discount{
    position: absolute;
    right: 3px;
    background-color: #000;
    color: #fff;
    margin-bottom: 5px;
  }
</style>
