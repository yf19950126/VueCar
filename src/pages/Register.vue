<template>
  <div>
    <div class="login-bg">
      <img src="../assets/img/login_bg.png" alt="">
    </div>
    <div class="input">
      <span>注册汽配龙账号</span>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" >
          <el-input type="username" v-model="ruleForm2.username" auto-complete="off" placeholder="请输入2-6位用户名"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="name" >
          <el-input type="name" v-model="ruleForm2.name" auto-complete="off" placeholder="请输入2-6位昵称"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone" >
          <el-input type="phone" v-model="ruleForm2.phone" auto-complete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" >
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')" class="register">注册</el-button>
        </el-form-item>
        <p>已有账号？
          <router-link to="/login">去登录</router-link>
        </p>
      </el-form>
    </div>
    <my-footer style="margin-top: 100px"></my-footer>
  </div>
</template>

<script>
  import axios from "axios"
  import MyFooter from "../components/MyFooter"
  import {isvalidPhone} from '../validate'
  export default {
    name: "login",
    data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validPhone=(rule, value,callback)=>{
        if (!value){
          callback(new Error('请输入电话号码'))
        }else  if (!isvalidPhone(value)){
          callback(new Error('请输入正确的11位手机号码'))
        }else {
          callback()
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return{
        ruleForm2:{
          username:'', //用户名
          name:"",//昵称
          phone:"",//手机号
          password:'', //密码
          re_password:'', //确认密码
        },
        ruleForm2: {
          username:'',
          name:"",//昵称
          phone:"",//手机号
          pass: '',
          checkPass: '',
        },
        rules2: {
          username: [
            {required:true,message:'请输入用户名',tigger:'blur'},
            {min:2,max:6,message:'请输入合法的用户名',tigger:'blur'},
          ],
          name: [
            {required:true,message:'请输入您的昵称',tigger:'blur'},
            {min:2,max:6,message:'请输入合法的用户名',tigger:'blur'},
          ],
          phone: [
            { required: true, trigger: 'blur', validator: validPhone }//这里需要用到全局变量
          ],
          pass: [
            {required:true,message:'请输入密码',tigger:'blur'},
            {min:6,max:12,message:'密码长度不合法',tigger:'blur'},
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {required:true,message:'请再次输入密码',tigger:'blur'},
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      }
    },
    components:{
      MyFooter
    },
    methods:{
      submitForm:function(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
            //提交
            axios.post('/users/register',this.ruleForm2)
              .then(response=>{
                var res = response.data;
                if(res.status == '0'){
                  //显示成功的消息提示
                  this.$message.success('注册成功');
                  this.backLogin();
                  this.$refs[formName].resetFields();
                }else{
                  //返回了错误的提示消息的时候
                  this.$message.error(res.message);
                }
              }).catch(err=>{
              console.log(err);
            })
          }else{
            return false
          }
        })
      },
      backLogin:function () {
        this.$router.push({
          path:'/login'
        })
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active,.fade-leave-active {
    opacity: 1;
    transition: .3s;
    -webkit-transition: .3s
  }
  .fade-enter,.fade-leave-to {
    opacity: 0;
    transform: translate3d(0,-5%,0);
    -webkit-transform: translate3d(0,-5%,0);
    transition: .3s;
    -webkit-transition: .3s
  }
  .login-bg{
    margin-top: 100px;
  }
  .input{
    text-align: center;
    font-size: 18px;
    color: grey;
    padding-top: 10px;
    width: 500px;
    height: 100%;
    box-shadow: 5px 5px 3px #eee;
    float: right;
    margin-right: 3%;
    margin-top: -380px;
  }
  form{
    margin: 0px 20px 0 10px;
    width: 400px;
  }
  .register{
    border: none;
    margin: 5px auto;
    width: 100%;
    height: 40px;
    background-color: #cc1b23;
    color: white;
    font-size: 15px;
  }
  p{
    margin-top: 0;
    margin-left: 60px;
    padding:0;
    color: #333;
    font-size: 15px;
  }
  a{
    text-decoration: none;
    color: #cc1b23;
    font-size: 15px;
  }
</style>

