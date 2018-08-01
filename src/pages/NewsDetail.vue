<template>
    <div>
      <div class="title">
        <span>【{{DetailData.TypeTitle}}】</span>
        <span>{{DetailData.NewsTitle}}</span>
        <p>{{DetailData.CreatedDate}}</p>
      </div>
      <div class="detail">
        <p v-html="DetailData.NewsDescription">{{DetailData.NewsDescription}}</p>
      </div>
      <my-footer></my-footer>
    </div>
</template>

<script>
  import DetailData from "../data/DetailData"
  import MyFooter from "../components/MyFooter"
    export default {
        name: "news-detail",
      components:{
        MyFooter
      },
      data(){
          return{
            DetailData:{}
        }
      },
      mounted:function () {
        this.DetailData = DetailData.Data;
        console.log(DetailData.Data)
      }
    }
</script>

<style scoped>
.title{
  text-align: center;
  margin-top: 30px;
  border-bottom: 1px dashed #b91c0b
}
  .title p{
    color: #878183;
    margin: 20px auto 35px auto;
    font-size: 14px;
  }
  .detail{
    text-align: center;
    margin-bottom: 30px;
  }
</style>
