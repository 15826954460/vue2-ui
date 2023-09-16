<template>
  <div id="app">
    <m-card :imgSrc="logoImg" summary="这是一个自定义组件">
      <template v-slot:footer>
        <div class="footer">
          <div class="left">哈哈哈哈</div>
          <div class="right">嘿嘿嘿嘿</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
const logoImg = require("@/src/assets/logo.png");

export default {
  name: "App",
  components: {},
  data() {
    return {
      logoImg,
    };
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
</style>
