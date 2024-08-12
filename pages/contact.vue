<template>
  <div>Contact</div>
</template>

<script setup>
const response = await $fetch("/api/hello");
console.log(response);
</script>
