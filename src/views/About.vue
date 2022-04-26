<script lang="ts" setup>
import { ref } from "vue"
import Footer from "@/components/Footer.vue"
const cs = ref<string>("i")
const changeCS = (to: string) => {
  cs.value = to
}
const checkCS = (ref: string): boolean => {
  return cs.value === ref
}
</script>
<template>
  <div class="is-fullheight">
    <div class="columns ml-3">
      <div class="column is-one-fifth">
        <aside class="menu">
          <p class="menu-label is-size-2 is-clickable" @click="changeCS('i')">
            About
          </p>
          <ul class="menu-list">
            <li><a @click="changeCS('h')">History</a></li>
            <li><a>Members</a></li>
            <li><a @click="changeCS('u')">Uniform</a></li>
          </ul>
        </aside>
      </div>

      <div class="column">
        <div v-if="checkCS('i')">Index</div>
        <div v-if="checkCS('h')">History</div>
        <div v-if="checkCS('u')">Uniform</div>
      </div>
    </div>
  </div>
  <Footer />
</template>
