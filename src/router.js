import Vue from 'vue'
import Router from 'vue-router'
import todo from '@/components/todo.vue'
import todoDetails from '@/components/todoDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/todo",
      name: "todo",
      component: todo
    },
    {
      path: "/todoDetails/:id",
      name: "todoDetails",
      component: todoDetails 
    }

  ]
})
