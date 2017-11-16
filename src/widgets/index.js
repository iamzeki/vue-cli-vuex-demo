// 统一管理

import Alert from './alert/main.js';
import Message from './message/main.js';

let install = function (Vue) {
    Vue.prototype.$myAlert = Alert;
    Vue.prototype.$myMessage = Message;
};

export default {
    install
}