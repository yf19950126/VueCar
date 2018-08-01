<template>
    <div>
      <div v-for="list in List" class="content">
        <div class="image">
          <img :src="list.productImage" alt="">
        </div>
        <span>{{list.productName}}</span>
        <p>{{list.salePrice}}</p>
      </div>
    </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "search",
        data(){
          return{
            List:''
          }
        },
      methods:{
         getData(){
             var search=window.localStorage.getItem("searchcontent");
             axios.post("/product/searchall",{
               search:search
             }).then(res=>{
               if(res.data.data != ""){
                 this.List=res.data.data;
               }else{
                 alert("您搜索的配件不存在")
                 this.$router.push({
                   path:'/home'
                 })
               }
             }).catch(err=>{
               console.log(err);
             })

         }
      },
      mounted(){
        this.getData();
      }
    }
</script>

<style scoped>
.content{
  width: 200px;
  height: 300px;
  border: 1px solid #efefef;
  margin-top: 10px;
  float: left;
  margin-left: 20px;
}
.content:hover{
  box-shadow: 5px 5px 3px #eee;
}
  .image{
    width: 200px;
    height: 200px;
  }
  .image img{
    width: 100%;
    height: 100%;
  }
  .content span{
    font-size: 13px;
  }
  .content p{
    margin-top: 10px;
    font-size: 14px;
    color: #ba1c0b;
  }
</style>
