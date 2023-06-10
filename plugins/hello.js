export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      hello: msg => `Hello ${msg}!`,
      getTxt: message => `訊息：${message}`,
    },
  };
});
