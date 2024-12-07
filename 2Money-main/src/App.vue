<template>
  <section class="container">
    <Header @changeWindow="changeWindow" />
    <div class="main_window" v-if="activeWindow === 'main'">
      <Expenses
        v-if="activePage === 'expenses'"
        @update:active-page="changeActivePage"
        @changePopupInfo="changePopupInfo"
      />
      <Income
        v-else-if="activePage === 'income'"
        @update:active-page="changeActivePage"
        @changePopupInfo="changePopupInfo"
      />
    </div>
    <div class="history-window" v-if="activeWindow === 'history'">
      <History />
    </div>

    <Popup
      v-if="popupInfo.active"
      :class="{ active: popupInfo.active }"
      :popupInfo="popupInfo"
      @changePopupInfo="changePopupInfo"
    />
  </section>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Header from "./components/Header/Header.vue";
import Expenses from "./components/Page/Expenses";
import Income from "./components/Page/Income.vue";
import Popup from "./components/Popup/Popup.vue";
import History from "./components/History/History.vue";

export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.getters.count);
    const historyOfCount = computed(() => store.getters.history);

    const activePage = ref("expenses");

    const activeWindow = ref("main")

    const changeWindow = (window) => {
      activeWindow.value = window
    }

    const popupInfo = ref({
      active: false,
      category: "adasdad",
      where: "expenses",
      icon: "",
      color: "",
    });

    const changePopupInfo = (state) => {
      popupInfo.value = state;
    };

    const changeActivePage = (newPage) => {
      activePage.value = newPage;
    };

    const increment = () => {
      store.dispatch("incrementAfterDelay");
    };
    const setValue = (value) => {
      store.commit("setValue", value);
    };
    const decrement = () => {
      store.commit("decrement");
    };
    const getData = async () => {
      store.dispatch("getData");
    };

    return {
      count,
      activePage,
      changeActivePage,
      increment,
      setValue,
      decrement,
      historyOfCount,
      getData,
      popupInfo,
      changePopupInfo,
      activeWindow,
      changeWindow
    };
  },
  components: {
    Header,
    Expenses,
    Popup,
    Income,
    History,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>

<!-- 

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Header from "./components/Header/Header.vue";
import Expenses from "./components/Expenses/Expenses.vue";
import Income from "./components/Income/Income.vue";

export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.getters.count);
    const historyOfCount = computed(() => store.getters.history);
    const activePage = computed(() => store.getters.activePage);

    const changeActivePage = (state) => {
      console.log(state, activePage);
      store.commit("changePage", state);
    };

    const increment = () => {
      store.dispatch("incrementAfterDelay");
    };
    const setValue = (value) => {
      store.commit("setValue", value);
    };
    const decrement = () => {
      store.commit("decrement");
    };
    const getData = async () => {
      store.dispatch("getData");
    };

    return {
      count,
      activePage,
      changeActivePage,
      increment,
      setValue,
      decrement,
      historyOfCount,
      getData,
    };
  },
  components: {
    Header,
    Expenses,
    Income,
  },
};
</script>


<template>
  <section class="container">
    <Header />

    <button @click="changeActivePage('sd')">one</button>
    <button @click="changeActivePage('expenses')">sadas</button>

    <Expenses
      v-if="activePage == 'expenses'"
      @update:activePage="changeActivePage"
    />
    <Income v-else />
  </section>
</template>




<style lang="scss">
@import "./App.scss";
</style>



<template>
  <section class="contianer">
    <div class="addWrapper">
      <input type="text" class="todoInp" v-model="newToDo" />
      <button @click="addTodo" class="todoAdd">asdads</button>
    </div>
    <ul>
      <li v-for="(task, i) in todos" :key="i">
        <input
          type="checkbox"
          name="done"
          id="done"
          @change="toggleTodoStatus(i)"
        />
        <label for="done"
          ><p :class="{ done: task.done }">{{ task.text }}</p></label
        >
        <button @click="removeTodo">delete</button>
      </li>
    </ul>
  </section>
</template>

<script>
import { toDoList } from "./composables/toDoList";

export default {
  setup() {
    const {
      todos,
      newToDo,
      addTodo,
      removeTodo,
      toggleTodoStatus,
      remainingTodos,
    } = toDoList();
    return {
      todos,
      newToDo,
      addTodo,
      removeTodo,
      toggleTodoStatus,
      remainingTodos,
    };
  },
  name: "App",
};
</script>
<style>

.contianer {
  max-width: 1440px;
  margin: auto;
}

.addWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.todoInp {
  width: 300px;
  padding: .5rem 1rem;
  height: 100%;
}

.todoAdd {
  widows: 100px;
  border: 1px solid #232323;
  background: transparent;
  padding: 1rem 2rem;
}
.done {
  text-decoration: line-through;
}
</style> -->
