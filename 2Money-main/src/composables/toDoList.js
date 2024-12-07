import { ref, reactive, computed } from "vue";

export function toDoList() {
  const todos = reactive([]);
  const newToDo = ref("");

  function addTodo() {
    if (newToDo.value.trim()) {
      todos.push({ text: newToDo.value, done: false });
      newToDo.value = "";
    }
  }

  function removeTodo(i) {
    todos.splice(i, 1);
  }

  function toggleTodoStatus(i) {
    todos[i].done = !todos[i].done;
  }

  const remainingTodos = computed(() => {
    return todos.filter((todo) => !!todo.done).length;
  });
  return {
    todos,
    newToDo,
    addTodo,
    removeTodo,
    toggleTodoStatus,
    remainingTodos,
  };
}
