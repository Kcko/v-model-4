<template>
  <div>
    <input type="text" v-model="computedQuery" />
    <hr />
    <h3>komponenta C</h3>
    <C v-model:x="computedQuery" />
  </div>
</template>

<script>
import C from './C';
import ComputedModel from '../mixins/ComputedModel';
export default {
  name: 'B',
  mixins: [ComputedModel],
  components: {
    C,
  },
};
</script>

<style scoped></style>
