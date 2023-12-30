<template>
  <div>
    <div ref="chinaMap" class="CMap"></div>
    <div class="card animate__animated animate__fadeInUp fadeOut" v-show="getmessage">
      <button ref="dismiss" class="dismiss" @click="close" type="button">
        ×
      </button>
      <div class="header">
        <div class="image" v-for="(item, index) in msg.slice(0, 1)" :key="index">
          <img :src="item.img_url" style="width: 80px" />
        </div>
        <div class="content">
          <span class="title" v-for="(item, index) in msg.slice(0, 1)">{{
            item.Name
          }}</span>
          <p class="message animate__fadeInLeft" v-for="(item, index) in msg.slice(0, 1)">
            {{ item.Price }} 💴
          </p>
        </div>
        <div class="actions">
          <button type="button" @click="getScence">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"
              stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            更多
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
import data from "@/assets/MapData/china.json";
import img from '@/assets/Login_background.jpg';
import img1 from "@/assets/Car.png"
export default {
  name: "MapUse",
  data() {
    return {
      img1:img1,
      img: img,
      getmessage: false,
      offsetX: "",
      offsetY: "",
      city: "",
      msg: [],
      city_name: "",
      Big_ChineseMap:'',
      Position:'',
      Bar_SumPrice:''
    };
  },

  mounted() {
    this.getData();
  },

  methods: {

    getScence() {
      this.$router.push({
        name: "about",
        params: {
          name: this.city_name,
        },
      });
    },
    getmessages() {
      this.axios.get(`http://10.23.91.201:5000/api/${this.city}`).then(
        (response) => {
          console.log("请求成功", response.data.data);
          this.msg = response.data.data;
        },
        (error) => {
          alert("Failure");
          console.log("响应失败", error.message);
        }
      );
    },
    close() {
      this.getmessage = false;
    },
    getData() {
      this.axios.get('http://10.23.91.201:5000/api/chart').then(res=>{
        console.log(res.data);
        this.Big_ChineseMap = res.data.Big_ChineseMap
        this.Position =res.data.Position
        
        this.initMap("china");
      })
      
    },
    covertData(data) {
      //中心坐标
      let geoCoordMap =  this.Position;
      var res = [];
      console.log(geoCoordMap);
      for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          //放入res种
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    },
    initMap(name) {
      let that = this;
      echarts.registerMap(name, data);
      let map = echarts.init(this.$refs.chinaMap);
      //图表配置项
      map.on("click", function (params) {
        that.city = params.data.name;
        that.getmessages();
        that.getmessage = true;
        that.city_name = params.data.name;
      });
      let option = {

        title: {
          text: "中国旅游景点分布图",
          x: "left",
          // top: "10",
          bottom:"30",
          left: "100",
          textStyle: {
            color: "#336666",
            fontSize: 24,
            borderWidth: 10,
          },
        },
        //左控键
        visualMap: {
          max: 300,
          left: 30,
          bottom: 30,
          calculable: true,
          realtime: false,
          inRange: {
            color: [
              "#336699",
              "#0099CC",
              "#666666",
            ],
          },
          outOfRange: {
            colorAlpha: 0,
          },
        },
        tooltip: "axis",
        toolbox: {
          show: false,
          orient: "vertical",
          left: "right",
          top: 40,
          left: 70,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },

        geo3D: {
          top:0,
          height:'auto',
          map: "china",
          shading: "realistic",
          boxHeight :10,
          // boxDepth : auto,
          realisticMaterial: {
            detailTexture: that.img, // 地图表面贴图
            textureTiling: 1,
            roughness: 0.5,
            roughnessAdjust:0.5,
            //metalness: 0.5,
          },
          itemStyle: {
            borderWidth:0.5,
            borderColor:'#392f41',
            opacity: 5,
          },
          emphasis: {
            disabled: true, //是否可以被选中
            label: {
              show: true,
              color: "#336666", //显示字体颜色变淡
              fontSize: 20, //显示字体变大
              backgroundColor: "#333333",
            },
            itemStyle: {
              color: "#666666",
              opacity: 0.6,
            },
          },
          light: {
            main: {
              intensity: 1  , //光照强度
              shadow: true, //是否显示阴影
              shadowQuality: "hight",
              alpha: 70,
            },
            ambient: {
              intensity: 0.5,
            },
          },
          viewControl: {
            minDistance:90,
            maxDistance:250,
            panMouseButton: "left",
            rotateMouseButton: "right",
            distance: 80, //地图视角 控制初始大小
            rotateSensitivity: [1, 1],
            zoomSenSitivity:0,//同下
            panSensitivity:0, //缩放灵敏度
          },
          postEffect: {
            enable: true,
            bloom: {
              enable: false,
            },
            SSAO: {
              radius: 1,
              intensity: 1,
              enable: true,
            },
            depthOfField: {
              enable: false,
              focalRange: 10,
              blurRadius: 10,
              fstop: 1,
            },
          },
          temporalSuperSampling: {
            enable: true,
          },
        },

        series: [
          {
            type: "scatter3D",
            name: "City",
            symbol:  'arrow',
            symbolSize: [20, 20],
            coordinateSystem: "geo3D",
            label: {
              show: false,
              position: 'left',
              distance: 10,
              textStyle: {
                color: 'White',
                borderWidth: 2,
                fontSize: 13,
                fontWeight: 'bold'
              },
            },
            //柱状图数据
            data: this.covertData(this.Big_ChineseMap),
          },
        ],
      };
      // 配置map
      map.setOption(option, true);
    },
  },
};
</script>

<style>
.CMap {
  width: 100%;
  height: 100%;
}

.card {
  overflow: hidden;
  position: absolute;
  text-align: left;
  border-radius: 0.5rem;
  max-width: 290px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color:#CCCCCC;
  z-index: 999;
  left: 45%;
  top: 27%;
  opacity: 0.9;
}

.dismiss {
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: black;
  border: 2px solid #d1d5db;
  font-size: 1rem;
  font-weight: 300;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  transition: 0.3s ease;
}

.dismiss:hover {
  background-color: #ee0d0d;
  border: 2px solid #ee0d0d;
  color: #fff;
}

.header {
  padding: 1.25rem 1rem 1rem 1rem;
}

.image {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: #e2feee;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  animation: animate 0.6s linear alternate-reverse infinite;
  transition: 0.6s ease;
}

.image svg {
  color: #0afa2a;
  width: 2rem;
  height: 2rem;
}

.content {
  margin-top: 0.75rem;
  text-align: center;
}

.title {
  color: #066e29;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.message {
  margin-top: 0.5rem;
  color: #595b5f;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.actions {
  margin: 0.75rem 1rem;

}

.history {
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: #1aa06d;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.track {
  display: inline-flex;
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  color: #242525;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #7e97b8;
  background-color: #e0e8ef;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 255, 255, 0.333);
  border-radius: 40px 40px 40px 40px;
  padding: 16px 24px 16px 28px;
  transform: translate(0px, 0px) rotate(0deg);
  transition: 0.2s;
  box-shadow: -4px -2px 16px 0px #ffffff, 4px 2px 16px 0px rgb(95 157 231 / 48%);
}

button:hover {
  color: #516d91;
  background-color: #e5edf5;
  box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
}

button:active {
  box-shadow: none;
}
</style>
