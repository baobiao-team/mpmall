import { link } from '../mixins/link';
import { VantComponent } from '../common/component';
VantComponent({
    classes: [
        'num-class',
        'desc-class',
        'thumb-class',
        'title-class',
        'price-class',
        'origin-price-class',
    ],
    mixins: [link],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: {
          type: String,
          value: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
        },
        title: {
          type: String,
          value: '无名'
        },
        price: String,
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originPrice: String,
        thumbMode: {
            type: String,
            value: 'aspectFit'
        },
        currency: {
            type: String,
            value: '¥'
        }
    },
    methods: {
        onClickThumb() {
            this.jumpLink('thumbLink');
        }
    }
});
