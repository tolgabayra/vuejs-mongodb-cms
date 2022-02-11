<template>
  <div class="2xl:container 2xl:mx-auto p-10">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
      <div class="bg-gradient-to-r from-sky-500 to-indigo-500 p-8">
        <div>
          <h2 class="text-xl leading-tight text-gray-600 dark:text-white text-center">Mobile Developers</h2>
          <hr class="m-3">
          <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-6">
            <div class="p-2">
                <div class="overflow-x-auto rounded-xl">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-white bg-gradient-to-r from-sky-500 to-indigo-500">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Username</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Email</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Delete</div>
                                </th>
        
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="mobiledeveloper in mobiledevelopers" :key="mobiledeveloper.id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" width="40" height="40" alt="Alex Shatov"></div>
                                        <div class="font-medium text-gray-800">{{mobiledeveloper.username}}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{mobiledeveloper.email}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center"><button @click="deleteUser(mobiledeveloper)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
          <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2">
          </p>
        </div>
        
      </div>


      <div class="bg-gradient-to-r from-sky-500 to-indigo-500 p-8">
        <div>
          <h2 class="text-xl leading-tight text-gray-600 dark:text-white text-center">Web Developers</h2>
          <hr class="m-3">
          <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
        </div>
        <div class="flex justify-center items-center mt-28 md:mt-1">
            <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-3">
            <div class="p-2">
                <div class="overflow-x-auto rounded-xl">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-white bg-gradient-to-r from-sky-500 to-indigo-500">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Username</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Email</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Delete</div>
                                </th>
        
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="webdeveloper in webdevelopers" :key="webdeveloper.id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></div>
                                        <div class="font-medium text-gray-800">{{webdeveloper.username}}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{webdeveloper.email}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center"><button @click="deleteUser2(webdeveloper)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>

      </div>



    </div>
  
</div>
</template>

<script setup>
import {ref, inject} from "vue"

const appAxios = inject("appAxios")
const users = ref([])
const mobiledevelopers = ref([])
const webdevelopers = ref([])



// const filterStatu = (item) => {
//   return item.status == "mobile"
// }
// mobiledevelopers.value = users.value
// mobiledevelopers.value.filter(filterStatu)


const getUsers = () => {
    appAxios.get("/api/users").then(res=>{
    users.value = res.data || []

    
    const result = users.value.filter(obj =>obj.developerstatus == "mobile")
    mobiledevelopers.value = result

    const result2 = users.value.filter(obj=>obj.developerstatus == "web")
    webdevelopers.value = result2
})
}

const deleteUser = (mobiledeveloper) => {
   appAxios.delete(`/api/users/${mobiledeveloper._id}`).then(() => {
       getUsers()
    console.log("user has been deleted!!!");
    
  }).catch(() => {
    console.log(mobiledevelopers._id);
  })
}

const deleteUser2 = (webdeveloper) => {
  appAxios.delete(`/api/users/${webdeveloper._id}`).then(() => {
      getUsers()
    console.log("user has been deleted!!!");
  }).catch(() => {
    console.log(mobiledevelopers._id);
  })
}




getUsers()
</script>
