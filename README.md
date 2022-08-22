# Vue composition api 공부

## setup

> 컴퍼넌트가 생성되기 전에 진입하는 지점

## ref

> 1개의 값에 대해서 반응성을 사용하고 싶다면 사용하는것을 추천한다.

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
