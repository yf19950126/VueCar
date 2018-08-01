import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Register from '../pages/Register'
import News from '../pages/News'
import Setting from "../pages/Setting"
import Login from '../pages/Login'
import NewsDetail from "../pages/NewsDetail"
import LunTai from "../pages/LunTai"
import ZuoYi from "../pages/ZuoYI"
import JiLu from "../pages/JiLu"
import JiYou from "../pages/JiYou"
import LvQing from "../pages/LvQing"
import FangDong from "../pages/FangDong"
import HuoHua from "../pages/HuoHua"
import BoLi from "../pages/BoLi"
import GoodDetail from "../pages/GoodDetail"
import Car from "../pages/Car"
import Address from "../pages/Address"
import Search from "../pages/Search"
import Tejia from "../pages/Tejia"


Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path: '/',
      name:"Home",
      component:Home
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/news',
      name:'News',
      component:News,
    },
    {
      path:'/setting',
      name:'Setting',
      component:Setting
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/newsDetail',
      name:'NewsDetail',
      component:NewsDetail
    },
    {
      path:'/tejia',
      name:'Tejia',
      component:Tejia
    },
    {
      path:'/luntai',
      name:'LunTai',
      component:LunTai,
    },
    {
      path:'/zuoyi',
      name:"ZuoYi",
      component:ZuoYi
    },
    {
      path:'/jilu',
      name:"JiLu",
      component:JiLu
    },
    {
      path:'/jiyou',
      name:"JiYou",
      component:JiYou
    },
    {
      path:'/lvqing',
      name:"LvQing",
      component:LvQing
    },
    {
      path:'/fangdong',
      name:"FangDong",
      component:FangDong
    },
    {
      path:'/huohua',
      name:"HuoHua",
      component:HuoHua
    },
    {
      path:'/boli',
      name:"BoLi",
      component:BoLi
    },
    {
      path:'/goodDetail',
      name:"GoodDetail",
      component:GoodDetail
    },
    {
      path:'/car',
      name:"Car",
      component:Car
    },
    {
      path:'/address',
      name:'Address',
      component:Address,
    },
  ]
})

