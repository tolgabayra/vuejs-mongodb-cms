<template>
    <div class="container">
            <h2 class="text-center text-black text-2xl">Send email here !</h2>
            <button @click="sendEmail" class="button bg-red-600 rounded-full p-2 ">Send Mail</button>
    </div>
</template>

<script setup>
import { inject } from "vue";
  
const appAxios = inject("appAxios")


const sendEmail  = () => {
  appAxios.get("/api/users/sendemail").then(() => {
    console.log("Email has been send !!! ");
  })
}


</script>

