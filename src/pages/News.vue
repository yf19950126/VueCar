<template>
    <div>
      <div class="wrap">
        <div class="wrap_news_list">
          <div class="new_list_title">
            <span class="t_left">标题</span>
            <span class="t_right">发布时间</span>
          </div>
          <ul v-for="item in News">
            <li>
              <span>【{{item.TypeTitle}}】</span>
              <router-link to="/newsDetail">{{item.NewsTitle}}</router-link>
              <p>{{item.CreatedDate}}</p>
            </li>
          </ul>
        </div>
      </div>
      <my-footer></my-footer>
    </div>
</template>

<script>
  import newData from "../data/newData"
  import MyFooter from "../components/MyFooter"
    export default {
        name: "news",
      components:{
        MyFooter
      },
      data(){
          return{
            News:{}
          }
      },
      mounted(){
        this.News = newData.Data.Items;
        console.log(newData.Data);
      }
    }
</script>

<style scoped>
  ul,li{
    list-style: none;
  }
  .wrap {
    width: 1190px;
    margin: 0 auto;
    clear: both;
  }
  .wrap_news_list {
    overflow: hidden;
    width: 100%;
    margin-top: 10px;
    padding-bottom: 70px;
  }
  .wrap_news_list .new_list_title {
    height: 30px;
    padding: 0 30px;
    border-bottom: 1px solid #cbcbcb;
  }
  .wrap_news_list .new_list_titlt span {
    display: block;
    line-height: 30px;
    color: #201c1d;
    font-size: 14px;
  }
  .t_left{
    float: left;
  }
  .t_right{
    float: right;
  }
  ul{
    font-size: 14px;
  }
  li{
    height: 35px;
    line-height: 35px;
  }
  a{
    cursor: pointer;
    color: #201c1d;
    text-decoration: none;
  }
  a:hover{
    color: #ba1c0b;
  }
  p{
    margin: 0;
    padding: 0;
    float: right;
    font-size: 15px;
    color: #878183;
  }
  li:nth-of-type(2n+1){
    background-color: #f5f5f5;
  }
</style>
