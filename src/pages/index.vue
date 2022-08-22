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
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const count = ref(0);

    const compCount = computed(() => {
      return count.value * 2;
    });

    const event = reactive({
      count: 0,

      double: computed(() => event.count * 2),
    });

    //Date
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
