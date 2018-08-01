<template>
  <div>
    <div class="detail" v-for="(lvqing,index) in LvQing">
      <router-link to="/goodDetail"><img :src="lvqing.Images" alt=""></router-link>
      <p>￥:{{lvqing.PriceFormart}}</p>
      <div class="content">
        <span>自营</span>
        <router-link to="/goodDetail">{{lvqing.ProductName}}</router-link>
      </div>
      <div class="salesVolume">
        已售<span>{{lvqing.salesVolume}}</span>件
      </div>
      <div class="all">
        <span class="left" @click="remove(index)">-</span>
        <span class="num-middle" ref="index">1</span>
        <span class="right" @click="add(index)">+</span>
      </div>
      <div class="joinCar">
        <span @click="addCart(lvqing,index)">加入购物车</span>
      </div>
    </div>
    <my-footer style="clear: both"></my-footer>
  </div>
</template>

<script>
  import axios from "axios"
  import LvQingData from "../data/LvQingData"
  import MyFooter from "../components/MyFooter"
  export default {
    name: "ji-you",
    components:{
      MyFooter
    },
    data(){
      return{
        LvQing:{}
      }
    },
    mounted:function () {
      this.LvQing = LvQingData.Data.DataList;
      console.log(LvQingData.Data.DataList)
    },
    methods:{
      add(index) {
        let num =parseFloat(document.getElementsByClassName("num-middle")[index].innerHTML);
        num +=1;
        document.getElementsByClassName("num-middle")[index].innerHTML=num;
      },
      remove(index) {
        let num =parseFloat(document.getElementsByClassName("num-middle")[index].innerHTML);
        num -=1;
        document.getElementsByClassName("num-middle")[index].innerHTML=num;
      },
      addCart(product,index){
        if (document.cookie!=""){
          this.$http.post("/goods/addCart",{
            productId:product.ProductId,
            productName:product.ProductName,
            salePrice:product.PriceFormart,
            productImage:product.Images,
            num:parseFloat(document.getElementsByClassName("num-middle")[index].innerHTML),
          }).then((res)=>{
            console.log(res.data);
            if(res.data.status == 0){
              alert("添加购物车成功！");
            }
          });
        }else{
          alert("您没登陆，请登录");
        }
      },
    }
  }
</script>

<style scoped>
  .detail {
    width: 220px;
    height: 100%;
    float: left;
    margin-top: 30px;
    border: 1px solid #efefef;
    margin-left: 15px;
    margin-bottom: 30px;
  }
  .detail:hover{
    box-shadow: 5px 5px 3px #eee;
  }
  .detail img{
    width: 100%;
    height: 100%;
  }
  .detail p{
    color: #ba1c0b;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
  .content{
    width: 100%;
    height: 60px;
  }
  .content span{
    color: #ba1c0b;
    font-size: 12px;
    border: 1px solid #ba1c0b;
    border-radius: 2px;
  }
  .content a{
    margin-left: 5px;
  }
  .detail a{
    text-decoration: none;
    font-size: 12px;
    color: #333;
  }
  .content a:hover{
    color: #ba1c0b;
  }
  .salesVolume{
    font-size: 12px;
    margin-left: 2px;
  }
  .all{
    border: 1px solid #efefef;
    width: 90px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
  }
  .left{
    display: inline-block;
    float: left;
    text-align: center;
    width: 30px;
    border-right: 1px solid #efefef;
    cursor: pointer;
  }
  .num-middle{
    display: inline-block;
    width: 30px;
    text-align: center;
    border-right: 1px solid #efefef;
  }
  .right{
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }
  .joinCar{
    width: 90px;
    height: 25px;
    float: right;
    margin-top: -30px;
    text-align: center;
    margin-right: 20px;
    background-color: #ba1c0b;
  }
  .joinCar span{
    color: white;
    font-size: 13px;
    cursor: pointer;
  }
</style>
