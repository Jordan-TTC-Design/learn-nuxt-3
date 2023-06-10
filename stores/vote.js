import { defineStore } from 'pinia';

export const useVoteStore = defineStore('vote', () => {
  const voteCount = ref(0);

  const setVoteCount = count => {
    console.log('setVoteCount', count);
    voteCount.value = count;
  };

  const isFetch = ref(false);

  const addVoteCount = async type => {
    if (isFetch.value) return;
    isFetch.value = true;
    try {
      const data = await $fetch('https://vue-lessons-api.vercel.app/vote/add', {
        method: 'POST',
        body: { type },
      });
      console.log('addVoteCount', data);
      voteCount.value = data;
    } catch (error) {
      alert(error.message);
    } finally {
      isFetch.value = false;
    }
  };
  return { voteCount, isFetch, setVoteCount, addVoteCount };
});
