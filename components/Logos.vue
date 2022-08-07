<script lang="ts" setup>
import gem from '~/assets/images/gem.png'
</script>

<template>
  <div cursor-default font-300 inline-flex text-2xl>
    <div children:mx-auto flex flex-col>
      <img
        :src="gem"
        alt=""
        class="animate-pulse"
        h-18
        inline-block
        w-18
      >
      <span font-500 mt-6 class="fugaz-one">Xanonymous Core Cells - XCC.TW</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fugaz-one {
  font-family: "google-sans", Quicksand, Quicksand, Noto Sans TC, -apple-system, "NotoSansTC-Medium", BlinkMacSystemFont, Segoe UI,
  Roboto, Helvetica Neue, Arial, Noto Sans TC, sans-serif, Apple Color Emoji,
  Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
</style>
