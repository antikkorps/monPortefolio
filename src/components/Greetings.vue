<script lang="ts">
export default {
  data() {
    return {
      greeting: 'Hello World!',
    };
  },
};
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
  font-size: 2rem;
}
</style>
