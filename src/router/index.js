import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import showTodo from '../components/ShowToDo.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/show-todo',
      name: 'ShowTodo',
      component: showTodo,
    },
  ],
})

export default router
