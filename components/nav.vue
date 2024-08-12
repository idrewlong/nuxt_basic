<template>
  <nav class="p-2 bg-gray-800">
    <ul class="flex flex-row space-x-4 font-bold">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <ul>
        <NuxtLink to="/events">Events</NuxtLink>
        <li><NuxtLink to="/events/id">Subpage</NuxtLink></li>
      </ul>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>
