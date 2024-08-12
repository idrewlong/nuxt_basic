<template>
  <div class="flex flex-col justify-center min-h-screen">
    <!-- <div v-if="pending">Loading...</div>
    <div v-else> -->
    <!-- If products is a single product -->
    <!-- <h1 v-if="products && products.name" class="flex justify-center">
        {{ products.name }}
      </h1> -->

    <!-- If products is an array of products -->
    <!-- <ul v-else-if="Array.isArray(products)">
        <li v-for="product in products" :key="product.id">
          {{ product.name }}
        </li>
      </ul> -->

    <!-- If no products are found -->
    <!-- <p v-else>No products found</p>
    </div> -->
    <IconsBell />
  </div>

  <div>
    <p>{{ pending ? "Loading" : products }}</p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "title",
  description: "description",
  ogTitle: "opengraph title",
  ogDescription: "opengraph description",
  ogImage: "image",
});

// const { data: products, pending } = await useLazyFetch("./api/products", {
//   transform: (_products) => _products.data,
// });
// console.log(toRaw(products.value));

// const { data: products, pending } = await useLazyFetch("/api/products", {
//   transform: (response) => response.data,
// });

const { data: products, pending } = await useLazyFetch("/api/products", {
  transform: (_products) => _products.data,
});

// composable
// const { sayHello } = useUtils();
// sayHello();

// definePageMeta({ middleware: "auth" });
</script>
