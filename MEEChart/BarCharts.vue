
<template>
  <div id="BarCharts2" ref="BarCharts2"></div>
</template>

<script>
  import * as echarts from "echarts";
  export default {
    name: "BarCharts",
    mounted() {
      this.draw();
    },
    methods: {
      draw() {
        let BarCharts2 = echarts.init(this.$refs.BarCharts2);

        // prettier-ignore
        let dataAxis = ['内蒙古', '新疆', '海南', '西藏', '浙江', '上海', '云南', '湖北', '四川', '重庆', '山东', '湖南', '贵州', '陕西', '福建', '宁夏', '江苏', '天津', '江西', '广西', '吉林', '安徽', '澳门', '河南', '北京', '辽宁', '山西', '河北', '黑龙江', '甘肃', '青海', '香港', '台湾'];
        // prettier-ignore
        let data =[254.0, 169.0, 157.0, 150.0, 79.0, 78.0, 76.0, 64.0, 62.0, 57.0, 56.0, 55.0, 54.0, 54.0, 53.0, 53.0, 52.0, 50.0, 46.0, 46.0, 43.0, 41.0, 40.0, 39.0, 34.0, 33.0, 30.0, 28.0, 27.0, 27.0, 21.0, 19.0, 2.0];
        let yMax = 500;
        let dataShadow = [];
        for (let i = 0; i < data.length; i++) {
          dataShadow.push(yMax);
        }
        let option = {
          tooltip: {
            trigger: "item",
          },
          title: {
            text: "景区平均门票价格排行",
            left: "center",
            top: 20,
            color:"#161823",
            subtext: "Ranking of average ticket prices for scenic spots",
          },
          xAxis: {
            data: dataAxis,
            axisLabel: {
              inside: true,
              color: "#fff",
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            z: 10,
          },
          yAxis: {
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#999",
            },
          },
          grid: {
            show: false,
            top: "40%",
            right: "5%",
            bottom: "15%",
            left: "10%",
          },
          dataZoom: [
            {
              type: "inside",
            },
          ],
          series: [
            {
              type: "bar",
              showBackground: true,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#a1afc9" },
                  { offset: 0.5, color: "#188df0" },
                  { offset: 1, color: "#70f3ff" },
                ]),
              },
              emphasis: {
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    // { offset: 0, color: "#2378f7" },
                    // { offset: 0.7, color: "#2378f7" },
                    // { offset: 1, color: "#83bff6" },
                    { offset: 0, color: "#FCD217" },
                    { offset: 0.7, color: "#FEBA07" },
                    { offset: 1, color: "#FCD217" },
                  ]),
                },
              },
              data: data,
            },
          ],
        };
        // Enable data zoom when user click bar.
        const zoomSize = 6;
        BarCharts2.on("click", function (params) {
          console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
          BarCharts2.dispatchAction({
            type: "dataZoom",
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue:
              dataAxis[
                Math.min(params.dataIndex + zoomSize / 2, data.length - 1)
              ],
          });
        });
        BarCharts2.setOption(option);   
      },
    },
  };
</script>

<style lang="scss" scoped>
  #BarCharts2 {
    width: 800px;
    height: 1000px;
  }
</style>
