<template>
<button  > 
  {{Name}}
</button>
</template>

<script>
export default {
  name: "Rocket",
    props:["Name"],
  data() {
    return {};
  },

  mounted() {},

  methods: {

  },
};
</script>

<style lang="scss" scoped>
/* === removing default button style ===*/
button {
 padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: #212121;
 z-index: 1;
 background: #e0f0e9;
 position: absolute;
 left:69%;
 top:50%;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
}

button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #c0ebd7;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

button:hover {
 color: #0b0b0b;
}

button:hover::before {
 width: 100%;
}
</style>