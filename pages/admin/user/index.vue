<template>
    <div class="mianContent">
        <el-popover
                ref="popover4"
                placement="right"
                width="400"
                trigger="click"
                v-model="addFromVisible">
            <el-form ref="addForm" :model="addForm" label-width="90px">
                <el-form-item label="用户名称" >
                    <el-col :span="18">
                        <el-input v-model="addForm.name" clearable/>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户账号">
                    <el-col :span="18">
                        <el-input v-model="addForm.account" clearable/>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户类别">
                    <el-col :span="18">
                        <el-select v-model="addForm.userType" placeholder="请选择用户类别">
                            <el-option
                                v-for="item in userTypes"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户密码">
                    <el-col :span="18">
                        <el-input v-model="addForm.password" clearable type="password"/>
                    </el-col>
                </el-form-item>
                <el-form-item label="重复密码">
                    <el-col :span="18">
                        <el-input v-model="addForm.repeat" clearable type="password"/>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户手机号">
                    <el-col :span="18">
                        <el-input v-model="addForm.phone" clearable/>
                    </el-col>
                </el-form-item>
                <el-form-item label="用户邮箱">
                    <el-col :span="18">
                        <el-input v-model="addForm.email" clearable/>
                    </el-col>
                </el-form-item>
                <el-form-item label="禁用标识">
                    <el-switch v-model="addForm.isUse"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">添加</el-button>
                    <el-button  @click="addFromVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-popover>
        <div class="headerName">
            <div class="leftSty"></div>
            <span class="bullCont">用户管理</span>
        </div>
        <el-row class="headerline"/>
        <div class="announceCont">
            <div class="oneline">
                <div class="demo-input-suffix search">
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="searchInput">
                            <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                    </el-input>
                </div>
                <div class="select">
                    <el-select v-model="searchType" placeholder="请选择筛选方式">
                        <el-option
                                v-for="item in searchOption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                
                        </el-option>
                    </el-select>
                </div>
                <div class="add">
                    <el-button v-popover:popover4 class="addContent">新增</el-button>
                </div>
            </div>  
            <div class="table">
                <el-table
                        :data="tableData"
                        border
                        style="width: 70%;">
                    <el-table-column
                            prop="user.id"
                            label="用户id"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="user.name"
                            label="用户名称">
                    </el-table-column>
                    <el-table-column
                            prop="user.account"
                            label="用户账号"
                            width="170">
                    </el-table-column>
                    <el-table-column
                            label="用户邮箱"
                            width="200">
                        <template slot-scope="scope">{{ scope.row.user.email || '暂未填写'}}</template>
                    </el-table-column>
                    <el-table-column
                            label="用户手机号"
                            width="">
                        <template slot-scope="scope">{{ scope.row.user.phone || '暂未填写'}}</template>
                    </el-table-column>
                    <el-table-column
                            label="用户类别"
                            width="">
                        <template slot-scope="scope">{{ scope.row.userType.name || '暂未填写'}}</template>
                    </el-table-column>
                    <el-table-column
                            label="是否禁用"
                            width="100">
                        <template slot-scope="scope">{{ scope.row.user.isUse ? '可用': '禁用'}}</template>
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作"
                            width="100">
                        <template slot-scope="scope">
                            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-button type="text" @click="handleDelete(scope.row)" style="margin-left: 5px;">禁用</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-dialog title="编辑用户" :visible.sync="editFromVisible">
                <el-form ref="form" :model="editForm" label-width="90px">
                    <el-form-item label="用户名称" >
                        <el-col :span="18">
                            <el-input v-model="editForm.name" clearable />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户账号">
                        <el-col :span="18">
                            <el-input v-model="editForm.account" clearable />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户密码">
                        <el-col :span="18">
                            <el-input v-model="editForm.password" clearable />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户类别">
                        <el-col :span="18">
                            <el-select v-model="editForm.userType" placeholder="请选择用户类别">
                                <el-option
                                        v-for="item in userTypes"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户手机号">
                        <el-col :span="18">
                            <el-input v-model="editForm.phone" clearable />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="用户邮箱">
                        <el-col :span="18">
                            <el-input v-model="editForm.email" clearable />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="可用标识">
                        <el-switch v-model="editForm.isUse" />
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="handleEditCancle">取 消</el-button>
                    <el-button type="primary" @click="handleEditSubmit">提 交</el-button>
                </div>
            </el-dialog>
            <div class="page">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="itemCounts">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<style lang='less' scoped>
    .textarea{
        height: 350px;
    }
    .announceCont{
        width: 100%;
        margin-top: 5px;
    }
    .commonGround{
        width: 15%;
        height: 40px;
        float: left;
        z-index: 9999;
    }
    .oneline{
        width: 100%;
        height:60px;
        .search{        
            min-width: 120px; 
            .commonGround;   
        }
        .select{            
            min-width: 170px;
            margin-left: 10px;
            .commonGround;
        }
    }
</style>

