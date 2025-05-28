<template>
    <div>

<div v-if="!makeanaccount">
        <input v-model="usernameinput" type="text" ref="username" placeholder="Username">
        <br>
        <input v-model="passwordinput" type="text" ref="password" placeholder="Password">
        <br>
        <button @click="signinacc">Login In</button>
        <br>
        <button @click="IfNoAccount">Make An Account</button>
        <br>
    </div>
        

<div v-else>
        <input v-model="usernameinput" type="text" ref="createusername" placeholder="Username">
        <br>
        <input v-model="passwordinput" type="text" ref="createpassword" placeholder="Password">
        <br>
        <input v-model="checkpasswordinput" type="text" ref="checkpassword" placeholder="CheckPassword">
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


const usernameinput = ref('')
const passwordinput = ref('')
const checkpasswordinput = ref('')
const createusername = ref('')
const createpassword = ref('')
const checkpassword = ref('')
const makeanaccount = ref(false)

const IfNoAccount = () => {
    makeanaccount.value = true
}

const createacc = async () => {
    if (usernameinput.value === '' || passwordinput.value === ''){
        console.log('fill out all info')
        return
    } else {
        if (createpassword.value !== checkpassword.value){
            console.log('passwords dont match')
            return
        }
    }

    try{
        await createUserWithEmailAndPassword(auth, createusername.value, createpassword.value)
    } catch (error){
        console.log("error")
    }

}

const signinacc = async () => {
    signInWithEmailAndPassword(auth, usernameinput.value, passwordinput.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
    })
}



    
</script>

<style scoped></style>
