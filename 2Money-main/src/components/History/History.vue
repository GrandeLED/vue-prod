<script>
import lol from "@/assets/images/car-w.png";
import { useStore } from "vuex";
import { computed } from "vue";
import trashIcon from "@/assets/images/trash.png"
export default {
  name: "HistoryPage",
  setup() {
    const store = useStore();
    const history = computed(() => store.getters.history);
    const deleteItem = (i) => {
      store.commit("deleteItem", i);
    };
    return { lol, trashIcon, history, deleteItem };
  },
};
</script>

<template>
  <ul class="history">
    <li class="history-item" v-for="(item, i) in history" :key="i">
      <div class="img-wrapper" :style="{background: item.color}">
        <img :src="item.icon" alt="" />
      </div>
      <h2 class="category">{{ item.category }}</h2>
      <p class="description">{{ item.description }}</p>
      <p class="money">{{ item.amount }}</p>
      <button @click="deleteItem(i)" class="deleteBtn"><img :src="trashIcon" alt=""></button>
    </li>
  </ul>
</template>

<style lang="scss">
@import "./History.scss";
</style>