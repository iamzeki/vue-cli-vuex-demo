import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 1,
    jk_alert: {
        status: false,
        text: 'test'
    }
};

const mutations = {
    add(state){
        state.count += 1;
    },
    reduce(state){
        state.count -= 1;
    },
    toggleJkAlert (state, text = 'test'){
        state.jk_alert.status = !state.jk_alert.status;
        state.jk_alert.status && (state.jk_alert.text = text);
    }
};

const actions = {
    toggleJkAlert (context, text){
        context.commit('toggleJkAlert', text);
        setTimeout(() => {
            context.commit('toggleJkAlert');
        }, 1500);
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});