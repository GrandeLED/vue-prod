<script>
import { computed } from "vue";
import GraphVue from "@/modules/Graph/Graph.vue";
import kino from "@/assets/gifs/kino.gif"
import kafe from "@/assets/gifs/kafe.gif"
import cart from "@/assets/gifs/cart.gif"
import car from "@/assets/gifs/car.gif"
import heart from "@/assets/gifs/heart.gif"
import gift from "@/assets/gifs/gift.gif"
export default {
  

  name: "ExpensesPage",
  setup() {
    const categories = computed(() => [
      { name: "Продукты", amount: 0, icon: cart, color: "#1C546F" },
      { name: "Кафе", amount: 2, icon: kafe, color: "#240046" },
      { name: "Досуг", amount: 3, icon: kino, color: "#ff7b00" },
      { name: "Транспорт", amount: 0, icon: car, color: "#7f5539" },
      { name: "Здоровье", amount: 0, icon: heart, color: "#004b23" },
      { name: "Подарки", amount: 0, icon: gift, color: "#fb6f92" },
      { name: "Семья", amount: 0, icon: "", color: "#006494" },
      { name: "Покупки", amount: 0, icon: "", color: "#006494" },
    ]);
    const graphData = categories.value.map((x) => x.amount);
    const graphColors = categories.value.map((x) => x.color);
    return { categories, graphData, graphColors };
  },
  components: {
    GraphVue,
  },
};
</script>

<template>
  <section class="expenses">
    <ul class="categories">
      <li class="categories-item" v-for="(item, i) in categories" :key="i">
        <p class="categories-name">{{ item.name }}</p>
        <button class="categories-btn" :style="{ background: item.color }">
<!-- <lord-icon
    src="https://cdn.lordicon.com/askdjvlo.json"
    trigger="hover"
    colors="primary:#ffc2d1,secondary:#ffc2d1"
    style="width:100%;height:100%" class="categories-gif">
</lord-icon> -->
          <img class="categories-gif" :src="item.icon" alt="">
        </button>
      </li>
      <li class="categories-main">
        <div class="categories-graph_wrapper">
          <GraphVue :data="graphData" :colors="graphColors" />
        </div>
        <div class="centred_info">
          <p class="centred_info-text">Расходы</p>
          <p class="centred_info-expenses">0 ₸</p>
          <p class="centred_info-income">10325250 ₸</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import "./Expenses.scss";
</style>