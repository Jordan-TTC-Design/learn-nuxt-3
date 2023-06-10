<script setup>
onMounted(async () => {
  const response = await $fetch('/VsWeb/api/GetLstDicCinema');
  console.log(response);
});
</script>
<template>
  <div></div>
</template>
