<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>{{count}}</h3>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
            <button @click="count++">==</button>
            <button @click="alert">alert</button>
            <button @click="message">message</button>
            <button @click="toast">toast</button>
            <button @click="messageBox">messageBox</button>
        </div>
        <btn></btn>
        <router-link to="/home">home</router-link>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import btn from '@/components/jk-btn'

    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Hello World'
            }
        },
        computed: mapState([
            'count'
        ]),
        methods: {
            ...mapActions([
                'toggleJkAlert'
            ]),
            alert (){
                this.$myAlert("hello alert");
            },
            message (){
                this.$myMessage({
                    showCancel: true,
                    message: "hello message<br>换行",
                    onEnter: () => {
                        console.log('点击确定的回调');
                    }
                });
            },
            toast (){
                this.$Toast('提示信息');
            },
            messageBox (){
                this.$MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: true
                });
            }
        },
        components: {
            btn
        }
    }
</script>
