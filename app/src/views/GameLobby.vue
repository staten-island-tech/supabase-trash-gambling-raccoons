<template>
  <div>
    <div v-for="message in messages" :key="message.id" class="message">
      <strong>{{ message.username }}:</strong> {{ message.text }}
    </div>
    <form @submit.prevent="sendMessage">
      <input v-model="newMessage" placeholder="Type a message" required />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { database } from "@/firebase";
import { ref as dbRef, push, onValue, set as Fireset, remove } from "firebase/database";
import {type Message} from '@/types'
import { useAuthStore } from "@/stores/auth";
import { onDisconnect } from "firebase/database";
import { finduserusingemail } from "@/userdocument";


const messages = ref<Message[]>([]);
const newMessage = ref("");
const username = ref(useAuthStore().account[0])

const userId = finduserusingemail(username.value)

async function presenceRef(){
    const presenceRef = dbRef(database, `presence/${await userId}`);
    return presenceRef
}

const connectedRef = dbRef(database, ".info/connected");

const messagesRef = dbRef(database, "chat/messages");

onMounted(async () => {


 onValue(connectedRef, async (snap) => {
  if (snap.val() === true) {
    Fireset(await presenceRef(), true);
    onDisconnect(await presenceRef()).remove();
  }
});

  onValue(await presenceRef(), (snapshot) => {
    const usersOnline = snapshot.val();
    if (!usersOnline || Object.keys(usersOnline).length === 0) {
      remove(messagesRef)
    }
  });


  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
     if (data) {
      messages.value = Object.entries(data)
        .map(([id, val]) => ({
            id,...val,}
        ));
    } else {
      messages.value = [];
    }
  });
});

function sendMessage() {
  if (newMessage.value.trim()) {
    push(messagesRef, {
      username: username.value,
      text: newMessage.value.trim(),
      timestamp: Date.now(),
    });
    newMessage.value = ""; // Clear input field
  }
}
</script>

<style scoped>
.message {
  margin-bottom: 10px;
}
</style>
