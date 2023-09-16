<template>
  <div class="m-card">
    <div class="m-card-img">
      <img :src="imgSrc" alt="img" />
    </div>
    <div class="m-card-summary" v-if="summary">
      {{ summary }}
    </div>
    <div v-else class="m-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "m-card",
  props: {
    imgSrc: {
      //卡片图片资源
      type: String,
      default: "",
    },
    summary: {
      //卡片概要
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped></style>
