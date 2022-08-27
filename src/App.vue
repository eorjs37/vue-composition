<template>
  <router-view></router-view>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "App",
  setup() {
    onMounted(() => {
      console.log("onMounted");
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: "Noto Sans KR", sans-serif;
}
</style>
