# Vue composition api 공부

## setup

> 컴퍼넌트가 생성되기 전에 진입하는 지점

## ref

> 1개의 값에 대해서 반응성을 사용하고 싶다면 사용하는것을 추천한다.

```javascript
const count = ref(0);

const compCount = computed(() => {
  return count.value * 2;
});
```

## reactive

> 객체로 묶고 싶을때 사용하는 것을 추천한다.

```javascript
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
```

## computed

> 계산된 속성에 대해 사용 할때 사용된다.

## watch

> 객체의 반응을 감시하는 역할 보통 이전값과 현재값 비교 할때 사용하기도 한다.

```javascript
//watch
watch(count, (cur, prev) => {
  console.log("cur : ", cur);
  console.log("prev : ", prev);
});
```

## watchEffect

> 객체의 반응을 즉시 반응할때 사용한다고 하지만, 경험으로는 아래처럼 사용하면 유용하다는 생각.

```javascript html

<template>
 <h1>watchEffect</h1>
  <div>
    <input type="text" v-model="name.familyName" />
    <input type="text" v-model="name.name" />

    <div>
      <span>
        {{ name.fullName }}
      </span>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
const name = reactive({
  familyName: "",
  name: "",
  fullName: "",
});

//watchEffect
watchEffect(() => (name.fullName = `${name.familyName} ${name.name}`));

return {
  name,
};
</script>
```
