import Vue from 'vue';
import messageComponent from './main.vue'
let MessageConstructor = Vue.extend(messageComponent);

let instance;
var Message = function (options) {
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    instance = new MessageConstructor({
        data: options
    });
    instance.$mount();
    document.body.appendChild(instance.$el);
};
export default Message