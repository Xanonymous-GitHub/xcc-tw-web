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

      <a href="https://s.xcc.tw" my-4 target="__blank" rel="nofollow noreferrer noopener" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
        <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100" />
        <!-- Top glass gradient -->
        <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3" />
        <!-- Bottom gradient -->
        <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5" />
        <!-- Left gradient -->
        <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5" />
        <!-- Right gradient -->
        <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5" />
        <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10" />
        <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5" />
        <span class="relative" text-sm dark:text-white text-black>SXCCTW</span>
      </a>
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
