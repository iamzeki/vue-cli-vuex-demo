import Vue from 'vue';
import alertComponent from './main.vue'
let AlertConstructor = Vue.extend(alertComponent);

let instance;
var Alert = function (msg) {
    instance = new AlertConstructor({
        data: {
            message: msg
        }
    });
    instance.$mount();
    document.body.appendChild(instance.$el);
};
export default Alert