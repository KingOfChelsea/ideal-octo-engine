<template>
  <div id="XuTime" ref="XuTime"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "XuTime",
  props: ["Time_Line_Bar"],
  data() {
    return {

    };
  },
  mounted() {
    // this.draw();
  },
  watch: {
    Time_Line_Bar:{
      deep: true,
      handler: function () {
            this.draw();
      },
    }
  },
  computed: {
    data2016(){
      return this.Time_Line_Bar.data2016.slice(0,16)
    },
    data2017(){
        return this.Time_Line_Bar.data2017.slice(0,16)
    },
    data2018(){
        return this.Time_Line_Bar.data2018.slice(0,16)
    },
    data2019(){
      return this.Time_Line_Bar.data2019.slice(0,16)
    },
    data2020(){
      return this.Time_Line_Bar.data2020.slice(0,16)
    },
    data2021(){
      return this.Time_Line_Bar.data2021.slice(0,16)
    },
    yAxis(){
      return this.Time_Line_Bar.yAxis.slice(0,16)
    }
  } , 
  methods: {

    draw() {
      let XuTime = echarts.init(this.$refs.XuTime);
      let option = {
        
        baseOption: {
          color: {//渐变设置颜色组件
            type: 'linear',
           // 包围框中的百分比，数值范围 0-1
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops://颜色线性梯度
              [
                {
                  offset: 0, color: '#a1afc9' // 0% 处的颜色 蓝灰色
                },
                {
                  offset: 0.5, color: '#4b5cc4' // 50%处的颜色 宝蓝
                },
                {
                  offset: 1, color: '#70f3ff' // 100% 处的颜色 雪青
                }
              ],
            global: false
          },
          timeline: {
            show: false,  //是否显示时间轴
            loop: true, //循环播放
            playInterval: 2000, //越多播放速度越慢
            axisType: "category",
            autoPlay: true,//自动播放
            data: [
              "2016-01-01",
              "2017-01-01",
              "2018-01-01",
              {
                value: "2019-01-01",
                tooltip: {
                  formatter: "{b} GDP达到一个高度",
                },
                symbol: "diamond",
                symbolSize: 20,
              },
              "2020-01-01",

              {
                value: "2021-01-01",
                tooltip: {
                  formatter: function (params) {
                    return params.name + "GDP达到又一个高度";
                  },
                },
                symbol: "diamond",
                symbolSize: 18,
              },
            ],
            label: {
              formatter: function (s) {
                return new Date(s).getFullYear();
              },
            },
          },//上面是时间轴的配置设置,时间轴隐藏了所以可以不管
          calculable: true,
          grid: {            // 调整图大小的属性
            top: 30, //离上面30px
            x: 45,
            bottom: 20,//离下面20px
          },
          yAxis: [
            {
              inverse: true,
              type: "category",
              axisLabel: {
                interval: 0,
              },
              data: this.yAxis,
              splitLine: {
                show: false,
              },
            },
          ],
          xAxis: [
            {

              type: "value",
              name: "旅游消费指数",
              min:100,
              max: 150,
            },
          ],
          series: [
            {
              name: "%",
              type: "bar",
            }
          ],
        },
        options: [
          {
            title: {
              text: "2016年旅游居民消费指数",

            },
            series: [
              {
                realtimeSort: true,
                seriesLayoutBy: 'column',
                data: this.data2016,
              }

            ],
          },
          // 2017
          {
            title: {
              text: "2017年旅游居民消费指数",
            },
            series: [
              {
                data: this.data2017
              },
            ],
          },
          //2018
          {
            title: {
              text: "2018年旅游居民消费指数",
            },
            series: [
              {
                data: this.data2018
              }]
          },

          // 2019
          {
            title: {
              text: "2019年旅游居民消费指数",
            },
            series: [
              {
                data: this.data2019
              }
            ],
          },

          {
            title: {
              text: "2020年旅游居民消费指数",
            },
            series: [
              {
                data: this.data2020
              }
            ],
          },
          {
            title: {
              text: "2021年旅游居民消费指数",
            },
            series: [
              {
                data: this.data2021
              }
            ],
          },

        ],
      };
      XuTime.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
#XuTime {
  width: 100%;
  height: 100%;
}</style>
