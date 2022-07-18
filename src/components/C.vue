<template>
  <div>
    <input type="text" v-model="computedQuery" />
  </div>
</template>

<script>
import ComputedModel from '../mixins/ComputedModel';
export default {
  name: 'C',
  mixins: [ComputedModel],
};
</script>

<style scoped></style>
