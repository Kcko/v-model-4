<template>
  <div id="app">
    <h3>App</h3>
    <input type="text" v-model="query" />
    <hr />
    <h3>komponenta A</h3>
    <A v-model:x="query" />
  </div>
</template>

<script>
import A from './components/A';

export default {
  name: 'App',
  components: {
    A,
  },
  data() {
    return {
      query: '',
    };
  },
};
</script>

<style>
h3,
hr {
  margin: 20px 0;
}
</style>
