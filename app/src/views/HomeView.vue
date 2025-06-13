<template>
  <div>
    <img class="h-20 w-20 py-1 px-2 text-xs rounded hover:bg-blue-600" src="/profile.png" alt="profile" @click="opendropdown">
    <div v-if="isOpen">
      <button class="btn" v-for="(options) in accountchoices()" key="index" @click="loginorlogout(options)"  >{{ options }} </button>
    </div>

    <div v-if="authstore.isLoggedin">
      <GameLobby/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { getActivePinia } from 'pinia';
import { useAuthStore } from '@/stores/auth';

getActivePinia()
const authstore = useAuthStore()

function accountchoices(){
  let choices = []
  if (authstore.account.length === 0) {
    choices = ['Login']
    return choices
  } else {
    choices = ['Logout']
    return choices
  }
}

const router = useRouter()

const isOpen = ref(false)
function opendropdown(){
  isOpen.value = !isOpen.value
}

function loginorlogout(options:string){
  if(options === 'Login') router.push('/login')
  else {
    router.push('/')
    authstore.account = []
}
}

</script>

<style scoped></style>