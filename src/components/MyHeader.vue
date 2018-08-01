<template>
  <div>
    <div class="topNav">
      <div class="wrap">
        <ul class="topNavL">
          <li class="mobile">
            <i class="fa fa-map-marker"></i>
           <span @click="gps">{{weizhi}}</span>
          </li>
        </ul>
        <ul class="topNavR" id="topNavR">
          <li>
            <router-link to="/login" v-if="!show">您好，请登录</router-link>
            <div v-if="show">
              <span>{{name}}</span>
              <a href="javascript:void(0)"  @click="logOut">退出</a>
            </div>
          </li>
          <li>
            <span class="order" @click="order">我的订单</span>
          </li>
          <li>
            <router-link to="/register">会员注册</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="header">
      <div class="wrap">
        <div class="headerLogo">
          <router-link to="/">
            <img src="http://images.qipeilong.cn/ico/logo.png?t=111" alt="">
          </router-link>
        </div>
        <div class="headerCon">
          <div class="headerConL">
            <div class="search">
              <div class="opt">
                <span class="current">商品</span>
              </div>
              <div class="search_kuang">
                <input type="text" class="searchText" ref="content"  placeholder="请输入商品名称/品牌">
               <input  @click="tosearch" type="button" class="searchButton" value="搜索">
              </div>
            </div>
            <ul>
              <span>{{List.PositionTitle}}:</span>
              <!--<li v-for="item in List.Items">-->
                <!--<router-link to="/luntai">{{item.PositionMackTitle}}</router-link>-->
              <!--</li>-->
              <li>
                <router-link to="/luntai">米其林</router-link>
              </li>
              <li>
                <router-link to="/zuoyi">座椅</router-link>
              </li>
              <li>
                <router-link to="/luntai">双星轮胎</router-link>
              </li>
              <li>
                <router-link to="/luntai">壳牌</router-link>
              </li>
              <li>
                <router-link to="/jiyou">美孚</router-link>
              </li>
              <li>
                <router-link to="/fangdong">防冻液</router-link>
              </li>
              <li>
                <router-link to="/huohua">火花塞</router-link>
              </li>
              <li>
                <router-link to="/boli">玻璃水</router-link>
              </li>
            </ul>
          </div>
          <div class="headerConR">
            <div @click="order">
              <i class="fa fa-file"></i>
              我的订单
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="wrap">
        <div class="allSortLink">
          <span>全部商品分类</span>
          <router-link to="/home" active-class="active">首页</router-link>
          <router-link to="/tejia" active-class="active">特价配件</router-link>
          <router-link to="/register" active-class="active">会员注册</router-link>
          <router-link to="/news" active-class="active">资讯</router-link>
          <router-link v-if="show" to="/setting" active-class="active">用户信息</router-link>
           <div class="nologin" @click="tishi" v-if="!show">用户信息</div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import data from "./data"
  export default {
    name:"MyHeader",
    data(){
      return{
        List:{},
        name:"",
        searchcontent:'',
        show:false,
        weizhi:''
      }
    },
    mounted:function(){
      this.getData();
      this.List = data.Data;
      // console.log(data.Data.PositionTitle);
      // console.log(data.Data.Items);
    //  判断页面cookie
     if(document.cookie != ""){
       this.show=true;
     }
     this.gps();
    },
    methods:{
      gps:function () {
        this.weizhi="";
        console.log(this.weizhi)
        if(this.weizhi==""){
          alert("正在获取您的位置");
        }
        this.$baiduLocation(res=>{
          this.weizhi=res.province+"-"+res.city+"-"+res.district+"-"+res.street
        })
      },
      order:function () {
       if(document.cookie != ""){
         this.$router.push({
           path:'/car'
         })
       }else{
         alert("您没登录，请先登录")
       }
      },
      logOut: function(){
        axios.post("/users/logout").then((response)=>{
          let res = response.data;
          if(res.status=="0"){
            this.show = false;
            setTimeout(re=>{
              this.$router.push({
                path:"/"
              })
            },500);
          }
        })
      },
      getData(){
        axios.get("/users/userList").then(res=>{
          this.name=res.data.name;
          if(typeof this.name!="undefined"){
              this.show=true;
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      tosearch(){
        localStorage.setItem("searchcontent",this.$refs.content.value);
        this.$router.push({
          path:"/search"
        })
      },
      tishi(){
        alert("目前还没有用户进行登录，不能查看用户信息页面！");
      }
    },
    watch: {
      $route(to, from) {
        if(to.name=="Home"&&from.name=="Login"){
          this.getData();
        }
        if(to.name=="Home"&&from.name=="Setting"){
          this.getData();
        }
      }
    }
  }
</script>

<style scoped>
  .nav .wrap  .allSortLink .nologin{
    display: inline-block;
    cursor: pointer;
    margin-left: 20px;
    padding-left: 7px;
  }
  .active{
    color: red!important;
  }
  .order{
    cursor: pointer;
    color: #999;
  }
  .order:hover{
    color: #ba1c0b;
  }
  .topNav {
    width: 100%;
    height: 40px;
    background: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
  }
  .wrap {
    width: 1190px;
    margin: 0 auto;
    clear: both;
  }
  .topNavL{
    float: left;
    margin: 0;
    padding: 0;
    font-size: 12px
  }
  ul,li{
    list-style: none;
  }
  .topNavL .mobile {
    padding: 0 9px;
    color: #999;
    font-size: 15px;
    line-height: 40px;
    cursor: pointer;
    margin-right: 10px;
  }
  a{
    text-decoration: none;
  }
  .topNavL .mobile a {
    text-decoration: none;
    color: #a6a6a6;
  }
  .topNavL .mobile a:hover {
    color: #ba1209;
  }
  .topNavR{
    float: right;
    margin: 0;
    padding: 0;
  }
  .topNavR li {
    padding: 0 10px;
    margin: 11px 0;
    height: 13px;
    font-size: 13px;
    border-right: 1px solid #a6a6a6;
    line-height: 13px;
    display: inline-block;
  }
  .topNavR li:last-child {
    border-right: 0;
  }
  .topNav a {
    color: #a6a6a6;
    font-weight: 400;
  }
  .topNavR li a:hover{
    color: #ba1209;
  }

  .header {
    width: 100%;
    padding: 26px 0 24px 0;
    overflow: hidden;
  }
  .headerLogo {
    float: left;
    width: 165px;
    margin: 25px 12px 0 0;
  }
  .headerLogo a img{
    width: 184px;
    height: 42px;
  }
  .headerCon {
    float: right;
    width: 790px;
  }
  .headerConL {
    float: left;
  }
  .headerConL .search {
    width: 518px;
  }
  .headerConL .search .opt {
    width: 136px;
    height: 27px;
    line-height: 27px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    position: relative;
    color: #fff;
  }
  .headerConL .search .opt span {
    width: 68px;
    display: block;
    float: left;
    text-align: center;
    line-height: 27px;
    font-size: 14px;
  }
  .headerConL .search .opt span.current {
    color: #fff;
    background: #ba1c0b;
  }
  .headerConL .search_kuang {
    width: 518px;
    border: 1px solid #ba1c0b;
    height: 35px;
    line-height: 35px;
    position: relative;
  }
  .headerConL .searchText {
    width: 426px;
    height: 100%;
    padding: 0 6px;
    font-size: 14px;
    float: left;
    line-height: 35px;
    position: relative;
    outline: none;
    border: none;
    top: 0;
    left: 0;
    background: none;
    z-index: 5;
  }
  .headerConL .searchButton {
    width: 80px;
    height: 35px;
    background: #ba1c0b;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    float: left;
    outline: none;
    border: none;
  }
  .headerConR {
    width: 200px;
    height: 40px;
    float: right;
    margin-top: 26px;
    margin-right: 16px;
    text-align: center;
    line-height: 40px;
  }
  .headerConR div{
    background-color: #f5f5f5;
    cursor: pointer;
  }
  .fa-file{
    color: #ba1c0b;
    margin-right: 10px;
    margin-left: 10px;
  }
  .headerConL ul {
    padding-top: 8px;
    margin: 0;
    padding: 0;
  }
  .headerConL ul span {
    float: left;
    color: #404040;
    font-size: 12px;
    margin-top: 4px;
  }
  .headerConL li {
    float: left;
    padding: 0 8px;
    border-right: 1px solid #404040;
  }
  .headerConL li:last-child {
   border-right: none;
  }
  .headerConL li a {
    color: #404040;
    font-size: 12px;
  }
  .headerConL li a:hover {
    color: #ba1c0b;
  }
  .nav {
    width: 100%;
    border-bottom: 2px solid #ba1c0b;
    height: 38px;
  }
  .allSortLink span{
    width: 190px;
    font-weight: 500;
    float: none;
    display: inline-block;
    height: 38px;
    line-height: 38px;
    text-align: center;
    color: #fff;
    background: #404040;
    font-size: 16px;
  }
  .allSortLink a{
    display: inline-block;
    padding: 0 7px;
    margin: 0 20px;
    height: 38px;
    line-height: 38px;
    font-size: 16px;
    color: #191919;
  }
  /*.allSortLink a:hover{*/
    /*color: #ba1c0b;*/
  /*}*/
</style>
