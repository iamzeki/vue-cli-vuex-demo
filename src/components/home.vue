<template>
    <div>
        {{count}}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data (){
            return {}
        },
        computed: mapState(['count']),
        components: {},
        methods: {},
        mounted (){
        }
    }
</script>

<style>
</style>
