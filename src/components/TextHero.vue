<template>
  <section class="hero bg-black">
    <div class="hero-body">
      <p class="title text-blue-600 hover:cursor-pointer hover:underline">
        {{ title }}
      </p>
      <p class="subtitle ml-3">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  setup(props: any) {
    return {
      title: props.title,
      subtitle: props.subtitle,
    }
  },
}
</script>