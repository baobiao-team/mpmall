import { VantComponent } from '../common/component';
const ITEM_HEIGHT = 150;
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
        }
    },
    data: {
        subItems: [],
        mainHeight: 0,
        itemHeight: 0,
        imgUrls: [
            'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
            'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
    'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        imageURL: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    },
    watch: {
        items() {
            this.updateSubItems().then(() => {
                this.updateMainHeight();
            });
        },
        maxHeight() {
            this.updateItemHeight(this.data.subItems);
            console.log("maxHeight changed"+JSON.stringify(this.data.subItems));
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
            }
        },
        // 当一个导航被点击时
        onClickNav(event) {
            console.log("onclickNav farther:"+JSON.stringify(event));
            const { index } = event.currentTarget.dataset;
            console.log("onclickNav farther index:"+JSON.stringify({ index }));
            const item = this.data.items[index];
            if (!item.disabled) {
                this.$emit('clickNav', { index });
            }
        },
        // 更新子项列表
        updateSubItems() {
            const { items, mainActiveIndex } = this.data;
            const { children = [] } = items[mainActiveIndex] || {};
            this.updateItemHeight(children);
            return this.set({ subItems: children });
        },
        // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
        updateMainHeight() {
            const { items = [], subItems = [] } = this.data;
            const maxHeight = Math.max(items.length * ITEM_HEIGHT, subItems.length * ITEM_HEIGHT);
            console.log("updateMainHeight maxHeight:"+maxHeight);
            console.log("updateMainHeight this.data.maxHeight:"+this.data.maxHeight);
            this.set({ mainHeight: Math.min(maxHeight, this.data.maxHeight) });
        },
        // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
        updateItemHeight(subItems) {
            const itemHeight = Math.min(subItems.length * ITEM_HEIGHT, this.data.maxHeight);
            return this.set({ itemHeight });
        }
    }
});
