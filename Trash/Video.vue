<template>
  <div class="login-page">
    <div class="login-content">
          <Login v-show="flag1"/>
          <Register v-show="flag"/>
    </div>
    <div class="videoContainer">
      <video
        :style="fixStyle"
        class="fillWidth"
        playsinline=""
        autoplay=""
        muted=""
        loop=""
        v-on:canplay="canplay"
      >
        <source src="@/assets/EarthVideo.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script>
import Login from "@/Trash/Login.vue"
import Register from "@/Trash/Register.vue"
  export default {
    name:'Video',
    components: {
        Login,
        Register
    },
    data() {
      return {
        vedioCanPlay: false, //控制视屏加载状态显示图片
        fixStyle: "", //屏幕发生变化时给播放器设置的样式
        flag:false,
        flag1:true,
      };
    },
    mounted() {
      this.getVideoStyle();
      this.$bus.$on('SendRes',(data)=>{
            this.flag = data
            this.flag1 = false
      })
    },
    methods: {
      canplay() {
        this.vedioCanPlay = true;
      },
      getVideoStyle() {
        window.onresize = () => {
          const windowWidth = document.body.clientWidth;
          const windowHeight = document.body.clientHeight;
          const windowAspectRatio = windowHeight / windowWidth;
          let videoWidth;
          let videoHeight;
          if (windowAspectRatio < 0.5625) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * 0.5625;
            this.fixStyle = {
              height: windowWidth * 0.5625 + "px",
              width: windowWidth + "px",
              "margin-bottom": (windowHeight - videoHeight) / 2 + "px",
              "margin-left": "initial",
            };
          } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / 0.5625;
            this.fixStyle = {
              height: windowHeight + "px",
              width: windowHeight / 0.5625 + "px",
              "margin-left": (windowWidth - videoWidth) / 2 + "px",
              "margin-bottom": "initial",
            };
          }
        };
        window.onresize();
      },
    },
  };
</script>
<style lang="less" scoped>
  .login-page {
    background-size: cover;
    background-attachment: scroll;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .videoContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden; 
    z-index: -100;
  }

  .videoContainer:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    top: 0;
    left: 0;
    background: rgba(25, 29, 34, 0.65);
  }
  .fillWidth {
    width: 100%;
    height: 100%;
  }
</style>
