<template>
  <div>
    <div class="goodSort">
      <ul>
        <li>
          <a href="#f1">维修保养</a>
        </li>
        <li>
          <a href="#f2">美容清洗</a>
        </li>
        <li>
          <a href="#f3">车载电器</a>
        </li>
        <li>
          <a href="#f4">汽车装饰</a>
        </li>
        <li>
          <a href="#f5">安全自驾</a>
        </li>
        <li>
          <a href="#f6">工具设备</a>
        </li>
      </ul>
    </div>
    <!--轮播图-->
    <div class="block">
      <el-carousel height="300px">
        <el-carousel-item v-for="banner in Banner" :key="banner.url">
          <img :src="banner.ImageUrl" alt="" style="width: 100%; height: 300px">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right">
      <p>Hi,您好</p>
      <p>欢迎来到汽配龙</p>
      <div class="btn">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">会员注册</router-link>
      </div>
      <div class="new">
        <span>汽配龙资讯</span>
        <router-link to="/news">更多>></router-link>
      </div>
      <div class="news" v-for="news in NewData">
        <router-link to="/newsDetail">
          <span>【{{news.TypeTitle}}】</span>
          <span>{{news.NewsTitle}}</span>
        </router-link>
      </div>
    </div>
    <div class="hot">
     <div style="border: 1px solid #ccc;width: 100%;height: 50px;line-height: 50px">
       <span style="margin-left: 15px">热销品类</span>
     </div>
      <!--<a v-for="hot in hotData">-->
        <!--<img :src="hot.ImgUrl" alt="">-->
      <!--</a>-->
      <div class="luntai" style="width: 203px;height: 252px;float:left;">
        <router-link to="/luntai">
          <img src="../assets/img/1.jpg" alt="">
        </router-link>
      </div>
      <div class="zuoyi">
        <router-link to="/zuoyi">
          <img src="../assets/img/2.jpg" alt="" >
        </router-link>
      </div>
      <div class="jilu">
        <router-link to="/jilu">
          <img src="../assets/img/3.jpg" alt="">
        </router-link>
      </div>
      <div class="jiyou">
        <router-link to="/jiyou">
          <img src="../assets/img/4.jpg" alt="">
        </router-link>
      </div>
      <div class="lvqing">
        <router-link to="/lvqing">
          <img src="../assets/img/5.jpg" alt="">
        </router-link>
      </div>
      <div class="fangdong">
        <router-link to="/fangdong">
          <img src="../assets/img/6.jpg" alt="">
        </router-link>
      </div>
      <div class="huohua">
        <router-link to="/huohua">
          <img src="../assets/img/7.jpg" alt="">
        </router-link>
      </div>
      <div class="boli">
        <router-link to="/boli">
          <img src="../assets/img/8.jpg" alt="">
        </router-link>
      </div>
      <div class="guoji">
        <router-link to="/">
          <img src="../assets/img/guoji.jpg" alt="">
        </router-link>
      </div>
    </div>
    <div class="one floor" id="f1">
      <div style="border: 1px solid #ccc;width: 100%;height: 50px;line-height: 50px">
          <span style="margin-left: 15px">1F维修保养</span>
      </div>
      <div style="width: 203px;height: 275px;">
        <img style="width: 100%;height: 100%;" src="../assets/img/floor1.jpg" alt="">
      </div>
     <router-link to="/goodDetail">
       <div class="con" style="width: 200px;height: 265px;position: absolute;top:55px;left: 205px; ">
         <img style="width: 100%;height: 80%;" src="../assets/img/floor1-1.jpg" alt="">
         <p style="font-size: 12px;text-align: center">佳通轮胎 Comfort SUV 520 215/60R17 96H Giti</p>
       </div>
     </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 190px;height: 265px;position: absolute;top:55px;left: 400px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor1-3.png" alt="">
          <p style="font-size: 12px;text-align: center;">固特异轮胎 御乘 Eagle EFFICIENTGRIP 225/55R16 95Y</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 605px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor1-4.png" alt="">
          <p style="font-size: 12px;text-align: center;">嘉实多/Castrol 磁护半合成机油 5W-40 SN/CF级（4L装）</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 805px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor1-6.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">安齐奥/AQA防冻液 通用型汽车防冻液 -25℃ 红色 2kg</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 1005px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor1-5.png" alt="">
          <p style="font-size: 12px;text-align: center;">马勒/MAHLE 机油滤清器 OC1196）</p>
        </div>
      </router-link>
    </div>
    <div class="two floor" id="f2">
      <div style="border: 1px solid #ccc;width: 100%;height: 50px;line-height: 50px">
        <span style="margin-left: 15px">2F美容清洗</span>
      </div>
      <div style="width: 203px;height: 275px;">
        <img style="width: 100%;height: 100%;" src="../assets/img/floor2.jpg" alt="">
      </div>
      <router-link to="/goodDetail">
        <div class="con" style="width: 200px;height: 265px;position: absolute;top:55px;left: 205px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor2-1.jpg" alt="">
          <p style="font-size: 12px;text-align: center">3M汽车打磨美容砂纸 1500目【1片装】</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 190px;height: 265px;position: absolute;top:55px;left: 410px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor2-2.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">PN08820 3M专业汽车底盘装甲 买满12瓶送喷枪一把</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 605px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor2-3.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">3M 大号汽车洗车布 【1.6米*0.6米】 PN3</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 805px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor2-4.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">3M 39526特级水晶蜡 新车蜡</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 1005px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor2-5.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">3M 汽车蜡 新车蜡 水晶硬蜡 划痕修复漆面</p>
        </div>
      </router-link>
    </div>
    <div class="three floor" id="f3">
      <div style="border: 1px solid #ccc;width: 100%;height: 50px;line-height: 50px">
        <span style="margin-left: 15px">3F车载电器</span>
      </div>
      <div style="width: 203px;height: 275px;">
        <img style="width: 100%;height: 100%;" src="../assets/img/floor3.jpg" alt="">
      </div>
      <router-link to="/goodDetail">
        <div class="con" style="width: 200px;height: 265px;position: absolute;top:55px;left: 205px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor3-1.jpg" alt="">
          <p style="font-size: 12px;text-align: center">第一现场 D206 后视镜行车记录仪 双镜头 </p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 190px;height: 265px;position: absolute;top:55px;left: 410px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor3-2.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">安美时 带开关一拖三点烟器 车载充电器 AMS-3</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 605px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor3-3.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">安美时 车载蓝牙音乐播放器QB28（支持免提通话）</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 805px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor3-4.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">安美时 杯式车载充电器 一拖二点烟器 双USB 3.1A</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 1005px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor3-5.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">捷渡D600双镜头行车记录仪1080P后视镜高清夜视前后双录</p>
        </div>
      </router-link>
    </div>
    <div class="four floor" id="f4">
      <div style="border: 1px solid #ccc;width: 100%;height: 50px;line-height: 50px">
        <span style="margin-left: 15px">4F汽车装饰</span>
      </div>
        <div style="width: 203px;height: 275px;">
          <img style="width: 100%;height: 100%;" src="../assets/img/floor4.jpg" alt="">
        </div>
      <router-link to="/goodDetail">
        <div class="con" style="width: 200px;height: 265px;position: absolute;top:55px;left: 205px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor4-1.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">WRC压边丝圈脚垫 咖啡 </p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 190px;height: 265px;position: absolute;top:55px;left: 410px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor4-2.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">蓝派 汽车腰靠+头枕 米黄色</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 605px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor4-3.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">蓝派 冰丝抱枕被 冰爽玫瑰（粉）</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 805px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor4-4.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">蓝派 记忆棉鸭嘴U型枕 浅黄</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 1005px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor4-5.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">蓝派 冰丝抱枕被 冰爽玫瑰（蓝）</p>
        </div>
      </router-link>
    </div>
    <div class="five floor" id="f5">
      <div style="border: 1px solid #ccc;width: 100%;height: 50px;line-height: 50px">
        <span style="margin-left: 15px">5F安全自驾</span>
      </div>
      <div style="width: 203px;height: 275px;">
        <img style="width: 100%;height: 100%;" src="../assets/img/floor5.jpg" alt="">
      </div>
      <router-link to="/goodDetail">
        <div class="con" style="width: 200px;height: 265px;position: absolute;top:55px;left: 205px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor5-1.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">凯迪彤创 kd705智能导航一体机 </p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 190px;height: 265px;position: absolute;top:55px;left: 410px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor5-2.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">凯迪彤创 太阳能胎压监测 kt912</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 605px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor5-3.jpeg" alt="">
          <p style="font-size: 12px;text-align: center;">瑞柯/WINDEK 太阳能胎压监测彩屏内置德国英飞凌芯片</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 805px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor5-4.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">铁将军 胎压监测无线【内置-钛空灰】太阳能检测表汽车轮胎报警器</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 1005px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor5-6.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">铁将军倒车雷达 前后6探头 真人语音/蜂鸣报警3160</p>
        </div>
      </router-link>
    </div>
    <div class="six floor" id="f6">
      <div style="border: 1px solid #ccc;width: 100%;height: 50px;line-height: 50px">
        <span style="margin-left: 15px">6F工具设备</span>
      </div>
      <div style="width: 203px;height: 275px;">
        <img style="width: 100%;height: 100%;" src="../assets/img/floor6.jpg" alt="">
      </div>
      <router-link to="/goodDetail">
        <div class="con" style="width: 200px;height: 265px;position: absolute;top:55px;left: 205px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor6-1.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">福吉斯特（Forgestar）91件6.3mm 12.5mm系列公制综合组套 </p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 190px;height: 265px;position: absolute;top:55px;left: 410px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor6-2.png" alt="">
          <p style="font-size: 12px;text-align: center;">蒂普拓普 多功能硫化剂 250ml(带刷) 5059197</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 605px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor6-3.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">瑞柯 车载充气泵SUV专用大马力快速打气泵RCP-C24H</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 805px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor6-4.jpg" alt="">
          <p style="font-size: 12px;text-align: center;">蓝21件套正反牙刹车分泵调整工具 sk1008</p>
        </div>
      </router-link>
      <router-link to="/goodDetail">
        <div class="con" style="width: 180px;height: 265px;position: absolute;top:55px;left: 1005px; ">
          <img style="width: 100%;height: 80%;" src="../assets/img/floor6-5.png" alt="">
          <p style="font-size: 12px;text-align: center;">瑞柯/WINDEK 胎压计 迷你数显高密轮胎监测计 RCG-A1 </p>
        </div>
      </router-link>
    </div>
    <ul class="point">
      <li>
        <a href="#f1" class="f1">1F</a>
      </li>
      <li>
        <a href="#f2" class="f2">2F</a>
      </li>
      <li>
        <a href="#f3" class="f3">3F</a>
      </li>
      <li>
        <a href="#f4" class="f4">4F</a>
      </li>
      <li>
        <a href="#f5" class="f5">5F</a>
      </li>
      <li>
        <a href="#f6" class="f6">6F</a>
      </li>
      <a>
        <i class="fa fa-chevron-up" @click="toTop"></i>
      </a>
    </ul>
    <my-footer style="margin-top: 60px"></my-footer>
  </div>
