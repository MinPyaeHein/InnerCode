<template>
  <HeadImport></HeadImport>
  <body>
    <div class="main_header_wrapper">
      <NavLayoutContact></NavLayoutContact>
      <NavLayoutMenu></NavLayoutMenu>
    </div>
    <router-view />
    <Footer></Footer>
  </body>
</template>
<script setup>
import HeadImport from '@/components/Layout/HeadImport.vue'
import NavLayoutContact from '@/components/Layout/NavLayoutContact.vue'
import NavLayoutMenu from '@/components/Layout/NavLayoutMenu.vue'
import Footer from '@/components/Layout/FooterPage.vue'
</script>
