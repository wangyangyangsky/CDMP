<template>
    <section class="">
        <div class="headerName">
            <!-- <div class="leftSty"></div> -->
            <span class="bullCont">
                <p>通知公告--</p>
                <p class="bulletinName">{{title}}</p>
            </span>
        </div>
        <el-row class="headerline"></el-row>
        <el-row :gutter="20">
            <el-col>
                <h1 style="text-align:center;">{{title}}</h1>
            </el-col>
            <el-col>
                <div class="publish-date">
                    <h4>发布时间：{{publishDate}}</h4>
                </div>
            </el-col>
            <el-col :span="20" :offset="2">
                <div class="grid-content bg-purple-dark detailsCont">
                    <p>{{ content }}</p>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<style lang='less' scoped>
.bullCont p{
    width: auto;
    float: left;
}
.detailsCont{
    width: 100%;
    margin-top: 20px;
    min-height: 700px;
    height:auto;
}
.bulletinName{
    color:#7f828b;
    overflow: hidden;
}
.publish-date{
    float: right;
    margin-right: 10%
}
</style>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            content:'',
            title:'',
            publishDate: '',
            input3:'',
            date:[],
        }
    },
    async asyncData({ params }){
        let resData = await axios.post('/api/info/getInfoDataById',{id: params.id})
        if(resData.data.status === 1){
            return{
                content: resData.data.infoDetails.content,
                title: resData.data.infoDetails.title,
                publishDate: resData.data.infoDetails.releaseDate,
            }
        }else{
            return{
                content: "<h2>获取信息失败</h2>",
                title: '无法正确获取数据'
            }
        }
    },
    async mounted(){
    }
}

</script>