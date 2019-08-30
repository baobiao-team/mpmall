<template>
  <div>
    <div class="goodss">
    <van-checkbox-group class="card-goods" v-model="checkedGoods" :value="result" data-key="result" @change="onChange">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
      <!-- 商品卡片显示 -->
        <van-card
          :tag="item.tag"
          :title="item.title"
          :desc="item.desc"
          :price='item.price'
          :thumb="item.thumb"
          :num="item.num"
        />
   <!-- <van-stepper  min="1" max="5" :key="item.id"
    :name="item.id"/> -->
    <!-- <van-stepper
        integer
        min="1"
        max="5"
        :value="valueSte"
        @change.stop="onChangeStepper"
      /> -->
      </van-checkbox>
    </van-checkbox-group>

    <van-submit-bar
      :price="totalPrice*100"
      :disabled="!result.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    >


   <!-- <van-cell title="已选" :value="" :label="cellText"> -->
  <!--  </van-cell> -->
    </van-submit-bar>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import Toast from '../../../static/vant/toast/toast'
export default {

  data() {
    return {
      checkedGoods: ['1', '2', '3'],

      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: '19.99',
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg',
        tag:'食品类',
      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: '30.00',
        num: 1,
        tag:'食品类',
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price:'50.00',
        num: 1,
        tag:'食品类',
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }],
        result: [],
    };
  },
  computed: {
    submitBarText() {
      // const count = this.checkedGoods.length;
      const count = this.result.length;
      return '结算' + (count ? `(${count})` : '');
    },
    cellText(){
      const count = this.result.length;
      return  (count ? `(${count})` : '')+'件' ;
    },

    totalPrice() {
      console.log(this.goods.reduce((total, item) => total + (this.result.indexOf(item.id) !== -1 ?  Number(item.price) : 0), 0))
      return this.goods.reduce((total, item) => total + (this.result.indexOf(item.id) !== -1 ? Number(item.price) : 0), 0);
    },

  },
  methods: {
     formatPrice(price) {
       // let datas = [];
       // return this.goods.filter(good => {
       //   good.price = (good.price/100).toFixed(2)
       //   return good
       // })
       console.log(price);
       return ((price / 100).toFixed(2))
     },
     onChange(event) {
      const {key} = event.mp.currentTarget.dataset;
      //this.setData({[key]: event.mp.detail});
      this[key]=event.mp.detail;
      console.log('result: ',this.result.sort())
    },
    toggle(event) {
      const {name} = event.mp.currentTarget.dataset;
      //const box = this.selectComponent(`.checkboxes-${name}`);
      const box =this.$mp.page.selectComponent(`.checkboxes-${name}`)
      console.log('box: ',box);
      box.toggle();
    },
    onSubmit() {
      Toast('点击结算');
    },
    onChangeStepper() {

        },

      },
      // 获取传递过来的商品参数
      onLoad() {
        try {
          var value = wx.getStorageSync('goods')
          if (value) {
            // Do something with return value

            // console.log(value)
            let tmpGood = {}
            tmpGood.title = value.goodsName
            tmpGood.price = value.goodsPrice
            tmpGood.thumb = value.imageUrl
            this.goods.push(tmpGood)

          }
        } catch (e) {
          // Do something when catch error
        }

            // let arr = JSON.parse(option.goods)
            // // console.log(option.text)
            // console.log(arr)
             //this.title =arr.goodsName
             // this.thumb =arr.imageurl
             // this.goodsPrice=arr.newprice



             // this.images[0].url=arr.imageurl
             // this.images[1].url=arr.imageurl
             // this.goodsPrice=arr.newprice
             // this.category=arr.typeName
             // this.describe=arr.dec1
        }
};
</script>

<style lang="less">
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>
