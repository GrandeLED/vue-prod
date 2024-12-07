<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "PopupComponent",
  props: {
    popupInfo: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const popupIsHide = ref(false);
    const closePopup = () => {
      popupIsHide.value = true;
      setTimeout(() => {
        emit("changePopupInfo", {
          active: false,
          category: "close",
          where: props.popupInfo.where,
          icon: props.popupInfo.icon,
          color: props.popupInfo.color,
        });
      }, 300);
    };

    const store = useStore();
    const value = ref("");
    const inputValue = ref("");

    const addNumber = (number) => {
      value.value += number;
    };

    const deleteNumber = () => {
      value.value = value.value.slice(0, -1);
    };
    const whereToAdd =
      props.popupInfo.where === "expenses" ? "addExpenses" : "addIncome";

    const add = () => {
      if (value.value != ('' || 0)) {
        store.commit(whereToAdd, {
          categoryName: props.popupInfo.category,
          amountToAdd: Number(value.value),
          description: inputValue
        });
        value.value = 0;
        closePopup();

      }
    };

    return {
      closePopup,
      add,
      inputValue,
      addNumber,
      deleteNumber,
      value,
      popupIsHide,
    };
  },
};
</script>

<template>
  <div class="popup" :class="{ hide: popupIsHide }">
    <div class="background" @click="closePopup"></div>
    <div class="popup_wrapper">
      <div class="popup_wrapper-header">
        <div class="popup_wrapper-wallet">
          <p>Со счета</p>
          <h3>Мой счет</h3>
        </div>
        <div
          class="popup_wrapper-category"
          :style="{ background: popupInfo.color }"
        >
          <p>На категорию</p>
          <h3>{{ popupInfo.category }}</h3>
        </div>
      </div>
      <div class="popup_wrapper-money" :style="{ color: popupInfo.color }">
        <p>Расход {{ popupInfo.where }}</p>
        <p>{{ value }}₸</p>
      </div>
      <div class="popup_wrapper-notes">
        <input type="text" v-model="inputValue" placeholder="Заметки..." />
      </div>
      <ul>
        <button @click="addNumber('1')">1</button>
        <button @click="addNumber('2')">2</button>
        <button @click="addNumber('3')">3</button>
        <button @click="addNumber('4')">4</button>
        <button @click="addNumber('5')">5</button>
        <button @click="addNumber('6')">6</button>
        <button @click="addNumber('7')">7</button>
        <button @click="addNumber('8')">8</button>
        <button @click="addNumber('9')">9</button>
        <button @click="addNumber('0')">0</button>
        <button @click="deleteNumber" class="delBtn">Del</button>
        <button
          @click="add"
          class="addBtn"
          :style="{
            background: popupInfo.color,
            borderColor: popupInfo.color,
          }"
        >
          Go
        </button>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Popup.scss";
</style>
