<script lang="ts" setup>
import parrot from '~/assets/images/parrot.png'

interface Link {
  text: string
  url: URL
}

const links: Array<Readonly<Link>> = [
  {
    text: 'URL Shortener',
    url: new URL('https://s.xcc.tw'),
  },
  {
    text: 'Puppy Sponsor',
    url: new URL('https://puppy.xcc.tw'),
  },
  {
    text: 'BaBaIsYou',
    url: new URL('https://baba.ntut.club'),
  },
  {
    text: 'Tourism Explorer',
    url: new URL('https://tour.ntut.club'),
  },
  {
    text: 'PVS',
    url: new URL('https://pvs.xcc.tw'),
  },
  {
    text: 'Notes',
    url: new URL('https://hackmd.xcc.tw'),
  },
  {
    text: 'Hey PTT',
    url: new URL('https://ptt.xcc.tw'),
  },
]
</script>

<template>
  <div cursor-default font-300 text-2xl m-auto>
    <div children:mx-auto flex flex-col>
      <img
        :src="parrot"
        alt=""
        class="animate-bounce"
        h-18
        inline-block
        w-18
      >
      <h1 font-500 mt-6 class="fugaz-one" text-center>
        <b whitespace-nowrap>Xanonymous</b> <b whitespace-nowrap>Core Cells</b> ❄︎ <b whitespace-nowrap>XCC.TW</b>
      </h1>
      <h6 text-start font-100 text-lg mt-6 class="fugaz-one">
        Hi, I'm <b text-violet-500>Xanonymous</b>, you can also call me <b text-violet-500>TU</b>, and welcome to my
        personal website!
      </h6>
      <h6 text-start font-100 text-lg mt-6 class="fugaz-one">
        For some reason, this site is not ready yet! But I will finish it in the near future 😜!
      </h6>
      <h6 text-start font-100 text-lg mt-6 class="fugaz-one">
        So, for more about me, please visit my GitHub directly by clicking the button below!
      </h6>

      <span flex flex-row flex-no-wrap space-between my-4>
        <a href="https://s.xcc.tw/s/iMC13wjsFLh" mx-1>
          <img rounded-xl shadow-sm src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="">
        </a>
        <a href="mailto:contact@xcc.tw" mx-1>
          <img rounded-xl shadow-sm src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="">
        </a>
        <a href="https://s.xcc.tw/s/vBX1FPbCy3m" mx-1>
          <img rounded-xl shadow-sm src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="">
        </a>
        <a href="https://s.xcc.tw/s/qgoHH358f8q" mx-1>
          <img rounded-xl shadow-sm src="https://img.shields.io/badge/Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white" alt="">
        </a>
      </span>

      <span text-center>
        <SiteButton v-for="(link, i) in links" :key="i" :text="link.text" :link="link.url" />
      </span>
    </div>
    <Footer />
  </div>
</template>
