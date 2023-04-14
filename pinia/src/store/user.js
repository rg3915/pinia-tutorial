import { defineStore } from 'pinia'
import axios from 'axios'
import { usePosts } from './posts.js'

export const useUser = defineStore('user', {
    state: () => ({
        user: {}
    }),

    // methods
    actions: {
        async getUser() {
            const url = 'https://jsonplaceholder.typicode.com/users/1'
            this.user = await axios.get(url)
                .then(response => response.data)
        },

        getUserPosts() {
            const postsStore = usePosts()
            console.log(postsStore.posts)
        }
    },

    // computed
    getters: {
        fullName() {
            return `${this.user.name} (${this.user.username})`
        }
    },
})