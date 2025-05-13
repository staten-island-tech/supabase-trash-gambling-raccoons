<template>
  <div>
    <h1>{{ card.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { card } from '@/types'

type Props = {
  card: card
}
defineProps<Props>()
</script>

<style scoped></style>
