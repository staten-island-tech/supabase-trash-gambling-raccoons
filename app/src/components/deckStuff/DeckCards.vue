<template>
  <div class="deck">
    <img class="img" />
    <!-- remember to put in source later -->
    <h2 class="numberofdeck"></h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  deck: {
    type: Object,
  },

  img: {
    type: Object,
  },
  numberofdeck: {
    type: Object,
  },
})
</script>

<style scoped></style>
