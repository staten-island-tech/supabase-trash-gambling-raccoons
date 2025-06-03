<template>
  <div>
    <img src="/app/public/image.png" alt="profile" @click="opendropdown">
    <div v-if="isOpen">
      <a href="#" v-for="accountoptions in loginorlogout"> {{ accountoptions }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loginorlogout = ['Login', 'Logout']

const isOpen = ref(false)
function opendropdown(){
  isOpen.value = !isOpen.value
}



</script>

<style scoped></style>