<template>
  <div class="main">
    <button class="btn" @click="BackMap">Back</button>
  </div>  
</template>

<script>
export default {
  name: "BackButton",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    BackMap(){
        this.$router.push('/homeView')
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
 align-items: center;
 height: auto;
 position:absolute;
 left: 400px;
 top: 50px;
}

.btn {
 width: 170px;
 height: 60px;
 font-size: 18px;
 background:#888e7e;
 border: none;
 border-radius: 50px;
 color: #000;
 outline: none;
 cursor: pointer;
 transition: all 0.4s;
}

.btn:hover {
 box-shadow: inset 0 0 0 4px #ef476f, 
              inset 0 0 0 8px #ffd166, 
              inset 0 0 0 12px #06d6a0,
              inset 0 0 0 16px #118ab2;
 background: #073b4c;
 color: #fff;
}
</style>