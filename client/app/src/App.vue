<template>
 <Navbar />
  <div class="flex flex-wrap font-serif">
    <div class="bg-gradient-to-r from-sky-500 to-indigo-500 w-1/5 h-screen">
    <LeftMenu />
    </div>
    <div class="bg-gray-200 w-4/5 ">
      <router-view></router-view>

    
    </div>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
import LeftMenu from "./components/LeftMenu.vue"
</script>

<style>

</style>