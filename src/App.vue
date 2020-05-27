<template>
<div>
  <Navbar :done="done" :total="total"></Navbar>
  <br>
  <br>
    <div class="container mt-5">
      <ListView />
    </div>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import ListView from './components/ListView'

export default {
  name: 'App',
  components: {
    Navbar,
    ListView
  },
   computed: {
        done() {
            let list = this.$store.getters.allTask.filter(todo => todo.completed == true)
            return list.length
        },
        total() {
            return this.$store.getters.allTask.length
        }
    },
} 
</script>
