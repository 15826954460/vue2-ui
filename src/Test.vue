<template>
  <m-card :imgSrc="logoImg" summary="这是一个自定义组件">
    <template v-slot:footer>
      <div class="footer">
        <div class="left">子组建测试</div>
        <div class="right">嘿嘿嘿嘿！！！</div>
      </div>
    </template>
  </m-card>
</template>

<script>
import "vue2-ui-demo/dist/css/card.css";
import { MCard } from "vue2-ui-demo/dist/index.umd.js";

const logoImg = require("@/src/assets/logo.png");
export default {
  name: "App",
  components: {
    MCard,
  },
  data() {
    return {
      logoImg,
    };
  },
};
</script>
