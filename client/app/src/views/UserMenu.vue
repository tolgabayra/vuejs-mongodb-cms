<template>
<div class="h-screen bg-gradient-to-br from-blue-500 to-indigo-200 flex justify-center items-center w-full">
  <form>
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Add User</h1>
        <div>
          <label for="username" class="block mb-1 text-gray-600 font-semibold">Username</label>
          <input v-model="userData.username" id="username" type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
          <input v-model="userData.email" id="email" type="email" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
         <div>
          <label for="jobstatus" class="block mb-1 text-gray-600 font-semibold">Job Status</label>
          <input v-model="userData.developerstatus" id="jobstatus" type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="password" class="block mb-1 text-gray-600 font-semibold">Password</label>
          <input v-model="userData.password" type="password" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button @click="onSave" class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Add</button>
    </div>
  </form>
</div>
</template>



<script setup>
import {ref,inject} from "vue"

const appAxios = inject("appAxios")
const userData = ref({
    username: null,
    email: null,
    developerstatus: null,
    password: null,

})

const onSave = () => {
    const saveData = userData.value0
    appAxios.post("/api/users/adduser", saveData).then(save=>{
        console.log(save)
    })
}

// const onSave = () => appAxios.post("/api/users/adduser", userData.value).then((res) => {
//   console.log(res);
// })

</script>