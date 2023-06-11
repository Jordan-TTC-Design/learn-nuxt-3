<script setup>
const { searchData } = useRepoSearch();
useAsyncData('repo', async () => {
  const { data } = await searchData('MikeCheng1208');
  return data;
});
</script>

<template>
  <div id="app">
    <UserTitle />
    <ReposList />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
}
</style>
