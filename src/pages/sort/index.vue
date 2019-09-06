<template>
  <div class="tree">
    <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      :maxHeight="changed"
      :swiperWidth = "imgWidth"
      @clickItem="onClickItem"
      @clickNav="onClickNav"
      content-item-class="content-item-class">
    </van-tree-select>
  </div>
</template>


<script>
  import card from '@/components/card'
  import config from '@/utils/config-com-kinds'

  const PATH = 'http://47.92.111.175:8081/';
  export default {
    data () {
      return {
        items: [],
        mainActiveIndex: 0,
        activeId: 0,
        changed: 0,
        pageUrls:[],
        data:{},
        imgs: [
            'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
            'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        ],
        imgs2:[
          'https://a4.vimage1.com/upload/flow/2017/10/20/117/15084947982974.jpg',
          'https://a4.vimage1.com/upload/flow/2017/10/20/117/15084947982974.jpg',
        ],
        imgWidth:0
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
      //this.dateParse();
      wx.showLoading({
        title: '加载中',
      });
      const that = this;
      this.getAllPro(that);

      let winHeight = wx.getSystemInfoSync().windowHeight;
      this.changed = winHeight;
      let winWidth = wx.getSystemInfoSync().windowWidth;
      this.imgWidth = winWidth * 0.75 - 6;
      console.log("winWidth:"+winWidth);
      console.log("imgWidth:"+this.imgWidth);
    },
    methods: {
      dateParse(){
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
        this.items.push({"text":"全部", "children": allList,"imgs":this.imgs2});
        //根据分类加入相应位置
        map.forEach((value, key) => {
          let tempList = [];
          console.log("map:"+key);
          config.goodsWelfareItems.forEach((object)=>{
            if(object.type === key){
              tempList.push(object);
            }
          })
          this.items.push({"text":value, "children": tempList,"imgs":this.imgs});
          console.log(JSON.stringify(this.items));
        })
      },
      //左侧导航点击时，触发的事件
      onClickNav(event) {
        console.log("onclickNav farther:"+JSON.stringify(event));
        this.mainActiveIndex=event.mp.detail.index || 0;
        let proType = event.mp.detail.proType;
        wx.showLoading({
          title: '加载中',
        });
        const that = this;
        this.getSubItems(that, proType);
      },
      //右侧选择项被点击时，会触发的事件
      //this.activeId从1开始，而不是从0开始！
      onClickItem(event) {
        this.activeId=event.mp.detail.id;
        this.data = event.mp.detail;
        console.log(JSON.stringify(this.data));
        wx.navigateTo({
           url: '/pages/detail/main?text='+JSON.stringify(this.data)
        });
      },
      getSubItems(that, proType){
        wx.request({
          url: PATH+'user/proinfouser/search', //仅为示例，并非真实的接口地址
          data: {
            proType: proType
          },
          success (res) {
            console.log("that.items:"+that.items.length);
            that.items.forEach((object)=>{
              if(object.id == proType){
                object.children = res.data;
              }
              //.push({"text":object.tpeName,"id":object.proType,"children": templist,"imgs":that.imgs});
            })
            console.log("that.items:"+JSON.stringify(that.items));
            wx.hideLoading();
          },
          fail (res){
            console.log(res.data);
            wx.hideLoading();
            wx.showToast({
              title: '网络调用失败',
              duration: 1000
            })
          }
        })
      },
      computeScreen(){
        this.maxHigth = 600;
      },
      getItems(that,allList){
        wx.request({
          url: PATH+'/user/proinfouser/findprotype', //仅为示例，并非真实的接口地址
          success (res) {
            //console.log(JSON.stringify(res));

            //this.items
            that.items.push({"text":"全部","id":"","children": allList,"imgs":that.imgs});
            let templist = [];
            res.data.forEach((object)=>{
              that.items.push({"text":object.typeName,"id":object.proType,"children": templist,"imgs":that.imgs});
            })
            console.log("that.items:"+JSON.stringify(that.items));
            wx.hideLoading();
          },
          fail (res){
            console.log(res.data);
            wx.hideLoading();
          }
        })
      },
      getAllPro(that){
        let allList = [];
        wx.request({
          url: PATH+'user/proinfouser/search', //仅为示例，并非真实的接口地址
          data: {
            proType: ''
          },
          success (res) {
            console.log("allpro:"+JSON.stringify(res));
            // res.data.forEach((object)=>{
            //   allList.push(object);
            // })
            allList = res.data;
            that.getItems(that,allList);
          },
          fail (res){
            console.log(res.data);
            wx.hideLoading();
            wx.showToast({
              title: '网络调用失败',
              duration: 1000
            })
          }
        })
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
