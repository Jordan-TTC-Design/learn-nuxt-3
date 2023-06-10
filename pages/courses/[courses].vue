<script setup>
const route = useRoute();
console.log(route.params.courses);
const { data } = await useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.courses}`,
);
</script>

<template>
  <div>
    <p>{{ data }}</p>
    <NuxtLink :to="`/courses/${route.params.courses}/a`">A</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/b`">B</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/c`">C</NuxtLink>
    <NuxtPage />
  </div>
</template>

<style scoped></style>
