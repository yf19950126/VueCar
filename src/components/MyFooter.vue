<template>
    <div>
      <div class="box">
        <div>
          <img src="../assets/img/bottom_zp.png" alt="">
        </div>
        <div>
          <img src="../assets/img/bottom_pl.png" alt="">
        </div>
        <div>
          <img src="../assets/img/bottom_ps.png" alt="">
        </div>
        <div>
          <img src="../assets/img/bottom-jg.png" alt="">
        </div>
      </div>
      <div class="info">
        <p>@版权所有 |  中北大学  |  软件学院14140Y03班  |  杨帆</p>
        <p>HTTPS证书验证电话：15735655141</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "my-footer"
    }
</script>

<style scoped>
.box{
  width: 100%;
  height: 150px;
  background-color: #f1f1f1;
  margin-top: 20px;
}
  .box div{
    width: 176px;
    height: 50px;
    display: inline-block;
    margin-top: 50px;
    margin-left:6%;
  }
  p{
    color: #666;
    padding-top: 24px;
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
