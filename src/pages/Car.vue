<template>
    <div>
      <div class="product" v-for="(list,index) in List">
        <div class="image"><img :src="list.productImage" alt=""></div>
        <div style="border-right: 1px solid #ccc">
          <p>{{list.productName}}</p>
        </div>
        <span>{{list.salePrice}}</span>
        <div class="num">
          <div class="left" @click="remove(index,list.salePrice)">-</div>
          <div class="middle" ref="index">{{list.num}}</div>
          <div class="right" @click="add(index,list.salePrice)">+</div>
        </div>
        <i class="fa fa-trash-o" @click="Delete(list.productId)"></i>
      </div>
      <div style="position: relative">
        <div class="total">
          <span>总价格：</span><input :value="total"/>
        </div>
        <router-link to="/address">提交订单</router-link>
      </div>
    </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "car",
        data(){
            return{
              List:[],
              total:0
            }
        },
        mounted(){
          this.getData();
        },
      methods:{
          getData(){
            this.$http.post('/goods/list').then(res=>{
              this.List = res.data;
              this.total=0;
              this.getTotal();
            })
          },
         getTotal(){
           this.List.forEach((list)=>{
             this.total+=parseInt(list.salePrice.slice(0,3))*list.num;
           })
         },

        add(index,salePrice) {
          let num =parseFloat(document.getElementsByClassName("middle")[index].innerHTML);
          num +=1;
          document.getElementsByClassName("middle")[index].innerHTML=num;
          this.total+=parseInt(salePrice.slice(0,3));
        },
        remove(index,salePrice) {
          let num =parseInt(document.getElementsByClassName("middle")[index].innerHTML);
          if(num<=0){
            num = 0;
            document.getElementsByClassName("middle")[index].innerHTML=num;
          }else{
            num -=1;
            document.getElementsByClassName("middle")[index].innerHTML=num;
            this.total-=parseInt(salePrice.slice(0,3));
          }
        },
        Delete:function (_id) {
          this.$confirm('提示:此操作将永久删除该商品，是否删除？','删除商品',{
            confirmButtonText: '确定', //确认按钮
            cancelButtonText: '取消', //取消按钮
            type: 'warning', //按钮类型
          }).then(()=>{
            axios.post('/goods/deleteGoods',{
              params:{
                _id:_id
              }
            }).then(res=>{
              this.$message({
                type:'success',
                message:res.data.message
              })
               if(res.data.message=="删除成功"){
                console.log("11111111");
                 this.getData();
               }
            })
          }).catch(()=>{
            this.$message({
              type:'info',
              message:'已取消删除'
            })
          })
        }
      }
    }
</script>

<style scoped>
.product{
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ccc;
  margin-top: 15px;
}
  .product .image{
    width: 100px;
    height: 100px;
  }
  .image img{
    width: 100%;
    height: 100%;
  }
  .product p{
    width: 35%;
    float: right;
    margin-right: 50%;
    margin-top: -65px;
  }
  .product span{
    float: right;
    margin-right: 40%;
    margin-top: -65px;
    color: red;
  }
  .num{
    width: 100px;
    height: 30px;
    border: 1px solid #eee;
    float: right;
    margin-right: 25%;
    margin-top: -65px;
  }
  .left{
     display: inline-block;
     width: 30px;
     height: 30px;
     border-right: 1px solid #ccc;
     text-align: center;
     line-height: 30px;
    cursor: pointer;
   }
.middle{
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.right{
  display: inline-block;
  float: right;
  width: 30px;
  height: 30px;
  border-left: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.product i{
  float: right;
  margin-right: 10%;
  margin-top: -60px;
}
  a{
    text-decoration: none;
    float: right;
    width: 80px;
    height: 40px;
    outline: none;
    line-height: 40px;
    text-align: center;
    color: white;
    margin-right: 5%;
    margin-top: 15px;
    background-color: #ea6f5a;
  }
  .total{
    height: 30px;
    position: absolute;
    top:20px;
    right: 13%;
    line-height: 30px;
  }
  .total input{
    font-size: 15px;
    width: 50px;
    border: none;
  }
</style>
