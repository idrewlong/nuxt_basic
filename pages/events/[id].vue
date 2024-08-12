<script setup>
// const route = useRoute();
// console.log(route.params.id);
const nuxt = useNuxtApp();

const { data } = await useAsyncData("count", () => $fetch("/api/count"));

const refresh = () => refreshNuxtData("data");
console.log(refresh);
</script>

<template>
  <div>Page Visits: {{ data }}</div>
  <div><button @click="refresh">Refresh</button></div>
</template>
