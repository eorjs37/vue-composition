<template>
  <h1>watch</h1>
  <h1>
    {{ name.fullName }}
  </h1>
  <div>
    <label for="familyName">성 : </label>
    <input type="text" v-model="name.familyName" />
  </div>
  <div>
    <label for="familyName">이름 : </label>
    <input type="text" v-model="name.name" />
  </div>
</template>

<script>
import { reactive, watch } from "vue";

export default {
  setup() {
    const name = reactive({
      familyName: "",
      name: "",
      fullName: "",
    });

    watch(
      () => [name.familyName, name.name],
      ([curFailyName, curName], [prevFailyName, prevName]) => {
        /*.... */
        console.log("curFailyName : ", curFailyName);
        console.log("curName : ", curName);
        console.log("prevFailyName : ", prevFailyName);
        console.log("prevName : ", prevName);

        name.fullName = `${curFailyName} ${curName}`;
      }
    );

    return {
      name,
    };
  },
};
</script>

<style lang="scss" scoped></style>
