<template>
  <div>
    <button type="submit" @click="pullTen">Pull 10X!</button>
    <button type="submit" @click="pullOne">Pull 1X!</button>
  </div>
</template>

<script setup lang="ts">
//supposed to pull stuff from supabase
let { cards: allCards, error } = await supabase.from('allCards')
let pityCount = 0
let pulledCards: string[] = [] //array for cards that were pulled
function pullTen() {
  for (let i = 0; i < 10; i++) {
    pityCount++
    if (pityCount >= 90) {
      //pull five star card!!!
      pityCount = 0
    } else {
      pulledCards.push(cards[Math.floor(Math.random() * allCards.length + 1)])
    }
  }
  console.log(pulledCards) //basically pull 10 random cards and show in console.log
}
function pullOne() {
  pityCount++
  if (pityCount >= 90) {
    //pull five star card!!!
    pityCount = 0
  } else {
    pulledCards.push(cards[Math.floor(Math.random() * allCards.length + 1)])
  }
  console.log(pulledCards) //pull one card and show it
}
</script>

<style scoped></style>