</template>

<script>
  import MyFooter from "../components/MyFooter"
  import homeData from "../data/homeData"
  import bannerDate from "../data/bannerData"
  import homeNewData from "../data/homeNewData"
  // import hotData from "../data/hotData"
    export default {
      name: "home",
      components:{
        MyFooter
      },
      data(){
        return{
          Goods:{},
          Banner:{},
          NewData:{},
          // hotData:{}
        }
      },
      methods:{
        toTop:function () {
            $('html,body').animate({
              scrollTop:0
            })
        }
      },
      mounted:function(){
        this.Goods = homeData.Data;
        // console.log(homeData.Data);
        this.Banner = bannerDate.Data;
        //console.log(bannerDate.Data)
        this.NewData = homeNewData.Data
        // console.log(homeNewData.Data)
        // this.hotData = hotData.Data.WEB_RXPL.Items
        // console.log(hotData.Data.WEB_RXPL.Items)
      //  滚动监听
        var offon = true;
        $(window).scroll(function(){//滚动浏览器就会执行
          //获取滚动高度
          var _top = $(window).scrollTop();
          if(offon) {
            if (_top > 200) {
              $('.point').show();
            } else {
              $('.point').hide();
            };
            var one=$(".one").offset().top-100;
            var two=$(".two").offset().top-100;
            var three=$(".three").offset().top-100;
            var four=$(".four").offset().top-100;
            var five=$(".five").offset().top-100;
            var six=$(".six").offset().top-100;
            if($(this).scrollTop() <=one){
              $(".point li a").removeClass("show");
              $(".point li a").eq(0).addClass("show");
            }else if($(this).scrollTop() >=one&&$(this).scrollTop()<=two){
              $(".point li a").removeClass("show");
              $(".point li a").eq(1).addClass("show");
            }else if($(this).scrollTop()>=two&&$(this).scrollTop()<=three){
              $(".point li a").removeClass("show");
              $(".point li a").eq(2).addClass("show");
            }else if($(this).scrollTop()>=three && $(this).scrollTop()<=four){
              $(".point li a").removeClass("show");
              $(".point li a").eq(3).addClass("show");
            }else if($(this).scrollTop()>=four&&$(this).scrollTop()<=five){
              $(".point li a").removeClass("show");
              $(".point li a").eq(4).addClass("show");
            }else if($(this).scrollTop()>=five && $(this).scrollTop()<=six){
              $(".point li a").removeClass("show");
              $(".point li a").eq(5).addClass("show");
            } else if($(this).scrollTop()>=six){
              $(".point li a").removeClass("show");
            }
          };
        });
      }
    }
