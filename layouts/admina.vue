<template>
    <div>
        <my-backheader/>
        <div class="main">
            <nuxt/>
        </div>
        <div class="footer_back">
            <my-footer/>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .main{
        width: 90%;
        float: right;
        min-height: 850px;
        height:auto;
    }
    .footer_back{
        width: 100%;
        display: block;
        overflow: hidden;
    }
    .footer{
        border-top:1px solid #dddddd;
    }
</style>

<script>
    import MyBackheader from '../components/Backheader.vue'
    import MyFooter from '../components/Footer.vue'

    export default {
        components: {
            MyBackheader,
            MyFooter
        }
    }
</script>