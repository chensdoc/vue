<template>
  <div id="app">
    <h1>Hello!</h1>
    <MyVue />
  </div>
</template>

<script>
import MyVue from "./components/MyVue.vue";

export default {
  name: "App",
  components: {
    MyVue
  }
};
</script>

<style>
h1 {
  color: blue;
}
</style>