</script>

<style scoped>
  .con:hover{
    box-shadow: 5px 5px 3px #eee;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  .show{
    color: red!important;
  }
  .goodSort{
    width: 190px;
    height:300px;
    background-color: #ba1c0b;
    color: white;
    margin-top: 2px;
  }
  .goodSort ul{
    margin: 0;
    padding: 0;
    list-style: none;
    width: 190px;
  }
  .goodSort ul li{
    padding:10px 0;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
  .goodSort ul li a{
    color: white;
    text-decoration: none;
  }
  .block{
    width: 800px;
    height: 299px;
    clear: both;
    margin-left: 190px;
    margin-top: -300px;
  }
  .right{
    float: right;
    width: 200px;
    height: 300px;
    margin-top: -300px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .right p{
   padding: 0;
  }
  .btn{
    width: 100%;
    height: 40px;
  }
  .btn a{
    float: left;
    width: 50%;
    height: 100%;
    text-decoration: none;
    line-height: 40px;
  }
  .btn a:first-child{
    background-color:#ba1c0b ;
    color: white;
  }
  .btn a:last-child{
    background-color: #ebebeb;
    color: #707070;
  }
  .new{
    width: 100%;
    margin-top: 5px;
  }
  .new span{
    float: left;
    margin-left: 5px;
    font-size: 14px;
  }
  .new a{
    float: right;
    text-decoration: none;
    color: #868686;
    margin-right: 5px;
    font-size: 13px;
  }
  .new a:hover{
    color: #ba1c0b;
  }
  .news{
    width: 100%;
    clear: both;
  }
  .news a{
    text-decoration: none;
    float: left;
    font-size: 12px;
    color: #868686;
    padding-top: 10px;
    width:100%;
    height:20px;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
  }
  a:hover{
    color: #ba1c0b;
  }
  .hot{
    margin-top: 20px;
    width: 100%;
    height: 305px;
    /*background-color: red;*/
    position: relative;
  }
  .hot img{
    width: 100%;
    height: 100%;
  }
  .hot span{
    margin-top: 10px;
    border-left: 3px solid #ba1c0b;
    padding-left: 10px
  }
  .zuoyi{
    width: 147px;
    height: 125px;
    position: absolute;
    left: 202px;
  }
  .jilu{
    width: 147px;
    height: 125px;
    position: absolute;
    left: 202px;
    top: 178px;
  }
  .jiyou{
    width: 204px;
    height: 252px;
    position: absolute;
    left: 350px;

  }
  .lvqing{
    width: 147px;
    height: 125px;
    position: absolute;
    left: 555px;
  }
  .fangdong{
    width: 147px;
    height: 125px;
    position: absolute;
    left: 555px;
    top: 178px;
  }
  .huohua{
    width: 147px;
    height: 125px;
    position: absolute;
    left: 703px;
  }
  .boli{
    width: 147px;
    height: 125px;
    position: absolute;
    left: 703px;
    top: 178px;
  }
  .guoji{
    width: 342px;
    height: 252px;
    position: absolute;
    right: 0;
    top: 52px;
  }
  .floor{
    margin-top: 20px;
    width: 100%;
    height: 305px;
    position: relative;
  }
  .floor span{
    margin-top: 10px;
    border-left: 3px solid #ba1c0b;
    padding-left: 10px;
    color: #ba1c0b;
  }
  .lastPhoto{
    width: 342px;
    height: 252px;
    float: right;
  }
  .lastPhoto img{
    width: 100%;
    height: 100%;
  }
  .point{
    margin: 0;
    padding: 0;
    width: 30px;
    list-style: none;
    position: fixed;
    top: 450px;
    left:5%;
    display: none;
  }
  .point li,.point a {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    padding: 3px 0;
    cursor: pointer;
  }
  .point li{
    border-bottom: 1px solid #eee;
  }
  .point li a:hover{
    color: #ba1c0b;
  }
  .point li:last-child{
    background-color: #ccc;
    color: grey;
  }
  .point li a{
    text-decoration: none;
    color: #333;
  }
</style>
