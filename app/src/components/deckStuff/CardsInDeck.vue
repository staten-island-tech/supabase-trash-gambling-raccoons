<template>
  <div>
    <h1>Cards Down HERE!</h1>
  </div>
</template>

<script setup lang="ts">
import { type card } from '../ts/types'
type Props = {
  deckItems: card
}
defineProps<Props>()
</script>

<style lang="scss" scoped></style>
