<template>
    <div class="login">
        <h3>管理员登录系统</h3>
         <el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="管理账号" prop="user">
                    <el-input type="text" v-model="ruleForm2.user" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="后台密码" prop="pwd">
                    <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                    <el-button @click="resetForm('ruleForm2')">返回首页</el-button>
                </el-form-item>
         </el-form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
          return {
            ruleForm2: {
                password: '',
                user: ''
            }}},
         methods: {
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                if (valid) {
                        let {status,data:{code,message}} = await axios.post('http://127.0.0.1:3000/user/theone',{
                            userName:this.ruleForm2.user,
                            password:this.ruleForm2.password,
                        })
                        console.log(status,code,message)
                        if(status===200&&code===200){
                            await this.$alert('登录成功')
                            sessionStorage.myinfo=message
                            this.$router.push('/admin')
                        }else{
                            this.$alert('账户名或密码失败')
                        }
                } else {
                    this.$alert('无法提交,请填写正确信息')
                    return false;
                    }
                })  
            },
            resetForm(){
                this.$router.push('/')
            }

    }}
</script>

<style scoped>
    .login{
        width: 400px;
        height:500px;
        border:1px solid #2ea8e6;
        margin: 100px auto 0;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        padding: 50px 30px 0 10px;
        /* align-items: center; */
    }
    .el-form{
        
        margin-top: 50px;
        
        
    }
    .el-form-item {
        margin-top: 50px;
    }
    .el-form-item__content{
        margin-left: 242px ;
    }
</style>