<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="list in lists" :key="list.id">
            {{ list.task }}
            <span class="badge badge-success badge-pill"><font-awesome-icon icon="check" /></span>
        </li>
    </ul>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: "DoneList",
    props: {
        lists: {
            type: Array
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>