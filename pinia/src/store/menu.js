import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenu = defineStore('menu', {
    state: () => ({
        isOpen: true
    }),

    actions: {
        open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false
        },

        toggle() {
            this.isOpen = !this.isOpen
        }
    }
})
