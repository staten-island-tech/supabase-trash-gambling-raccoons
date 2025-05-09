<template>
  <div v-for="card in ownedCards">
    <h1>{{ card.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ownedCards } from '../../../OwnedCards'
</script>

<style scoped></style>
