<template>
    <div class="sc">
        <div class="title ">{{ province }}</div>
        <div  class="one" v-for="(item,index) in sendMsg " :key="index" >
            <svg t="1681708003655" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1591" width="200" height="200"><path d="M256 0C150 0 64 86 64 192v512c0 96 70.4 175.4 162.2 189.8l-92 92c-14 14-4 38.2 15.8 38.2h79.4c17 0 33.2-6.8 45.2-18.8L384 896h256l109.2 109.2c12 12 28.2 18.8 45.2 18.8H874c20 0 30-24.2 15.8-38.2l-92-92c92-14.2 162.2-93.8 162.2-189.8V192c0-106-86-192-192-192H256zM192 192c0-35.4 28.6-64 64-64h512c35.4 0 64 28.6 64 64v192c0 35.4-28.6 64-64 64H256c-35.4 0-64-28.6-64-64V192z m320 384a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" p-id="1592"></path></svg>
            <router-link  :to="{
                                    path: '/aboutview/Left/Right',
                                    query: {
                                        id: item.id,
                                        Address: item.Address,
                                        Hot: item.Hot,
                                        Name: item.Name,
                                        Infro: item.Infro,
                                        Price: item.Price,
                                        Score: item.Score,
                                        Big_Infro: item.Big_Infro,
                                        img: item.img_url,
                                        City: item.City,
                                        Radar: item.Radar,
                                    },

                                }" class="Saw" @click.native="sendFlag();closeNews()"  >
                                    {{ item.Name }}
            </router-link>
        </div>
    </div>
</template>

<script>
import More from "@/Trash/More.vue";
export default {
    name: "Left",
    components: {
        More,
    },
    props: ["sendMsg", "province"],
    data() {
        return {
            flag: true,
            newsFlag:false,
            cityData: {}, // 用来保存每个城市的数据
            selectedCity: "",
            currentData: [],
        };
    },
    methods: {
        sendFlag() {
            this.$bus.$emit("sendingFlag", this.flag);
        },
        closeNews(){
            this.$bus.$emit("closeNews",this.newsFlag)
        }
    },
};
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
    display: none;
}

.sc {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding-block: 20px;
}
.one{
    height:30px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-top: 20px;
    vertical-align: middle;
    padding-left:10px ;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.one:hover {
    box-shadow: 1px 5px 10px 3px rgba(0, 0, 0, .1); 
    border-radius: 10px;
}
.one svg {
    width: 5%;
    margin-right: 20px;
}
.Saw{
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    color: #00796B;
}
.title {
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
}
</style>