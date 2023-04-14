import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
    state: () => ({
        user: {
            first_name: 'John',
            last_name: 'Joe',
        }
    }),

    // methods
    actions: {},

    // computed
    getters: {
        fullName() {
            return `${this.user.first_name} ${this.user.last_name}`
        }
    },
})