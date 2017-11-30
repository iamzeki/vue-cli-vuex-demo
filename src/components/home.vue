<template>
    <div>
        <cell title="这是标题" :tap-cell="tapCell" is-icon>这是value</cell>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import cell from 'COMPONENTS/jk-cell'

    export default {
        data (){
            return {}
        },
        computed: mapState(['count']),
        components: {
            cell
        },
        methods: {
            tapCell (){
                this.$Toast('点击了cell')
            }
        },
        mounted (){
        }
    }
</script>

<style>
</style>
