<template>
    <section>
      <ul>
        <!-- Aquí es para recorrer la data -->
        <li v-for="(user, index) in posts" :key="index">
          <RouterLink :to="{ name: 'post', params: { Gmail: user.Gmail } }"
            >{{ index +1 }} | {{ user.Gmail }}</RouterLink
          >
        </li>
      </ul>
    </section>
  </template>
  <script lang="ts" setup>
  import UserService from '@/Service/UserService'
  import type IUser from '@/Interface/IUser' //Interfaz
  import type { Ref } from 'vue'
  import { ref, onMounted } from 'vue'
  
  const service = new UserService()
  const posts:Ref<IUser[]> = service.getUsers()
  
  onMounted(async () => {
    await service.fetchAll()
  })
  </script>
  
  <style scoped></style>
  