<template>
  <div id="app">
    
    <!-- <navbar />
    <todo-app /> -->
    <router-view> </router-view>
  </div>
</template>

<script>

import todo from '@/components/todo'
import Navbar from '@/components/Navbar' 
import todoDetails from '@/components/todoDetails'
export default {
  components: {
    'todo-app': todo,
    'navbar': Navbar,
    'todo-details': todoDetails
  }
}
</script>


<style>

</style>
