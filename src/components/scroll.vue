<template>
  <div>
      <scroll-view scroll-y="true">
          <view class="welfares">
            <block v-for="(item, index) in goodsWelfareItems" :key="index">
              <view class="welfares-good" catchtap="catchTapCategory" :data-type="item.name" :data-typeid="item.typeId">
                <view>
                  <image :src="item.imageurl" class="welfares-image" mode="widthFix" @click = "todetails(item)"/>
                </view>
                <view class="product-name">
                  {{item.goodName}}
                </view>
                <view class="product-price-wrap">
                  <p class="product-price-new">￥{{item.newprice}}</p>
                  <p class="product-price-old">￥{{item.oldprice}}</p>
                  <p class="discount">{{item.discount}}</p>
                </view>

              </view>
            </block>
          </view>
      </scroll-view>

      <view class="weui-loadmore" :hidden="isHideLoadMore">
          <view class="weui-loading"></view>
          <view class="weui-loadmore__tips">努力加载中</view>
      </view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goodsWelfareItems: [
              {
                goodId: 0,
                goodName: '泊尔崖蜜蜜光面膜（5片盒装）',
                url: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/142/fb2960bf8e074d029c24315279289c19-5_218x274_70.jpg',
                newprice: "86",
                oldprice: "88",
                // discount: "8.8"
              },
              {
                goodId: 1,
                goodName: '透无瑕矿物养护两用粉饼#03',
                url: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/21/27/4b24e2a629644877866d3da755f6a36e-5_218x274_70.jpg',
                newprice: "147.00",
                oldprice: "150.00",
                // discount: "8.8"
              },
              {
                goodId: 2,
                goodName: '川水水光面膜（5片盒装）',
                url: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/86/7891361fdab348a1bc91aeca31fc77b1-5_218x274_70.jpg',
                newprice: "86.00",
                oldprice: "88.00",
                // discount: "8.8"
              },
              {
                goodId: 3,
                goodName: '蜜三色渐变咬唇膏3.2g 03蜜橙动心恋',
                url: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                imageurl: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                newprice: "97.00",
                oldprice: "99.00",
                // discount: "8.8"
              },
              {
                goodId: 4,
                goodName: '时焕颜亮采套装',
                url: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/93/69a6bc1c11eb4be184b7dffb43b8565b-5_218x274_70.jpg',
                newprice: "398.00",
                oldprice: "459.00",
                // discount: "8.8"
              },
              {
                goodId: 5,
                goodName: '雪域眼霜套装',
                url: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/23/127/53409c86f74647af915bc379427b97c2-5_218x274_70.jpg',
                newprice: "238.00",
                oldprice: "358.00",
                // discount: "8.8"
              },
              {
                goodId: 6,
                goodName: '凝时鲜颜冰肌水套装',
                url: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/13/95/fb6c3d0c1f304b449dadb1f0100c1205-5_218x274_70.jpg',
                newprice: "248.00",
                oldprice: "348.00",
                // discount: "8.8"
              },
              {
                goodId: 7,
                goodName: '雪润皙白精选三件套',
                url: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/30/184/a5000156098940b5a05a0e696535ac20-5_218x274_70.jpg',
                newprice: "348.00",
                oldprice: "396.00",
                // discount: "8.8"
              }]
      }
    },
    onLoad(option) {
      this.getHomepage()
    },
    methods: {
      getHomepage() {
        var that = this
        wx.request({
          url: 'http://47.92.111.175:8081/user/proinfouser/search?proType=',
          method: 'GET',
          success(res) {
            console.log(res.data)
            for(let i=0;i<res.data.length;i++){
               // that.goodsWelfareItems[i].imageurl=res.data[i].proImg
              that.goodsWelfareItems[i].goodName=res.data[i].proName
              that.goodsWelfareItems[i].oldprice=res.data[i].proPrice
              that.goodsWelfareItems[i].newprice=res.data[i].proPrice
              that.goodsWelfareItems[i].discount=res.data[i].proDisc
              that.goodsWelfareItems[i].goodId=res.data[i].proId
            }
          }
        })
      },

      todetails(item){
        // this.data = event.mp.detail;
        console.log(item);

        wx.navigateTo({
           url: '/pages/detail/main?text=' + JSON.stringify(item)
        });

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
    /* vertical-align: bottom; */
    align-items: flex-end;
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
    background-color: #AAA;
    color: #fff;
    margin-bottom: 5px;
  }

  /*  加载更多   */
  .weui-loading {
    margin: 0 5px;
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    -webkit-animation: weuiLoading 1s steps(12, end) infinite;
    animation: weuiLoading 1s steps(12, end) infinite;
    background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
    background-size: 100%;
  }
  .weui-loadmore {
    width: 65%;
    margin: 1.5em auto;
    line-height: 1.6em;
    font-size: 12px;
    text-align: center;
  }
  .weui-loadmore__tips {
    display: inline-block;
    vertical-align: middle;
    color: #888;
  }
</style>
