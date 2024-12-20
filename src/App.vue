<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
</script>

<template>
  <header>

    <div class="">
     

      <nav>
        <li>
          <RouterLink to="/">Home page</RouterLink>
        </li>
        <li>
          
          <RouterLink to="/show-todo">show todo! todo</RouterLink>
        </li>
  
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

nav {
  background-color: rgb(18, 195, 65);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items:center;
  margin: 0;
  padding: 0;
}

li a {
  list-style: none;
  color: rgb(23, 4, 4);
  text-align: center;
  margin-right: 20px;
  text-decoration: none;
  font-size: 22px;
}

</style>


