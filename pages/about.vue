<script setup lang="ts">
const counter = useCounter();
</script>

<template>
  <div class="flex flex-col space-y-8">
    <div id="main">
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter id="counter" />
  </div>
</template>