<script>
    import { Button } from 'element-ui'
    import axios from 'axios'
    export default {
        components: {
            Button
        },
        layout(){
            return 'admina'
        },
        methods: {
            async handleSearch(){
                if(! this.searchInput){
                    window.location.reload()
                }else{
                    console.log(this.searchInput)
                    let resData = await this.$axios.$post('/api/user/userSearchData',{
                        name: this.searchInput
                    })
                    if(resData.status === 1){
                        this.tableData  = resData.result
                    }else{
                        this.$message.error(resData.message)
                    }
                }
            },
            async handleAdd(){
                if( this.addForm.password === this.addForm.repeat ){
                    try{
                        let resData = await this.$axios.$post('/api/user/userAddUser', {
                            name: this.addForm.name,
                            account: this.addForm.account,
                            password: this.addForm.password,
                            user_type: this.addForm.userType,
                            phone: this.addForm.phone,
                            email: this.addForm.email,
                            isUse: this.addForm.isUse,
                        })
                        if(resData.status === 1){
                            this.$message({
                                type: 'success',
                                message: resData.message
                            });
                            window.location.reload()
                        }else {
                            this.$message.error(resData.message);
                        }
                    }catch (err){
                        console.log(err)
                        this.$message.error(`服务器异常，由于 ${err}`);
                    }
                }else {
                    this.$message.error('两次输入的密码不一致');
                    this.addFromVisible = false
                }
            },
            handleAddCancel(){
                this.addFromVisible = false
            },
            async handleEdit(row) {
                this.editFromVisible = true
                let resData = await this.$axios.$post('/api/user/userGetUserData', {
                    id: row.user.id
                });
                if(resData.status === 1){
                    this.editForm = resData.user
                    console.log(this.editForm)
                }else {
                    this.$message.error(resData.message);
                }
                
            },
            async handleEditSubmit(row){
                let resData = await this.$axios.$post('/api/user/modifyUserById', {
                    name:this.editForm.name,
                    account:this.editForm.account,
                    password:this.editForm.password,
                    phone:this.editForm.phone,
                    isUse:this.editForm.isUse,
                    email:this.editForm.email,
                    user_type:this.editForm.userType,
                });
                if(resData.status === 1){
                    this.$message({
                        type: 'success',
                        message: resData.message
                    })
                    window.location.reload()
                }else {
                    this.$message.error(resData.message);
                }
                this.editFromVisible = false
            },
            handleEditCancle(){
                this.editFromVisible = false
            },
            async handleDelete(row) {
                try{
                    await this.$confirm('此操作将失效该用户, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    })
                    let resData = await this.$axios.$post('/api/user/userDeleteById', {
                            id: row.user.id
                    })
                    if(resData.status === 1){
                        this.$message({
                            type: 'success',
                            message: '成功禁用!'
                        })
                        window.location.reload()
                    }else {
                        this.$message.error(resData.message);
                    }
                }catch (err){
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                }
            },
            async handleCurrentChange(val) {
                let resData = await this.$axios.$get(`/api/user/userGetAllData/${val}`);
                if(resData.status === 1){
                    this.tableData = resData.usersDetail
                }else {
                    this.$message.error(resData.message)
                }
            },
        },
        data() {
            return {
                currentPage: 1,
                itemCounts: null,
                addForm: {
                    id:'',
                    name: '',
                    account: '',
                    password: '',
                    userType: '',
                    repeat: '',
                    phone: '',
                    email: '',
                    isUse: false,
                },
                editForm: {
                    id:'',
                    name: '',
                    password:'',
                    account: '',
                    userType: '',
                    phone:'',
                    email:'',
                    isUse: false,
                },
                userTypes: [
                    {
                        id: '1',
                        name: '管理员'
                    },
                ],
                value: '',
                tableData: [
                    {
                        user: {
                            account:"haoyiqing",
                            createdAt:"2018-01-25T04:04:23.000Z",
                            email:"1337074512@qq.com",
                            id:1,
                            isUse:false,
                            name:"郝一擎",
                            password:"123456",
                            phone:null,
                            updatedAt:"2018-01-25T06:05:46.000Z",
                            user_type:1
                        },
                        userType: {
                            createdAt:"2018-01-25T04:04:22.000Z",
                            id:1,
                            isUse:true,  
                            name:"管理员",
                            updatedAt:"2018-01-25T04:04:22.000Z"
                        }
                    },
                ],
                getAllUsersData:'',
                editFromVisible: false,
                formLabelWidth: '120px',
                addFromVisible: false,
                searchInput: '',
                searchType: '',
                searchOption: [
                    {
                        value: '1',
                        label: '人员名称'
                    },
                ],
            };
        },
        async mounted() {
            // 挂载数据
            let getAllUsersData = await this.$axios.$get('/api/user/userGetAllData');
            let getOnlyUsersData = await this.$axios.$get('/api/user/onlyGetAllUser');

            this.tableData = getAllUsersData.usersDetail;
            this.itemCounts = getAllUsersData.counts;
            this.userTypes = getAllUsersData.userTypeDetail;
        },
        head() {
            return {
                title: 'CDMP - 用户管理'
            }
        }
    }
</script>