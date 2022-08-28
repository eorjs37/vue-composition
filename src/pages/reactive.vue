<template>
  <h1>reactive</h1>
  <div class="w-200px">
    <ul class="carrer">
      <li v-for="(carrerItem, index) in state.carrer" :key="'carrer' + index">
        <input type="text" v-model="carrerItem.company" />
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const personObj = {
      name: "",
      age: 0,
      carrer: [
        {
          company: "캐럿솔루션즈",
        },
      ],
    };
    const state = reactive(personObj);

    return {
      state,
    };
  },
};
</script>

<style>
.w-200px {
  margin: 0 auto;
  width: 200px;
}

.carrer > li {
  text-align: left;
}
</style>
