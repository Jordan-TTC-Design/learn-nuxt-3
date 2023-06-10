<script setup>
const config = useRuntimeConfig();
console.log(config.public);

if (process.server) {
  console.log('server token:', config.token);
}
</script>

<template>
  <div>Page: env</div>
</template>
