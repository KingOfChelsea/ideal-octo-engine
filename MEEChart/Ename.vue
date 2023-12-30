<template>
  <div id="NameCharts" ref="NameCharts"></div>
</template>
<script>
  import * as echarts from "echarts";

  export default {
    name: "Ename",
    mounted() {
      this.draw();
    },
    methods: {
      draw() {
        let NameCharts = echarts.init(this.$refs.NameCharts);
        let option = {
          graphic: {
            elements: [
              {
                type: "text",
                left: "center",
                top: "center",
                // top:10 ,
                style: {
                  text: "Travel",
                  fontSize: 65,
                  fontWeight: "bold",
                  lineDash: [150, 200],
                  lineDashOffset: 0,
                  fill: "transparent",
                  stroke: "#35383A",
                  lineWidth: 1,
                },
                keyframeAnimation: {
                  duration: 3000,
                  loop: true,
                  keyframes: [
                    {
                      percent: 0.7,
                      style: {
                        fill: "#4b5cc4",
                        lineDashOffset: 200,
                        lineDash: [200, 0],
                      },
                    },
                    {
                      // Stop for a while.
                      percent: 50,
                      style: {
                        fill: "#56004f",
                      },
                    },
                    {
                      percent: 50,
                      style: {
                        fill: "#56004f",
                      },
                    },
                  ],
                },
              },
            ],
          },
        };
        NameCharts.setOption(option);
      },
    },
  };
</script>
<style lang="scss" scoped>
  #NameCharts {
    width: 100%;
    height:100%;
  }
</style>
