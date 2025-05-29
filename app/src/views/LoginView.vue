<template>
    <div>

<div v-if="!makeanaccount">
        <input v-model="usernameInput" type="text" ref="username" placeholder="Username">
        <br>
        <input v-model="passwordInput" type="text" ref="password" placeholder="Password">
        <br>
        <button @click="signinacc">Login In</button>
        <br>
        <button @click="IfNoAccount">Make An Account</button>
        <br>
    </div>
        

<div v-else>
        <input v-model="usernameInput" type="text" ref="createusername" placeholder="Username">
        <br>
        <input v-model="passwordInput" type="text" ref="createpassword" placeholder="Password">
        <br>
        <input v-model="checkPassword" type="text" ref="checkpassword" placeholder="CheckPassword">
        <br>
        <button @click="createacc">Create Account</button>
        <br>
        <button @click="IfNoAccount">Login</button>
</div>
        

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { auth, database } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { changeUserDocument } from '@/userdocument';

const usernameInput = ref('');
const passwordInput = ref('');
const checkPassword = ref('');

const username = ref('')
const password = ref('')
const createusername = ref('')
const createpassword = ref('')
const checkpassword = ref('')
const makeanaccount = ref(false)

const IfNoAccount = () => {
    makeanaccount.value = true
}

const createacc = async () => {
    if (createusername.value != '' ){
        if (createpassword.value != ''){
            if(checkpassword.value != ''){
                await createUserWithEmailAndPassword(auth, createusername.value, checkpassword.value)
            }
        }
    
    }}
    


const signinacc = async () => {
    signInWithEmailAndPassword(auth, username.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
    })
}



    
</script>

<style scoped></style>
