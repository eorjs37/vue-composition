<template>
  <h1>Accordion Menu</h1>

  <ul class="menu">
    <li>
      <input type="checkbox" id="menu1" hidden />
      <div class="menu-item">
        <span>메뉴1</span>
        <label for="menu1"><font-awesome-icon icon="fa-arrow-up" /></label>
      </div>

      <p class="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam alias cupiditate accusantium assumenda quam! Aut, rem tempora, deserunt id fugit quis cum aliquid sunt at, cumque enim veritatis
        dolores cupiditate!
      </p>
    </li>
    <li>
      <input type="checkbox" id="menu2" hidden />
      <div class="menu-item">
        <span>메뉴2</span>
        <label for="menu2"><font-awesome-icon icon="fa-arrow-up" /></label>
      </div>

      <p class="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam alias cupiditate accusantium assumenda quam! Aut, rem tempora, deserunt id fugit quis cum aliquid sunt at, cumque enim veritatis
        dolores cupiditate!
      </p>
    </li>
    <li>
      <input type="checkbox" id="menu3" hidden />
      <div class="menu-item">
        <span>메뉴3</span>
        <label for="menu3"><font-awesome-icon icon="fa-arrow-up" /></label>
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

    const accordion = () => {};

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
  word-break: keep-all;
  text-align: left;
  height: 0px;
  transition: all 0.35s;
  padding: 0 1em;
  overflow: hidden;
}

input[id="menu1"]:checked ~ .desc {
  height: 100px;
  padding: 1em;
}

input[id="menu1"]:checked + .menu-item > label[for="menu1"] {
  transform: rotate(180deg);
}

input[id="menu2"]:checked ~ .desc {
  height: 100px;
  padding: 1em;
}

input[id="menu2"]:checked + .menu-item > label[for="menu2"] {
  transform: rotate(180deg);
}

input[id="menu3"]:checked ~ .desc {
  height: 100px;
  padding: 1em;
}

input[id="menu3"]:checked + .menu-item > label[for="menu3"] {
  transform: rotate(180deg);
}
</style>
