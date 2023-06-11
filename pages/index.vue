<script setup>
import { xssParse } from '~/lib/filterXss';

const { t } = useI18n();
const content = computed(() => xssParse(t('message')));

const route = useRoute();
const router = useRouter();
console.log('route=>', route);
console.log('router=>', router);
</script>

<template>
  <div>Page: index</div>
  <p>{{ count }}</p>
  <nuxt-link to="test">test</nuxt-link>
  <ClientOnly>
    <h1>
      {{ $hello('Mike') }}
    </h1>
  </ClientOnly>
  <h1 v-timeformat="'2021-09-16T01:52:45.780Z'"></h1>
</template>

<style scoped></style>
