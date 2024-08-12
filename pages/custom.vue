<script setup>
definePageMeta({ layout: "custom" });

const { $hello } = useNuxtApp();
</script>

<template>
  <div class="Custom Page">Custom Page</div>
  <div>{{ $hello("world") }}</div>
</template>
