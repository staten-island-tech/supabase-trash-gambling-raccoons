<template>
    <div>

        <input v-model="usernameinput" type="text" ref="username" placeholder="Username">
        <br>
        <input v-model="passwordinput" type="text" ref="password" placeholder="Password">
        <button @click="signinacc">Login In</button>
        <button ref="makeanaccount" @click="IfNoAccount">Make An Account</button>
        <br>
        <div v-if="makeanaccount">
        <input v-model="usernameinput" type="text" ref="createusername" placeholder="Username">
        <br>
        <input v-model="passwordinput" type="text" ref="createpassword" placeholder="Password">
        <br>
        <input v-model="passwordinput" type="text" ref="checkpassword" placeholder="CheckPassword">
        <button @click="createacc">Create Account</button>
</div>
        

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
/* import { collection, getDocs } from 'firebase/firestore'; */
 
const usernameinput = ref('')
const passwordinput = ref('')
const createusername = ref('')
const createpassword = ref(' ')
const checkpassword = ref(' ')
const makeanaccount = ref(false)

const IfNoAccount = () => {
    makeanaccount.value != makeanaccount.value
}

const createacc = async () => {
    createUserWithEmailAndPassword(auth, usernameinput.value, passwordinput.value)
    
}

const signinacc = async () => {
    signInWithEmailAndPassword(auth, usernameinput.value, passwordinput.value)
}

onMounted(async(): Promise<void>=> {
    
})




    
</script>

<style scoped></style>
