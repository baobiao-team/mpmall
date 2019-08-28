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
        items: [],
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
    onPullDownRefresh() {
        // 下拉刷新
        console.log("onPullDownRefresh");
    },
    onReachBottom() {
        // 上拉加载更多
       console.log("onReachBottom");
    },
    onLoad() {
      console.log("father onLoad:"+config.goodsWelfareItems);
      this.dateParse();
      let screenHeight = wx.getSystemInfoSync().windowHeight;
      this.changed = screenHeight;
      console.log("screenHeight:"+screenHeight);

    },
    methods: {
      dateParse(){
        console.log("aaaaa");
        var map = new Map();
        //首先找到所有分类
        config.goodsWelfareItems.forEach((item)=>{
          //console.log(item.name);
          map.set(item.type,item.typeName);
        })
        //添加全部分类
        let allList = [];
        config.goodsWelfareItems.forEach((object)=>{
            allList.push(object);
        })
        this.items.push({"text":"全部", "children": allList});
        //根据分类加入相应位置
        map.forEach((value, key) => {
          let tempList = [];
          console.log("map:"+key);
          config.goodsWelfareItems.forEach((object)=>{
            if(object.type === key){
              tempList.push(object);
            }
          })
          this.items.push({"text":value, "children": tempList});
          console.log(JSON.stringify(this.items));
        })
      },
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
        //wx.navigateTo({url: this.pageUrls[this.activeId>0? this.activeId-1:this.activeId]});


        this.data = event.mp.detail;
        console.log(JSON.stringify(this.data));

        wx.navigateTo({
           url: '/pages/detail/main?text=${JSON.stringify(this.data)}'
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
