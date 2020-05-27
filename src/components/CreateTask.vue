<template>
     <div class="form-group mt-3">
        <input type="text" class="form-control input-sm" placeholder=" add task" v-model="task">
        <div class="btn-group mt-1 ">
            <button type="button " class="btn btn-sm btn-secondary" v-bind:class="{active: completed === false}" @click="completedStatus(false)"><font-awesome-icon icon="bullseye" /> Goal</button>
            <button type="button " class="btn btn-sm btn-secondary" v-bind:class="{active: completed === true}" @click="completedStatus(true)"><font-awesome-icon icon="check" /> Done</button>
        </div>
        <button type="button " class="btn btn-sm btn-primary float-right mt-1" :disabled="!checkDisabled" @click="addTask()">Post</button>
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: "CreateTask",
    components: {
        FontAwesomeIcon
    },
    data() {
        return{
            task: '',
            completed: false
        }
    },
    computed: {
        checkDisabled() {
            return (this.task)
        }
    },
    methods: {
        completedStatus(status) {
            this.completed = status
        },
        addTask() {
            const params = {
                id: Date.now().toString(),
                task: this.task,
                completed: this.completed
            }

            this.$store.dispatch('addTask', params)
            this.task = ''
        }
    }
}
</script>