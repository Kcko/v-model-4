<template>
  <div>
    <input type="text" v-model="computedQuery" />
    <hr />
    <h3>komponenta B</h3>
    <B v-model:x="computedQuery" />
  </div>
</template>

<script>
import B from './B';
import ComputedModel from '../mixins/ComputedModel';
export default {
  name: 'A',
  mixins: [ComputedModel],
  components: {
    B,
  },
};
</script>

<style scoped></style>
