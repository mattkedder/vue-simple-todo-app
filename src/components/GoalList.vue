<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item justify-content-between align-items-center borderless" v-for="list in lists" :key="list.id">
            {{ list.task }}
            <div class="float-right">
                <span class="btn btn-sm btn-outline-success  mr-2" title="done!" @click="completeTask(list.id)"><font-awesome-icon icon="check"/></span>
                <span class="btn btn-sm btn-outline-danger" title="delete" @click="deleteTask(list.id)"><font-awesome-icon icon="trash" /></span>
            </div>
        </li> 
    </ul>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: "GoalList",
    components: {
        FontAwesomeIcon
    },
    props: {
        lists: {
            type: Array
        }
    },
    methods: {
        completeTask(taskId) {
            this.$store.dispatch('completeTask', {id: taskId})
        },
        deleteTask(taskId) {
            this.$store.dispatch('deleteTask', {id: taskId})
        }
    }
}
</script>