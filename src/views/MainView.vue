<template>
  <HeadImport></HeadImport>
  <body>
    <div class="main_header_wrapper">
      <NavLayoutContact></NavLayoutContact>
      <NavLayoutMenu></NavLayoutMenu>
    </div>
    <router-view />
  </body>
</template>
<script setup>
import HeadImport from '@/components/Layout/HeadImport.vue'
import NavLayoutContact from '@/components/Layout/NavLayoutContact.vue'
import NavLayoutMenu from '@/components/Layout/NavLayoutMenu.vue'
</script>
