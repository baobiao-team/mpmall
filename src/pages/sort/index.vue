<template>
  <div class="tree">
    <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      :maxHeight="changed"
      @clickItem="onClickItem"
      @clickNav="onClickNav"
      content-item-class="content-item-class">
    </van-tree-select>
  </div>
</template>

<script>
  import card from '@/components/card'
  import config from '@/utils/config-com-kinds'

  export default {
    data () {
      return {
        items: [
          {
            // 导航名称
            text: '所有组件',
            // 该导航下所有的可选项
            children: [...config.pro1,...config.pro2,...config.pro3,...config.pro4,...config.pro5,...config.pro6]
          }, {
            // 导航名称
            text: config.pro1Name,
            // 该导航下所有的可选项
            children: config.pro1
          }, {
            text: config.pro2Name,
            children: config.pro2
          }, {
            text: config.pro3Name,
            children: config.pro3
          }, {
            text: config.pro4Name,
            children: config.pro4
          }, {
            text: config.pro5Name,
            children: config.pro5
          }, {
            text: config.pro6Name,
            children: config.pro6
          }
        ],
        mainActiveIndex: 0,
        activeId: 0,
        changed: 0,
        pageUrls:[],
        data:{}
      }
    },

    components: {
      card
    },
    onLoad() {
      console.log("father onLoad:");

      let screenHeight = wx.getSystemInfoSync().windowHeight;
      this.changed = screenHeight;
      console.log("screenHeight:"+screenHeight);

    },
    onPullDownRefresh() {
        // 下拉刷新
        console.log("onPullDownRefresh");
    },
    onReachBottom() {
        // 上拉加载更多
       console.log("onReachBottom");
    },
    methods: {
      //左侧导航点击时，触发的事件
      onClickNav(event) {
        console.log("onclickNav:"+JSON.stringify(event));
        this.mainActiveIndex=event.mp.detail.index || 0
      },
      //右侧选择项被点击时，会触发的事件
      //this.activeId从1开始，而不是从0开始！
      onClickItem(event) {
        console.log("onClickItem:"+JSON.stringify(event));
        this.activeId=event.mp.detail.id;
        console.log('this.activeId: ',this.activeId);
        //wx.navigateTo({url: this.pageUrls[this.activeId>0? this.activeId-1:this.activeId]});


        let test = {a:"a",b:"b"};
        this.data = JSON.stringify(test);
        console.log(JSON.stringify(test));

        wx.navigateTo({
           url: '/pages/detail/main?text=${this.data}'
        });
      },
      computeScreen(){
        this.maxHigth = 600;
      }
    }
  }
</script>

<style scoped>
.tree{
  display: flex;
  flex-direction: column;
  width:100%;
  height:100%;
}
</style>
