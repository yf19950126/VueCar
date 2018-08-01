<template>
    <div>
      <div v-for="tejia in Tejia" class="content">
        <router-link to="/goodDetail">
          <div class="image">
            <img :src="tejia.ProductImages" alt="">
          </div>
          <span class="name">{{tejia.ProductName}}</span>
        </router-link>
        <br/>
        <div style="margin-top: 10px;font-size: 13px">
          <del>原价:{{tejia.orlPrice}}</del>
          <span class="ListPriceStr">活动价:{{tejia.ListPriceStr}}</span>
        </div>
      </div>
      <my-footer style="clear: both;"></my-footer>
    </div>
</template>

<script>
  import TejiaData from "../data/TejiaData"
  import MyFooter from "../components/MyFooter"
    export default {
        name: "tejia",
      components:{
          MyFooter
      },
        data(){
          return{
            Tejia:{}
          }
        },
      mounted:function () {
        this.Tejia = TejiaData.Data.ItemModel;
        console.log(TejiaData.Data.ItemModel);
      },
    }
</script>

<style scoped>
.content{
  width: 200px;
  height: 300px;
  border: 1px solid #f5f5f5;
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
    margin: 0 auto;
  }
  .image img{
    width: 100%;
    height: 100%;
  }
  .name{
    font-size: 14px;
  }
  del{
    color: #ba1c0b;
    margin-top: 5px;
  }
  .ListPriceStr{
    float: right;
    margin-right: 10px;
  }
  a{
    text-decoration: none;
    color: #333;
  }
</style>
