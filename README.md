# pinia-tutorial

Tutorial de Pinia (VueJS)

```
git clone https://github.com/rg3915/pinia-tutorial.git
cd pinia-tutorial
yarn
yarn dev
```

# Tutorial passo a passo

```
yarn create vite
app: pinia
cd pinia
yarn
yarn add pinia
yarn add axios

yarn dev
```


Vamos usar [Bulma](https://bulma.io/documentation/overview/start/) via CDN.

https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css

https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css


Criei um Dashboard.



Edite `main.js`

```js
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
```


Crie

```
mkdir src/store
touch src/store/user.js
```

```js
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
```


Edite `Dashboard.vue`

```js
import { useUser } from '@/store/user.js'

const userStore = useUser()

<pre>
    {{ userStore.user }}
</pre>
```

## Fazendo ajax

```js
// store/user.js
import { defineStore } from 'pinia'
import axios from 'axios'

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
        }
    },

    // computed
    getters: {
        fullName() {
            return `${this.user.name} (${this.user.username})`
        }
    },
})
```

Edite `Dashbard.vue`

```js
import { storeToRefs } from 'pinia'
import { useUser } from '@/store/user.js'

const userStore = useUser()
userStore.getUser()
const { user, fullName } = storeToRefs(userStore)


<pre>
    {{ user }}
</pre>
```

## Outro exemplo

Crie

```
touch store/posts.js
```

```js
// store/posts.js
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
```

Edite `App.vue`

```js
import { usePosts } from './store/posts.js'

const postsStore = usePosts()

userStore.getUserPosts()

<pre>
    {{ postsStore.posts }}
</pre>
```

Se você quiser usar dentro de `store/user.js`

```js
import { usePosts } from './posts.js'

actions: {
    getUserPosts() {
        const postsStore = usePosts()
        console.log(postsStore.posts)
    }
}
```

## Composition API

Crie `store/cart.js`

```js
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
```

Edite `App.vue`

```js
import { useCart } from './store/cart.js'

const cartStore = useCart()

<pre>
    {{ cartStore.cart }}
</pre>
```

## Sidebar

Crie `store/menu.js`

```js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenu = defineStore('menu', {
    state: () => ({
        isOpen: false
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
```

Edite `App.vue`

```js
import { useMenu } from './store/menu.js'

const menuStore = useMenu()

<pre>
    {{ menuStore.menu }}
</pre>

<div
  v-if="menuStore.isOpen"
  class="header"
>
  Hello World
</div>

<button class="button" @click="menuStore.toggle()">Abrir e Fechar</button>
<button class="button" @click="menuStore.open()">Abrir menu</button>
<button class="button" @click="menuStore.close()">Fechar menu</button>
```

