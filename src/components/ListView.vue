<template>
     <div class="row mt-5">
            <div class="col-lg-6 col-md-6 mb-4 ">
                <h3>Done!</h3>
                <DoneList :lists="getDoneList" />
            </div>
            <div class="col-lg-6 col-md-6 mb-4">
                <h3>Today, {{ getTodayDate }}</h3>
                <GoalList :lists="getGoalList" />
                <CreateTask />
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
    data() {
        return {
            todo: this.todos
        }
    },
    methods: {
        moment: function() {
            return moment();
        }
    },
    computed: {
        getTodayDate() {
            return moment(new Date).format('DD MMMM YYYY')
        },
        getDoneList() {
            let list = this.$store.getters.allTask.filter(todo => todo.completed == true)
            return list
        },
        getGoalList() {
            let list = this.$store.getters.allTask.filter(todo => todo.completed == false)
            return list
        }
    }
}
</script>