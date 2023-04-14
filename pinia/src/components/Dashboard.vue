<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main nagivation"
  >
    <div class="navbar-brand">
      <a
        href=""
        class="navbar-item"
      >
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
          alt=""
        >
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      id="navbarExample"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <a class="navbar-item">Home</a>
        <a class="navbar-item">Documentarion</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Contact</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              <strong>Login</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section class="hero is-fullheight">
    <div class="columns">
      <aside
        id="aside"
        class="column is-2 sidebar"
        style="background-color: #363636; color: white; height: 100vh; overflow: auto;"
      >
        <div class="menu">
          <ul class="menu-list">
            <li>
              <a
                href=""
                class="menu-item"
              >
                <i class="fas fa-tachometer-alt"></i>
                <span class="text ml-2">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href=""
                class="menu-item"
              >
                <i class="fas fa-shopping-cart"></i>
                <span class="text ml-2">Products</span>
              </a>
            </li>
            <li>
              <a
                href=""
                class="menu-item"
              >
                <i class="fas fa-layer-group"></i>
                <span class="text ml-2">Forms</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div class="mt-5 p-5">
        <button class="button is-primary">Toggle menu</button>

        <h1 class="title">Users</h1>
        <pre>
          {{ user }}
        </pre>

        <h1 class="title">Posts</h1>
        <pre>
            {{ postsStore.posts }}
        </pre>

        <h1 class="title">Cart</h1>
        <pre>
          {{ cartStore.cart }}
        </pre>

      </div>
    </div>
  </section>

</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUser } from '@/store/user.js'
import { usePosts } from '@/store/posts.js'
import { useCart } from '@/store/cart.js'


const userStore = useUser()
userStore.getUser()
const { user, fullName } = storeToRefs(userStore)

const postsStore = usePosts()
userStore.getUserPosts()

const cartStore = useCart()
</script>