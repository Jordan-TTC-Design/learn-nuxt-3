import { defineStore } from 'pinia';

export const useAllStore = defineStore('allStore', () => {
  const count = ref(0);
  const addCount = () => {
    count.value++;
  };
  return { count, addCount };
});
