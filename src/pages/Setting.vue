<template>
  <div>
    <div class="login-bg">
      <img src="../assets/img/login_bg.png" alt="">
    </div>
    <div class="input">
      <span>修改个人信息</span>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" >
          <el-input type="username"  v-model="ruleForm2.username" auto-complete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="name" >
          <el-input type="name" v-model="ruleForm2.name" auto-complete="off" placeholder="请输入您的昵称"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone" >
          <el-input type="phone" v-model="ruleForm2.phone" auto-complete="off" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')" class="update">确认修改</el-button>
        </el-form-item>
      </el-form>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import axios from "axios"
  import MyFooter from "../components/MyFooter"
  import {isvalidPhone} from '../validate'
  export default {
    name: "login",
    data(){
      var validPhone=(rule, value,callback)=>{
        if (!value){
          callback(new Error('请输入电话号码'))
        }else  if (!isvalidPhone(value)){
          callback(new Error('请输入正确的11位手机号码'))
        }else {
          callback()
        }
      };
      return{
        ruleForm2:{
          username:'', //用户名
          name:"",//昵称
          phone:"",//手机号
        },
        ruleForm2: {
          username:'',
          name:"",//昵称
          phone:"",//手机号
        },
        rules2: {
          username: [
            {required:true,message:'请输入用户名',tigger:'blur'},
            {min:2,max:6,message:'请输入合法的用户名',tigger:'blur'},
          ],
          name: [
            {required:true,message:'请输入用户名',tigger:'blur'},
            {min:2,max:6,message:'请输入合法的用户名',tigger:'blur'},
          ],
          phone: [
            { required: true, trigger: 'blur', validator: validPhone }//这里需要用到全局变量
          ],
        },
      }
    },
    components:{
      MyFooter
    },
    mounted(){
      this.getUserList();//在渲染完成时，获取所需的数据
    },
    methods:{
      //获取所有用户列表
      getUserList:function () {
        axios.get('/users/userlist' ).then(res=>{
          // console.log(res.data);
          this.ruleForm2= res.data;
          console.log(this.userList.username);
          // console.log(res.data.count)
        }).catch(err=>{
          console.log(err)
        })
      },
      submitForm:function(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
            //提交
            axios.post('/users/update',this.ruleForm2)
              .then(response=>{
                var res = response.data;
                if(res.status == '1'){
                  //显示成功的消息提示
                  this.$message.success('修改成功');
                  //重新获取数据
                  this.getUserList();
                  setTimeout(back=>{
                    this.$router.push({
                      path:"/"
                    },300);
                  })
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
    margin-top: -350px;
  }
  form{
    margin: 10px 20px 0 10px;
    width: 400px;
  }
  .update{
    border: none;
    margin: 5px auto;
    width: 100%;
    height: 40px;
    background-color: #cc1b23;
    color: white;
    font-size: 15px;
  }
</style>

