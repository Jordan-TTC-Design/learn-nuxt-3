<script setup>
definePageMeta({
  middleware: (to, from) => {
    console.log('test=>', { to, from });
  },
});
</script>
<template>
  <div>
    <h1>Test</h1>
  </div>
</template>
