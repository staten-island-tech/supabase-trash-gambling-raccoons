<template>
  <!-- <div>
    <input v-model="usernameinput" type="text" ref="username" placeholder="Username" />
    <br />
    <input v-model="passwordinput" type="text" ref="password" placeholder="Password" />
    <button @click="loginacc">Login In</button>
    <h1 v-if="allinfofilledout == true">{{ filloutinfo }}</h1>
  </div> -->
</template>

<script setup lang="ts">
/* import { ref, onMounted } from 'vue'
import { auth, db } from '../firebase'
import { signInWithEmailAndPassword, type UserCredential } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'

const usernameinput = ref('')
const passwordinput = ref('')
const filloutinfo = ref('')

const allinfofilledout = ref(false)

const loginacc = async () => {
  try {
    const usercredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      usernameinput.value,
      passwordinput.value,
    )
    filloutinfo.value = ''

  } catch (error: any) {
    filloutinfo.value = 'Fill Out All Info'
  }
}

onMounted(async (): Promise<void> => {}) */
</script>

<style scoped></style>
