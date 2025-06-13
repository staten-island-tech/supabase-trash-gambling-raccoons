<template>
    <div>

<div v-if="!makeanaccount">
        <input class="input" v-model="usernameInput" type="text" placeholder="Username">
        <br>
        <input class="input" v-model="passwordInput" type="text" placeholder="Password">
        <br>
        <button class="btn" @click="signinacc">Login In</button>
        <br>
        <button class="btn" @click="IfNoAccount">Make An Account</button>
        <br>
    </div>
        

<div v-else>
        <input class="input" v-model="usernameInput" type="text" placeholder="Username">
        <br>
        <input class="input" v-model="passwordInput" type="text" placeholder="Password">
        <br>
        <input class="input" v-model="checkpassword" type="text" placeholder="CheckPassword">
        <br>
        <button class="btn" @click="createacc">Create Account</button>
</div>
        

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { adddatatouserdoc, finduserusingemail } from '@/userdocument';
import router from '@/router';
import { AllowedorNotallowed } from '@/stores/store';
import { useAuthStore } from '@/stores/auth';

const loginornot = useAuthStore()

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
        AllowedorNotallowed.RestrictedViews = ['login', 'home', 'gacha', 'deck', 'ownedCards']
        loginornot.account.push(user.email!)
        router.push("/")
        console.log(userId)
        
    })
    } catch(error){
        console.log("error")
    }
}

const signinacc = async () => {
    if(!usernameInput.value || !passwordInput.value){
        console.log("Fill out all inputs")
        return
    } else {
        await signInWithEmailAndPassword(auth, usernameInput.value, passwordInput.value)
        .then((userCredential) => {
        const user = userCredential.user;
        AllowedorNotallowed.RestrictedViews = ['login', 'home', 'gacha', 'deck', 'ownedCards']
        loginornot.account.push(user.email!)
        loginornot.login()
        const username = ref(useAuthStore().account[0])

        const userId = finduserusingemail(username.value)
        console.log(userId)
        router.push("/")
    })
    }

    

    


    
    
    
}



    
</script>

<style scoped></style>
