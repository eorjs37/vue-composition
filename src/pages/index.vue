<template>
  <h1>ref count</h1>
  <div>
    <input type="number" v-model="compCount" disabled />
    <button type="button" @click="count++">+</button><button type="button" @click="count--">-</button>
  </div>

  <h1>reactive count</h1>
  <div>
    <input type="number" v-model="event.double" disabled />
    <button type="button" @click="event.count++">+</button><button type="button" @click="event.count--">-</button>
  </div>

  <h1>reactive Date</h1>
  <div>
    <h2>yyyy.mm.dd</h2>
    <span>
      {{ stateDate.compYyyyMmDd }}
    </span>

    <h2>yyyy.mm</h2>
    <span>
      {{ stateDate.compYyyyMm }}
    </span>
  </div>
  <div>
    <button @click="stateDate.next()">Next</button>
    <button @click="stateDate.prev()">Prev</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { computed, onMounted, watch, watchEffect } from "@vue/runtime-core";
export default {
  setup() {
    // 한개의 값에 대해 반응성을 사용할때
    const count = ref(0);

    const compCount = computed(() => {
      return count.value * 2;
    });

    const event = reactive({
      count: 0,

      double: computed(() => event.count * 2),
    });

    // 객체로 묶고 싶을때
    const stateDate = reactive({
      curDate: new Date(),

      compYyyyMmDd: computed(() => {
        const yyyy = stateDate.curDate.getFullYear();
        const mm = stateDate.curDate.getMonth() + 1 > 10 ? stateDate.curDate.getMonth() + 1 : `0${stateDate.curDate.getMonth()}`;
        const date = stateDate.curDate.getDate() ? stateDate.curDate.getDate() : `0${stateDate.curDate.getDate()}`;

        return `${yyyy}.${mm}.${date}`;
      }),

      compYyyyMm: computed(() => {
        const yyyy = stateDate.curDate.getFullYear();
        const mm = stateDate.curDate.getMonth() + 1 > 10 ? stateDate.curDate.getMonth() + 1 : `0${stateDate.curDate.getMonth()}`;
        return `${yyyy}.${mm}`;
      }),

      next: () => {
        const cur = stateDate.curDate.setDate(stateDate.curDate.getDate() + 1);

        stateDate.curDate = new Date(cur);
      },

      prev: () => {
        const cur = stateDate.curDate.setDate(stateDate.curDate.getDate() - 1);

        stateDate.curDate = new Date(cur);
      },
    });

    //watch
    watch(count, (cur, prev) => {
      console.log("cur : ", cur);
      console.log("prev : ", prev);
    });

    //watch reactive
    watch(
      () => event.count,
      (cur) => {
        console.log("event count : ", cur);
      }
    );

    //watchEffect
    watchEffect(() => console.log("watchEffect : ", count.value));

    //lifecycle
    onMounted(() => {
      console.log(process.env);
    });

    return {
      count,
      compCount,
      event,
      stateDate,
    };
  },
};
</script>

<style></style>
