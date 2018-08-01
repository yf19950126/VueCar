<template>
  <div>
    <h2 style="margin-top: 50px;">请选择您的收货地址</h2>
    <el-cascader style="width: 300px;margin-top: 30px;"
      :options="options"
      v-model="selectedOptions3"
    ></el-cascader>
    <button @click="removeAll">确认支付</button>
    <my-footer style="margin-top: 250px"></my-footer>
  </div>
</template>
<script>
  import axios from "axios"
  import MyFooter from "../components/MyFooter"
  export default {
    name:'address',
    components:{
      MyFooter
    },
    methods:{
      removeAll:function () {
        if(this.selectedOptions3[2] != ""){
          axios.post('/goods/deleteAll').then(res=>{
            this.$message({
              type:'success',
              message:res.data.message
            })
            this.$router.push({
              path:'/car'
            })
          }).catch(err=>{
            console.log(err)
          })
        }else{
          alert("请选择收货地址")
        }
      }
    },
    data() {
      return {
        options: [{
          value: 'beijng',
          label: '北京市',
          children: [{
            value: 'haidianqu',
            label: '海淀区',
            children: [{
              value: 'wanhoulujiedao',
              label: '万寿路街道'
            }, {
              value: 'yangfangdianjiedao',
              label: '羊坊店街道'
            }, {
              value: 'xueyuanluji',
              label: '学院路街'
            }, {
              value: 'qinghuayuanjiedao',
              label: '清华园街道'
            }]
          }, {
            value: 'chaoyangqu',
            label: '朝阳区',
            children: [{
              value: 'hepingjiejiedao',
              label: '和平街街道'
            }, {
              value: 'xiangheyuanjiedao',
              label: '香河园街道'
            },
              {
                value: 'liulitunjiedao',
                label: '六里屯街道'
              }, {
                value: 'aoyuncunjiedao',
                label: '奥运村街道'
              }]
          }]
        }, {
          value: 'shanghaishi',
          label: '上海市',
          children: [{
            value: 'huangpu',
            label: '黄浦区',
            children: [{
              value: 'nanjingdonglujiedao',
              label: '南京东路街道'
            }, {
              value: 'waitanjiedao',
              label: '外滩街道'
            }, {
              value: 'xiaodongmenjiedao',
              label: '小东门街道'
            }, {
              value: 'wuliqiaojiedao',
              label: '五里桥街道'
            }, {
              value: 'laoximenjiedao',
              label: '老西门街道'
            }]
          }, {
            value: 'hongkouqu',
            label: '虹口区',
            children: [{
              value: 'xinganglujiedao',
              label: '新港路街道'
            }, {
              value: 'ouyanglujiedao',
              label: '欧阳路街道'
            }, {
              value: 'guangzhonglujiedao',
              label: '广中路街道'
            }, {
              value: 'jiangwanzhenjiedaor',
              label: '江湾镇街道'
            }]
          }, {
            value: 'changningqu',
            label: '长宁区',
            children: [{
              value: 'huayanglujiedao',
              label: '华阳路街道'
            }, {
              value: 'xinhualujiedao',
              label: '新华路街道'
            }, {
              value: 'tianshanlujiedao',
              label: '天山路街道'
            }, {
              value: 'zhoujiaqiaojiedao',
              label: '周家桥街道'
            }, {
              value: 'chengjiaqiaojiedao',
              label: '程家桥街道'
            }]
          }]
        },{
          value: 'taiyuan',
          label: '太原市',
          children: [{
            value: 'jiancaopingqu',
            label: '尖草坪区',
            children: [{
              value: 'jiancaopingjiedao',
              label: '尖草坪街道'
            }, {
              value: 'shanglanjiedao',
              label: '上兰街道'
            }, {
              value: 'yingxinjiejiedao',
              label: '迎新街街道'
            }, {
              value: 'huifengjiedao',
              label: '汇丰街道'
            }]
          }, {
            value: 'xiaodianqu',
            label: '小店区',
            children: [{
              value: 'xiaodianjiedao',
              label: '小店街道'
            }, {
              value: 'wuchengjiedao',
              label: '坞城街道'
            },
              {
                value: 'pingyanglujiedao',
                label: '平阳路街道'
              }, {
                value: 'huanglingjiedao',
                label: '黄陵街道'
              }]
          },
            {
              value: 'wanbolinqu',
              label: '万柏林区',
              children: [{
                value: 'xinghuajiedao',
                label: '兴华街道'
              }, {
                value: 'wanbolinjiedao',
                label: '万柏林街道'
              },
                {
                  value: 'baijiazhuangjiedao',
                  label: '白家庄街道'
                }, {
                  value: 'xiayuanjiedao',
                  label: '下元街道'
                }]
            }]
        },{
          value: 'yuncheng',
          label: '运城市',
          children: [{
            value: 'yanhuqu',
            label: '盐湖区',
            children: [{
              value: 'dongchengjiedao',
              label: '东城街道'
            }, {
              value: 'xichengjiedao',
              label: '西城街道'
            }, {
              value: 'nanchnegjiedao',
              label: '南城街道'
            }, {
              value: 'beichengjiedao',
              label: '北城街道'
            }]
          }, {
            value: 'wenxixian',
            label: '闻喜县',
            children: [{
              value: 'guojiazhen',
              label: '郭家庄镇'
            }, {
              value: 'liyuanzhen',
              label: '礼元镇'
            },
              {
                value: 'tongchengzhen',
                label: '桐城镇'
              }, {
                value: 'xuedianzhen',
                label: '薛店镇'
              }]
          },
            {
              value: 'yongji',
              label: '永济市',
              children: [{
                value: 'chengxijiedao',
                label: '城西街道'
              }, {
                value: 'chengbeijiedao',
                label: '城北街道'
              },
                {
                  value: 'chengdongjiedao',
                  label: '城东街道'
                }, {
                  value: 'kaizhangzhen',
                  label: '开张镇'
                }]
            }]
        },{
          value: 'datong',
          label: '大同市',
          children: [{
            value: 'pingchengqu',
            label: '平城区',
            children: [{
              value: 'nanguanjiedao',
              label: '南关街道'
            }, {
              value: 'xinjiannanlujiedao',
              label: '新建南路街道'
            }, {
              value: 'xinhuajiejiedao',
              label: '新华街街道'
            }, {
              value: 'daqinglujiedao',
              label: '大庆路街道'
            }]
          }, {
            value: 'yunzhouqu',
            label: '云州区',
            children: [{
              value: 'xipingzhen',
              label: '西坪镇'
            }, {
              value: 'zhoushizhuangzhen',
              label: '周士庄镇'
            },
              {
                value: 'xubaoxiang',
                label: '许堡乡'
              }, {
                value: 'duzhuangxiang',
                label: '杜庄乡'
              }]
          },
            {
              value: 'yungangqu',
              label: '云冈区',
              children: [{
                value: 'xinshengjiedao',
                label: '新胜街道'
              }, {
                value: 'xinpingwangjiedao',
                label: '新平旺街道'
              },
                {
                  value: 'yongdingzhuangjiedao',
                  label: '永定庄街道'
                }, {
                  value: 'silaogoujiedao',
                  label: '四老沟街道'
                }]
            }]
        }],
        selectedOptions3: ['zujian', 'data', '']
      };
    }
  }
</script>
<style scoped>
  button{
    width: 100px;
    height: 50px;
    background-color: #ba1c0b;
    border: none;
    outline: none;
    color: white;
    position: absolute;
    top:550px;
    right: 20%;
  }
</style>
