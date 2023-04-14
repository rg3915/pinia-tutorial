import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCart = defineStore('cart', () => {
    const cart = ref([
        {
            id: 1,
            name: 'Tenis',
            quantity: 1
        },
        {
            id: 2,
            name: 'Camisa',
            quantity: 3
        },
    ])
    return { cart }
})