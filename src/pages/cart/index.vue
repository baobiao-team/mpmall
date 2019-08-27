<template>
  <div>
    <!-- 标题展示 -->
    <div class="userinfo" @click="bindViewTap">

        <card :text="userInfo.nickName"></card>
    </div>

    <div class="usermotto">
      <van-checkbox-group class='card-goods' v-model='checkedGoods'>
        <van-checkbox class='card-goods_item' v-for = "item in goods" :key="item.id"
        :name="item.id" @click='clickMe(item)' v-model="item.checkVal">
          <van-card

            :tag="item.tag"
            :price = "item.price"
            :title="item.title"
            :desc="item.desc"
            :thumb="item.thumb"
          >
            <view slot="footer">

              <van-stepper v-model="value" min="1" max="5"></van-stepper>

            </view>
          </van-card>
        </van-checkbox>

      </van-checkbox-group>
      </div>

      <div class="submit">
        <!-- 提交按钮 -->
        <van-submit-bar
          :price="totalPrice"
          :disabled="!checkedGoods.length"
          :button-text="submitBarText"
          @submit="onSubmit"
        >
          <van-checkbox v-model="checked" @click='clickAll'>全选</van-checkbox>
        </van-submit-bar>
      </div>

  </div>


</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      checkedGoods: ['1', '2', '3'],
      motto: '您好！',
      goods:[{
        id: '1',
        price:10,
        title:'香蕉',
        desc:'约250g,2根',
        tag:'食品类',
        checkVal:false,
      },{
        id: '2',
        price:300,
        title:'运动鞋',
        desc:'品牌：耐克',
        tag:'服装类',
        checkVal:false,
      },
       {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        checkVal:false,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }],


      checked: false,
      userInfo: {
        nickName: '购物车',
      }
    }
  },
  components: {
    card,

  },
computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');

    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
      console.log(total);
      console.log(item);
      item.value()
      console.log(this.checkedGoods.indexOf(item.id));

    }
  },
  methods: {

    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    formatPrice(price){
      return price.toFixed(2);
    },

    clickMe(item){
            console.log(item.checkVal);
            item.checkVal =!item.checkVal;
            },
    clickAll(){
      console.log(this.checkVal);
      this.id.checkVal =!this.id.checkVal;
      console.log(this.checked);
      this.checked=!this.checked;
    }
  },

  created () {
    // let app = getApp()
  }
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
