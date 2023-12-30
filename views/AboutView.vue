<template>
    <dv-full-screen-container>
        <div class="container">
            <div :style="{ 'background-repeat': 'no-repeat', 'background-size': 'cover', }"></div>
            <div class="left-meau">
                <Left style="width: 100%" :sendMsg="msg" :province="province" />
            </div>

            <div class="right">
                <Right />
            </div>
            <hello style="width: 100%; height: 100%;" />
            <News v-if="show" :sendNews ="newsitem"/>
        </div>
    </dv-full-screen-container>
</template>

<script>
import Left from "@/AboutComponent/Left.vue";
import Right from "@/AboutComponent/Right.vue";
import hello from '@/Trash/hello.vue'
import News from '@/AboutComponent/Component/News.vue'
export default {
    name: "View",

    components: {
        Left,
        Right,
        hello,
        News
    },
    data() {
        return {
            province: "",
            msg: [],    
            bg: '',
            show:true,
            newsitem:"",
        };
    },

    mounted() {
        this.getinfo();
        this.getmessages();
        this.$bus.$on('sendBackground', (data) => {
            this.bg = data
        });
        this.pushHistory();
        window.addEventListener("popstate", function (e) {
            window.location.href = "http://10.23.149.69:8080/#/homeView";
        }, false);
        
    },
    computed: {
        shownew:function(){
            this.$bus.$on('closeNews',(data)=>{
                this.show = data
        })
        }
    },
    watch: {
      shownew(newitem,old){
        this.show = old
      }
    },
    methods: {
        pushHistory() {
            window.history.pushState({}, "index", "#");
        },
        getinfo() {
            let province = this.$route.params.name;
            this.province = province;
        },
        getmessages() {
            this.axios.get(`http://10.23.91.201:5000/api/${this.province}`).then(
                (response) => {
                    this.msg = response.data.data;
                    this.newsitem = response.data.new_data
                    console.log(response.data.new_data);
                },
                (error) => {
                    alert("Failure");
                    console.log("响应失败", error.message);
                }
            );
        },
    },

};
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    height: 100%;
}

.left-meau {
    flex: 0 1 30%;
    height: 100%;
}

.right {
    flex: 0 1 70%;
}
</style>
