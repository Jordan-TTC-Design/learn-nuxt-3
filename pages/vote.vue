<script setup>
const store = useVoteStore();
const { voteCount, addVoteCount, isFetch } = toRefs(store);
await useAsyncData('vote', async () => {
  const data = await $fetch('https://vue-lessons-api.vercel.app/vote/list');
  setVoteCount(data);
  return;
});
</script>
<template>
  <div>
    <h1>Vote App</h1>
    <div class="cardList">
      <div v-for="item in voteCount" :key="item.name" class="card">
        <p>{{ item.name }}</p>
        <p>{{ item.count }}</p>
        <button @click="addVoteCount(item.name)">
          {{ isFetch ? `投票中` : `Vote:${item.count}` }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 10px;
}
.cardList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
