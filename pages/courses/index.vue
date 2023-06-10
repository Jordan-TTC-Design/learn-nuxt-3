<script setup>
const route = useRoute();
const { data } = await useFetch(
  'https://vue-lessons-api.vercel.app/courses/list',
);
console.log(data);
</script>

<template>
  <p>courses page</p>
  <div class="cardList">
    <NuxtLink
      :to="`/courses/${course.id}`"
      class="card"
      v-for="course in data"
      :key="course.id"
    >
      <img :src="course.photo" :alt="course.name" />
      <p>{{ course.name }}</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.cardList {
  display: flex;
  /* flex-wrap: wrap; */
  gap: 20px;
}
.card {
  width: 33.33333%;
}
img {
  width: 100%;
}
</style>
