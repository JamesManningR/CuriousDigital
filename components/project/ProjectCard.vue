<script setup lang="ts">
const props = defineProps<{
  project: Blog.Project;
}>();
</script>

<template lang="pug">
.project-card
  img.project-card__img(
    :src="project.images[0].url"
    :alt="project.title"
  )
  h3.project-card__title {{ project.title }}
  p.project-card__synopsis {{ project.synopsis }}
  NuxtLink.project-card__link(
    :to="{ name: 'projects', params: { id: project.id } }"
    :exact="true"
  )
    | Read More
</template>

<style lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  
}
</style>