export default defineEventHandler(event => {
  const data = {
    name: 'Jordan',
    age: 12,
  };
  return { data };
});
