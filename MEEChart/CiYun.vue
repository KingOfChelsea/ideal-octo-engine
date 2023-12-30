<template>
  <!-- ref获取dom -->
  <div id="CiCharts" ref="CiCharts"></div>
</template>


<script>
import * as echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
  name: "",
  data() {
    return {
      data: ''
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      setTimeout(() => {
        this.axios
          .get("http://10.23.91.201:5000/Cloud")
          .then((response) => {
            console.log(response.data);
            this.data = response.data;
            this.draw();
          })
          .catch(function (error) {
            console.log(error);
          });
      }, 1000);
    },
    draw() {
      let CiCharts = echarts.init(this.$refs.CiCharts);
      let keywords = this.data.slice(0, 20)
      console.log(keywords);
   
      let option = {
        //color:'black',
        series: [
          {
            type: "wordCloud",
            sizeRange: [15, 80],
            rotationRange: [0, 0],
            rotationStep: 45,
            gridSize: 8,
            shape: "pentagon",
            width: "100%",
            height: "100%",
            textStyle: {
              normal: {
                color: function () {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(",") +
                    ")"
                  );
                },
              },
            },
            data: keywords,
          },
        ],
      };
      CiCharts.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
#CiCharts {
  width: 380px;
  height: 240px;
}
</style>
