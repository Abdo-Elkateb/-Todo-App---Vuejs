<template>
  <div></div>
  <form action="" @submit.prevent>
    <h1>Add ur list of todo</h1>
    <input type="text" v-model="itemTodo" />
    <button @click="addTOdo">click</button>
  </form>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="item in listOfTodo" :key="item.id">
          <th>{{ item.id }}</th>
          <th>{{ item.itemTodo }}</th>
          <dev class="x"> 
            <span>x</span>
          </dev>
        </tr>
      </thead>
      <body></body>
    </table>
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
</script>

<style>
form {
  text-align: center;
  margin-top: 50px;
}
input {
  background: rgb(255, 251, 245);
  height: 40px;
  width: 50%;
  border: 1px solid rgb(126, 162, 182);
}
button {
  width: 100px;
  height: 40px;
  margin-left: 10px;
  background:  rgb(18, 195, 65);
  border: none;
  font-size: 16px;
  color: white;
}
table {
  width: 70%;
  table-layout: fixed;
  margin: 50px auto;
  background-color:  rgb(2, 29, 9);
  border-radius: 20px;
}
.tbl-header {
  background-color: rgba(255, 255, 255, 0.3);
}
.tbl-content {
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
.x {
    background-color: red;
    width: 400px !important;
    height: 40px;

}
</style>
