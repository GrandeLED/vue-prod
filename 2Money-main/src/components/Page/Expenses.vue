<template>
  <section class="expenses">
    <ul class="categories">
      <li
        class="categories-item"
        v-for="(item, i) in categories"
        :key="i"
        @click="changePopupInfo(item.name, item.activeColor, item.icon)"
      >
        <p class="categories-name">{{ item.name }}</p>

        <button
          class="categories-btn"
          :style="{ background: item.amount ? item.activeColor : item.color }"
        >
          <img class="categories-gif" :src="item.icon" alt="" />
        </button>
        <p
          class="categories-money"
          :style="item.amount ? { color: item.activeColor } : ''"
        >
          {{ item.amount }}
        </p>
      </li>
      <li class="categories-main" @click="changePage">
        <div class="categories-graph_wrapper">
          <GraphVue :data="graphData" :colors="graphColors" />
        </div>
        <div class="centred_info" id="expensesPage">
          <p class="centred_info-text">Расходы</p>
          <p class="centred_info-top">{{ expensesSum }}</p>
          <p class="centred_info-bottom">{{ incomeSum }} ₸</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { computed } from "vue";
import GraphVue from "@/modules/Graph/Graph.vue";
import { useStore } from "vuex";

export default {
  name: "ExpensesPage",
  setup(props, { emit }) {
    const store = useStore();
    const categories = computed(() => store.getters.categories);
    const expensesSum = computed(() => store.getters.expensesSum);
    const incomeSum = computed(() => store.getters.incomeSum);

    const graphData = computed(() => categories.value.map((x) => x.amount));
    const graphColors = computed(() =>
      categories.value.map((x) => x.activeColor)
    );

    console.log(categories.value, "categoriescategoriescategoriescategoriescategories")

    const changePage = () => {
      emit("update:active-page", "income");
    };

    const changePopupInfo = (category, color, icon) => {
      emit("changePopupInfo", {
        active: true,
        category: category,
        where: "expenses",
        icon: icon,
        color: color,
      });
    };

    return {
      categories,
      graphData,
      graphColors,
      changePage,
      changePopupInfo,
      expensesSum,
      incomeSum,
    };
  },
  components: {
    GraphVue,
  },
};
</script>

<style lang="scss">
@import "./Style.scss";
</style>
