import { defineStore } from 'pinia'

export const usePosts = defineStore('posts', {
    state: () => ({
        posts: [
            {
                title: 'The quick brown fox jumps over the lazy dog',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
    }),
})