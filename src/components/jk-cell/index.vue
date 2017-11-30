<template>
    <div :class="['jk-cell', customClass]" @click="tapCell">
        <div class="jk-cell-title">{{title}}</div>
        <div class="jk-cell-value">
            <slot></slot>
            <i class="icon-arrow-r" v-if="isIcon"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            customClass: {
                type: String
            },
            isIcon: {
                type: Boolean,
                default: false
            },
            title: {
                type: String
            },
            tapCell: {
                type: Function,
                default: () => {}
            }
        },
        data (){
            return {}
        },
        components: {},
        methods: {
        },
        mounted (){
        }
    }
</script>

<style lang="scss">
    @import "../../style/common/mixin.scss";
    .jk-cell{
        display: flex;
        align-items: center;
        padding: 0 pxTorem(20);
        font-size: pxTorem(28);
        .jk-cell-title{
            flex: 1;
        }
    }
</style>
