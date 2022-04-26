<template>
  <div>
    <nav class="navbar is-link has-shadow p-3">
      <!-- logo / brand -->
      <div class="navbar-brand">
        <h1 class="navbar-item">Govt. High School Volakadu</h1>
        <a class="navbar-burger" @click="isOpen = !isOpen">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div
        :class="isOpen ? 'navbar-menu is-active' : 'navbar-menu'"
        id="nav-links"
      >
        <!-- right links -->
        <div class="navbar-end">
          <RouterLink class="navbar-item" to="/"> Home </RouterLink>
          <RouterLink to="/about" class="navbar-item"> About </RouterLink>
          <RouterLink to="/contactUs" class="navbar-item">
            Contact Us
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
const isOpen = ref<boolean>(false)
</script>