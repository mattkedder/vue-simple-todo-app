<template>
     <div class="row mt-5">
            <div class="col-lg-6 col-md-6 mb-4 ">
                <h3>Done!</h3>
                <DoneList :lists="getDoneList" />
            </div>
            <div class="col-lg-6 col-md-6 mb-4">
                <h3>Today, {{ getTodayDate }}</h3>
                <GoalList  @delete-task="deleteTask" @finish-task="finisTask" :lists="getGoalList" />
                <CreateTask @add-new-task="addNewTask" />
            </div>
        </div>
</template>
<script>
import moment from 'moment'
import GoalList from './GoalList'
import DoneList from './DoneList'
import CreateTask from './CreateTask'
export default {
    name: "ListView",
    components: {
        GoalList,
        DoneList,
        CreateTask
    },
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            todo: this.todos
        }
    },
    methods: {
        moment: function() {
            return moment();
        },
        addNewTask(event) {
            this.todo.push(event)
        },
        finisTask(event) {
            let index = this.todo.findIndex(todo => todo.id === event.id)
            this.todo[index].completed = true
        },
        deleteTask(event) {
            let index = this.todo.findIndex(todo => todo.id === event.id)
            this.todo.splice(index, 1);
        }
    },
    computed: {
        getTodayDate() {
            return moment(new Date).format('DD MMMM YYYY')
        },
        getDoneList() {
            let todos = this.todo
            let list = todos.filter(todo => todo.completed == true)
            return list
        },
        getGoalList() {
            let todos = this.todo
            let list = todos.filter(todo => todo.completed == false)
            return list
        }
    },
    beforeMount() {
       
    }
}
</script>