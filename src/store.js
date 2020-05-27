import { todos } from './seed'

const state = { todos: todos }

const getters = {
    allTask() {
        return state.todos;
    }
}

const mutations = {
    ADD_TASK(state, payload) {
        state.todos.push(payload)
    },
    COMPLETE_TASK(state, payload) {
        let index = state.todos.findIndex(todo => todo.id === payload.id)
        state.todos[index].completed = true
    },
    DELETE_TASK(state, payload) {
        let index = state.todos.findIndex(todo => todo.id === payload.id)
        state.todos.splice(index, 1);
    }
}

const actions = {
    addTask(context, payload) {
        context.commit('ADD_TASK', payload)
    },
    completeTask(context, payload) {
        context.commit('COMPLETE_TASK', payload)
    },
    deleteTask(context, payload) {
        context.commit('DELETE_TASK', payload)
    }
}

export { state, getters, mutations, actions }