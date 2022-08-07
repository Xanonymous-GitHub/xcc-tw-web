<script lang="ts" setup>
import parrot from '~/assets/images/parrot.png'
</script>

<template>
  <div cursor-default font-300 inline-flex text-2xl>
    <div children:mx-auto flex flex-col>
      <img
        :src="parrot"
        alt=""
        class="animate-bounce"
        h-18
        inline-block
        w-18
      >
      <h1 font-500 mt-6 class="fugaz-one">
        Xanonymous Core Cells ❄︎ XCC.TW
      </h1>
      <h6 text-start font-100 text-lg mt-6 class="fugaz-one">
        Hi, I'm <b text-violet-500>Xanonymous</b>, you can also call me <b text-violet-500>TU</b>, and welcome to my personal website!
      </h6>
      <h6 text-start font-100 text-lg mt-6 class="fugaz-one">
        For some reason, this site is not ready yet! But I will finish it in the near future 😜!
      </h6>
      <h6 text-start font-100 text-lg mt-6 class="fugaz-one">
        So, for more about me, please visit my GitHub directly by clicking the button below!
      </h6>
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
