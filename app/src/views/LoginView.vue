<template>
    <div>

<div v-if="!makeanaccount">
        <input v-model="usernameInput" type="text" placeholder="Username">
        <br>
        <input v-model="passwordInput" type="text" placeholder="Password">
        <br>
        <button @click="signinacc">Login In</button>
        <br>
        <button @click="IfNoAccount">Make An Account</button>
        <br>
    </div>
        

<div v-else>
        <input v-model="usernameInput" type="text" placeholder="Username">
        <br>
        <input v-model="passwordInput" type="text" placeholder="Password">
        <br>
        <input v-model="checkpassword" type="text" placeholder="CheckPassword">
        <br>
        <button @click="createacc">Create Account</button>
        <br>
        <button @click="IfNoAccount">Login</button>
</div>
        

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { auth, database } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { adddatatouserdoc } from '@/userdocument';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';

const loginornot = useAuthStore()

/*  */

const usernameInput = ref('');
const passwordInput = ref('');
const checkpassword = ref('')
const makeanaccount = ref(false)

const IfNoAccount = () => {
    makeanaccount.value = true
}

const createacc = async () => {
    if(!usernameInput.value || !passwordInput.value || !checkpassword.value){
        console.log("Fill out all inputs")
        return
    } else if(passwordInput.value !== checkpassword.value){
        console.log("passwords don't match")
        return
    }

    try {
        await createUserWithEmailAndPassword(auth, usernameInput.value, passwordInput.value)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        adddatatouserdoc(user.uid, user.email!, [], [])
    })
    } catch(error){
        console.log("error")
    }
}

const signinacc = async () => {
    signInWithEmailAndPassword(auth, usernameInput.value, passwordInput.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)
        loginornot.account.push(user.email!)
        console.log(loginornot.account)
        loginornot.login()
    })


    router.push("/")
    
    console.log(database)
}



    
</script>

<style scoped></style>
