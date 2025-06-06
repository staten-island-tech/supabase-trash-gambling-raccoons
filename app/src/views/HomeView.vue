<template>
  <div>
    <img src="/image.png" alt="profile" @click="opendropdown">
    <div v-if="isOpen">
      <button v-for="(options, index) in accountchoices" key="index" @click="loginorlogout(options)"> {{ options }} </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const accountchoices = ['Login', 'Logout']

const router = useRouter()

const isOpen = ref(false)
function opendropdown(){
  isOpen.value = !isOpen.value
}

function loginorlogout(options:string){
  if(options === 'Login') router.push('/login')
  else router.push('/')
}

</script>

<style scoped></style>