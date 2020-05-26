<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item justify-content-between align-items-center" v-for="list in lists" :key="list.id">
            {{ list.task }}
            <div class="float-right">
                <span class="btn btn-sm btn-outline-success  mr-2" title="done!" @click="finishTask(list.id)"><font-awesome-icon icon="check"/></span>
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
        finishTask(taskId) {
            this.$emit('finish-task', {id: taskId})
        },
        deleteTask(taskId) {
            this.$emit('delete-task', {id: taskId})
        }
    }
}
</script>