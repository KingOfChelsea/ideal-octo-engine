<template>
  <div id="app">
    <!-- 用于渲染匹配的路由组件-->
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  // 用于标识组件的名称
  name: "VueCompetitionApp",
  //属性是一个空对象，可以在这里注册依赖的组件
  components: {
  },
  data() {
    // 返回一个包含name1和name2属性的对象，初始化值分别为"Home"和"About"
    return {
      name1: "Home",
      name2: "About",
    };
  },
  mounted() {
  },
  methods: {
    linkWithMap() {
      this.$router.push("/about");
    },
    // 将浏览器的历史记录推入新状态。
    pushHistory() {
      window.history.pushState({}, "index", "#");
    },
    linkWithHome() {
      this.$router.push("/Map");
    },
  },
};
</script>
<style lang="less">
html,
body,
#app {
  height: 100vh;
  margin: 0;
  padding: 0;
  background-size: cover;
}
</style>
