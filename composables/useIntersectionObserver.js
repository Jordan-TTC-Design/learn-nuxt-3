export function useIntersectionObserver() {
  const observer = ref(null);
  const isIntersecting = ref(false);
  const elRef = ref(null);
  const intersectionObserver = (
    el,
    options = {
      root: null,
      threshold: 0.5,
    },
  ) => {
    elRef.value = el;
    observer.value = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        isIntersecting.value = entry.isIntersecting;
        console.log('isIntersecting', isIntersecting.value);
      });
    }, options);
    observer.value.observe(elRef.value);
  };
  const unObserver = () => {
    if (observer.value) {
      observer.value.unobserve(elRef.value);
    }
  };
  return {
    isIntersecting,
    intersectionObserver,
    elRef,
    unObserver,
  };
}
