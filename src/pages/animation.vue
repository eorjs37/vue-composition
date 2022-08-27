<template>
  <h1>Accordion Menu</h1>

  <ul class="menu">
    <li>
      <div class="menu-item">
        <span>메뉴1</span>
        <label for="menu1"><font-awesome-icon icon="fa-arrow-up" /></label>
        <input type="checkbox" id="menu1" hidden />
      </div>

      <p class="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam alias cupiditate accusantium assumenda quam! Aut, rem tempora, deserunt id fugit quis cum aliquid sunt at, cumque enim veritatis
        dolores cupiditate!
      </p>
    </li>
    <li>
      <div class="menu-item">
        <span>메뉴2</span>
        <label for="menu2"><font-awesome-icon icon="fa-arrow-down" /></label>
        <input type="checkbox" id="menu2" hidden />
      </div>

      <p class="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam alias cupiditate accusantium assumenda quam! Aut, rem tempora, deserunt id fugit quis cum aliquid sunt at, cumque enim veritatis
        dolores cupiditate!
      </p>
    </li>
    <li>
      <div class="menu-item">
        <span>메뉴3</span>
        <label for="menu3"><font-awesome-icon icon="fa-arrow-up" /></label>
        <input type="checkbox" id="menu3" hidden />
      </div>

      <p class="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam alias cupiditate accusantium assumenda quam! Aut, rem tempora, deserunt id fugit quis cum aliquid sunt at, cumque enim veritatis
        dolores cupiditate!
      </p>
    </li>
  </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const disabled = ref(false);

    const warnDisabled = () => {
      disabled.value = true;

      setTimeout(() => {
        disabled.value = false;
      }, 2000);
    };

    return {
      disabled,
      warnDisabled,
    };
  },
};
</script>

<style>
.menu {
  width: 500px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

.desc {
  margin-top: 0;
  background-color: #eee;
  word-break: break-all;
  text-align: left;
  padding: 10px;
  display: none;
}
</style>
