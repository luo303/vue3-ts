<template>
  <div class="logo">
    <img src="/logo.png" alt="" />
    <p v-show="!settingStore.fold">硅谷甄选后台</p>
  </div>
</template>

<script setup lang="ts">
import settingstore from '@/stores/modules/setting'
const settingStore = settingstore()
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  padding: 5px;
  width: 100%;
  height: $logo_height;
  align-items: center;
  img {
    width: $logo_image_width;
    height: $logo_image_height;
  }
  p {
    margin-left: 20px;
    color: $logo_font_color;
    font-size: $logo_font_size;
    font-weight: 700;
  }
}
</style>
