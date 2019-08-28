<template>
  <div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods"  @change="onChange" :value="result" data-key="result">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"

      >
        <van-card
          :tag="item.tag"
          :title="item.title"
          :desc="item.desc"
          :price='item.price'
          :thumb="item.thumb"
          :num="item.num"

        />
        <view slot="footer">

          <van-stepper v-model="value" min="1" max="5"></van-stepper>

        </view>
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice*100"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>

export default {

  data() {
    return {
      checkedGoods: ['1', '2', '3'],
      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 19.99,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg',
        tag:'食品类',

      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 30.00,
        num: 1,
        tag:'食品类',

        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 5000,
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
    totalPrice() {
      console.log(this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0))
      return this.goods.reduce((total, item) => total + (this.result.indexOf(item.id) !== -1 ? item.price : 0), 0);
    },

  },
  methods: {
//     clickMe(){
//
//       console.log(this.checkVal);
//       this.checkVal =!this.checkVal;
//
//     },
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
    }
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
