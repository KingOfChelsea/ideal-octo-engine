<template>
  <div class="main">

    <div class="left">
      <!-- 左1 -->
      <div style="flex: 0 1 66.8%;">
        <XuTime :Time_Line_Bar="Time_Line_Bar" style="width: 100%; height: 100%;"/>
      </div>
      <!-- 左2 -->
      <div style="flex: 0 1 33.4%;">
        <XuBar :Hot='Hot_Province' style="width: 100%; height: 100%;"/>
      </div>
    </div>

    <div class="center">
      <div style="flex: 0 1 20%;">
        <Ename style="width: 100%; height: 100%;" />
      </div>
      <div style="flex: 0 1 80%;">
        <MapUse style="width: 100%; height: 100%;" />
      </div>  
  </div>
    <div class="right">
      <div style="flex: 0 1 33.4%;">
        <BarCharts :Bar="Bar_SumPrice" style="width: 100%; height: 100%;"/>
      </div>
      <div style="flex: 0 1 33.4%;">
        <XuHu :Big_ChineseMap="Big_ChineseMap" style="width: 100%; height: 100%;"/>
      </div>
      <div style="flex: 0 1 33.4%;">
        <CiYun style="width: 100%; height: 100%;"/>
      </div>
    </div>
  </div>

</template>

<script>
import MapUse from  '@/Trash/MapUse.vue'
import Ename from '@/MEEChart/Ename.vue'
import XuBar from '@/MEEChart/XuBar.vue'
import XuTime from '@/MEEChart/XuTime.vue'
import XuRi from '@/MEEChart/XuRi.vue'
import XuHu from "@/MEEChart/XuHu.vue"
import BarCharts from '@/MEEChart/BarCharts.vue'
import CiYun from '@/MEEChart/CiYun.vue'
export default {
  name: 'Emain',
  components: {
    MapUse,
    Ename,
    XuBar,
    XuTime,
    XuRi,
    XuHu,
    BarCharts,
    CiYun
  },
  data() {
    return {
      Hot_Province:'',
      Time_Line_Bar: '',
      Big_ChineseMap:'',
      Bar_SumPrice:'',
    }
  },

  mounted() {
      this.getdata()
  },

  methods: {
      getdata(){
        this.axios.get(`http://10.23.91.201:5000/api/chart`).then(
                (response) => {
                    this.Hot_Province = response.data.Hot_Province
                    this.Time_Line_Bar = response.data.Time_Line_Bar      
                    this.Big_ChineseMap=response.data.Big_ChineseMap
                    this.Bar_SumPrice =response.data.Bar_SumPrice
                },
                (error) => {
                    console.log("响应失败", error.message);
                }
            );    
      }
  },
};
</script>

<style lang="less" scoped>
 .main {
            flex: 0 1 90%;
            display: flex;
        }

        .left {
            flex: 0 1 25%;
            display: flex;
            flex-direction: column;
        }
        .center{
            flex: 0 1 50%;
            display: flex;
            flex-direction: column;
        }
        .right{
            flex: 0 1 25%;
            display:flex;
            flex-direction: column;
        }
</style>