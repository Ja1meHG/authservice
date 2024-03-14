<template>
    <div>
      <h2><label>Gmail: </label>{{ User.Gmail }}</h2>
      <h2><label>nombre: </label>{{ User.Name }}</h2>
      <h2><label>password: </label>{{ User.password }}</h2>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import UserService from '@/Service/UserService'
  import { onMounted } from 'vue'
  
  const service = new UserService()
  const User = service.getUser()
  
  onMounted(async () => {
    const router = useRoute()
    const email = router.params.email as string
    await service.fetchUser(email)
  })
  
  </script>
  
  