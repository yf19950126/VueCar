<template>
    <div>
      <div class="intr">
        <p>商品介绍</p>
      </div>
      <div class="detail">
        <div class="name">
          <span>商品名称：</span>
          <span>{{List.ProductName}}</span>
        </div>
        <div class="id">
          <span>商品编号：</span>
          <span class="ProductNo">{{List.ProductNo}}</span>
        </div>
        <div class="BrandName">
          <span>品牌：</span>
          <span>{{List.BrandName}}</span>
        </div>
      </div>
      <div class="content">
        <span v-html="List.Recommend">{{List.Recommend}}</span>
      </div>
    </div>
</template>

<script>
  import GoodDeatil from "../data/GoodDeatil"
    export default {
        name: "good-detail",
      data(){
        return{
          List:{}
        }
      },
      mounted:function () {
        this.List = GoodDeatil.Data.UserProductInfo;
        console.log(GoodDeatil.Data.UserProductInfo)
      },
    }
</script>

<style scoped>
.intr{
  margin-top: 10px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid #eee;
}
  .intr p{
    margin: 0;
    width: 100px;
    height:40px;
    background-color:#ba1209;
    color: white;
    text-align: center;
  }
  .detail{
    width: 100%;
    height: 100px;
    background-color: #f4f4f4;
  }
  .name{
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-top: 10px;
    margin-left: 20px;
  }
  .name span:first-child{
    margin-top: 14px;
    font-size: 14px;
    color: #666;
  }
  .name span:last-child{
    font-size: 14px;
    color: #333;
  }
  .id{
    margin-left: 20px;
  }
  .id span:first-child{
    margin-top: 14px;
    font-size: 14px;
    color: #666;
  }
  .id .ProductNo{
    font-size: 14px;
    color: #333;
  }
  .BrandName{
    position: absolute;
    width: 200px;
    font-size: 14px;
    top:330px;
    left: 30%;
  }
.BrandName span:first-child{
  margin-top: 14px;
  font-size: 14px;
  color: #666;
}
.BrandName span:last-child{
  font-size: 14px;
  color: #333;
}
  .content{
    width: 100%;
    height: 100%;
    margin-top: 20px;
    border: 1px solid #eee;
  }
</style>
