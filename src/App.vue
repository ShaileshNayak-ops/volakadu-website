<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <main>
    <Navbar />
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </main>
</template>
<style>
.is-fullheight {
  height: 100%;
}
</style>