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
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
/* import { collection, getDocs } from 'firebase/firestore'; */
 
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
    if (createusername.value != '' && createpassword.value != '' && checkpassword.value != ''){
        
        if (passwordinput.value === checkpasswordinput.value){
        createUserWithEmailAndPassword(auth, usernameinput.value, passwordinput.value)
    } else {
        console.log("already account or password don't match")
        /* Will make a thing that says that the passwords don't match */}
    
    } else if (createusername.value != '' || createpassword.value != '' || checkpassword.value != ''){
        console.log('fill out all info')
    }




    

        

    
    
    
}

const signinacc = async () => {
    signInWithEmailAndPassword(auth, usernameinput.value, passwordinput.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)
    })
}

onMounted(async(): Promise<void>=> {
    
})




    
</script>

<style scoped></style>
