<template>
    <section class="container">
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">规章制度</span>
        </div>
        <el-row class="headerline"></el-row>
        <div class="contentList">
            <el-row class="strip">
                <el-col :span="24"><div class="grid-content bg-purple-dark"><a href="/rules/rulefive"> {{ result }}</a></div></el-col>
            </el-row>
        </div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark paging" >
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000" class="lalala">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<style scoped>
    a{
        text-decoration: none;
    }
    .contentList{
        width: 100%;
        height: 650px;
    }
    .paging{
        width: 40%;
        margin-left: 30%;
    }
    .strip{
        margin-left:30px;
        width: 80%;
        height: 35px;
        /*border: 1px solid #2e2f30;*/
    }
    .grid-content{
        float:left;
        line-height: 35px;
    }
    .grid-content>a{
        color:#3675a8;
    }
    .grid-content>a:hover{
        color:black;
    }

</style>
<script>
import axios from 'axios'
export default {
  async asyncData({}) {
      let  createResult  = await axios.get(`/api/initDataBase`)
      return {
          result: createResult.data.message
      }
  }
}
</script>
