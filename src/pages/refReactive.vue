<template>
  <h1>ref</h1>
  <span>{{ compCount }}</span>
  <div>
    <button type="button" @click="plus">+</button>
    <button type="button" @click="minus">-</button>
  </div>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
export default {
  setup() {
    const count = ref(0);
    const compCount = computed(() => {
      return `현재값 : ${count.value}`;
    });

    const plus = () => {
      count.value++;
    };

    const minus = () => {
      count.value--;
    };

    // watch(count, (cur, old) => {
    //   console.log("cur : ", cur);
    //   console.log("old : ", old);
    // });

    return {
      count,
      compCount,
      plus,
      minus,
    };
  },
};
</script>

<style></style>
