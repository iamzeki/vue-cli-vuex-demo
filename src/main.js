import Vue from 'vue'
import 'normalize.css'
import 'STYLE/common/reset'
import App from './App'
import router from './router'
import store from './vuex/store.js'
import Widgets from './Widgets/index.js'
import FastClick from 'fastclick'
import './config/rem'
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';

// global widgets
Vue.prototype.$Toast = Toast;
Vue.prototype.$MessageBox = MessageBox;

Vue.use(Widgets);

// to fix 300ms in the mobile
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// mounted app
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});

