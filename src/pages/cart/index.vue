<template>
  <div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
    <van-checkbox
    class="card-goods__item"
    v-for="item in goods"
    :key="item.id"
    :name="item.id">
    <van-card
      :title="item.title"
      :desc="item.desc"
      :num="item.num"
      :price="formatPrice(item.price)"
      :thumb="item.thumb"
    >
      <view slot="footer">
        <van-checkbox v-model="checked">复选框</van-checkbox>
        <van-stepper v-model="value" min="1" max="5" />
      </view>
    </van-card>
    </van-checkbox>
    </van-checkbox-group>
      <!-- 商品1展示 -->





        <!-- 商品2展示 -->
        <van-card

          tag="上衣"
          price="10.00"
          desc="描述信息"
          title="商品标题"

        >
          <view slot="footer">
            <van-checkbox v-model="checked">复选框</van-checkbox>
            <van-stepper v-model="value" min="1" max="5" />
          </view>
        </van-card>
        <!-- 商品3展示 -->
        <van-card

          tag="裤子"
          price="10.00"
          desc="描述信息"
          title="商品标题"

        >
          <div slot="footer">
              <van-checkbox v-model="checked">复选框</van-checkbox>
              <van-stepper v-model="value" min="1" max="5" />
          </div>
        </van-card>

      <div class="submit">
        <!-- 提交按钮 -->
        <van-submit-bar
          :price="3050"
          button-text="提交订单"
          @submit="onSubmit"
        >
          <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
      </div>
</div>



</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';

export default {
  components: {
    [Card.name]:Card,
    [Checkbox.name]:Checkbox,
    [SubmitBar.name]:SubmitBar,
    [CheckboxGroup.name]:CheckboxGroup,

  },
  data () {
    return {
      checkedGoods:['1','2','3',],
      goods:[{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      },
      {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      },
       {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }]
      };
      },
    computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
     totalPrice() {
          return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);

        },
        }


  methods: {
    formatPrice(price) {
          return (price / 100).toFixed(2);
        },
        onSubmit() {
          Toast('点击结算');
        },
  },
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}



.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}

</style>
