<template>
    <div>
      <div class="login-bg">
        <img src="../assets/img/login_bg.png" alt="">
      </div>
      <div class="input">
        <span>登录汽配龙</span>
        <el-form :model="ruleForm2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="username" v-model="ruleForm2.username"  auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass"  auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="submitForm('ruleForm2')" class="login">登录</el-button>
          </el-form-item>
          <p>没有账号？
            <router-link to="/register">去注册</router-link>
          </p>
        </el-form>
      </div>
      <my-footer></my-footer>
    </div>
</template>

<script>
  import axios from "axios"
  import MyFooter from "../components/MyFooter"
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
        return{
          ruleForm2:{
            username:'', //用户名
            password:'', //密码
          },
          ruleForm2: {
            username:'',
            pass: '',
          },
          rules2: {
            username: [
              {required:true,message:'请输入用户名',tigger:'blur'},
              {min:3,max:16,message:'请输入合法的用户名',tigger:'blur'},
            ],
            pass: [
              {required:true,message:'请输入密码',tigger:'blur'},
              {min:6,max:12,message:'密码长度不合法',tigger:'blur'},
              { validator: validatePass, trigger: 'blur' }
            ]
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
              axios.post('/users/login',this.ruleForm2)
                .then(response=>{
                  var res = response.data;
                  if(res.status == 1){
                    //显示成功的消息提示
                    this.$message.success('登录成功');
                    this.backHome();
                    this.$refs[formName].resetFields();
                  }else{
                    //返回了错误的提示消息的时候
                    this.$message.error(res.msg);
                  }
                }).catch(err=>{
                console.log(err);
              })
            }else{
              return false
            }
          })
        },
        backHome:function () {
          this.$router.push({
            path:'/'
          })
        }
      }
    }
</script>

<style scoped>
.login-bg{
  margin-top: 100px;
}
  .input{
    text-align: center;
    font-size: 18px;
    color: grey;
    padding-top: 10px;
    width: 500px;
    height: 300px;
    box-shadow: 5px 5px 3px #eee;
    float: right;
    margin-right:3%;
    margin-top: -330px;
  }
  form{
    margin: 10px 20px 0 10px;
    width: 400px;
  }
  .login{
    border: none;
    margin: 10px auto;
    width: 100%;
    height: 40px;
    background-color: #cc1b23;
    color: white;
    font-size: 15px;
  }
  p{
    margin-left: 100px;
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

