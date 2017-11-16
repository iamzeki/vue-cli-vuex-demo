<template>
    <div class="jk-message" @click="close" v-if="visible">
        <div class="jk-message-layout" @click.stop>
            <div class="jk-message-title">{{title}}</div>
            <p v-html="message"></p>
            <div class="jk-message-btn">
                <a href="javascript:" class="btn" @click="close" v-if="showCancel">取消</a>
                <a href="javascript:" class="btn style1" @click="enterCallback">{{btnText}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import './main.scss'

    export default{
        data(){
            return {
                visible: true,
                showCancel: false,
                title: '温馨提示',
                btnText: '确定',
                message: '',
                onEnter: null
            }
        },
        methods: {
            close(){
                this.visible = false;
                this.$el.parentNode.removeChild(this.$el);
            },

            enterCallback (){
                typeof this.onEnter === 'function' && this.onEnter();
                this.close();
            }
        },
        mounted() {
        },
    }
</script>
