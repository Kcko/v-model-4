export default {
  emits: ['update:x'],
  props: ['x'],
  computed: {
    computedQuery: {
      get() {
        return this.x;
      },
      set(val) {
        this.$emit('update:x', val);
      },
    },
  },
};
