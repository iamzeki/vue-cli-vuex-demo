import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'
import Widgets from './Widgets/index.js'
import FastClick from 'fastclick'
import './config/rem'
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';

Vue.prototype.$Toast = Toast;
Vue.prototype.$MessageBox = MessageBox;

Vue.use(Widgets);

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});

