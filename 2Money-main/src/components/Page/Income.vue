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
        <div class="graph_wrapper">
          <GraphVue :data="graphData" :colors="graphColors" />
        </div>
        <div class="centred_info">
          <p class="centred_info-text">Доходы</p>
          <p class="centred_info-top">{{ incomeSum }} ₸</p>
          <p class="centred_info-bottom">{{ expensesSum }} ₸</p>
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
  name: "IncomePage",
  setup(props, { emit }) {
    const store = useStore();
    const categories = computed(() => store.getters.incomeCategories);
    const incomeSum = computed(() => store.getters.incomeSum);
    const expensesSum = computed(() => store.getters.expensesSum);

    const graphData = computed(() => categories.value.map((x) => x.amount));
    const graphColors = computed(() =>
      categories.value.map((x) => x.activeColor)
    );

    const changePage = () => {
      emit("update:active-page", "expenses");
    };
    

    const changePopupInfo = (category,color,icon) => {
      emit("changePopupInfo", {
        active: true,
        category: category,
        where: "income",
        icon: icon,
        color: color
      });
    };

    return {
      categories,
      graphData,
      graphColors,
      changePage,
      changePopupInfo,
      incomeSum,
      expensesSum,
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
