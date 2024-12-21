<template>
  <div class="todo-container">
    <form @submit.prevent>
      <h1>My Todo List</h1>
      <div class="input-container">
        <input type="text" v-model="itemTodo" placeholder="Add a new task..." />
        <button @click="addTOdo">Add Task</button>
      </div>
    </form>
    <div class="todo-list">
      <table>
        <thead>
          <tr>
            <th>Task #</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in listOfTodo" :key="item.id" class="todo-item">
            <td>{{ item.id }}</td>
            <td>{{ item.itemTodo }}</td>
            <td>
              <button class="delete-btn" @click="removeItem(item)">
                <span>×</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
let itemTodo = ref("");

let listOfTodo = ref([]);

onMounted(() => {
  const storedData = localStorage.getItem("data");
  if (storedData) {
    listOfTodo.value = JSON.parse(storedData);
  }
});

const addTOdo = () => {
  if (!itemTodo.value.trim()) return;
  addToLocalStorage()
  alert("Todo was successfully")
  listOfTodo.value.push(
    { 
        id: listOfTodo.value.length + 1,
         itemTodo: itemTodo.value,
     },

)
  itemTodo.value = "";

  const reuernData = localStorage.getItem('data')
  const changeToObject = JSON.parse(reuernData)

  console.log('reuernData', reuernData )
  console.log('changeToObject', changeToObject )
};
console.log("data", listOfTodo)

const addToLocalStorage = () => {
   const local =  localStorage.setItem('data', JSON.stringify(listOfTodo.value))
   updateLocalStorage()
   return local
}
const updateLocalStorage = () => {
    if(localStorage.setItem("data", JSON.stringify(listOfTodo.value))) {
        listOfTodo.value = JSON.parse(localStorage.getItem('data'))
    }
}
const removeItem = (item) => {
    listOfTodo.value = listOfTodo.value.filter(todo => todo.id !== item.id);
    updateLocalStorage();
    alert("Todo item removed successfully!");
}
</script>

<style>
.todo-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #f8f9fa;
  min-height: 100vh;
}

form {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.input-container {
  display: flex;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #4CAF50;
}

button {
  padding: 0.75rem 1.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background: #45a049;
}

.todo-list {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: #4CAF50;
  color: white;
  padding: 1rem;
  text-align: left;
}

td {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.todo-item {
  transition: background-color 0.3s ease;
}

.todo-item:hover {
  background-color: #f8f9fa;
}

.delete-btn {
  background: #dc3545;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.delete-btn:hover {
  background: #c82333;
}
</style>
