<template>
  <div id="XuHu" ref="XuHu"></div>
</template>

<script>
  import * as echarts from "echarts";
  export default {
    name: "XuHu",
    props:["Big_ChineseMap"],
    mounted() {
      this.draw();
    },
    watch: {
      Big_ChineseMap: {
      deep: true,
      handler: function () {
            this.draw();
      }
    },
  },
  computed: {
    X() {
      return this.Big_ChineseMap.slice(0,6)
    },
   
  },
    methods: {
      draw() {
        let XuHu = echarts.init(this.$refs.XuHu);
        let option = {
        
          // 提示信息
          tooltip: {
            trigger: "item",
          },
          title: {
            show:true,
            text: "各\n省\n景\n点\n个\n数\n统\n计\n图",
            textStyle: {
              align: "center",
              color: "#161823",
              fontSize: 15,
            
            },
            top: "30%",
            left: "0%",
          },
          toolbox: {
            show: false,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          },
          series: [
            {
            top:15,
            left:'center',
            max:500,
            min:50,
            width:350,
            bottom:5,
              name: "Nightingale Chart",
              type: "pie",
              color: [
                "#516b91",
                "#93b7e3",
                "#516b91",
                "#59c4e6",
                "#edafda",
                "#93b7e3",
                "#a5e7f0",
                "#cbb0e3",
              ],
              radius: [10, 90],//后面一个调大小  
              center: ["50%", "50%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 8,
              },
             
              data:this.X
            },
          ],
        };
        XuHu.setOption(option);
       
      },
    },
  };
</script>

<style lang="scss" scoped>
  #XuHu {
    width: 80%;
    height: 80%;
  }
</style>
