<template>
  <h1>{{ text }}</h1>
  <button type="button" @click="apiGetSomething">Get Mock API</button>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

// 관계가 있는 것들을 묶는 방식으로 개발 해볼 예정
const useState = () => {
  const text = ref("API 가져오기전");

  const compCountText = computed(() => {
    return text.value.length;
  });

  const apiGetSomething = () => {
    setTimeout(() => {
      text.value = "API 가져온 후";
    }, 2000);
  };

  return {
    text,
    compCountText,
    apiGetSomething,
  };
};

// 예를 들어 Class와 관련된 묶는다. Class와 관련된 기능은  langlabClass
// 자바의 Class와 같은 느낌으로 만드는것도 괜찮은 방법인것같다.
const useLanglabClass = () => {
  const classList = ref([]);

  const addClass = () => {
    classList.value.push({ idx: 1 });
  };

  const removeClass = () => {
    classList.value.splice(0, 1);
  };

  return {
    classList,
    addClass,
    removeClass,
  };
};

export default {
  setup() {
    const { text, compCountText, apiGetSomething } = useState();
    const { classList } = useLanglabClass();

    return {
      text,
      compCountText,
      apiGetSomething,
      classList,
    };
  },
};
</script>

<style></style>
