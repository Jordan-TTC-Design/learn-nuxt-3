export const dialogOption = reactive({
  title: '',
  content: '',
  confirm: {
    btnName: '',
    onComplete: () => {},
  },
  cancel: {
    btnName: '',
    onComplete: () => {},
  },
});
const dialogDom = ref(null);
export const useDialog = () => {
  const close = type => {
    if (dialogOption[type].onComplete) {
      dialogOption[type].onComplete();
    }
    dialogDom.value.close();
  };
  const open = option => {
    if (option) {
      dialogOption.title = option.title;
      dialogOption.content = option.content;
      dialogOption.confirm.btnName = option.confirm.btnName;
      dialogOption.confirm.onComplete = option.confirm.onComplete;
      dialogOption.cancel.btnName = option.cancel.btnName;
      dialogOption.cancel.onComplete = option.cancel.onComplete;
    }
    console.log('open');
    dialogDom.value.showModal();
  };
  onMounted(() => {
    dialogDom.value = document.querySelector('#dialog');
    console.log('mounted');
  });
  return {
    close,
    open,
  };
};
