import { VantComponent } from '../common/component';
const ITEM_HEIGHT = 118;
VantComponent({
    classes: [
        'main-item-class',
        'content-item-class',
        'main-active-class',
        'content-active-class',
        'main-disabled-class',
        'content-disabled-class'
    ],
    props: {
        items: Array,
        mainActiveIndex: {
            type: Number,
            value: 0
        },
        activeId: {
            type: [Number, String, Array]
        },
        maxHeight: {
            type: Number,
            value: 300
        },
        swiperWidth: {
            type: Number,
            value: 234
        }
    },
    data: {
        subItems: [],
        mainHeight: 0,
        itemHeight: 0,
        imgUrls: [
            'https://a4.vimage1.com/upload/flow/2017/10/20/117/15084947982974.jpg',
            'https://a4.vimage1.com/upload/flow/2017/10/20/117/15084947982974.jpg'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        imageURL: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/142/fb2960bf8e074d029c24315279289c19-5_218x274_70.jpg',
        itemSize: 0,
        viewHeight: 0
    },
    watch: {
        items() {
            //console.error("items change!:"+this.data.items.length)
            this.updateSubItems().then(() => {
                this.updateMainHeight();
            });
        },
        maxHeight() {
            this.updateItemHeight(this.data.subItems);
            this.updateMainHeight();
        },
        mainActiveIndex: 'updateSubItems'
    },
    methods: {
        // 当一个子项被选择时
        onSelectItem(event) {
            console.log("onSelectItem father:"+JSON.stringify(event));
            const { item } = event.currentTarget.dataset;
            if (!item.disabled) {
                this.$emit('clickItem', item);
            };
        },
        // 当一个导航被点击时
        onClickNav(event) {
            console.log("onclickNav:"+JSON.stringify(event));
            const { index } = event.currentTarget.dataset;
            const item = this.data.items[index];
            const proType = this.data.items[index].id;
            console.log("proType:"+proType);
            if (!item.disabled) {
                this.$emit('clickNav', { index ,proType});
            };
        },
        // 更新子项列表
        updateSubItems() {
            const { items, mainActiveIndex } = this.data;
            const { children = [] } = items[mainActiveIndex] || {};
            this.updateItemHeight(children);
            console.error("children:"+children.length);
            return this.set({ subItems: children });
        },
        // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
        updateMainHeight() {
            const { items = [], subItems = [] } = this.data;
            const maxHeight = Math.max(items.length * ITEM_HEIGHT, subItems.length * ITEM_HEIGHT);
            //console.log("getSwiperHigth():" + this.getSwiperHigth());
            //console.log("updateMainHeight maxHeight:"+maxHeight);
            //console.log("updateMainHeight this.data.maxHeight:"+this.data.maxHeight);
            this.set({ mainHeight: this.data.maxHeight });
        },
        // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
        updateItemHeight(subItems) {
            const itemHeight = Math.min(subItems.length * ITEM_HEIGHT,this.data.maxHeight);
            //console.error("updateItemHeight itemHeight:"+this.data.maxHeight);
            return this.set({itemHeight:this.data.maxHeight});
        },
        getSwiperHigth(){
          var titleHeight = 150;
          let query = wx.createSelectorQuery().in(this)
          query.select('.swi').boundingClientRect(function (res) {
            //得到标题的高度
            titleHeight = res.height;

          }).exec();
          return titleHeight;
        },
        imageLoad(e){
          //console.error("imageLoad:"+this.data.swiperWidth);
          //this.set({ swiperHight: 94 });

          let imgw = e.detail.width;
          let imgh = e.detail.height;
                //宽高比
          let ratio = imgw / imgh;
          console.log(imgw, imgh);
          console.log("ratio:"+ratio);
          // 计算的高度值
          var viewHeight = this.data.swiperWidth / ratio;
          // var imgheight = viewHeight;
          // var imgheights = this.data.imgheights;
          //把每一张图片的对应的高度记录到数组里
          console.log('图片的高度：'+viewHeight)
          this.setData({
            viewHeight: viewHeight
          })
        }
    }
});
