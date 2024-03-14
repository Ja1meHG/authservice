<template>
    <form @submit="EventUser">
        <input v-model="Gmail" type="email" placeholder="correo">
        <input v-model="nombre" type="text" placeholder="nombre">
        <input v-model="password" type="password" placeholder="contraseña">
        <button type="submit">Enviar</button>
    </form>

</template>
<script lang="ts" setup>
import UserService from '@/Service/UserService'
import {ref} from 'vue';

const service = new UserService()
const nombre = ref('')
const Gmail = ref('')
const password = ref('')

const EventUser = () =>{ 
if(!nombre.value || !Gmail.value || password.value)
{
    alert('ERROR EN LLENADO DE DATOS, TONOTO')
}
service.fetcCreate(nombre.value, Gmail.value, password.value)
}
</script>