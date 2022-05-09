<template>
  <div class="container mx-auto text-center">
    <div :class="notifHidden ? 'is-hidden' : 'is-active'">
      <div class="p-4">
        <div
          :class="isOpen ? 'notification is-primary' : 'notification is-danger'"
        >
          <button class="delete" @click="notifHidden = !notifHidden"></button>
          <div v-if="isOpen == true">Admissions are currently active</div>
          <div v-else>Admissions are currently not accepted</div>
        </div>
      </div>
    </div>

    <header class="has-text-centered is-size-1">Admissions</header>
    <section class="hero">
      <div class="hero-body">
        <p class="title text-blue-600 hover:cursor-pointer hover:underline">
          School Visit
        </p>
        <p class="subtitle ml-3">
          Parents are welcome to visit school with or without your child until
          10:00-4:30
        </p>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <p class="title text-blue-600 hover:cursor-pointer hover:underline">
          Admissions During Academic Years
        </p>
        <p class="subtitle ml-3">
          Admissions can be accepted admidst academic years on the availibility
          on vacancies
        </p>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { db } from "@/firebase.config"
import { collection, getDocs } from "@firebase/firestore"
import { ref } from "vue"
export default {
  async setup() {
    const notifHidden = ref<boolean>(false)
    const queryRef = await getDocs(collection(db, "admissions"))
    let isOpen: boolean
    queryRef.docs.forEach((doc) => {
      isOpen = doc.data().is_open
    })
    return {
      isOpen,
      notifHidden,
    }
  },
}
</script>