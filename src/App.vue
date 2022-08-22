<template>
  <h1>
    {{ compTextLength }}
  </h1>
  <div>
    <input type="text" v-model="text" />
  </div>
  <router-view></router-view>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "vue";

const useCount = () => {
  const cnt = ref(0);

  const compCnt = computed(() => {
    return `${cnt.value}회`;
  });

  const increase = () => {
    cnt.value++;
  };

  const decrease = () => {
    cnt.value--;
  };

  return {
    increase,
    decrease,
    compCnt,
    cnt,
  };
};

const useInput = () => {
  const text = ref("");

  const compTextLength = computed(() => {
    return text.value.length;
  });

  return {
    text,
    compTextLength,
  };
};

export default {
  name: "App",
  setup() {
    const { cnt, increase, decrease, compCnt } = useCount();
    const { text, compTextLength } = useInput();

    return {
      compCnt,
      increase,
      decrease,
      cnt,
      compTextLength,
      text,
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
