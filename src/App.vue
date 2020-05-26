<template>
<div>
  <Navbar :done="done" :total="total"></Navbar>
  <br>
  <br>
    <div class="container mt-5">
      <ListView :todos="todo" />
    </div>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import ListView from './components/ListView'
import { todos } from './seed.js'

export default {
  name: 'App',
  components: {
    Navbar,
    ListView
  },
  data() {
    return {
      todo: todos
    }
  },
   computed: {
        done() {
            let todos = this.todo
            let list = todos.filter(todo => todo.completed == true)
            return list.length
        },
        total() {
            return this.todo.length
        }
    },
} 
</script>
