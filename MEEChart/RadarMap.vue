
<template>
  <div id="Radar1" ref="Radar1"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "RadarMap",
  props: ['radar'],
  mounted() {
    this.draw();
  },
  watch: {
    radar:{
      deep: true,
        handler: function () {
          this.draw();
        }
    }
  },
  methods: {
    draw() {
      let Radar1 = echarts.init(this.$refs.Radar1);
      let option = {
        grid: {            // 调整图大小的属性
          top: 30, //离上面30px
          x: 20,
          bottom: 20,//离下面20px
        },
        title: {
          text: "景区评分雷达图",
        },
        legend: {
          data: ["Allocated Budget", "Actual Spending"],
          left: "right",
          orient: "vertical",
        },
        radar: {
          // shape: 'circle',
          axisName:{
            show:true,
            fontStyle:'italic',
            fontWeight:'bolder',
            fontFamily: "Arial",
            fontSize:15,
          },
          // 指示信号
          indicator: [
            { name: "价格指数" ,color:'black',max:10,min:0 },
            { name: "流量指数",color:'black',max:10,min:0},
            { name: "综合指数" ,color:'black',max:10,min:0},
            { name: "实惠指数" ,color:'black',max:10,min:0},
            { name: "推荐指数" ,color:'black',max:10,min:0}
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: this.radar,
                name: "景区综合指数",
              },
            ],
          },
        ],
      };
      Radar1.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
#Radar1 {
  width: 420px;
  height: 320px;
}
</style>
