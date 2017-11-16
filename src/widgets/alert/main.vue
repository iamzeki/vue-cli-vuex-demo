<template>
    <div v-if="visible" class="jk-alert">{{message}}</div>
</template>

<script>
    export default{
        data(){
            return {
                message: '',
                visible: true
            }
        },
        methods: {
            close(){
                setTimeout(()=> {
                    this.visible = false;
                    this.$el.parentNode.removeChild(this.$el);
                }, 10000);
            },
        },
        mounted() {
            this.close();
        },
    }
</script>

<style>
    .jk-alert {
        position: fixed;
        left: 50%;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20vw;
        height: 20vw;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, .8);
        color: #fff;
    }
</style>