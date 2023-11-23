<script setup lang="ts">
const greeting = "Hello World!"

const count = () => {
  console.log("count")
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
  <a @click="count" class="btn">count</a>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
  font-size: 2rem;
}
</style>
