<template>
    <div>
        <div class="header_img">
            <h1>CDMP-高校实验设备管理平台</h1>
            <div class="grid-content bg-purple-dark userLogout">
                <div class="logout">
                    <el-button class="button_logout" @click="handleLogOugt">退出</el-button>
                </div>
                <p>|</p>
                <p>admin</p>
            </div>
        </div>
        <div class="main_nav">
            <el-row class="nav_content">
                <nuxt-link to="/admin/device">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-menu icon"></i>设备管理</div>
                </nuxt-link>
            </el-row>
            <el-row class="nav_content">
                <nuxt-link to="/admin/user">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-setting icon"></i>用户管理</div>
                </nuxt-link>
            </el-row>
            <el-row class="nav_content">
                <nuxt-link to="/admin/announce">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-view icon"></i>公告管理</div>
                </nuxt-link>
            </el-row>
            <el-row class="nav_content">
                <nuxt-link to="/admin/message">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-message icon"></i>消息管理</div>
                </nuxt-link>
            </el-row>
            <!-- <el-row class="nav_content">
                <nuxt-link to="/admin/order">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-edit icon"></i>设备预约管理</div>
                </nuxt-link>
            </el-row>
            <el-row class="nav_content">
                <nuxt-link to="/admin/resources">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-service icon"></i>云计算资源管理</div>
                </nuxt-link>
            </el-row> -->


            <!-- 暂定折叠面板(css设置在main.css 18-32行) -->
            <el-row class="nav_content">
                <el-collapse accordion>
                    <el-collapse-item>
                        <template slot="title">
                        <i class="header-icon el-icon-document icon"></i>预约管理
                        </template>
                        <el-row class="nav_contentAnother">
                            <nuxt-link to="/admin/deviceApply">
                                <div class="grid-content bg-purple-dark"><i class="el-icon-edit icon"></i>设备预约管理</div>
                            </nuxt-link>
                        </el-row>
                        <el-row class="nav_content">
                            <nuxt-link to="/admin/computeApply">
                                <div class="grid-content bg-purple-dark"><i class="el-icon-service icon"></i>云计算资源管理</div>
                            </nuxt-link>
                        </el-row>
                    </el-collapse-item>
                </el-collapse>
            </el-row>
            <!--end-->
            
        </div>
    </div>
</template>
<style lang="less" scoped>
    a{
        text-decoration:none;
        out-line: none;
        color: #2e2f30;
    }
    .icon{
        margin-right: 5px;
    }
    .header_img{
        width: 100%;
        min-height: 60px;
        height:auto;
        overflow: hidden;
        background: black;
        h1{
            float: left;
            line-height: 60px;
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 9%;
            color: #fafafa;
            letter-spacing: 0;
            text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135 ;
        }
    }
    .nuxt-link-exact-active{
        color: #3498db;
    }
    .userLogout{
        width: 50%;
        min-width: 206px;
        float: right;
        height:60px;
        line-height: 60px;
        p{
            padding-left: 20px;
            text-align: right;
            float: right;
            color:#fff;
            line-height: 60px;
        }
    } 
    .logout{
        height:100%;
        text-align: left;
        float: right;
        padding-left:20px;
        padding-right:20px ;
    }
    .button_logout{
        padding: 5px 20px;
    }
    .main_nav{
        width: 9%;
        min-height: 850px;
        height:auto;
        float: left;
        display: block;
        border-right: 1px solid #ddd;
        // font-size: 1.1em;
        // font-family: 'YouYuan';
    }
    .nav_content{
        width: 100%;
        min-height: 80px;
        height:auto;
        text-align: center;
        line-height: 80px;
        border-bottom: 1px solid #ddd;
    }
    .nav_contentAnother{
        width: 100%;
        min-height: 80px;
        height:auto;
        text-align: center;
        line-height: 80px;
    }
</style>

<script>
    import  NuxtLink  from '../.nuxt/components/nuxt-link'

    export default {
        components() { 
            return NuxtLink
        },
        data(){
            return{
            };
        },
        methods: {
            async handleLogOugt(){
                let resData = await this.$auth.logout()
                window.location.reload()
            },
        },
        async mounted(){
            if(!this.$auth.state.loggedIn) {
                window.location.href ='/login'
            }else{
                if(!this.$auth.hasScope('admin')){
                    window.location.href ='/'
                }
            }     
        },
    }
</script>