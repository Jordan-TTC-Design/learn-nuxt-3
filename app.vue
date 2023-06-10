<script setup>
const nuxtApp = useNuxtApp();
const isLoading = ref(false);
nuxtApp.hook('page:start', () => {
  isLoading.value = true;
});
nuxtApp.hook('page:finish', () => {
  isLoading.value = false;
});
</script>
<template>
  <div>
    <NuxtLayout>
      <h2 v-show="isLoading">Loading</h2>
      <NuxtPage />
    </NuxtLayout>
    <!-- <NuxtLoadingIndicator color="#f00" :height="10" :throttle="0" /> -->
  </div>
</template>
