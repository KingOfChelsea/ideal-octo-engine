<template>
  <dv-full-screen-container>
    <MLoging v-if="loading"/>
    <div v-else>
    <div class="container">
      <Container/>
      <Emain />
    </div>
    <hello style="width: 100%; height: 100%;"/>
    </div>
  </dv-full-screen-container>
    
    
  
</template>

<script>
import Background from "@/MEEChart/Background.vue"
import Container from "@/IndexComponents/container.vue";
import Emain from "@/IndexComponents/Emain.vue";
import hello from "@/Trash/hello.vue";
import MLoging from "@/Trash/Ming.vue";
export default {
  name: "HomeView",
  components: {
    Container,
    Emain,
    Background,
    hello,
    MLoging,
  },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 4000);
    },
  },
  mounted () {
    this.cancelLoading();
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0px;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}
</style>
