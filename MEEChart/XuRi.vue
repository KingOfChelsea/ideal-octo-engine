<template>
  <div id="XuCharts" ref="XuCharts"></div>
</template>

<script>
  import * as echarts from "echarts";
  export default {
    name: "XuRi",
    mounted() {
      this.draw();
    },
    methods: {
      draw() {
        let XuCharts = echarts.init(this.$refs.XuCharts);
        var data = [
          {
            name: "Grandpa",
            children: [
              {
                name: "Uncle Leo",
                value: 15,
                children: [
                  {
                    name: "Cousin Jack",
                    value: 2,
                  },
                  {
                    name: "Cousin Jack",
                    value: 2,
                  },
                  {
                    name: "Cousin Mary",
                    value: 5,
                    children: [
                      {
                        name: "Jackson",
                        value: 2,
                      },
                    ],
                  },
                  {
                    name: "Cousin Ben",
                    value: 4,
                  },
                ],
              },
              {
                name: "Father",
                value: 10,
                children: [
                  {
                    name: "Me",
                    value: 5,
                  },
                  {
                    name: "Brother Peter",
                    value: 1,
                  },
                ],
              },
            ],
          },
          {
            name: "Nancy",
            children: [
              {
                name: "Uncle Nike",
                children: [
                  {
                    name: "Cousin Betty",
                    value: 1,
                  },
                  {
                    name: "Cousin Jenny",
                    value: 2,
                  },
                ],
              },
            ],
          },
        ];
        let option = {
          series: {
            color:["#FCD217","#83bff6"],
            type: "sunburst",
            // emphasis: {
            //     focus: 'ancestor'
            // },
            data: data,
            radius: [0, "90%"],
            label: {
              rotate: "radial",
            },
          },
        };
        XuCharts.setOption(option);
      },
    },
  };
</script>

<style lang="scss" scoped>
  #XuCharts {
    width: 380px;
    height: 240px;
  }
</style>
