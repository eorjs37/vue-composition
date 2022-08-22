<template>
  <router-view></router-view>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "vue";

export default {
  name: "App",
  setup() {},
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
