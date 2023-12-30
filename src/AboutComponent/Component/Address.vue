<template>

    <button class="space-button">
      <span>{{Address_Data}}</span>
      <svg viewBox="0 0 24 24">
        <path d="M5.5 16.5l5-5-5-5"></path>
        <path d="M11 11h8v2h-8z"></path>
        <path d="M16.5 7.5l5-5-5-5"></path>
        <path d="M19 4v8h-2v-8z"></path>
      </svg>
    </button>
</template>

<script>
export default {
  name: "Address",
    props: ["Address_Data"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.space-button {
  background-color: #f70000;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.space-button span {
  z-index: 1;
}

.space-button svg {
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  fill: #fff;
  transition: transform 0.3s ease;
}

.space-button:hover {
  background-color: #f3f9f1;
  color: #151515;
}

.space-button:hover svg {
  transform: translateX(4px);
}

.space-button:active {
  background-color: #f94b4c;
  color: #fff;
}

</style>