<template>
    <div>

        <input v-model="usernameinput" type="text" ref="username" placeholder="Username">
        <br>
        <input v-model="passwordinput" type="text" ref="password" placeholder="Password">
        <button @click="loginacc">Login In</button>
        <h1 v-if="!allinfofilledout">Fill Out all Info</h1>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const usernameinput = ref('')
const passwordinput = ref('')

const allinfofilledout = ref(true)

const loginacc = () => {
    if (usernameinput.value == '' || passwordinput.value == ''){
        console.log("Please fill out all information")
        allinfofilledout.value != allinfofilledout.value
    }else{
        console.log(usernameinput.value)
        console.log(passwordinput.value)
    }

    

    usernameinput.value = ''
    passwordinput.value = ''
}




    
</script>

<style scoped>

</style>