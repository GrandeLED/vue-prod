<template>
  <header class="header">
    <div class="general_money">
      <p class="general_money-text">Мой счет</p>
      <p class="general_money-count">{{ mainSum }}</p>
    </div>

    <button
      class="history-btn"
      v-if="activeWindow === 'main'"
      @click="changeWindow('history')"
    >
      <img :src="catalogClose" alt="" />
    </button>
    <button
      class="history-btn"
      v-else-if="activeWindow === 'history'"
      @click="changeWindow('main')"
    >
      <img :src="catalogOpen" alt="" />
    </button>

    <!-- Кнопка для входа с Google -->
    <button @click="handleGoogleSignIn">Войти через Google</button>
  </header>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import catalogOpen from "@/assets/images/catalog-open.png";
import catalogClose from "@/assets/images/catalog-close.png";
import { googleSignIn } from "@/firebaseAuth"; // Импорт метода входа

export default {
  name: "HeaderPage",
  setup(props, { emit }) {
    const store = useStore();
    const mainSum = computed(() => store.getters.mainSum);

    const activeWindow = ref("main");

    const changeWindow = (window) => {
      activeWindow.value = window;
      emit("changeWindow", window);
    };

    // Метод для входа через Google
    const handleGoogleSignIn = async () => {
      await googleSignIn(); // Вход через Google
    };

    return {
      mainSum,
      activeWindow,
      changeWindow,
      catalogOpen,
      catalogClose,
      handleGoogleSignIn
    };
  },
};
</script>

<style lang="scss">
@import "./Header.scss";
</style>
