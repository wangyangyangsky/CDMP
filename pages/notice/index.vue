<template>
    <section class="container">
        <div class="headerName">
            <!-- <div class="leftSty"></div> -->
            <span class="bullCont">通知公告</span>
        </div>
        <el-row class="headerline"></el-row>
        <ul class="rule-list">
            <li class="rule-item" v-for="info in infoDetail" v-bind:key="info">
                <a :href='"/notice/" + info.id'>
                    <span class="rule-item-title">{{ info.title }}({{info.releaseDate}})</span>
                    <!-- <span class="rule-item-date">{{ info.releaseDate }} </span> -->
                </a>
            </li>
            <!-- <el-row class="strip">
                <div >
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark"></div>
                    </el-col>
                </div>
            </el-row> -->
        </ul>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark paging" >
                    <el-pagination
                        :page-size="10"
                        background
                        layout="prev, pager, next"
                        :total="ruleCount"
                        @current-change="handlePageChange">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<style lang="less" scoped>
    // a {
    //     text-decoration: none;
    //     color:black;
    // }
    .grid-content{
        float:left;
        line-height: 35px;
        // .grid-content a{
        //     color:#3675a8;
        // }
        // .grid-content a:hover{
        //     color:black;
        // }
    }
    .paging {
        width: 40%;
        margin-left: 30%;
    }
    .rule-list {
        padding: 5px 30px;
        min-height: 600px;
        .rule-item {
            overflow: hidden;
            color: #3675a8;    
            .rule-item-title {
                float: left;
                margin-bottom: 10px;
            }
            // .rule-item-date {
            //     float: right;
            // } 
        }
        .rule-item a:hover{
                color:black;
            }
    }
</style>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            data:'学校关于放假期间仪器归还问题（2018.01.15）',
            ruleCount: null,
            infoDetail: null,
        }
    },
    methods:{
            async handlePageChange(currentPage){
                let resData = await axios.get(`api/rule/getAll/${currentPage}`)
                if(resData.data.status === 1){
                    this.rulesDetail = resData.data.rulesDetail
                }else{
                    this.$message.error(resData.data.message);
                    
                }
            }
    },
    async mounted(){
        let getAllData = await this.$axios.$get('/api/info/getAllInfoData');
        this.infoDetail = getAllData.infoDetail
        this.ruleCount = getAllData.counts;
    },
    head(){
        return {
            title: 'CDMP - 通知公告'
        }
    }
}

</script>